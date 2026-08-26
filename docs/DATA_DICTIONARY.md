# Data Dictionary

| Field | Type | Meaning | Directly observed? |
|---|---|---|---|
| `grid` | integer | Starting or provisional grid position | Yes after qualifying |
| `driver_form` | float | Rolling mean finish from prior races | Derived |
| `team_form` | float | Rolling constructor mean finish | Derived |
| `driver_dnf_rate` | float | Smoothed prior mechanical non-finish rate | Derived |
| `median_quick_lap` | seconds | Median of up to seven cleaned quick laps | Derived from public timing |
| `lap_consistency` | seconds | Standard deviation of selected quick laps | Derived |
| `pace_ratio` | float | Fastest session median divided by driver median | Derived |
| `energy_deployment_proxy` | float | High-throttle positive-speed-change proxy | Proxy, not ERS measurement |
| `rain_probability` | 0–1 | Weather-model probability of rain | Forecast |
| `safety_car_probability` | 0–1 | Circuit/event prior used by simulation | Estimated |
| `strength` | float | Latent performance score | Model output |
| `win_probability` | percent | Share of simulations won | Simulated estimate |
| `podium_probability` | percent | Share of simulations finishing top three | Simulated estimate |
| `dnf_probability` | percent | Share of simulations with sampled non-finish | Simulated estimate |

Fuel load, tyre temperature, tyre pressure, power-unit maps, battery state of charge and direct MGU-K electrical power are not available in the included public sources.
