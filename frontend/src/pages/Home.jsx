import WeatherNode from "../components/WeatherNode";
import MainWeather from "../components/MainWeather";

import "../css/Home.css"

function Home() {
  const days = [];

  return (
    <div className="home">
      <div className="main">
        <MainWeather
          weather={{
            icon: 23,
            type: "cloudy",
            temp: 23,
            prec: 20,
            humidity: 0.8,
            windSpeed: 12,
            uv: 0.3,
          }}
        />
      </div>
      <div className="daily">
        {days.map((day) => (
          <WeatherNode weather = {day} key = {day.date} />
        ))}
      </div>
    </div>
  );
}

export default Home;
