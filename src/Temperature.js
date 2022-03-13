import React, { useState } from "react";
export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function toFahr(event) {
    event.preventDefault();
    setUnit("far");
  }
  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrTemp() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          °C /
          <a href="toFahr" onClick={toFahr}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{fahrTemp()}</span>
        <span className="unit">
          <a href="toCelsius" onClick={toCelsius}>
            °C /
          </a>
          °F
        </span>
      </span>
    );
  }
}
