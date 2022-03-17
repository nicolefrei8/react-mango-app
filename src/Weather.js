import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      weatherIcon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function Search() {
    const apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSumbit(event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Body2">
        <form onSubmit={handleSumbit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} className="TempDetails" />
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
