import axios from 'axios';


// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FLos_Angeles

export function getWeather(lat, lon, timezone){
    axios.get("https://api.open-meteo.com/v1/forecast", {})
}