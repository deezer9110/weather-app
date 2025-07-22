

function WeatherNode({weather}) {


    return (
        <div className="weather-node">
            <div className="weather-img">
                <h1>{weather.date}</h1>
                <img src={weather.icon} alt={weather.type} />
            </div>
            <div className="weather-info">
                <h3>{weather.type}</h3>
                <h3>{weather.temp}</h3>
                <p>Precipitation: {weather.prec}</p>
                <p>Humidity: {weather.humidity}%</p>
                <p>Wind Speed: {weather.windSpeed}kmh</p>
                <p>UV: {weather.UV}</p>
            </div>
        </div>
    )
}

export default WeatherNode