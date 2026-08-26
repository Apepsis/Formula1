#!/usr/bin/env python3
"""Train the leak-safe historical position model using Jolpica-F1."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from racetwin.data import build_training_frame
from racetwin.model import save_model, train_position_model, walk_forward_backtest


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--start-season", type=int, default=2018)
    parser.add_argument("--end-season", type=int, default=2025)
    parser.add_argument("--model-output", type=Path, default=Path("models/position_model.joblib"))
    parser.add_argument("--metrics-output", type=Path, default=Path("data/backtest_metrics.json"))
    args = parser.parse_args()

    frame = build_training_frame(range(args.start_season, args.end_season + 1))
    metrics = walk_forward_backtest(frame)
    model = train_position_model(frame)
    args.model_output.parent.mkdir(parents=True, exist_ok=True)
    args.metrics_output.parent.mkdir(parents=True, exist_ok=True)
    save_model(model, str(args.model_output))
    args.metrics_output.write_text(json.dumps(metrics.as_dict(), indent=2) + "\n", encoding="utf-8")
    print(f"Trained on {len(frame):,} driver-race rows. Metrics: {metrics.as_dict()}")


if __name__ == "__main__":
    main()
