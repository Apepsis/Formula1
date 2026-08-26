#!/usr/bin/env python3
"""Refresh the browser snapshot with free public sources or an offline fallback."""

from __future__ import annotations

import argparse
from pathlib import Path

from racetwin.pipeline import build_snapshot, write_snapshot


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--season", type=int, default=2026)
    parser.add_argument("--circuit", default="auto")
    parser.add_argument("--simulations", type=int, default=10_000)
    parser.add_argument("--live", action="store_true", help="Attempt Jolpica and Open-Meteo first.")
    parser.add_argument("--model", type=Path, default=Path("models/position_model.joblib"))
    parser.add_argument("--output", type=Path, default=Path("data"))
    args = parser.parse_args()
    snapshot = build_snapshot(args.season, args.circuit, args.live, args.simulations, args.model)
    json_path, js_path = write_snapshot(snapshot, args.output)
    print(f"Updated {json_path} and {js_path} ({snapshot['meta']['source_status']}).")


if __name__ == "__main__":
    main()
