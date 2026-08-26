#!/usr/bin/env python3
"""Extract optional FastF1 session features without claiming private ERS data."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from racetwin.telemetry import collect_weekend


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--season", type=int, default=2026)
    parser.add_argument("--event")
    parser.add_argument("--output", type=Path, default=Path("data/weekend_features.json"))
    args = parser.parse_args()
    payload = collect_weekend(args.season, args.event)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {args.output}")


if __name__ == "__main__":
    main()
