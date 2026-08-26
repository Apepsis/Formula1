"""Generate a browser-ready RaceTwin snapshot from public or offline inputs."""

from __future__ import annotations

import json
from copy import deepcopy
from datetime import date, datetime, timezone
from pathlib import Path
from typing import Any

import pandas as pd

from .constants import CIRCUITS, DRIVERS_2026, EVENTS_2026, TEAM_PRIORS
from .data import DataSourceError, FEATURE_COLUMNS, fetch_driver_standings, fetch_weather
from .model import load_model
from .simulator import simulate_races


def _driver_code(standing: dict[str, Any]) -> str:
    driver = standing.get("Driver", {})
    return str(driver.get("code") or driver.get("driverId", "UNK")[:3]).upper()


def _standings_strength(season: int) -> dict[str, float]:
    standings = fetch_driver_standings(season)
    if not standings:
        raise DataSourceError("No current standings were returned.")
    max_points = max(float(item.get("points", 0)) for item in standings) or 1.0
    return {_driver_code(item): float(item.get("points", 0)) / max_points for item in standings}


def build_drivers(
    season: int = 2026,
    live: bool = False,
    model_path: Path | None = None,
) -> list[dict[str, Any]]:
    standings: dict[str, float] = {}
    if live:
        standings = _standings_strength(season)

    drivers = []
    for index, metadata in enumerate(DRIVERS_2026, start=1):
        form = standings.get(metadata["code"], max(0.05, 1 - (index - 1) / 24))
        team_prior = TEAM_PRIORS.get(metadata["team"], 0.45)
        strength = 0.64 * form + 0.36 * team_prior
        dnf_risk = 0.052 + (1 - team_prior) * 0.095
        drivers.append(
            {
                **metadata,
                "grid": index,
                "strength": round(strength, 5),
                "pace_delta": round((strength - 0.64) * 0.55, 3),
                "dnf_risk": round(dnf_risk, 4),
                "explanation": {
                    "title": "Current form anchors the prior",
                    "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
                    "features": [f"form {form:+.2f}", f"team {team_prior:+.2f}", f"grid P{index}"],
                },
            }
        )

    if model_path and model_path.exists():
        model = load_model(str(model_path))
        model_frame = pd.DataFrame(
            [
                {
                    "grid": driver["grid"],
                    "driver_form": 1 + (1 - standings.get(driver["code"], driver["strength"])) * 19,
                    "team_form": 1 + (1 - TEAM_PRIORS.get(driver["team"], 0.45)) * 19,
                    "driver_dnf_rate": driver["dnf_risk"],
                    "round_progress": 0.52,
                }
                for driver in drivers
            ],
            columns=FEATURE_COLUMNS,
        )
        predicted_finish = model.predict(model_frame)
        model_strength = 1 / (1 + predicted_finish)
        model_strength = (model_strength - model_strength.min()) / max(
            model_strength.max() - model_strength.min(), 1e-9
        )
        for driver, learned_strength, predicted in zip(drivers, model_strength, predicted_finish, strict=True):
            driver["strength"] = round(0.55 * driver["strength"] + 0.45 * float(learned_strength), 5)
            driver["explanation"]["features"].append(f"ML finish {predicted:.1f}")
    return drivers


def build_snapshot(
    season: int = 2026,
    circuit_key: str = "auto",
    live: bool = False,
    simulations: int = 10_000,
    model_path: Path | None = None,
) -> dict[str, Any]:
    event = next((item for item in EVENTS_2026 if item["race_date"] >= date.today()), EVENTS_2026[-1])
    selected_key = event["circuit"] if circuit_key == "auto" else circuit_key
    circuit = CIRCUITS.get(selected_key, CIRCUITS["zandvoort"])
    grand_prix = event["grand_prix"] if circuit_key == "auto" else f"{circuit['country']} Grand Prix"
    source_status = "public_sources"
    try:
        drivers = build_drivers(season=season, live=live, model_path=model_path)
        weather = fetch_weather(circuit["latitude"], circuit["longitude"]) if live else {
            "air_temperature": 20.0,
            "wind_speed": 18.0,
            "rain_probability": 22.0,
            "current_rain": 0.0,
        }
    except DataSourceError as exc:
        drivers = build_drivers(season=season, live=False, model_path=model_path)
        weather = {"air_temperature": 20.0, "wind_speed": 18.0, "rain_probability": 22.0, "current_rain": 0.0}
        source_status = f"offline_fallback: {exc}"

    phases = []
    for phase_index, (key, label, evidence) in enumerate(
        (("fp1", "After FP1", 0.0), ("fp2", "After FP2", 0.025), ("qualifying", "After qualifying", 0.045))
    ):
        phase_drivers = deepcopy(drivers)
        for rank, driver in enumerate(phase_drivers):
            driver["strength"] = round(driver["strength"] + evidence * (1 - rank / 30), 5)
        phases.append({"key": key, "label": label, "seed": 2026000 + phase_index, "drivers": phase_drivers})

    scenario = {
        "simulations": simulations,
        "rain_probability": weather["rain_probability"] / 100,
        "safety_car_probability": circuit["safety_car_prior"],
        "mechanical_stress": 0.45,
    }
    forecast = simulate_races(phases[-1]["drivers"], seed=2026, **scenario)
    history_codes = [item["code"] for item in forecast[:5]]
    history_series = []
    for code in history_codes:
        values = []
        color = "#ffffff"
        for phase_index, phase in enumerate(phases):
            phase_forecast = simulate_races(
                phase["drivers"],
                simulations=min(simulations, 4000),
                rain_probability=scenario["rain_probability"],
                safety_car_probability=scenario["safety_car_probability"],
                mechanical_stress=scenario["mechanical_stress"],
                seed=2026 + phase_index,
            )
            row = next(item for item in phase_forecast if item["code"] == code)
            values.append(row["win_probability"])
            color = row["color"]
        history_series.append({"code": code, "color": color, "values": values})

    now = datetime.now(timezone.utc)
    return {
        "meta": {
            "event": grand_prix,
            "season": season,
            "phase": "qualifying",
            "generated_at": now.isoformat(),
            "generated_label": now.strftime("%d %b %Y · %H:%M UTC"),
            "dataset_kind": "public_snapshot" if live and source_status == "public_sources" else "offline_demo",
            "source_status": source_status,
            "machine_learning_model": bool(model_path and model_path.exists()),
            "simulation_default": simulations,
            "disclaimer": "Probabilistic educational forecast. Not betting advice.",
        },
        "circuit": circuit,
        "weather": weather,
        "history": {"phases": ["FP1", "FP2", "Qualifying"], "series": history_series},
        "phases": phases,
    }


def write_snapshot(snapshot: dict[str, Any], output_directory: Path) -> tuple[Path, Path]:
    output_directory.mkdir(parents=True, exist_ok=True)
    json_path = output_directory / "predictions.json"
    js_path = output_directory / "predictions.js"
    serialized = json.dumps(snapshot, ensure_ascii=False, indent=2)
    json_path.write_text(serialized + "\n", encoding="utf-8")
    js_path.write_text(f"window.RACETWIN_DATA = {serialized};\n", encoding="utf-8")
    return json_path, js_path
