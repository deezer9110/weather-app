const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/3.0/onecall?`

export const getWeatherDetails = async(lat, lon) => {

    if (lat < -90 || lat > 90) {
        console.log("Invalid lat")
        return null;
    } else if (lon < -180 || lon > 180) {
        console.log("Invalid lon")
        return null;
    }

    const url = `${BASE_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`

    try {
    const response = await fetch('/examplecall.json');

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export const getWeatherDetailsSearch = async() => {

}