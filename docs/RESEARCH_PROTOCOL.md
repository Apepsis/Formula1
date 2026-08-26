# Research Protocol: Adapting Race Forecasts to the 2026 Regulation Shift

## Research question

Can a temporally adapted, uncertainty-aware race model outperform grid-only and pre-2026 baselines under the 2026 technical regime?

## Hypotheses

- **H1:** A 2026-weighted adaptation model produces lower Brier score than a model trained with equal weight across prior seasons.
- **H2:** Completed-session pace improves post-FP2 forecasts beyond grid and standings alone.
- **H3:** A separate reliability layer improves probability calibration during the first 2026 season.
- **H4:** Weather inputs improve forecasts only when the forecast horizon and issue time are preserved.

## Experimental models

1. Grid-only baseline.
2. Grid + recent form.
3. Pace + grid + weather.
4. Pace + grid + weather + reliability.
5. Full model with 2026 temporal weighting.

## Evaluation procedure

1. Freeze the feature cutoff before each race.
2. Generate and save the probability vector.
3. Reveal the race result only after prediction persistence.
4. Compute Brier score, log loss and ranking metrics.
5. Compare models using paired per-race differences.
6. Report confidence intervals with block bootstrap by race weekend.

## Ablations

- Remove weather.
- Remove completed-session pace.
- Remove reliability.
- Remove prior seasons.
- Remove 2026 temporal weighting.

## Failure analysis

For every large forecast error, record whether it involved:

- Collision or first-lap incident.
- Mechanical failure.
- Unexpected rain.
- Red flag or unusual Safety Car timing.
- Penalty or disqualification.
- Strategy deviation.
- Missing or corrupted input data.

## Reporting rule

Do not select metrics or model versions after observing the target race. Publish the prediction timestamp, input phase and code version with every result.
