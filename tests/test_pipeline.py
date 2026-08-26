from racetwin.pipeline import build_snapshot


def test_offline_snapshot_contains_all_drivers():
    snapshot = build_snapshot(live=False, simulations=500)
    assert snapshot["meta"]["dataset_kind"] == "offline_demo"
    assert len(snapshot["phases"]) == 3
    assert all(len(phase["drivers"]) == 22 for phase in snapshot["phases"])
    assert len(snapshot["history"]["series"]) == 5
