"""Gradient-boosted position model and walk-forward evaluation."""

from __future__ import annotations

from dataclasses import dataclass

import joblib
import numpy as np
import pandas as pd
from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.metrics import mean_absolute_error

from .data import FEATURE_COLUMNS


@dataclass
class BacktestMetrics:
    races: int
    top_one_accuracy: float
    top_three_coverage: float
    mean_absolute_error: float
    brier_score: float

    def as_dict(self) -> dict[str, float | int]:
        return {
            "races": self.races,
            "top_one_accuracy": round(self.top_one_accuracy, 4),
            "top_three_coverage": round(self.top_three_coverage, 4),
            "mean_absolute_error": round(self.mean_absolute_error, 4),
            "brier_score": round(self.brier_score, 4),
        }


def train_position_model(frame: pd.DataFrame) -> HistGradientBoostingRegressor:
    model = HistGradientBoostingRegressor(
        learning_rate=0.055,
        max_iter=280,
        max_leaf_nodes=18,
        l2_regularization=0.8,
        random_state=2026,
    )
    model.fit(frame[FEATURE_COLUMNS], frame["finish_position"])
    return model


def save_model(model: HistGradientBoostingRegressor, path: str) -> None:
    joblib.dump({"model": model, "features": FEATURE_COLUMNS, "version": 1}, path)


def load_model(path: str) -> HistGradientBoostingRegressor:
    bundle = joblib.load(path)
    if bundle.get("features") != FEATURE_COLUMNS:
        raise ValueError("Model feature schema does not match this RaceTwin version.")
    return bundle["model"]


def _softmax(values: np.ndarray) -> np.ndarray:
    shifted = values - np.max(values)
    exp = np.exp(shifted)
    return exp / exp.sum()


def walk_forward_backtest(frame: pd.DataFrame, minimum_seasons: int = 2) -> BacktestMetrics:
    seasons = sorted(frame["season"].unique())
    predictions: list[float] = []
    actuals: list[float] = []
    race_count = 0
    correct_winners = 0
    covered_top_three = 0
    brier_values: list[float] = []

    for test_season in seasons[minimum_seasons:]:
        train = frame[frame["season"] < test_season]
        test = frame[frame["season"] == test_season]
        if train.empty or test.empty:
            continue
        model = train_position_model(train)

        for _, race in test.groupby(["season", "round"]):
            predicted_finish = model.predict(race[FEATURE_COLUMNS])
            probability = _softmax(-predicted_finish / 2.4)
            predicted_order = np.argsort(predicted_finish)
            actual_winner_index = int(np.argmin(race["finish_position"].to_numpy()))
            race_count += 1
            correct_winners += int(predicted_order[0] == actual_winner_index)
            covered_top_three += int(actual_winner_index in predicted_order[:3])
            target = np.zeros(len(race))
            target[actual_winner_index] = 1.0
            brier_values.append(float(np.mean((probability - target) ** 2)))
            predictions.extend(predicted_finish.tolist())
            actuals.extend(race["finish_position"].tolist())

    if race_count == 0:
        raise ValueError("Not enough seasons for a walk-forward backtest.")
    return BacktestMetrics(
        races=race_count,
        top_one_accuracy=correct_winners / race_count,
        top_three_coverage=covered_top_three / race_count,
        mean_absolute_error=float(mean_absolute_error(actuals, predictions)),
        brier_score=float(np.mean(brier_values)),
    )
