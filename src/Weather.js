import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      weatherIcon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Body2">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="searchButton btn btn-primary w-100"
              />
            </div>{" "}
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            {" "}
            <FormatDate date={weatherData.date} />
          </li>
          <li className="text-capitalize"> {weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.weatherIcon} alt="sunny" />
            <span className="WeatherTemperature">
              <span className="temperature">{weatherData.temperature}</span>
              <span className="unit">°C</span>
            </span>
          </div>

          <div className="col-6 weatherInfo">
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </div>
        </div>{" "}
      </div>
    );
  } else {
    const apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
