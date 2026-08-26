"""Public 2026 grid metadata and circuit coordinates used by the free pipeline."""

from __future__ import annotations

from datetime import date

DRIVERS_2026 = [
    {"code": "RUS", "name": "George Russell", "team": "Mercedes", "color": "#55ddd1", "wet_skill": 0.16},
    {"code": "ANT", "name": "Kimi Antonelli", "team": "Mercedes", "color": "#23d2c3", "wet_skill": 0.12},
    {"code": "LEC", "name": "Charles Leclerc", "team": "Ferrari", "color": "#ff6b57", "wet_skill": 0.17},
    {"code": "HAM", "name": "Lewis Hamilton", "team": "Ferrari", "color": "#ff4646", "wet_skill": 0.22},
    {"code": "NOR", "name": "Lando Norris", "team": "McLaren", "color": "#ff9345", "wet_skill": 0.18},
    {"code": "PIA", "name": "Oscar Piastri", "team": "McLaren", "color": "#ffb153", "wet_skill": 0.10},
    {"code": "VER", "name": "Max Verstappen", "team": "Red Bull Racing", "color": "#4b77ff", "wet_skill": 0.25},
    {"code": "HAD", "name": "Isack Hadjar", "team": "Red Bull Racing", "color": "#6f8cff", "wet_skill": 0.08},
    {"code": "LAW", "name": "Liam Lawson", "team": "Racing Bulls", "color": "#7b8dff", "wet_skill": 0.09},
    {"code": "LIN", "name": "Arvid Lindblad", "team": "Racing Bulls", "color": "#95a2ff", "wet_skill": 0.05},
    {"code": "GAS", "name": "Pierre Gasly", "team": "Alpine", "color": "#3ec5ff", "wet_skill": 0.14},
    {"code": "COL", "name": "Franco Colapinto", "team": "Alpine", "color": "#5ed2ff", "wet_skill": 0.08},
    {"code": "OCO", "name": "Esteban Ocon", "team": "Haas F1 Team", "color": "#c7cbd0", "wet_skill": 0.10},
    {"code": "BEA", "name": "Oliver Bearman", "team": "Haas F1 Team", "color": "#e2e5e8", "wet_skill": 0.07},
    {"code": "HUL", "name": "Nico Hülkenberg", "team": "Audi", "color": "#b5e538", "wet_skill": 0.13},
    {"code": "BOR", "name": "Gabriel Bortoleto", "team": "Audi", "color": "#c9f253", "wet_skill": 0.06},
    {"code": "SAI", "name": "Carlos Sainz", "team": "Williams", "color": "#4ca4ff", "wet_skill": 0.16},
    {"code": "ALB", "name": "Alexander Albon", "team": "Williams", "color": "#6db8ff", "wet_skill": 0.11},
    {"code": "ALO", "name": "Fernando Alonso", "team": "Aston Martin", "color": "#24b39b", "wet_skill": 0.23},
    {"code": "STR", "name": "Lance Stroll", "team": "Aston Martin", "color": "#46c9b4", "wet_skill": 0.09},
    {"code": "PER", "name": "Sergio Pérez", "team": "Cadillac", "color": "#9ba3ad", "wet_skill": 0.13},
    {"code": "BOT", "name": "Valtteri Bottas", "team": "Cadillac", "color": "#b4bbc3", "wet_skill": 0.11},
]

CIRCUITS = {
    "zandvoort": {"name": "Circuit Zandvoort", "country": "Netherlands", "latitude": 52.3888, "longitude": 4.5409, "laps": 72, "safety_car_prior": 0.38},
    "monza": {"name": "Autodromo Nazionale Monza", "country": "Italy", "latitude": 45.6156, "longitude": 9.2811, "laps": 53, "safety_car_prior": 0.36},
    "madring": {"name": "MADRING", "country": "Spain", "latitude": 40.4679, "longitude": -3.6170, "laps": 57, "safety_car_prior": 0.42},
    "baku": {"name": "Baku City Circuit", "country": "Azerbaijan", "latitude": 40.3725, "longitude": 49.8533, "laps": 51, "safety_car_prior": 0.61},
    "sepang": {"name": "Sepang International Circuit", "country": "Malaysia", "latitude": 2.7608, "longitude": 101.7380, "laps": 56, "safety_car_prior": 0.42},
    "singapore": {"name": "Marina Bay Street Circuit", "country": "Singapore", "latitude": 1.2914, "longitude": 103.8640, "laps": 62, "safety_car_prior": 0.70},
    "austin": {"name": "Circuit of the Americas", "country": "United States", "latitude": 30.1328, "longitude": -97.6411, "laps": 56, "safety_car_prior": 0.40},
    "mexico": {"name": "Autódromo Hermanos Rodríguez", "country": "Mexico", "latitude": 19.4042, "longitude": -99.0907, "laps": 71, "safety_car_prior": 0.45},
    "saopaulo": {"name": "Interlagos", "country": "Brazil", "latitude": -23.7036, "longitude": -46.6997, "laps": 71, "safety_car_prior": 0.56},
    "lasvegas": {"name": "Las Vegas Strip Circuit", "country": "United States", "latitude": 36.1147, "longitude": -115.1728, "laps": 50, "safety_car_prior": 0.48},
    "lusail": {"name": "Lusail International Circuit", "country": "Qatar", "latitude": 25.49, "longitude": 51.4542, "laps": 57, "safety_car_prior": 0.28},
    "yasmarina": {"name": "Yas Marina Circuit", "country": "United Arab Emirates", "latitude": 24.4672, "longitude": 54.6031, "laps": 58, "safety_car_prior": 0.32},
}

EVENTS_2026 = [
    {"race_date": date(2026, 8, 23), "circuit": "zandvoort", "grand_prix": "Dutch Grand Prix"},
    {"race_date": date(2026, 9, 6), "circuit": "monza", "grand_prix": "Italian Grand Prix"},
    {"race_date": date(2026, 9, 13), "circuit": "madring", "grand_prix": "Spanish Grand Prix"},
    {"race_date": date(2026, 9, 26), "circuit": "baku", "grand_prix": "Azerbaijan Grand Prix"},
    {"race_date": date(2026, 10, 4), "circuit": "sepang", "grand_prix": "Malaysia Grand Prix"},
    {"race_date": date(2026, 10, 11), "circuit": "singapore", "grand_prix": "Singapore Grand Prix"},
    {"race_date": date(2026, 10, 25), "circuit": "austin", "grand_prix": "United States Grand Prix"},
    {"race_date": date(2026, 11, 1), "circuit": "mexico", "grand_prix": "Mexico City Grand Prix"},
    {"race_date": date(2026, 11, 8), "circuit": "saopaulo", "grand_prix": "São Paulo Grand Prix"},
    {"race_date": date(2026, 11, 21), "circuit": "lasvegas", "grand_prix": "Las Vegas Grand Prix"},
    {"race_date": date(2026, 11, 29), "circuit": "lusail", "grand_prix": "Qatar Grand Prix"},
    {"race_date": date(2026, 12, 6), "circuit": "yasmarina", "grand_prix": "Abu Dhabi Grand Prix"},
]

TEAM_PRIORS = {
    "Mercedes": 1.00,
    "Ferrari": 0.91,
    "McLaren": 0.86,
    "Red Bull Racing": 0.82,
    "Racing Bulls": 0.63,
    "Alpine": 0.61,
    "Haas F1 Team": 0.53,
    "Audi": 0.48,
    "Williams": 0.51,
    "Aston Martin": 0.46,
    "Cadillac": 0.40,
}
