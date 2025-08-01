import "../css/MainWeather.css";

function MainWeather({ current }) {
  return (
    <div className="main-weather">
      <div className="main-weather-details">
        <div className="main-weather-icon main-weather-col">
          <img
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt={current.weather[0].main}
          />
        </div>
        <div className="main-weather-major main-weather-col">
          <h1>{current.weather.main}</h1>
          <h1>{current.temp}°C</h1>
          <div className="temperature-details">
            <h2>Feels like: {current.feels_like}°C</h2>
            <div>{current.weather.description}</div>
          </div>
        </div>
        <div className="main-weather-minor main-weather-col">
          <p>Precipitation: {current.humidity}%</p>
          <p>Humidity: {current.humidity}%</p>
          <p>Wind speed: {current.wind_speed}kmh</p>
          <p>Sunrise: {current.sunrise}</p>
          <p>Sunset: {current.sunset}</p>
        </div>
      </div>
    </div>
  );
}

export default MainWeather;
