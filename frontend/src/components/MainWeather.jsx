import "../css/MainWeather.css";
import { getDateString } from "../services/generalApi";

function MainWeather({ current }) {
  return (
    <div className="main-weather">
      <div className="main-weather-icon main-weather-col">
        <img
          src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          alt={current.weather[0].main}
        />
      </div>
      <div className="main-weather-major main-weather-col">
        <h1>{current.weather[0].main}</h1>
        <h1>{current.temp}°C</h1>
        <p>{current.weather.description}</p>
      </div>
      <div className="main-weather-minor main-weather-col">
        <p>Precipitation: {current.humidity}%</p>
        <p>Humidity: {current.humidity}%</p>
        <p>Wind speed: {current.wind_speed}kmh</p>
        <p>Sunrise: {current?.sunrise ? getDateString(current.sunrise, true) : "N/A"}</p>
        <p>Sunset: {current?.sunset ? getDateString(current.sunset, true) : "N/A"}</p>
      </div>
    </div>
  );
}

export default MainWeather;
