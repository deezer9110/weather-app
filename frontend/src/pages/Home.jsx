import WeatherNode from "../components/WeatherNode";
import MainWeather from "../components/MainWeather";

import "../css/Home.css";

function Home() {
  const days = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  return (
    <div className="home">
      <div className="main">
        <MainWeather
          weather={{
            icon: 23,
            type: "CLOUDY",
            temp: 23,
            prec: 20,
            humidity: 80,
            windSpeed: 12,
            uv: 0.3,
          }}
        />
      </div>
      <div className="daily">
        {days.map((day) => (
          <WeatherNode weather={day} key={day.date} />
        ))}
      </div>
    </div>
  );
}

export default Home;
