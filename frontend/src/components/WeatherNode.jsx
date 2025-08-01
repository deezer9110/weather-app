import "../css/WeatherNode.css";

function WeatherNode({ day }) {
  return (
    <div className="node-weather-details">
      <div className="weather-icon node-weather-col">
        <h3>{weather.dt}</h3>
        <img
          src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
          alt={weather.weather.main}
        />
      </div>
      <div className="node-weather-info node-weather-col">
        <h4>{day.weather.main}Cloudy</h4>
        <h4>{day.temp.day}°C</h4>
        <h5>Precipitation: {day.rain}%</h5>
        <h5>UV: {day.uvi}</h5>
        <h5>Wind: {day.wind_speed}kmh</h5>
        <h5>Humidity: {day.humidity}%</h5>
      </div>
    </div>
  );
}

export default WeatherNode;
