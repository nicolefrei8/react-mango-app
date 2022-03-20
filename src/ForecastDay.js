import "./Forecast.css";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay"> {day()} </div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size="35"
        className="SmallIcon"
      />
      <div className="ForecastTemp">
        <span className="WeatherMax">{Math.round(props.data.temp.max)}⁰</span>
        <span className="WeatherMin">
          {Math.round(props.data.temp.min)}⁰
        </span>{" "}
      </div>
    </div>
  );
}
