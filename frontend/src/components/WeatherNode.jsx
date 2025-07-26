

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
                <h3>Precipitation: {weather.prec}</h3>
            </div>
        </div>
    )
}

export default WeatherNode