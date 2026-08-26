# RaceTwin AI 2026 — Model Card

## Intended use

RaceTwin estimates pre-race win, podium and non-finish probabilities for educational motorsport analytics. It is intended for reproducible research, portfolio demonstration and model-calibration experiments.

It is not intended for betting, operational team strategy, safety decisions or claims of access to private power-unit data.

## Model components

1. **Position prior:** gradient-boosted regression on starting grid, rolling driver form, rolling constructor form, non-finish history and season progress.
2. **Weekend evidence:** normalized completed-session pace and qualifying position when optional FastF1 data are available.
3. **Reliability layer:** smoothed non-finish risk estimated separately from finishing pace.
4. **Monte Carlo layer:** random starts, wet conditions, Safety Car variance and non-finishes.

## Outputs

- Win probability.
- Podium probability.
- DNF probability.
- 95% Monte Carlo sampling interval.
- Ranked model explanations.

## Validation design

The backtest uses a walk-forward split by season. For every evaluated race:

- Training data end before the evaluation season.
- Rolling form features contain only earlier races.
- The actual finish is never used as a pre-race feature.
- Grid position is treated as known only for post-qualifying forecasts.

Metrics:

- Top-one winner accuracy.
- Top-three winner coverage.
- Mean absolute finishing-position error.
- Multiclass Brier score.
- Calibration error, when sufficient predictions are available.

## Known limitations

- Fuel load, tyre pressures, tyre temperatures, power-unit maps, battery state of charge and measured MGU-K deployment are not public.
- Public telemetry may be delayed, incomplete or corrected after a session.
- The 2026 regulation change creates distribution shift and a small current-regime sample.
- Strategy and incident probabilities are simplified approximations.
- Constructor and driver strength are correlated and difficult to identify separately.
- A high simulated probability is not certainty.

## Honest uncertainty

For a simulated win probability `p` over `N` independent Monte Carlo draws, the approximate numerical standard error is:

`sqrt(p(1-p) / N)`

At `N = 10,000`, the worst-case 95% sampling interval is approximately ±0.98 percentage points. This describes simulation noise only—not data error, model bias or genuine race uncertainty.

## Update policy

- Version every regulation-sensitive feature.
- Preserve prediction time and phase.
- Retrain or recalibrate after material technical-rule changes.
- Never overwrite a prior snapshot without retaining it in repository history.
- Label fallback or synthetic output visibly.
