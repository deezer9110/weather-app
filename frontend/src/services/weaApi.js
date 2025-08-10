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
    // const response = await fetch('/examplecall.json');
    const response = await fetch(url);

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


export const getPosition = async () => {
  return new Promise ((resolve, reject) => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position), 
        (error) => reject(new Error("Couldn't get location")))
    } else {
      reject("Did not get permission to use geolocation")
    }
  })
}

export const getUserWeather = async () => {
  try {
  const position = await getPosition();
  return await getWeatherDetails(position.coords.latitude, position.coords.longitude)
  } catch(err){
    alert(err)
    return null
  } 
} 

export const getWeatherDetailsSearch = async() => {

}