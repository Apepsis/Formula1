window.RACETWIN_DATA = {
  "meta": {
    "event": "Italian Grand Prix",
    "season": 2026,
    "phase": "qualifying",
    "generated_at": "2026-08-30T06:39:06.889523+00:00",
    "generated_label": "30 Aug 2026 · 06:39 UTC",
    "dataset_kind": "public_snapshot",
    "source_status": "public_sources",
    "machine_learning_model": true,
    "simulation_default": 10000,
    "disclaimer": "Probabilistic educational forecast. Not betting advice."
  },
  "circuit": {
    "name": "Autodromo Nazionale Monza",
    "country": "Italy",
    "latitude": 45.6156,
    "longitude": 9.2811,
    "laps": 53,
    "safety_car_prior": 0.36
  },
  "weather": {
    "air_temperature": 21.3,
    "wind_speed": 1.1,
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
          48.575,
          48.7,
          49.0
        ]
      },
      {
        "code": "LEC",
        "color": "#ff6b57",
        "values": [
          37.1,
          36.8,
          36.875
        ]
      },
      {
        "code": "ANT",
        "color": "#23d2c3",
        "values": [
          8.05,
          7.925,
          7.625
        ]
      },
      {
        "code": "PIA",
        "color": "#ffb153",
        "values": [
          2.55,
          2.3,
          2.675
        ]
      },
      {
        "code": "HAM",
        "color": "#ff4646",
        "values": [
          2.25,
          2.7,
          2.1
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
          "strength": 0.86988,
          "pace_delta": 0.112,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.76",
              "team +1.00",
              "grid P1",
              "ML finish 1.3"
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
          "strength": 0.67941,
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
          "strength": 0.85564,
          "pace_delta": 0.054,
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
          "strength": 0.59163,
          "pace_delta": 0.094,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.76",
              "team +0.91",
              "grid P4",
              "ML finish 4.2"
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
          "strength": 0.56335,
          "pace_delta": 0.05,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.66",
              "team +0.86",
              "grid P5",
              "ML finish 3.8"
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
          "strength": 0.62203,
          "pace_delta": -0.03,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.43",
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
          "strength": 0.44512,
          "pace_delta": -0.027,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.46",
              "team +0.82",
              "grid P7",
              "ML finish 4.9"
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
          "strength": 0.36607,
          "pace_delta": -0.091,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.28",
              "team +0.82",
              "grid P8",
              "ML finish 5.5"
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
          "strength": 0.24004,
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
          "strength": 0.17549,
          "pace_delta": -0.194,
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
          "strength": 0.20845,
          "pace_delta": -0.167,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.18",
              "team +0.61",
              "grid P11",
              "ML finish 11.6"
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
          "strength": 0.17497,
          "pace_delta": -0.204,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.08",
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
          "strength": 0.11844,
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
          "strength": 0.14011,
          "pace_delta": -0.221,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.07",
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
          "strength": 0.11128,
          "pace_delta": -0.248,
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
          "strength": 0.1171,
          "pace_delta": -0.242,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.04",
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
          "strength": 0.12031,
          "pace_delta": -0.242,
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
          "strength": 0.11432,
          "pace_delta": -0.244,
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
          "strength": 0.09643,
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
          "strength": 0.08188,
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
          "strength": 0.08188,
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
          "strength": 0.89488,
          "pace_delta": 0.112,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.76",
              "team +1.00",
              "grid P1",
              "ML finish 1.3"
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
          "strength": 0.70358,
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
          "strength": 0.87897,
          "pace_delta": 0.054,
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
          "strength": 0.61413,
          "pace_delta": 0.094,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.76",
              "team +0.91",
              "grid P4",
              "ML finish 4.2"
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
          "strength": 0.58502,
          "pace_delta": 0.05,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.66",
              "team +0.86",
              "grid P5",
              "ML finish 3.8"
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
          "strength": 0.64286,
          "pace_delta": -0.03,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.43",
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
          "strength": 0.46512,
          "pace_delta": -0.027,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.46",
              "team +0.82",
              "grid P7",
              "ML finish 4.9"
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
          "strength": 0.38524,
          "pace_delta": -0.091,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.28",
              "team +0.82",
              "grid P8",
              "ML finish 5.5"
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
          "strength": 0.25837,
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
          "strength": 0.19299,
          "pace_delta": -0.194,
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
          "strength": 0.22512,
          "pace_delta": -0.167,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.18",
              "team +0.61",
              "grid P11",
              "ML finish 11.6"
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
          "strength": 0.1908,
          "pace_delta": -0.204,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.08",
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
          "strength": 0.13344,
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
          "strength": 0.15428,
          "pace_delta": -0.221,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.07",
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
          "strength": 0.12461,
          "pace_delta": -0.248,
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
          "strength": 0.1296,
          "pace_delta": -0.242,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.04",
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
          "strength": 0.13198,
          "pace_delta": -0.242,
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
          "strength": 0.12515,
          "pace_delta": -0.244,
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
          "strength": 0.10643,
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
          "strength": 0.09021,
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
          "strength": 0.08938,
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
          "strength": 0.91488,
          "pace_delta": 0.112,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.76",
              "team +1.00",
              "grid P1",
              "ML finish 1.3"
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
          "strength": 0.72291,
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
          "strength": 0.89764,
          "pace_delta": 0.054,
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
          "strength": 0.63213,
          "pace_delta": 0.094,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.76",
              "team +0.91",
              "grid P4",
              "ML finish 4.2"
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
          "strength": 0.60235,
          "pace_delta": 0.05,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.66",
              "team +0.86",
              "grid P5",
              "ML finish 3.8"
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
          "strength": 0.65953,
          "pace_delta": -0.03,
          "dnf_risk": 0.0653,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.43",
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
          "strength": 0.48112,
          "pace_delta": -0.027,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.46",
              "team +0.82",
              "grid P7",
              "ML finish 4.9"
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
          "strength": 0.40057,
          "pace_delta": -0.091,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.28",
              "team +0.82",
              "grid P8",
              "ML finish 5.5"
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
          "strength": 0.27304,
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
          "strength": 0.20699,
          "pace_delta": -0.194,
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
          "strength": 0.23845,
          "pace_delta": -0.167,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.18",
              "team +0.61",
              "grid P11",
              "ML finish 11.6"
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
          "strength": 0.20347,
          "pace_delta": -0.204,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.08",
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
          "strength": 0.14544,
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
          "strength": 0.16561,
          "pace_delta": -0.221,
          "dnf_risk": 0.0966,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.07",
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
          "strength": 0.13528,
          "pace_delta": -0.248,
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
          "strength": 0.1396,
          "pace_delta": -0.242,
          "dnf_risk": 0.1014,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.04",
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
          "strength": 0.14131,
          "pace_delta": -0.242,
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
          "strength": 0.13382,
          "pace_delta": -0.244,
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
          "strength": 0.11443,
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
          "strength": 0.09688,
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
          "strength": 0.09538,
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
