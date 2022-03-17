import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
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
