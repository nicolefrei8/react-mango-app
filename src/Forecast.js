import axios from "axios";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  function handleResponse(response) {}
  console.log(props);
  let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay"> Wed </div>
          <WeatherIcon code="01d" size="35" className="SmallIcon" />
          <div className="ForecastTemp">
            <span className="WeatherMax">13⁰</span>
            <span className="WeatherMin">10⁰</span>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
