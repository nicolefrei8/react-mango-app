import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.weatherIcon} alt="sunny" />
          <span className="WeatherTemperature">
            <span className="temperature">{props.data.temperature}</span>
            <span className="unit">°C</span>
          </span>
        </div>

        <div className="col-6 weatherInfo">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </div>
      </div>{" "}
    </div>
  );
}
