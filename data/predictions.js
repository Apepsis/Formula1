window.RACETWIN_DATA = {
  "meta": {
    "event": "Spanish Grand Prix",
    "season": 2026,
    "phase": "qualifying",
    "generated_at": "2026-09-11T17:01:40.328782+00:00",
    "generated_label": "11 Sep 2026 · 17:01 UTC",
    "dataset_kind": "public_snapshot",
    "source_status": "public_sources",
    "machine_learning_model": true,
    "simulation_default": 10000,
    "disclaimer": "Probabilistic educational forecast. Not betting advice."
  },
  "circuit": {
    "name": "MADRING",
    "country": "Spain",
    "latitude": 40.4679,
    "longitude": -3.617,
    "laps": 57,
    "safety_car_prior": 0.42
  },
  "weather": {
    "air_temperature": 29.8,
    "wind_speed": 4.1,
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
          43.55,
          43.775,
          44.6
        ]
      },
      {
        "code": "LEC",
        "color": "#ff6b57",
        "values": [
          34.25,
          34.5,
          34.625
        ]
      },
      {
        "code": "ANT",
        "color": "#23d2c3",
        "values": [
          10.85,
          10.7,
          9.875
        ]
      },
      {
        "code": "NOR",
        "color": "#ff9345",
        "values": [
          4.525,
          4.075,
          4.0
        ]
      },
      {
        "code": "PIA",
        "color": "#ffb153",
        "values": [
          4.35,
          4.025,
          4.175
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
          "strength": 0.8451,
          "pace_delta": 0.111,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.75",
              "team +1.00",
              "grid P1",
              "ML finish 1.6"
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
          "strength": 0.68968,
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
          "strength": 0.83453,
          "pace_delta": 0.033,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.58",
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
          "strength": 0.58139,
          "pace_delta": 0.08,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.72",
              "team +0.91",
              "grid P4",
              "ML finish 4.4"
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
          "strength": 0.63212,
          "pace_delta": 0.044,
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
          "strength": 0.64752,
          "pace_delta": -0.029,
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
          "strength": 0.44345,
          "pace_delta": -0.022,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.48",
              "team +0.82",
              "grid P7",
              "ML finish 5.4"
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
          "strength": 0.36708,
          "pace_delta": -0.096,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.27",
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
          "strength": 0.2395,
          "pace_delta": -0.16,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.19",
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
          "strength": 0.18163,
          "pace_delta": -0.189,
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
          "strength": 0.20367,
          "pace_delta": -0.177,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.15",
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
          "strength": 0.17713,
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
          "strength": 0.11876,
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
          "strength": 0.13837,
          "pace_delta": -0.223,
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
          "strength": 0.11105,
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
          "strength": 0.11633,
          "pace_delta": -0.244,
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
          "strength": 0.12034,
          "pace_delta": -0.243,
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
          "strength": 0.11413,
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
          "strength": 0.0961,
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
          "strength": 0.0821,
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
          "strength": 0.0821,
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
          "strength": 0.8701,
          "pace_delta": 0.111,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.75",
              "team +1.00",
              "grid P1",
              "ML finish 1.6"
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
          "strength": 0.71385,
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
          "strength": 0.85786,
          "pace_delta": 0.033,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.58",
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
          "strength": 0.60389,
          "pace_delta": 0.08,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.72",
              "team +0.91",
              "grid P4",
              "ML finish 4.4"
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
          "strength": 0.65379,
          "pace_delta": 0.044,
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
          "strength": 0.66835,
          "pace_delta": -0.029,
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
          "strength": 0.46345,
          "pace_delta": -0.022,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.48",
              "team +0.82",
              "grid P7",
              "ML finish 5.4"
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
          "strength": 0.38625,
          "pace_delta": -0.096,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.27",
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
          "strength": 0.25783,
          "pace_delta": -0.16,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.19",
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
          "strength": 0.19913,
          "pace_delta": -0.189,
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
          "strength": 0.22034,
          "pace_delta": -0.177,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.15",
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
          "strength": 0.19296,
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
          "strength": 0.13376,
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
          "strength": 0.15254,
          "pace_delta": -0.223,
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
          "strength": 0.12438,
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
          "strength": 0.12883,
          "pace_delta": -0.244,
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
          "strength": 0.13201,
          "pace_delta": -0.243,
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
          "strength": 0.12496,
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
          "strength": 0.1061,
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
          "strength": 0.09043,
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
          "strength": 0.0896,
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
          "strength": 0.8901,
          "pace_delta": 0.111,
          "dnf_risk": 0.052,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.75",
              "team +1.00",
              "grid P1",
              "ML finish 1.6"
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
          "strength": 0.73318,
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
          "strength": 0.87653,
          "pace_delta": 0.033,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.58",
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
          "strength": 0.62189,
          "pace_delta": 0.08,
          "dnf_risk": 0.0605,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.72",
              "team +0.91",
              "grid P4",
              "ML finish 4.4"
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
          "strength": 0.67112,
          "pace_delta": 0.044,
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
          "strength": 0.68502,
          "pace_delta": -0.029,
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
          "strength": 0.47945,
          "pace_delta": -0.022,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.48",
              "team +0.82",
              "grid P7",
              "ML finish 5.4"
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
          "strength": 0.40158,
          "pace_delta": -0.096,
          "dnf_risk": 0.0691,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.27",
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
          "strength": 0.2725,
          "pace_delta": -0.16,
          "dnf_risk": 0.0872,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.19",
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
          "strength": 0.21313,
          "pace_delta": -0.189,
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
          "strength": 0.23367,
          "pace_delta": -0.177,
          "dnf_risk": 0.089,
          "explanation": {
            "title": "Current form anchors the prior",
            "copy": "The open-data snapshot combines season form, constructor strength and starting position.",
            "features": [
              "form +0.15",
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
          "strength": 0.20563,
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
          "strength": 0.14576,
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
          "strength": 0.16387,
          "pace_delta": -0.223,
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
          "strength": 0.13505,
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
          "strength": 0.13883,
          "pace_delta": -0.244,
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
          "strength": 0.14134,
          "pace_delta": -0.243,
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
          "strength": 0.13363,
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
          "strength": 0.1141,
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
          "strength": 0.0971,
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
          "strength": 0.0956,
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
