import { LineChart, Line, XAxis, YAxis, Bar } from "recharts"
import { useWeatherContext } from "../contexts/WeatherContext";
import "../css/TempGraph.css";

function TempGraph() {

  const { hours } = useWeatherContext();

  return <div className="temp-graph">
    <LineChart width={600} height={500} data={hours}> 
      <Line type="monotone" dataKey="temp" stroke="#8884d8" />
      <Bar dataKey="uvi" />
      <XAxis dataKey="dt" />
      <YAxis dataKey="temp" />
    </LineChart>
  </div>;
}

export default TempGraph;
