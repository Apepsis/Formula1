"""Optional FastF1 weekend features.

This module deliberately calls its energy metric a proxy. Public telemetry does
not expose MGU-K power or battery state of charge.
"""

from __future__ import annotations

from datetime import date
from typing import Any

import numpy as np


class TelemetryUnavailable(RuntimeError):
    """Raised when FastF1 is missing or a session is not yet available."""


def _fastf1():
    try:
        import fastf1  # type: ignore
    except ImportError as exc:
        raise TelemetryUnavailable('Install the optional extra: pip install ".[telemetry]"') from exc
    return fastf1


def next_event_name(season: int = 2026) -> str:
    fastf1 = _fastf1()
    schedule = fastf1.get_event_schedule(season, include_testing=False)
    today = np.datetime64(date.today())
    upcoming = schedule[schedule["EventDate"].values.astype("datetime64[D]") >= today]
    row = upcoming.iloc[0] if not upcoming.empty else schedule.iloc[-1]
    return str(row["EventName"])


def load_session_features(season: int, event_name: str, session_code: str) -> dict[str, dict[str, float]]:
    """Return cleaned pace, grid and an energy-deployment proxy by driver code."""
    fastf1 = _fastf1()
    session = fastf1.get_session(season, event_name, session_code)
    try:
        session.load(laps=True, telemetry=True, weather=True, messages=False)
    except Exception as exc:  # FastF1 raises different errors for incomplete sessions.
        raise TelemetryUnavailable(f"{event_name} {session_code} is not available: {exc}") from exc

    if session.laps is None or session.laps.empty:
        raise TelemetryUnavailable(f"No laps were returned for {event_name} {session_code}.")

    clean = session.laps.pick_quicklaps(1.08)
    output: dict[str, dict[str, float]] = {}
    for code in clean["Driver"].dropna().unique():
        driver_laps = clean.pick_drivers(code).copy()
        lap_seconds = driver_laps["LapTime"].dt.total_seconds().dropna().sort_values().head(7)
        if lap_seconds.empty:
            continue
        fastest = driver_laps.pick_fastest()
        energy_proxy = 0.0
        try:
            telemetry = fastest.get_car_data().add_distance()
            high_throttle = telemetry[telemetry["Throttle"] >= 95]
            acceleration = high_throttle["Speed"].diff().clip(lower=0)
            energy_proxy = float(acceleration.quantile(0.8) / max(acceleration.max(), 1.0))
        except Exception:
            energy_proxy = 0.0

        output[str(code)] = {
            "median_quick_lap": float(lap_seconds.median()),
            "lap_consistency": float(lap_seconds.std(ddof=0) if len(lap_seconds) > 1 else 0.0),
            "energy_deployment_proxy": round(energy_proxy, 5),
            "sample_laps": int(len(lap_seconds)),
        }

    if session_code == "Q" and getattr(session, "results", None) is not None:
        for _, result in session.results.iterrows():
            code = str(result.get("Abbreviation", ""))
            if code in output:
                output[code]["grid"] = float(result.get("Position", 20) or 20)

    best_median = min((row["median_quick_lap"] for row in output.values()), default=1.0)
    for row in output.values():
        row["pace_ratio"] = round(best_median / max(row["median_quick_lap"], 0.001), 6)
    return output


def collect_weekend(season: int = 2026, event_name: str | None = None) -> dict[str, Any]:
    event = event_name or next_event_name(season)
    sessions: dict[str, Any] = {}
    for code in ("FP1", "FP2", "FP3", "Q"):
        try:
            sessions[code] = load_session_features(season, event, code)
        except TelemetryUnavailable as exc:
            sessions[code] = {"status": "unavailable", "reason": str(exc)}
    return {"season": season, "event": event, "sessions": sessions}
