(() => {
  "use strict";

  const data = window.RACETWIN_DATA;
  if (!data || !Array.isArray(data.phases)) {
    document.body.innerHTML = '<main class="error">Prediction data could not be loaded.</main>';
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const defaults = {
    rain: Math.round(data.weather?.rain_probability ?? 22),
    safety: Math.round((data.circuit?.safety_car_prior ?? 0.38) * 100),
    stress: 45,
    count: Number(data.meta?.simulation_default ?? 10000),
  };
  let currentPhase = "qualifying";
  let expanded = false;
  let lastResults = [];

  const format = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1, minimumFractionDigits: 1 });

  async function loadBacktestMetrics() {
    try {
      const response = await fetch("./data/backtest_metrics.json", { cache: "no-store" });
      if (!response.ok) return;
      const metrics = await response.json();
      $("#metric-brier").textContent = Number(metrics.brier_score).toFixed(3);
      $("#metric-top-three").textContent = `${(Number(metrics.top_three_coverage) * 100).toFixed(1)}%`;
      $("#metric-mae").textContent = Number(metrics.mean_absolute_error).toFixed(2);
    } catch {
      // The initial demo intentionally ships without invented validation metrics.
    }
  }

  function seededRandom(seed) {
    let state = seed >>> 0;
    return () => {
      state = (1664525 * state + 1013904223) >>> 0;
      return state / 4294967296;
    };
  }

  function normal(random) {
    const u = Math.max(random(), 1e-12);
    const v = Math.max(random(), 1e-12);
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }

  function phaseData() {
    return data.phases.find((phase) => phase.key === currentPhase) || data.phases.at(-1);
  }

  function controls() {
    return {
      rain: Number($("#rain-control").value),
      safety: Number($("#safety-control").value),
      stress: Number($("#stress-control").value),
      count: Number($("#simulation-count").value),
    };
  }

  function simulate(drivers, scenario, seed) {
    const random = seededRandom(seed);
    const wins = new Uint32Array(drivers.length);
    const podiums = new Uint32Array(drivers.length);
    const dnfs = new Uint32Array(drivers.length);
    const rainWeight = scenario.rain / 100;
    const safetyWeight = scenario.safety / 100;
    const stressWeight = scenario.stress / 100;
    const volatility = 0.11 + rainWeight * 0.07 + safetyWeight * 0.09;

    for (let race = 0; race < scenario.count; race += 1) {
      const field = new Array(drivers.length);
      const safetyCar = random() < safetyWeight;
      const wetRace = random() < rainWeight;

      for (let i = 0; i < drivers.length; i += 1) {
        const driver = drivers[i];
        const dnfRisk = driver.dnf_risk * (0.68 + stressWeight * 0.86) * (wetRace ? 1.13 : 1);
        const didDnf = random() < dnfRisk;
        if (didDnf) dnfs[i] += 1;

        const gridEffect = (23 - driver.grid) * 0.0095;
        const wetEffect = wetRace ? driver.wet_skill * 0.14 : 0;
        const restartNoise = safetyCar ? normal(random) * 0.075 : 0;
        const score = didDnf
          ? -4 - random()
          : driver.strength + gridEffect + wetEffect + normal(random) * volatility + restartNoise;
        field[i] = { index: i, score };
      }

      field.sort((a, b) => b.score - a.score);
      wins[field[0].index] += 1;
      podiums[field[0].index] += 1;
      podiums[field[1].index] += 1;
      podiums[field[2].index] += 1;
    }

    return drivers.map((driver, index) => ({
      ...driver,
      win: (wins[index] / scenario.count) * 100,
      podium: (podiums[index] / scenario.count) * 100,
      dnf: (dnfs[index] / scenario.count) * 100,
    })).sort((a, b) => b.win - a.win);
  }

  function renderRanking(results) {
    const list = $("#ranking-list");
    const maximum = Math.max(...results.map((item) => item.win), 1);
    list.innerHTML = results.map((item, index) => `
      <div class="rank-row ${index >= 8 && !expanded ? "hidden-row" : ""}">
        <span class="rank-number">${String(index + 1).padStart(2, "0")}</span>
        <div class="driver-cell">
          <span class="driver-code" style="--driver-color:${item.color}">${item.code}</span>
          <span class="driver-name"><b>${item.name}</b><span>${item.team}</span></span>
        </div>
        <div class="probability-track" aria-hidden="true"><i style="width:${(item.win / maximum) * 100}%"></i></div>
        <div class="rank-metric"><b>${format.format(item.win)}%</b><span>win</span></div>
        <div class="rank-metric"><b>${format.format(item.podium)}%</b><span>podium</span></div>
      </div>
    `).join("");
    $("#show-all").textContent = expanded ? "Show top eight" : "Show all 22 drivers";
  }

  function updateLeader(results, scenario) {
    const leader = results[0];
    const interval = 1.96 * Math.sqrt((leader.win / 100) * (1 - leader.win / 100) / scenario.count) * 100;
    $("#leader-code").textContent = leader.code;
    $("#leader-name").textContent = leader.name;
    $("#leader-probability").textContent = format.format(leader.win);
    $("#leader-interval").textContent = `±${format.format(interval)} pp`;
    $("#confidence-fill").style.width = `${Math.min(leader.win, 100)}%`;
    $("#signal-pace").textContent = `${leader.pace_delta >= 0 ? "+" : ""}${leader.pace_delta.toFixed(2)}`;
    $("#signal-grid").textContent = `P${leader.grid}`;
    $("#signal-reliability").textContent = `${Math.round((1 - leader.dnf_risk) * 100)}%`;
    $("#explain-title").textContent = leader.explanation.title;
    $("#explain-copy").textContent = leader.explanation.copy;
    $("#feature-chips").innerHTML = leader.explanation.features.map((feature) => `<span>${feature}</span>`).join("");
  }

  function renderEvolution() {
    const chart = $("#evolution-chart");
    const phases = data.history.phases;
    const series = data.history.series;
    const width = 900;
    const height = 245;
    const left = 50;
    const right = 125;
    const top = 24;
    const bottom = 38;
    const maxY = Math.ceil(Math.max(...series.flatMap((item) => item.values)) / 5) * 5;
    const x = (index) => left + index * ((width - left - right) / (phases.length - 1));
    const y = (value) => top + (maxY - value) * ((height - top - bottom) / maxY);

    const grid = [0, .25, .5, .75, 1].map((ratio) => {
      const value = maxY * ratio;
      return `<line x1="${left}" y1="${y(value)}" x2="${width - right}" y2="${y(value)}" stroke="#e5e8eb" />
        <text x="${left - 10}" y="${y(value) + 4}" text-anchor="end" fill="#8a949d" font-size="9">${value.toFixed(0)}%</text>`;
    }).join("");

    const lines = series.map((item) => {
      const points = item.values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
      const circles = item.values.map((value, index) => `<circle cx="${x(index)}" cy="${y(value)}" r="3" fill="${item.color}" />`).join("");
      const last = item.values.at(-1);
      return `<polyline points="${points}" fill="none" stroke="${item.color}" stroke-width="2.2" />${circles}
        <text x="${width - right + 12}" y="${y(last) + 4}" fill="${item.color}" font-size="10" font-weight="700">${item.code} ${last.toFixed(1)}%</text>`;
    }).join("");

    const labels = phases.map((label, index) => `<text x="${x(index)}" y="${height - 10}" text-anchor="middle" fill="#707b86" font-size="9">${label}</text>`).join("");
    chart.innerHTML = `<svg viewBox="0 0 ${width} ${height}" aria-hidden="true">${grid}${lines}${labels}</svg>`;
  }

  function run({ fresh = false } = {}) {
    const scenario = controls();
    const phase = phaseData();
    const seed = fresh ? (Date.now() & 0xffffffff) : phase.seed + scenario.rain * 17 + scenario.safety * 31 + scenario.stress * 47 + scenario.count;
    lastResults = simulate(phase.drivers, scenario, seed);
    renderRanking(lastResults);
    updateLeader(lastResults, scenario);
    $("#snapshot-phase").textContent = phase.label;
    $("#simulation-status").textContent = `${scenario.count.toLocaleString()} races completed · reproducible scenario model.`;
    $("#run-simulation b").textContent = `${scenario.count.toLocaleString()}×`;
  }

  function syncOutputs() {
    $("#rain-output").textContent = `${$("#rain-control").value}%`;
    $("#safety-output").textContent = `${$("#safety-control").value}%`;
    $("#stress-output").textContent = `${$("#stress-control").value}%`;
    $("#run-simulation b").textContent = `${Number($("#simulation-count").value).toLocaleString()}×`;
  }

  function reset() {
    $("#rain-control").value = defaults.rain;
    $("#safety-control").value = defaults.safety;
    $("#stress-control").value = defaults.stress;
    $("#simulation-count").value = defaults.count;
    syncOutputs();
    run();
  }

  $$(".phase-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      currentPhase = button.dataset.phase;
      $$(".phase-tabs button").forEach((item) => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      run();
    });
  });

  ["#rain-control", "#safety-control", "#stress-control", "#simulation-count"].forEach((selector) => {
    $(selector).addEventListener("input", syncOutputs);
  });

  $("#run-simulation").addEventListener("click", () => {
    const button = $("#run-simulation");
    button.disabled = true;
    $("#simulation-status").textContent = "Sampling race outcomes…";
    window.setTimeout(() => {
      run({ fresh: true });
      button.disabled = false;
    }, 30);
  });

  $("#reset-scenario").addEventListener("click", reset);
  $("#show-all").addEventListener("click", () => {
    expanded = !expanded;
    renderRanking(lastResults);
  });

  $("#event-label").textContent = data.meta.event;
  $("#snapshot-time").textContent = `Generated ${data.meta.generated_label}`;
  $("#snapshot-time").dateTime = data.meta.generated_at;
  $("#rain-control").value = defaults.rain;
  $("#safety-control").value = defaults.safety;
  $("#simulation-count").value = defaults.count;
  syncOutputs();
  renderEvolution();
  run();
  loadBacktestMetrics();
})();
