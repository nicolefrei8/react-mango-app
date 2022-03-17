import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "./WeatherInfo.css";

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
      <div className="row IconWeather">
        <div className="col-6">
          <WeatherIcon
            code={props.data.weatherIcon}
            size="50"
            className="LargeIcon"
          />
          <span className="WeatherTemperature">
            <Temperature celsius={props.data.temperature} />
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
