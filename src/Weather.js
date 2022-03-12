import "./Weather.css";

export default function Weather() {
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
      <h1>Melbourne</h1>
      <ul>
        <li> Wednesday 07:00</li>
        <li> Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          <span className="WeatherTemperature">
            <span className="temperature">7</span>
            <span className="unit">°C</span>
          </span>
        </div>

        <div className="col-6">
          <li>Humidity: 88%</li>
          <li>Wind: 88 km/h</li>
        </div>
      </div>{" "}
    </div>
  );
}
