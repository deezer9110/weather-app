import { useState, useEffect } from "react";

import WeatherNode from "../components/WeatherNode";
import MainWeather from "../components/MainWeather";
import TempGraph from "../components/TempGraph";
// import { getWeatherDetails } from "../services/weaApi";
import { getUserWeather } from "../services/weaApi";

import "../css/Home.css";

function Home() {
  const [current, setCurrent] = useState([]);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const weather = await getUserWeather();
        setCurrent(weather.current);
        setHours(weather.hourly);
        setDays(weather.daily);
      } catch (err) {
        console.log(err);
        setError("Failed to load Main Weather");
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, []);

  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="main">
            <MainWeather current={current} />
            <TempGraph />
          </div>

          <div className="daily">
            {
            days.map((day) => (
              <WeatherNode day={day} key={day.dt} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
