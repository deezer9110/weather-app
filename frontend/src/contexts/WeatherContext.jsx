import { createContext, useState, useContext, useEffect } from "react";
import { getUserWeather } from "../services/weaApi";
import { getDate } from "../services/generalApi";

const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [current, setCurrent] = useState(null);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentDt, setDt] = useState(null);

  useEffect(() => {
    updateWeather();
    const interval = setInterval(updateWeather, 300000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    currentDt = updateDate();
    const interval = setInterval(updateDate, 60000)
    return () => clearInterval(interval)
  })

  const updateWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const weather = await getUserWeather();
      setWeather(weather);
      setCurrent(weather.current);
      setHours(weather.hourly);
      setDays(weather.daily);
      setDt(getDate(current.dt));
      console.log(currentDt)
    } catch (err) {
      setError("Failed to load Main Weather", err.message);
    } finally {
      setLoading(false);
    }
  };

  updateDate() = () => {
    let date = new Date(currentDt)
    date.setMinutes(date.getMinutes() + 1);
    options = {
      weekday: 'Short',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }
    return date.toLocaleString("en-GB", options)
  }

  const value = {
    weather,
    current,
    hours,
    days,
    error,
    loading,
    currentDt
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
