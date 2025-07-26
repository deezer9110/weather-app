import "../css/WeatherNode.css"

function WeatherNode({weather}) {


    return (
        <div className="node-weather-details">
            <div className="weather-icon">
                <h1>{weather.date}</h1>
                <img src={weather.icon} alt={weather.type} />
            </div>
            <div className="node-weather-info">
                <h3>{weather.type}</h3>
                <h3>{weather.temp}</h3>
                <h3>Precipitation: {weather.prec}</h3>
            </div>
        </div>
    )
}

export default WeatherNode