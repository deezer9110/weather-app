import "../css/WeatherNode.css";
import { getDateString } from "../services/generalApi";

function WeatherNode({ day }) {

  return (
    <div className="node-weather-details">
      <div className="weather-icon node-weather-col">
        <h3>{day?.dt ? getDateString(day.dt) : ""}</h3>
        <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt={day?.dt ? getDateString(day.dt) : ""}
        />
      </div>
      <div className="node-weather-info node-weather-col">
        <h4>{day.weather[0].main}</h4>
        <h4>{day.temp.day}°C</h4>
        <h5>Precipitation: {day.pop * 100}%</h5>
        <h5>UV: {day.uvi}</h5>
        <h5>Wind: {day.wind_speed}kmh</h5>
        <h5>Humidity: {day.humidity}%</h5>
      </div>
    </div>
  );
}

export default WeatherNode;
