from racetwin.simulator import simulate_races


def sample_drivers():
    return [
        {"code": "AAA", "strength": 1.0, "grid": 1, "wet_skill": 0.1, "dnf_risk": 0.05},
        {"code": "BBB", "strength": 0.8, "grid": 2, "wet_skill": 0.2, "dnf_risk": 0.08},
        {"code": "CCC", "strength": 0.6, "grid": 3, "wet_skill": 0.0, "dnf_risk": 0.1},
    ]


def test_probabilities_are_coherent():
    output = simulate_races(sample_drivers(), simulations=2_000, seed=7)
    assert abs(sum(row["win_probability"] for row in output) - 100) < 0.2
    assert all(0 <= row["podium_probability"] <= 100 for row in output)
    assert output[0]["code"] == "AAA"


def test_simulation_is_reproducible():
    first = simulate_races(sample_drivers(), simulations=1_000, seed=42)
    second = simulate_races(sample_drivers(), simulations=1_000, seed=42)
    assert first == second
