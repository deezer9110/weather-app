import { createContext, useState, useContext, useEffect } from "react";
import { getUserWeather } from "../services/weaApi";

const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [current, setCurrent] = useState(null);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateWeather();
    const interval = setInterval(updateWeather, 300000);
    return () => clearInterval(interval);
  }, []);

  const updateWeather = async () => {
    setLoading(true)
    setError(null)
    try {
      const weather = await getUserWeather();
      setWeather(weather);
      setCurrent(weather.current);
      setHours(weather.hourly);
      setDays(weather.daily);
    } catch (err) {
      setError("Failed to load Main Weather", err.message)
    } finally {
        setLoading(false);
    }
  };

  const value = {
    weather,
    current,
    hours,
    days,
    error,
    loading
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
