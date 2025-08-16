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
  const [minutes, setMinutes] = useState([]);

  useEffect(() => {
    updateWeather();
    const interval = setInterval(updateWeather, 3600000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateDate();
  }, [minutes]);

  const updateWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const weather = await getUserWeather();
      setWeather(weather);
      setCurrent(weather.current);
      setHours(weather.hourly);
      setDays(weather.daily);
      setMinutes(weather.minutely);
    } catch (err) {
      setError("Failed to load Main Weather", err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateDate = () => {
    let increment = 0

    const interval = setInterval(() => {
      try{
        setCurrent(prev => ({ ...prev, dt: minutes[increment]?.dt }));
        increment++
      } catch(err){
        console.log(err)
      } finally {
        if (increment >= minutes.length) {
          clearInterval(interval)
        }
      }
    }, 60000)

    return () => clearInterval(interval)
  }

  const value = {
    weather,
    current,
    minutes,
    hours,
    days,
    error,
    loading,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
