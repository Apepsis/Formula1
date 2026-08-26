"""Free data clients and leak-safe historical feature construction."""

from __future__ import annotations

from collections import defaultdict
from dataclasses import dataclass
from typing import Any

import pandas as pd
import requests

JOLPICA_BASE = "https://api.jolpi.ca/ergast/f1"
OPEN_METEO_BASE = "https://api.open-meteo.com/v1/forecast"


class DataSourceError(RuntimeError):
    """Raised when a public data source cannot provide a usable response."""


def _get_json(url: str, params: dict[str, Any] | None = None, timeout: int = 30) -> dict[str, Any]:
    try:
        response = requests.get(url, params=params, timeout=timeout)
        response.raise_for_status()
        return response.json()
    except (requests.RequestException, ValueError) as exc:
        raise DataSourceError(f"Unable to read {url}: {exc}") from exc


def fetch_season_results(season: int) -> list[dict[str, Any]]:
    payload = _get_json(f"{JOLPICA_BASE}/{season}/results.json", {"limit": 2000})
    return payload.get("MRData", {}).get("RaceTable", {}).get("Races", [])


def fetch_driver_standings(season: int) -> list[dict[str, Any]]:
    payload = _get_json(f"{JOLPICA_BASE}/{season}/driverstandings.json", {"limit": 100})
    lists = payload.get("MRData", {}).get("StandingsTable", {}).get("StandingsLists", [])
    return lists[0].get("DriverStandings", []) if lists else []


def fetch_weather(latitude: float, longitude: float) -> dict[str, float]:
    payload = _get_json(
        OPEN_METEO_BASE,
        {
            "latitude": latitude,
            "longitude": longitude,
            "current": "temperature_2m,precipitation,rain,wind_speed_10m",
            "hourly": "precipitation_probability,temperature_2m",
            "forecast_days": 3,
            "timezone": "auto",
        },
    )
    current = payload.get("current", {})
    hourly = payload.get("hourly", {})
    rain_probabilities = hourly.get("precipitation_probability", [])[:24]
    return {
        "air_temperature": float(current.get("temperature_2m", 20.0)),
        "wind_speed": float(current.get("wind_speed_10m", 10.0)),
        "rain_probability": float(max(rain_probabilities, default=20.0)),
        "current_rain": float(current.get("rain", 0.0)),
    }


@dataclass
class RollingState:
    finishes: list[float]
    starts: int = 0
    dnfs: int = 0

    @property
    def mean_finish(self) -> float:
        return sum(self.finishes[-8:]) / max(len(self.finishes[-8:]), 1) if self.finishes else 12.0

    @property
    def dnf_rate(self) -> float:
        return (self.dnfs + 1) / (self.starts + 10)


FEATURE_COLUMNS = ["grid", "driver_form", "team_form", "driver_dnf_rate", "round_progress"]


def build_training_frame(seasons: range | list[int]) -> pd.DataFrame:
    """Build features using only information available before each race starts."""
    driver_state: dict[str, RollingState] = defaultdict(lambda: RollingState([]))
    team_state: dict[str, RollingState] = defaultdict(lambda: RollingState([]))
    rows: list[dict[str, Any]] = []

    for season in seasons:
        races = fetch_season_results(int(season))
        for race in sorted(races, key=lambda item: int(item.get("round", 0))):
            results = race.get("Results", [])
            round_number = int(race.get("round", 0))
            for result in results:
                driver = result.get("Driver", {})
                constructor = result.get("Constructor", {})
                driver_id = driver.get("driverId", "unknown")
                team_id = constructor.get("constructorId", "unknown")
                grid = int(result.get("grid", 20) or 20)
                finish = float(result.get("position", 20) or 20)
                rows.append(
                    {
                        "season": int(season),
                        "round": round_number,
                        "driver_id": driver_id,
                        "team_id": team_id,
                        "grid": grid if grid > 0 else 20,
                        "driver_form": driver_state[driver_id].mean_finish,
                        "team_form": team_state[team_id].mean_finish,
                        "driver_dnf_rate": driver_state[driver_id].dnf_rate,
                        "round_progress": round_number / max(len(races), 1),
                        "finish_position": finish,
                        "is_winner": int(finish == 1),
                    }
                )

            for result in results:
                driver_id = result.get("Driver", {}).get("driverId", "unknown")
                team_id = result.get("Constructor", {}).get("constructorId", "unknown")
                finish = float(result.get("position", 20) or 20)
                status = str(result.get("status", ""))
                status_lower = status.lower()
                classified = any(token in status_lower for token in ("finished", "lap", "+"))
                incident = any(
                    token in status_lower
                    for token in ("accident", "collision", "spun", "damage", "puncture", "disqualified")
                )
                mechanical_dnf = not classified and not incident
                for state in (driver_state[driver_id], team_state[team_id]):
                    state.starts += 1
                    state.finishes.append(finish)
                    state.dnfs += int(mechanical_dnf)

    frame = pd.DataFrame(rows)
    if frame.empty:
        raise DataSourceError("No historical race rows were returned by Jolpica-F1.")
    return frame
