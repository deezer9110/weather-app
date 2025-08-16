import { LineChart, Line, XAxis, YAxis, Bar, Cell } from "recharts";
import { useWeatherContext } from "../contexts/WeatherContext";
import "../css/TempGraph.css";

function uvBarColour(uvi) {
  /* Colours:
  0-3 Green: #97D700
  3-6 Yellow: #FCE300
  6-8 Orange: #FF8200
  8-11 Red: #EF3340
  11+ Purple: #9063CD
  */

  if (uvi < 3) {
    return "#97D700";
  } else if (uvi < 6) {
    return "#FCE300";
  } else if (uvi < 8) {
    return "#FF8200";
  } else if (uvi < 11) {
    return "#EF3340";
  } else {
    return "#9063CD";
  }
}

function TempGraph() {
  const { hours } = useWeatherContext();

  return (
    <div className="temp-graph">
      <LineChart width={hours.length * 80} height={500} data={hours}>
        <Bar dataKey={() => 28} opacity={0.4}>
          {hours.map((hour) => (
            <Cell key={hour.dt} fill={uvBarColour(hour.uvi)} />
          ))}
        </Bar>
        <Line type="monotone" dataKey="temp" stroke="yellow" />
        <XAxis dataKey="dt" />
        <YAxis dataKey="temp" />
      </LineChart>
    </div>
  );
}

export default TempGraph;
