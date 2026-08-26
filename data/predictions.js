window.RACETWIN_DATA = {
  "meta": {
    "event": "Dutch Grand Prix",
    "season": 2026,
    "phase": "qualifying",
    "generated_at": "2026-08-21T13:00:00Z",
    "generated_label": "21 Aug 2026 · demo",
    "dataset_kind": "synthetic_demo",
    "simulation_default": 10000,
    "disclaimer": "Synthetic demonstration data. Not a live prediction or betting advice."
  },
  "circuit": { "name": "Circuit Zandvoort", "country": "Netherlands", "laps": 72, "latitude": 52.3888, "longitude": 4.5409 },
  "history": {
    "phases": ["FP1", "FP2", "Qualifying"],
    "series": [
      { "code": "ANT", "color": "#23d2c3", "values": [20.4, 23.8, 27.1] },
      { "code": "RUS", "color": "#55ddd1", "values": [22.8, 24.7, 23.2] },
      { "code": "HAM", "color": "#ff4646", "values": [15.9, 17.6, 16.5] },
      { "code": "LEC", "color": "#ff6b57", "values": [14.7, 13.8, 13.9] },
      { "code": "VER", "color": "#4b77ff", "values": [10.1, 9.9, 11.2] }
    ]
  },
  "phases": [
    {
      "key": "fp1", "label": "After FP1", "seed": 2608211,
      "drivers": [
        {"code":"RUS","name":"George Russell","team":"Mercedes","color":"#55ddd1","grid":3,"strength":1.00,"pace_delta":0.29,"wet_skill":0.16,"dnf_risk":0.055,"explanation":{"title":"Practice consistency leads the prior","copy":"Clean laps and constructor form provide the strongest early-weekend evidence.","features":["FP1 pace +","team form +","grid uncertain"]}},
        {"code":"ANT","name":"Kimi Antonelli","team":"Mercedes","color":"#23d2c3","grid":4,"strength":0.97,"pace_delta":0.26,"wet_skill":0.12,"dnf_risk":0.060,"explanation":{"title":"Long-run pace raises the forecast","copy":"Consistent practice pace outweighs the remaining uncertainty around qualifying.","features":["long run +","form +","uncertainty ↑"]}},
        {"code":"HAM","name":"Lewis Hamilton","team":"Ferrari","color":"#ff4646","grid":5,"strength":0.91,"pace_delta":0.19,"wet_skill":0.22,"dnf_risk":0.065,"explanation":{"title":"Wet-skill adjustment supports the prior","copy":"Strong form and wet-condition performance keep the forecast competitive.","features":["wet skill +","form +","grid uncertain"]}},
        {"code":"LEC","name":"Charles Leclerc","team":"Ferrari","color":"#ff6b57","grid":6,"strength":0.89,"pace_delta":0.17,"wet_skill":0.17,"dnf_risk":0.062,"explanation":{"title":"Sector pace protects the baseline","copy":"High-speed sector performance offsets a less certain long-run estimate.","features":["sector pace +","stint sample −","form +"]}},
        {"code":"NOR","name":"Lando Norris","team":"McLaren","color":"#ff9345","grid":7,"strength":0.86,"pace_delta":0.14,"wet_skill":0.18,"dnf_risk":0.075,"explanation":{"title":"Recent form anchors the estimate","copy":"Season form remains informative before qualifying evidence arrives.","features":["driver form +","reliability −","grid uncertain"]}},
        {"code":"VER","name":"Max Verstappen","team":"Red Bull Racing","color":"#4b77ff","grid":2,"strength":0.85,"pace_delta":0.13,"wet_skill":0.25,"dnf_risk":0.070,"explanation":{"title":"Circuit affinity adds upside","copy":"Wet skill and track position potential increase the tail of winning outcomes.","features":["wet skill +","circuit +","team form −"]}},
        {"code":"PIA","name":"Oscar Piastri","team":"McLaren","color":"#ffb153","grid":8,"strength":0.82,"pace_delta":0.10,"wet_skill":0.10,"dnf_risk":0.068,"explanation":{"title":"Race consistency supports the prior","copy":"The model rewards stable race execution despite limited early-session evidence.","features":["consistency +","grid uncertain","pace ="]}},
        {"code":"GAS","name":"Pierre Gasly","team":"Alpine","color":"#3ec5ff","grid":9,"strength":0.71,"pace_delta":0.04,"wet_skill":0.14,"dnf_risk":0.090,"explanation":{"title":"Practice pace creates an outside chance","copy":"A positive session raises the baseline, but team reliability limits the ceiling.","features":["FP1 pace +","reliability −","form ="]}},
        {"code":"HAD","name":"Isack Hadjar","team":"Red Bull Racing","color":"#6f8cff","grid":10,"strength":0.69,"pace_delta":0.03,"wet_skill":0.08,"dnf_risk":0.083,"explanation":{"title":"Team pace supports the midfield prior","copy":"Constructor performance contributes more than the small individual sample.","features":["team pace +","sample −","grid ="]}},
        {"code":"LAW","name":"Liam Lawson","team":"Racing Bulls","color":"#7b8dff","grid":11,"strength":0.63,"pace_delta":0.00,"wet_skill":0.09,"dnf_risk":0.088,"explanation":{"title":"Midfield uncertainty remains high","copy":"The outcome is sensitive to qualifying and Safety Car timing.","features":["variance ↑","form =","grid uncertain"]}},
        {"code":"SAI","name":"Carlos Sainz","team":"Williams","color":"#4ca4ff","grid":12,"strength":0.61,"pace_delta":-0.01,"wet_skill":0.16,"dnf_risk":0.085,"explanation":{"title":"Experience helps in volatile scenarios","copy":"Rain and Safety Car assumptions increase the upper tail.","features":["wet skill +","team form −","variance ↑"]}},
        {"code":"ALO","name":"Fernando Alonso","team":"Aston Martin","color":"#24b39b","grid":13,"strength":0.60,"pace_delta":-0.02,"wet_skill":0.23,"dnf_risk":0.092,"explanation":{"title":"Weather creates most of the upside","copy":"A higher rain probability materially improves this forecast.","features":["wet skill ++","pace −","reliability −"]}},
        {"code":"ALB","name":"Alexander Albon","team":"Williams","color":"#6db8ff","grid":14,"strength":0.57,"pace_delta":-0.04,"wet_skill":0.11,"dnf_risk":0.090,"explanation":{"title":"Clean execution keeps a narrow path","copy":"Low-variance outcomes favor points more than an outright win.","features":["consistency +","pace −","grid −"]}},
        {"code":"OCO","name":"Esteban Ocon","team":"Haas F1 Team","color":"#c7cbd0","grid":15,"strength":0.54,"pace_delta":-0.05,"wet_skill":0.10,"dnf_risk":0.095,"explanation":{"title":"The model sees a long-shot outcome","copy":"A win requires high attrition and favorable race timing.","features":["attrition needed","grid −","pace −"]}},
        {"code":"BEA","name":"Oliver Bearman","team":"Haas F1 Team","color":"#e2e5e8","grid":16,"strength":0.52,"pace_delta":-0.06,"wet_skill":0.07,"dnf_risk":0.098,"explanation":{"title":"Limited evidence widens uncertainty","copy":"A small sample produces a wider but still low winning range.","features":["sample −","variance ↑","grid −"]}},
        {"code":"HUL","name":"Nico Hülkenberg","team":"Audi","color":"#b5e538","grid":17,"strength":0.50,"pace_delta":-0.08,"wet_skill":0.13,"dnf_risk":0.105,"explanation":{"title":"Reliability constrains the forecast","copy":"Finishing risk currently outweighs potential strategy gains.","features":["reliability −","strategy +","grid −"]}},
        {"code":"BOR","name":"Gabriel Bortoleto","team":"Audi","color":"#c9f253","grid":18,"strength":0.47,"pace_delta":-0.10,"wet_skill":0.06,"dnf_risk":0.110,"explanation":{"title":"The prior remains conservative","copy":"The model needs stronger session evidence to move above the baseline.","features":["form −","sample −","pace ="]}},
        {"code":"COL","name":"Franco Colapinto","team":"Alpine","color":"#5ed2ff","grid":19,"strength":0.45,"pace_delta":-0.12,"wet_skill":0.08,"dnf_risk":0.115,"explanation":{"title":"Mechanical risk dominates the estimate","copy":"The reliability layer reduces otherwise plausible high-variance outcomes.","features":["reliability --","variance ↑","grid −"]}},
        {"code":"STR","name":"Lance Stroll","team":"Aston Martin","color":"#46c9b4","grid":20,"strength":0.43,"pace_delta":-0.14,"wet_skill":0.09,"dnf_risk":0.108,"explanation":{"title":"Track position limits the winning path","copy":"The forecast improves mainly under wet and high-attrition scenarios.","features":["grid --","rain +","pace −"]}},
        {"code":"PER","name":"Sergio Pérez","team":"Cadillac","color":"#9ba3ad","grid":21,"strength":0.40,"pace_delta":-0.15,"wet_skill":0.13,"dnf_risk":0.118,"explanation":{"title":"A new-team penalty lowers the prior","copy":"Sparse 2026 evidence creates a conservative reliability adjustment.","features":["new team −","sample −","experience +"]}},
        {"code":"BOT","name":"Valtteri Bottas","team":"Cadillac","color":"#b4bbc3","grid":22,"strength":0.39,"pace_delta":-0.16,"wet_skill":0.11,"dnf_risk":0.120,"explanation":{"title":"Sparse evidence keeps uncertainty high","copy":"The model pools reliability information until more races are available.","features":["new team −","reliability −","sample −"]}},
        {"code":"LIN","name":"Arvid Lindblad","team":"Racing Bulls","color":"#95a2ff","grid":13,"strength":0.42,"pace_delta":-0.13,"wet_skill":0.05,"dnf_risk":0.105,"explanation":{"title":"Rookie uncertainty widens the distribution","copy":"The model avoids extreme confidence with limited race history.","features":["rookie prior","sample --","variance ↑"]}}
      ]
    },
    {
      "key": "fp2", "label": "After FP2", "seed": 2608212,
      "drivers": []
    },
    {
      "key": "qualifying", "label": "After qualifying", "seed": 2608213,
      "drivers": []
    }
  ]
};

