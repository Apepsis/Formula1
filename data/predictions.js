window.RACETWIN_DATA = {
  "meta": {
    "event": "Azerbaijan Grand Prix",
    "season": 2026,
    "phase": "qualifying",
    "generated_at": "2026-09-25T06:09:55.347221+00:00",
    "generated_label": "25 Sep 2026 · 06:09 UTC",
    "dataset_kind": "public_snapshot",
    "source_status": "public_sources",
    "machine_learning_model": true,
    "simulation_default": 10000,
    "disclaimer": "Probabilistic educational forecast. Not betting advice."
  },
  "circuit": {
    "name": "Baku City Circuit",
    "country": "Azerbaijan",
    "latitude": 40.3725,
    "longitude": 49.8533,
    "laps": 51,
    "safety_car_prior": 0.61
  },
  "weather": {
    "air_temperature": 23.2,
    "wind_speed": 41.0,
    "rain_probability": 0.0,
    "current_rain": 0.0
  },
  "history": {
    "phases": [
      "FP1",
      "FP2",
      "Qualifying"
    ],
    "series": [
      {
        "code": "RUS",
        "color": "#55ddd1",
        "values": [
          56.325,
          58.025,
          57.475
        ]
      },
      {
        "code": "LEC",
        "color": "#ff6b57",
        "values": [
          21.875,
          20.8,
          21.05
        ]
      },
      {
        "code": "ANT",
        "color": "#23d2c3",
        "values": [
          9.575,
          9.55,
          9.275
        ]
      },
      {
        "code": "HAM",
        "color": "#ff4646",
        "values": [
          4.875,
          5.15,
          5.325
        ]
      },
      {
        "code": "NOR",
        "color": "#ff9345",
        "values": [
          4.075,
          3.475,
          3.4
        ]
      }
    ]
  },
  "phases": [
    {
      "key": "fp1",
      "label": "After FP1",
      "seed": 2026000,
      "drivers": [
        {
          "code": "RUS",
          "name": "George Russell",
          "team": "Mercedes",
          "color": "#55ddd1",
          "wet_skill": 0.16,
          "grid": 1,
          "strength": 0.90236,
          "pace_delta": 0.1,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.72",
              "team +1.00",
              "grid P1",
              "ML finish 1.0"
            ]
          }
        },
        {
          "code": "ANT",
          "name": "Kimi Antonelli",
          "team": "Mercedes",
          "color": "#23d2c3",
          "wet_skill": 0.12,
          "grid": 2,
          "strength": 0.67272,
          "pace_delta": 0.198,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +1.00",
              "team +1.00",
              "grid P2",
              "ML finish 4.6"
            ]
          }
        },
        {
          "code": "LEC",
          "name": "Charles Leclerc",
          "team": "Ferrari",
          "color": "#ff6b57",
          "wet_skill": 0.17,
          "grid": 3,
          "strength": 0.77685,
          "pace_delta": 0.029,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.57",
              "team +0.91",
              "grid P3",
              "ML finish 1.2"
            ]
          }
        },
        {
          "code": "HAM",
          "name": "Lewis Hamilton",
          "team": "Ferrari",
          "color": "#ff4646",
          "wet_skill": 0.22,
          "grid": 4,
          "strength": 0.62396,
          "pace_delta": 0.058,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.65",
              "team +0.91",
              "grid P4",
              "ML finish 2.7"
            ]
          }
        },
        {
          "code": "NOR",
          "name": "Lando Norris",
          "team": "McLaren",
          "color": "#ff9345",
          "wet_skill": 0.18,
          "grid": 5,
          "strength": 0.60219,
          "pace_delta": 0.042,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.64",
              "team +0.86",
              "grid P5",
              "ML finish 2.8"
            ]
          }
        },
        {
          "code": "PIA",
          "name": "Oscar Piastri",
          "team": "McLaren",
          "color": "#ffb153",
          "wet_skill": 0.1,
          "grid": 6,
          "strength": 0.59127,
          "pace_delta": -0.037,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.41",
              "team +0.86",
              "grid P6",
              "ML finish 2.0"
            ]
          }
        },
        {
          "code": "VER",
          "name": "Max Verstappen",
          "team": "Red Bull Racing",
          "color": "#4b77ff",
          "wet_skill": 0.25,
          "grid": 7,
          "strength": 0.44844,
          "pace_delta": -0.015,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.50",
              "team +0.82",
              "grid P7",
              "ML finish 5.0"
            ]
          }
        },
        {
          "code": "HAD",
          "name": "Isack Hadjar",
          "team": "Red Bull Racing",
          "color": "#6f8cff",
          "wet_skill": 0.08,
          "grid": 8,
          "strength": 0.34128,
          "pace_delta": -0.104,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.24",
              "team +0.82",
              "grid P8",
              "ML finish 5.7"
            ]
          }
        },
        {
          "code": "LAW",
          "name": "Liam Lawson",
          "team": "Racing Bulls",
          "color": "#7b8dff",
          "wet_skill": 0.09,
          "grid": 9,
          "strength": 0.23762,
          "pace_delta": -0.156,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.20",
              "team +0.63",
              "grid P9",
              "ML finish 9.2"
            ]
          }
        },
        {
          "code": "LIN",
          "name": "Arvid Lindblad",
          "team": "Racing Bulls",
          "color": "#95a2ff",
          "wet_skill": 0.05,
          "grid": 10,
          "strength": 0.17851,
          "pace_delta": -0.19,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.11",
              "team +0.63",
              "grid P10",
              "ML finish 12.6"
            ]
          }
        },
        {
          "code": "GAS",
          "name": "Pierre Gasly",
          "team": "Alpine",
          "color": "#3ec5ff",
          "wet_skill": 0.14,
          "grid": 11,
          "strength": 0.19554,
          "pace_delta": -0.182,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.14",
              "team +0.61",
              "grid P11",
              "ML finish 11.1"
            ]
          }
        },
        {
          "code": "COL",
          "name": "Franco Colapinto",
          "team": "Alpine",
          "color": "#5ed2ff",
          "wet_skill": 0.08,
          "grid": 12,
          "strength": 0.17851,
          "pace_delta": -0.199,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.09",
              "team +0.61",
              "grid P12",
              "ML finish 11.2"
            ]
          }
        },
        {
          "code": "OCO",
          "name": "Esteban Ocon",
          "team": "Haas F1 Team",
          "color": "#c7cbd0",
          "wet_skill": 0.1,
          "grid": 13,
          "strength": 0.11723,
          "pace_delta": -0.243,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.01",
              "team +0.53",
              "grid P13",
              "ML finish 14.1"
            ]
          }
        },
        {
          "code": "BEA",
          "name": "Oliver Bearman",
          "team": "Haas F1 Team",
          "color": "#e2e5e8",
          "wet_skill": 0.07,
          "grid": 14,
          "strength": 0.13516,
          "pace_delta": -0.225,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.06",
              "team +0.53",
              "grid P14",
              "ML finish 14.2"
            ]
          }
        },
        {
          "code": "HUL",
          "name": "Nico Hülkenberg",
          "team": "Audi",
          "color": "#b5e538",
          "wet_skill": 0.13,
          "grid": 15,
          "strength": 0.1106,
          "pace_delta": -0.249,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
              "team +0.48",
              "grid P15",
              "ML finish 14.5"
            ]
          }
        },
        {
          "code": "BOR",
          "name": "Gabriel Bortoleto",
          "team": "Audi",
          "color": "#c9f253",
          "wet_skill": 0.06,
          "grid": 16,
          "strength": 0.11422,
          "pace_delta": -0.245,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.03",
              "team +0.48",
              "grid P16",
              "ML finish 14.5"
            ]
          }
        },
        {
          "code": "SAI",
          "name": "Carlos Sainz",
          "team": "Williams",
          "color": "#4ca4ff",
          "wet_skill": 0.16,
          "grid": 17,
          "strength": 0.11827,
          "pace_delta": -0.244,
          "dnf_risk": 0.0985,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
              "team +0.51",
              "grid P17",
              "ML finish 13.8"
            ]
          }
        },
        {
          "code": "ALB",
          "name": "Alexander Albon",
          "team": "Williams",
          "color": "#6db8ff",
          "wet_skill": 0.11,
          "grid": 18,
          "strength": 0.11277,
          "pace_delta": -0.245,
          "dnf_risk": 0.0985,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
              "team +0.51",
              "grid P18",
              "ML finish 14.8"
            ]
          }
        },
        {
          "code": "ALO",
          "name": "Fernando Alonso",
          "team": "Aston Martin",
          "color": "#24b39b",
          "wet_skill": 0.23,
          "grid": 19,
          "strength": 0.09564,
          "pace_delta": -0.257,
          "dnf_risk": 0.1033,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.01",
              "team +0.46",
              "grid P19",
              "ML finish 16.1"
            ]
          }
        },
        {
          "code": "STR",
          "name": "Lance Stroll",
          "team": "Aston Martin",
          "color": "#46c9b4",
          "wet_skill": 0.09,
          "grid": 20,
          "strength": 0.09108,
          "pace_delta": -0.261,
          "dnf_risk": 0.1033,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.00",
              "team +0.46",
              "grid P20",
              "ML finish 16.4"
            ]
          }
        },
        {
          "code": "PER",
          "name": "Sergio Pérez",
          "team": "Cadillac",
          "color": "#9ba3ad",
          "wet_skill": 0.13,
          "grid": 21,
          "strength": 0.08174,
          "pace_delta": -0.273,
          "dnf_risk": 0.109,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.00",
              "team +0.40",
              "grid P21",
              "ML finish 15.7"
            ]
          }
        },
        {
          "code": "BOT",
          "name": "Valtteri Bottas",
          "team": "Cadillac",
          "color": "#b4bbc3",
          "wet_skill": 0.11,
          "grid": 22,
          "strength": 0.08174,
          "pace_delta": -0.273,
          "dnf_risk": 0.109,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.00",
              "team +0.40",
              "grid P22",
              "ML finish 15.7"
            ]
          }
        }
      ]
    },
    {
      "key": "fp2",
      "label": "After FP2",
      "seed": 2026001,
      "drivers": [
        {
          "code": "RUS",
          "name": "George Russell",
          "team": "Mercedes",
          "color": "#55ddd1",
          "wet_skill": 0.16,
          "grid": 1,
          "strength": 0.92736,
          "pace_delta": 0.1,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.72",
              "team +1.00",
              "grid P1",
              "ML finish 1.0"
            ]
          }
        },
        {
          "code": "ANT",
          "name": "Kimi Antonelli",
          "team": "Mercedes",
          "color": "#23d2c3",
          "wet_skill": 0.12,
          "grid": 2,
          "strength": 0.69689,
          "pace_delta": 0.198,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +1.00",
              "team +1.00",
              "grid P2",
              "ML finish 4.6"
            ]
          }
        },
        {
          "code": "LEC",
          "name": "Charles Leclerc",
          "team": "Ferrari",
          "color": "#ff6b57",
          "wet_skill": 0.17,
          "grid": 3,
          "strength": 0.80018,
          "pace_delta": 0.029,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.57",
              "team +0.91",
              "grid P3",
              "ML finish 1.2"
            ]
          }
        },
        {
          "code": "HAM",
          "name": "Lewis Hamilton",
          "team": "Ferrari",
          "color": "#ff4646",
          "wet_skill": 0.22,
          "grid": 4,
          "strength": 0.64646,
          "pace_delta": 0.058,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.65",
              "team +0.91",
              "grid P4",
              "ML finish 2.7"
            ]
          }
        },
        {
          "code": "NOR",
          "name": "Lando Norris",
          "team": "McLaren",
          "color": "#ff9345",
          "wet_skill": 0.18,
          "grid": 5,
          "strength": 0.62386,
          "pace_delta": 0.042,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.64",
              "team +0.86",
              "grid P5",
              "ML finish 2.8"
            ]
          }
        },
        {
          "code": "PIA",
          "name": "Oscar Piastri",
          "team": "McLaren",
          "color": "#ffb153",
          "wet_skill": 0.1,
          "grid": 6,
          "strength": 0.6121,
          "pace_delta": -0.037,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.41",
              "team +0.86",
              "grid P6",
              "ML finish 2.0"
            ]
          }
        },
        {
          "code": "VER",
          "name": "Max Verstappen",
          "team": "Red Bull Racing",
          "color": "#4b77ff",
          "wet_skill": 0.25,
          "grid": 7,
          "strength": 0.46844,
          "pace_delta": -0.015,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.50",
              "team +0.82",
              "grid P7",
              "ML finish 5.0"
            ]
          }
        },
        {
          "code": "HAD",
          "name": "Isack Hadjar",
          "team": "Red Bull Racing",
          "color": "#6f8cff",
          "wet_skill": 0.08,
          "grid": 8,
          "strength": 0.36045,
          "pace_delta": -0.104,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.24",
              "team +0.82",
              "grid P8",
              "ML finish 5.7"
            ]
          }
        },
        {
          "code": "LAW",
          "name": "Liam Lawson",
          "team": "Racing Bulls",
          "color": "#7b8dff",
          "wet_skill": 0.09,
          "grid": 9,
          "strength": 0.25595,
          "pace_delta": -0.156,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.20",
              "team +0.63",
              "grid P9",
              "ML finish 9.2"
            ]
          }
        },
        {
          "code": "LIN",
          "name": "Arvid Lindblad",
          "team": "Racing Bulls",
          "color": "#95a2ff",
          "wet_skill": 0.05,
          "grid": 10,
          "strength": 0.19601,
          "pace_delta": -0.19,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.11",
              "team +0.63",
              "grid P10",
              "ML finish 12.6"
            ]
          }
        },
        {
          "code": "GAS",
          "name": "Pierre Gasly",
          "team": "Alpine",
          "color": "#3ec5ff",
          "wet_skill": 0.14,
          "grid": 11,
          "strength": 0.21221,
          "pace_delta": -0.182,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.14",
              "team +0.61",
              "grid P11",
              "ML finish 11.1"
            ]
          }
        },
        {
          "code": "COL",
          "name": "Franco Colapinto",
          "team": "Alpine",
          "color": "#5ed2ff",
          "wet_skill": 0.08,
          "grid": 12,
          "strength": 0.19434,
          "pace_delta": -0.199,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.09",
              "team +0.61",
              "grid P12",
              "ML finish 11.2"
            ]
          }
        },
        {
          "code": "OCO",
          "name": "Esteban Ocon",
          "team": "Haas F1 Team",
          "color": "#c7cbd0",
          "wet_skill": 0.1,
          "grid": 13,
          "strength": 0.13223,
          "pace_delta": -0.243,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.01",
              "team +0.53",
              "grid P13",
              "ML finish 14.1"
            ]
          }
        },
        {
          "code": "BEA",
          "name": "Oliver Bearman",
          "team": "Haas F1 Team",
          "color": "#e2e5e8",
          "wet_skill": 0.07,
          "grid": 14,
          "strength": 0.14933,
          "pace_delta": -0.225,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.06",
              "team +0.53",
              "grid P14",
              "ML finish 14.2"
            ]
          }
        },
        {
          "code": "HUL",
          "name": "Nico Hülkenberg",
          "team": "Audi",
          "color": "#b5e538",
          "wet_skill": 0.13,
          "grid": 15,
          "strength": 0.12393,
          "pace_delta": -0.249,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
              "team +0.48",
              "grid P15",
              "ML finish 14.5"
            ]
          }
        },
        {
          "code": "BOR",
          "name": "Gabriel Bortoleto",
          "team": "Audi",
          "color": "#c9f253",
          "wet_skill": 0.06,
          "grid": 16,
          "strength": 0.12672,
          "pace_delta": -0.245,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.03",
              "team +0.48",
              "grid P16",
              "ML finish 14.5"
            ]
          }
        },
        {
          "code": "SAI",
          "name": "Carlos Sainz",
          "team": "Williams",
          "color": "#4ca4ff",
          "wet_skill": 0.16,
          "grid": 17,
          "strength": 0.12994,
          "pace_delta": -0.244,
          "dnf_risk": 0.0985,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
              "team +0.51",
              "grid P17",
              "ML finish 13.8"
            ]
          }
        },
        {
          "code": "ALB",
          "name": "Alexander Albon",
          "team": "Williams",
          "color": "#6db8ff",
          "wet_skill": 0.11,
          "grid": 18,
          "strength": 0.1236,
          "pace_delta": -0.245,
          "dnf_risk": 0.0985,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
              "team +0.51",
              "grid P18",
              "ML finish 14.8"
            ]
          }
        },
        {
          "code": "ALO",
          "name": "Fernando Alonso",
          "team": "Aston Martin",
          "color": "#24b39b",
          "wet_skill": 0.23,
          "grid": 19,
          "strength": 0.10564,
          "pace_delta": -0.257,
          "dnf_risk": 0.1033,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.01",
              "team +0.46",
              "grid P19",
              "ML finish 16.1"
            ]
          }
        },
        {
          "code": "STR",
          "name": "Lance Stroll",
          "team": "Aston Martin",
          "color": "#46c9b4",
          "wet_skill": 0.09,
          "grid": 20,
          "strength": 0.10025,
          "pace_delta": -0.261,
          "dnf_risk": 0.1033,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.00",
              "team +0.46",
              "grid P20",
              "ML finish 16.4"
            ]
          }
        },
        {
          "code": "PER",
          "name": "Sergio Pérez",
          "team": "Cadillac",
          "color": "#9ba3ad",
          "wet_skill": 0.13,
          "grid": 21,
          "strength": 0.09007,
          "pace_delta": -0.273,
          "dnf_risk": 0.109,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.00",
              "team +0.40",
              "grid P21",
              "ML finish 15.7"
            ]
          }
        },
        {
          "code": "BOT",
          "name": "Valtteri Bottas",
          "team": "Cadillac",
          "color": "#b4bbc3",
          "wet_skill": 0.11,
          "grid": 22,
          "strength": 0.08924,
          "pace_delta": -0.273,
          "dnf_risk": 0.109,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.00",
              "team +0.40",
              "grid P22",
              "ML finish 15.7"
            ]
          }
        }
      ]
    },
    {
      "key": "qualifying",
      "label": "After qualifying",
      "seed": 2026002,
      "drivers": [
        {
          "code": "RUS",
          "name": "George Russell",
          "team": "Mercedes",
          "color": "#55ddd1",
          "wet_skill": 0.16,
          "grid": 1,
          "strength": 0.94736,
          "pace_delta": 0.1,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.72",
              "team +1.00",
              "grid P1",
              "ML finish 1.0"
            ]
          }
        },
        {
          "code": "ANT",
          "name": "Kimi Antonelli",
          "team": "Mercedes",
          "color": "#23d2c3",
          "wet_skill": 0.12,
          "grid": 2,
          "strength": 0.71622,
          "pace_delta": 0.198,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +1.00",
              "team +1.00",
              "grid P2",
              "ML finish 4.6"
            ]
          }
        },
        {
          "code": "LEC",
          "name": "Charles Leclerc",
          "team": "Ferrari",
          "color": "#ff6b57",
          "wet_skill": 0.17,
          "grid": 3,
          "strength": 0.81885,
          "pace_delta": 0.029,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.57",
              "team +0.91",
              "grid P3",
              "ML finish 1.2"
            ]
          }
        },
        {
          "code": "HAM",
          "name": "Lewis Hamilton",
          "team": "Ferrari",
          "color": "#ff4646",
          "wet_skill": 0.22,
          "grid": 4,
          "strength": 0.66446,
          "pace_delta": 0.058,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.65",
              "team +0.91",
              "grid P4",
              "ML finish 2.7"
            ]
          }
        },
        {
          "code": "NOR",
          "name": "Lando Norris",
          "team": "McLaren",
          "color": "#ff9345",
          "wet_skill": 0.18,
          "grid": 5,
          "strength": 0.64119,
          "pace_delta": 0.042,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.64",
              "team +0.86",
              "grid P5",
              "ML finish 2.8"
            ]
          }
        },
        {
          "code": "PIA",
          "name": "Oscar Piastri",
          "team": "McLaren",
          "color": "#ffb153",
          "wet_skill": 0.1,
          "grid": 6,
          "strength": 0.62877,
          "pace_delta": -0.037,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.41",
              "team +0.86",
              "grid P6",
              "ML finish 2.0"
            ]
          }
        },
        {
          "code": "VER",
          "name": "Max Verstappen",
          "team": "Red Bull Racing",
          "color": "#4b77ff",
          "wet_skill": 0.25,
          "grid": 7,
          "strength": 0.48444,
          "pace_delta": -0.015,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.50",
              "team +0.82",
              "grid P7",
              "ML finish 5.0"
            ]
          }
        },
        {
          "code": "HAD",
          "name": "Isack Hadjar",
          "team": "Red Bull Racing",
          "color": "#6f8cff",
          "wet_skill": 0.08,
          "grid": 8,
          "strength": 0.37578,
          "pace_delta": -0.104,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.24",
              "team +0.82",
              "grid P8",
              "ML finish 5.7"
            ]
          }
        },
        {
          "code": "LAW",
          "name": "Liam Lawson",
          "team": "Racing Bulls",
          "color": "#7b8dff",
          "wet_skill": 0.09,
          "grid": 9,
          "strength": 0.27062,
          "pace_delta": -0.156,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.20",
              "team +0.63",
              "grid P9",
              "ML finish 9.2"
            ]
          }
        },
        {
          "code": "LIN",
          "name": "Arvid Lindblad",
          "team": "Racing Bulls",
          "color": "#95a2ff",
          "wet_skill": 0.05,
          "grid": 10,
          "strength": 0.21001,
          "pace_delta": -0.19,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.11",
              "team +0.63",
              "grid P10",
              "ML finish 12.6"
            ]
          }
        },
        {
          "code": "GAS",
          "name": "Pierre Gasly",
          "team": "Alpine",
          "color": "#3ec5ff",
          "wet_skill": 0.14,
          "grid": 11,
          "strength": 0.22554,
          "pace_delta": -0.182,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.14",
              "team +0.61",
              "grid P11",
              "ML finish 11.1"
            ]
          }
        },
        {
          "code": "COL",
          "name": "Franco Colapinto",
          "team": "Alpine",
          "color": "#5ed2ff",
          "wet_skill": 0.08,
          "grid": 12,
          "strength": 0.20701,
          "pace_delta": -0.199,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.09",
              "team +0.61",
              "grid P12",
              "ML finish 11.2"
            ]
          }
        },
        {
          "code": "OCO",
          "name": "Esteban Ocon",
          "team": "Haas F1 Team",
          "color": "#c7cbd0",
          "wet_skill": 0.1,
          "grid": 13,
          "strength": 0.14423,
          "pace_delta": -0.243,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.01",
              "team +0.53",
              "grid P13",
              "ML finish 14.1"
            ]
          }
        },
        {
          "code": "BEA",
          "name": "Oliver Bearman",
          "team": "Haas F1 Team",
          "color": "#e2e5e8",
          "wet_skill": 0.07,
          "grid": 14,
          "strength": 0.16066,
          "pace_delta": -0.225,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.06",
              "team +0.53",
              "grid P14",
              "ML finish 14.2"
            ]
          }
        },
        {
          "code": "HUL",
          "name": "Nico Hülkenberg",
          "team": "Audi",
          "color": "#b5e538",
          "wet_skill": 0.13,
          "grid": 15,
          "strength": 0.1346,
          "pace_delta": -0.249,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
              "team +0.48",
              "grid P15",
              "ML finish 14.5"
            ]
          }
        },
        {
          "code": "BOR",
          "name": "Gabriel Bortoleto",
          "team": "Audi",
          "color": "#c9f253",
          "wet_skill": 0.06,
          "grid": 16,
          "strength": 0.13672,
          "pace_delta": -0.245,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.03",
              "team +0.48",
              "grid P16",
              "ML finish 14.5"
            ]
          }
        },
        {
          "code": "SAI",
          "name": "Carlos Sainz",
          "team": "Williams",
          "color": "#4ca4ff",
          "wet_skill": 0.16,
          "grid": 17,
          "strength": 0.13927,
          "pace_delta": -0.244,
          "dnf_risk": 0.0985,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
              "team +0.51",
              "grid P17",
              "ML finish 13.8"
            ]
          }
        },
        {
          "code": "ALB",
          "name": "Alexander Albon",
          "team": "Williams",
          "color": "#6db8ff",
          "wet_skill": 0.11,
          "grid": 18,
          "strength": 0.13227,
          "pace_delta": -0.245,
          "dnf_risk": 0.0985,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
              "team +0.51",
              "grid P18",
              "ML finish 14.8"
            ]
          }
        },
        {
          "code": "ALO",
          "name": "Fernando Alonso",
          "team": "Aston Martin",
          "color": "#24b39b",
          "wet_skill": 0.23,
          "grid": 19,
          "strength": 0.11364,
          "pace_delta": -0.257,
          "dnf_risk": 0.1033,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.01",
              "team +0.46",
              "grid P19",
              "ML finish 16.1"
            ]
          }
        },
        {
          "code": "STR",
          "name": "Lance Stroll",
          "team": "Aston Martin",
          "color": "#46c9b4",
          "wet_skill": 0.09,
          "grid": 20,
          "strength": 0.10758,
          "pace_delta": -0.261,
          "dnf_risk": 0.1033,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.00",
              "team +0.46",
              "grid P20",
              "ML finish 16.4"
            ]
          }
        },
        {
          "code": "PER",
          "name": "Sergio Pérez",
          "team": "Cadillac",
          "color": "#9ba3ad",
          "wet_skill": 0.13,
          "grid": 21,
          "strength": 0.09674,
          "pace_delta": -0.273,
          "dnf_risk": 0.109,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.00",
              "team +0.40",
              "grid P21",
              "ML finish 15.7"
            ]
          }
        },
        {
          "code": "BOT",
          "name": "Valtteri Bottas",
          "team": "Cadillac",
          "color": "#b4bbc3",
          "wet_skill": 0.11,
          "grid": 22,
          "strength": 0.09524,
          "pace_delta": -0.273,
          "dnf_risk": 0.109,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.00",
              "team +0.40",
              "grid P22",
              "ML finish 15.7"
            ]
          }
        }
      ]
    }
  ]
};
