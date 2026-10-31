window.RACETWIN_DATA = {
  "meta": {
    "event": "Mexico City Grand Prix",
    "season": 2026,
    "phase": "qualifying",
    "generated_at": "2026-10-31T06:59:22.286310+00:00",
    "generated_label": "31 Oct 2026 · 06:59 UTC",
    "dataset_kind": "public_snapshot",
    "source_status": "public_sources",
    "machine_learning_model": true,
    "simulation_default": 10000,
    "disclaimer": "Probabilistic educational forecast. Not betting advice."
  },
  "circuit": {
    "name": "Autódromo Hermanos Rodríguez",
    "country": "Mexico",
    "latitude": 19.4042,
    "longitude": -99.0907,
    "laps": 71,
    "safety_car_prior": 0.45
  },
  "weather": {
    "air_temperature": 16.2,
    "wind_speed": 6.5,
    "rain_probability": 4.0,
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
          56.875,
          57.35,
          57.775
        ]
      },
      {
        "code": "LEC",
        "color": "#ff6b57",
        "values": [
          26.95,
          26.4,
          26.45
        ]
      },
      {
        "code": "ANT",
        "color": "#23d2c3",
        "values": [
          8.775,
          8.8,
          8.375
        ]
      },
      {
        "code": "HAM",
        "color": "#ff4646",
        "values": [
          3.15,
          3.425,
          3.025
        ]
      },
      {
        "code": "PIA",
        "color": "#ffb153",
        "values": [
          1.9,
          1.9,
          2.15
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
          "strength": 0.88138,
          "pace_delta": 0.079,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.66",
              "team +1.00",
              "grid P1",
              "ML finish 0.8"
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
          "strength": 0.66207,
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
          "strength": 0.79458,
          "pace_delta": 0.053,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.64",
              "team +0.91",
              "grid P3",
              "ML finish 1.1"
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
          "strength": 0.57971,
          "pace_delta": 0.061,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.66",
              "team +0.91",
              "grid P4",
              "ML finish 3.2"
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
          "strength": 0.53207,
          "pace_delta": 0.022,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.58",
              "team +0.86",
              "grid P5",
              "ML finish 3.4"
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
          "strength": 0.57219,
          "pace_delta": -0.043,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.39",
              "team +0.86",
              "grid P6",
              "ML finish 1.9"
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
          "strength": 0.47505,
          "pace_delta": 0.038,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.65",
              "team +0.82",
              "grid P7",
              "ML finish 5.7"
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
          "strength": 0.35775,
          "pace_delta": -0.088,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.29",
              "team +0.82",
              "grid P8",
              "ML finish 5.3"
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
          "strength": 0.23712,
          "pace_delta": -0.153,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.21",
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
          "strength": 0.17636,
          "pace_delta": -0.191,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.10",
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
          "strength": 0.18442,
          "pace_delta": -0.191,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.12",
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
          "strength": 0.16981,
          "pace_delta": -0.205,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.07",
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
          "strength": 0.11961,
          "pace_delta": -0.24,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
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
          "strength": 0.1349,
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
          "strength": 0.11408,
          "pace_delta": -0.244,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.04",
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
          "strength": 0.11118,
          "pace_delta": -0.247,
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
          "strength": 0.11691,
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
          "strength": 0.11106,
          "pace_delta": -0.246,
          "dnf_risk": 0.0985,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.01",
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
          "strength": 0.09868,
          "pace_delta": -0.254,
          "dnf_risk": 0.1033,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
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
          "strength": 0.08152,
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
          "strength": 0.08152,
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
          "strength": 0.90638,
          "pace_delta": 0.079,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.66",
              "team +1.00",
              "grid P1",
              "ML finish 0.8"
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
          "strength": 0.68624,
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
          "strength": 0.81791,
          "pace_delta": 0.053,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.64",
              "team +0.91",
              "grid P3",
              "ML finish 1.1"
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
          "strength": 0.60221,
          "pace_delta": 0.061,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.66",
              "team +0.91",
              "grid P4",
              "ML finish 3.2"
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
          "strength": 0.55374,
          "pace_delta": 0.022,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.58",
              "team +0.86",
              "grid P5",
              "ML finish 3.4"
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
          "strength": 0.59302,
          "pace_delta": -0.043,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.39",
              "team +0.86",
              "grid P6",
              "ML finish 1.9"
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
          "strength": 0.49505,
          "pace_delta": 0.038,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.65",
              "team +0.82",
              "grid P7",
              "ML finish 5.7"
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
          "strength": 0.37692,
          "pace_delta": -0.088,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.29",
              "team +0.82",
              "grid P8",
              "ML finish 5.3"
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
          "strength": 0.25545,
          "pace_delta": -0.153,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.21",
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
          "strength": 0.19386,
          "pace_delta": -0.191,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.10",
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
          "strength": 0.20109,
          "pace_delta": -0.191,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.12",
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
          "strength": 0.18564,
          "pace_delta": -0.205,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.07",
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
          "strength": 0.13461,
          "pace_delta": -0.24,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
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
          "strength": 0.14907,
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
          "strength": 0.12741,
          "pace_delta": -0.244,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.04",
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
          "strength": 0.12368,
          "pace_delta": -0.247,
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
          "strength": 0.12858,
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
          "strength": 0.12189,
          "pace_delta": -0.246,
          "dnf_risk": 0.0985,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.01",
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
          "strength": 0.10868,
          "pace_delta": -0.254,
          "dnf_risk": 0.1033,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
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
          "strength": 0.08985,
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
          "strength": 0.08902,
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
          "strength": 0.92638,
          "pace_delta": 0.079,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.66",
              "team +1.00",
              "grid P1",
              "ML finish 0.8"
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
          "strength": 0.70557,
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
          "strength": 0.83658,
          "pace_delta": 0.053,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.64",
              "team +0.91",
              "grid P3",
              "ML finish 1.1"
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
          "strength": 0.62021,
          "pace_delta": 0.061,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.66",
              "team +0.91",
              "grid P4",
              "ML finish 3.2"
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
          "strength": 0.57107,
          "pace_delta": 0.022,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.58",
              "team +0.86",
              "grid P5",
              "ML finish 3.4"
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
          "strength": 0.60969,
          "pace_delta": -0.043,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.39",
              "team +0.86",
              "grid P6",
              "ML finish 1.9"
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
          "strength": 0.51105,
          "pace_delta": 0.038,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.65",
              "team +0.82",
              "grid P7",
              "ML finish 5.7"
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
          "strength": 0.39225,
          "pace_delta": -0.088,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.29",
              "team +0.82",
              "grid P8",
              "ML finish 5.3"
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
          "strength": 0.27012,
          "pace_delta": -0.153,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.21",
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
          "strength": 0.20786,
          "pace_delta": -0.191,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.10",
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
          "strength": 0.21442,
          "pace_delta": -0.191,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.12",
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
          "strength": 0.19831,
          "pace_delta": -0.205,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.07",
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
          "strength": 0.14661,
          "pace_delta": -0.24,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
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
          "strength": 0.1604,
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
          "strength": 0.13808,
          "pace_delta": -0.244,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.04",
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
          "strength": 0.13368,
          "pace_delta": -0.247,
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
          "strength": 0.13791,
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
          "strength": 0.13056,
          "pace_delta": -0.246,
          "dnf_risk": 0.0985,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.01",
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
          "strength": 0.11668,
          "pace_delta": -0.254,
          "dnf_risk": 0.1033,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.02",
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
          "strength": 0.09652,
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
          "strength": 0.09502,
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