const clone = (value) => JSON.parse(JSON.stringify(value));
const fp1 = window.RACETWIN_DATA.phases[0].drivers;
const fp2Adjustments = { ANT:[1,0.045,0.05], RUS:[2,0.025,0.03], HAM:[4,0.018,0.03], LEC:[5,0.006,0.02], NOR:[7,0.005,0.01], VER:[3,0.010,0.02], PIA:[6,0.006,0.01], GAS:[8,0.012,0.02] };
const qAdjustments = { ANT:[2,0.065,0.07], RUS:[1,0.042,0.05], HAM:[3,0.025,0.04], LEC:[4,0.015,0.03], VER:[5,0.020,0.03], NOR:[6,0.012,0.02], PIA:[7,0.006,0.01], GAS:[9,0.000,0.00] };

window.RACETWIN_DATA.phases[1].drivers = clone(fp1).map((driver) => {
  const [grid, strength, pace] = fp2Adjustments[driver.code] || [Math.min(driver.grid + 1, 22), -0.008, -0.01];
  driver.grid = grid;
  driver.strength += strength;
  driver.pace_delta += pace;
  return driver;
});

window.RACETWIN_DATA.phases[2].drivers = clone(window.RACETWIN_DATA.phases[1].drivers).map((driver) => {
  const [grid, strength, pace] = qAdjustments[driver.code] || [driver.grid, -0.006, -0.01];
  driver.grid = grid;
  driver.strength += strength;
  driver.pace_delta += pace;
  if (driver.code === "ANT") driver.explanation = {"title":"Qualifying converted pace into track position","copy":"The model combines front-row position, Mercedes form and low estimated mechanical risk.","features":["grid +0.19","pace +0.31","risk −0.06"]};
  return driver;
});
