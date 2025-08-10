import { useState, useEffect } from "react";

import WeatherNode from "../components/WeatherNode";
import MainWeather from "../components/MainWeather";
import TempGraph from "../components/TempGraph";
import { useWeatherContext } from "../contexts/WeatherContext";

import "../css/Home.css";

function Home() {
  const { weather, current, days, hours, error, loading } = useWeatherContext();

  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="main">
            <MainWeather current={current} />
            <TempGraph hours={hours} />
          </div>

          <div className="daily">
            {days.map((day) => (
              <WeatherNode day={day} key={day.dt} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
