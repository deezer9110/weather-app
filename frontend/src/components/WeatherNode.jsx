import "../css/WeatherNode.css"

function WeatherNode({weather}) {


    return (
        <div className="node-weather-details">
            <div className="weather-icon node-weather-col">
                <h3>{weather.date}DAY, yyyy/mm/dd</h3>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" alt={weather.type} />
            </div>
            <div className="node-weather-info node-weather-col">
                <h4>{weather.type}Cloudy</h4>
                <h4>{weather.temp}°C</h4>
                <h5>Precipitation: {weather.prec}%</h5>
                <h5>UV: </h5>
                <h5>Wind: kmh</h5>
                <h5>Humidity: %</h5>
            </div>
        </div>
    )
}

export default WeatherNode