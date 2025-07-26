const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`

//https://api.openweathermap.org/data/3.0/onecall?lat=51.51&lon=0.12&exclude=minutely&units=metric&appid=48f49cf4b6291d044b330850f314cfcf

export const getWeatherDetails = async({lat}, {lon}) => {
    const response = await fetch(`${BASE_URL}lat=${lat}&lon=${lon}&units=metric&appid={API key}`)
    const data = await response.json()
    return data.results
}

export const getWeatherDetailsSearch = async ()