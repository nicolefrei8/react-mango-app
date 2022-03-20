import React from "react";
import "./Temperature.css";
export default function Temperature(props) {
  return (
    <span>
      <span className="temperature">{props.celsius}</span>
      <span className="unit">°C</span>
    </span>
  );
}
