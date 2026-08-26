"""Vectorized Monte Carlo race simulator."""

from __future__ import annotations

from typing import Any

import numpy as np


def simulate_races(
    drivers: list[dict[str, Any]],
    simulations: int = 10_000,
    rain_probability: float = 0.2,
    safety_car_probability: float = 0.4,
    mechanical_stress: float = 0.45,
    seed: int = 2026,
) -> list[dict[str, Any]]:
    if simulations < 100:
        raise ValueError("Use at least 100 simulations.")
    if not drivers:
        raise ValueError("At least one driver is required.")

    rng = np.random.default_rng(seed)
    n_drivers = len(drivers)
    strengths = np.asarray([float(item["strength"]) for item in drivers])
    grids = np.asarray([int(item.get("grid", n_drivers)) for item in drivers])
    wet_skills = np.asarray([float(item.get("wet_skill", 0.1)) for item in drivers])
    dnf_risks = np.asarray([float(item.get("dnf_risk", 0.08)) for item in drivers])

    wet = rng.random((simulations, 1)) < rain_probability
    safety = rng.random((simulations, 1)) < safety_car_probability
    volatility = 0.11 + rain_probability * 0.07 + safety_car_probability * 0.09
    scores = strengths + (n_drivers + 1 - grids) * 0.0095
    scores = scores + wet * wet_skills * 0.14
    scores = scores + rng.normal(0, volatility, size=(simulations, n_drivers))
    scores = scores + safety * rng.normal(0, 0.075, size=(simulations, n_drivers))

    adjusted_dnf = dnf_risks * (0.68 + mechanical_stress * 0.86) * (1 + wet * 0.13)
    dnf = rng.random((simulations, n_drivers)) < adjusted_dnf
    scores[dnf] = -4 - rng.random(np.count_nonzero(dnf))

    order = np.argsort(-scores, axis=1)
    wins = np.bincount(order[:, 0], minlength=n_drivers) / simulations
    podiums = np.bincount(order[:, :3].ravel(), minlength=n_drivers) / simulations
    dnf_rates = dnf.mean(axis=0)

    output = []
    for index, driver in enumerate(drivers):
        output.append(
            {
                **driver,
                "win_probability": round(float(wins[index] * 100), 3),
                "podium_probability": round(float(podiums[index] * 100), 3),
                "dnf_probability": round(float(dnf_rates[index] * 100), 3),
            }
        )
    return sorted(output, key=lambda item: item["win_probability"], reverse=True)
