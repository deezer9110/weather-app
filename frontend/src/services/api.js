const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`

export const getWeatherDetails = async({lat}, {lon}) => {
    const response = await fetch(`${BASE_URL}lat=${lat}&lon=${lon}&units=metric&appid={API key}`)
    const data = await resopnse.json()
    return data.results
}