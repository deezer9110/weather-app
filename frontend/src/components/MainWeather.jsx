import "../css/MainWeather.css";

function MainWeather({ weather }) {
  return (
    <div className="main-weather">
      <div className="main-weather-details">
        <div className="main-weather-icon main-weather-col">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt={weather.type}
          />
        </div>
        <div className="main-weather-major main-weather-col">
          <h1>{weather.type}</h1>
          <h1>{weather.temp}°C</h1>
          <div className="temperature-details">
            <table>
              <tr>
                <h2>Feels like {weather.feelslike}°C</h2>
              </tr>
              <tr>
                <td>
                  <h3>↑{weather.high}°C</h3>
                </td>
                <td>
                  <h3>↓{weather.low}°C</h3>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="main-weather-minor main-weather-col">
          <p>Precipitation: {weather.prec}%</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind speed: {weather.windSpeed}kmh</p>
          <p>Sunrise: </p>
          <p>Sunset: </p>
        </div>
      </div>
      <div className="main-weather-temp-graph">ello</div>
    </div>
  );
}

export default MainWeather;
