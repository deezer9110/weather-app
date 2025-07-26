function MainWeather({ weather }) {
  return (
    <div>
      <div className="weather-details">
        <div className="weather-icon">
          <img src={weather.icon} alt={weather.type} />
        </div>
        <div className="weather-text">
          <h3>{weather.type}</h3>
          <h3>{weather.temp}</h3>
          <p>Precipitation: {weather.prec}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.windSpeed}kmh</p>
          <p>UV: {weather.uv}</p>
        </div>
      </div>
      <div className="temp-graph">

      </div>
    </div>
  );
}

export default MainWeather;
