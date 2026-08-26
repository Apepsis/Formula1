# Methodology

## 1. Prediction target

The primary target is the probability that each entered driver wins a Grand Prix, conditional on information available at a declared weekend phase: pre-practice, after FP1, after FP2 or after qualifying.

Secondary targets are podium and non-finish probabilities. Full finishing order is treated as a ranking problem rather than 22 independent classifications.

## 2. Feature clock

Every row has an information cutoff. A post-FP1 prediction cannot use FP2, FP3, qualifying or race data. Historical rolling statistics are updated only after each completed race.

This feature clock is the main protection against target leakage.

## 3. Feature groups

### Prior performance

- Time-decayed driver finishing form.
- Time-decayed constructor finishing form.
- Smoothed mechanical non-finish rate.
- Circuit history when enough comparable observations exist.

### Weekend evidence

- Quick-lap median.
- Top-lap consistency.
- Normalized gap to the fastest session pace.
- Qualifying position and gap.
- Teammate-relative pace.

### Weather and track

- Rain probability.
- Air temperature.
- Wind speed.
- Circuit-specific Safety Car prior.

### 2026 adaptation

- Current-regime observations receive explicit version labels.
- Earlier seasons provide a prior but should be down-weighted during calibration.
- Regulation amendments should create model-version boundaries.

## 4. Pace model

The included baseline uses `HistGradientBoostingRegressor` because the problem is tabular, non-linear and relatively small. It predicts finishing position, then converts negative predicted position into a normalized race-strength prior.

A stronger research version should compare:

- Gradient boosting.
- Pairwise LambdaMART ranking.
- Hierarchical Bayesian latent driver/constructor strength.
- A grid-only baseline.

## 5. Reliability model

Mechanical non-finishes are separated from collisions, punctures, disqualifications and driver incidents. Lap-completion status is smoothed to reduce extreme estimates for rookies and new constructors.

A future version should use cause-specific survival models and power-unit component usage documents.

## 6. Monte Carlo simulation

For each virtual race, RaceTwin samples:

1. Wet or dry state.
2. Safety Car occurrence.
3. Driver performance noise.
4. Restart variance.
5. Mechanical non-finish events.
6. Final ranking from the resulting latent performance score.

The browser simulator exposes rain, Safety Car probability and mechanical stress so the user can inspect scenario sensitivity.

## 7. Calibration and evaluation

Accuracy alone is insufficient. The main evaluation should include:

- Brier score and log loss for probability quality.
- Reliability diagrams.
- Expected calibration error.
- Top-one and top-three winner coverage.
- Mean absolute finishing-position error.
- Ablation tests for weather, telemetry and reliability.

## 8. Reproducibility

- Deterministic default seeds.
- Timestamped JSON snapshots.
- Public source URLs.
- Version-controlled workflows.
- Explicit demo/fallback labels.
