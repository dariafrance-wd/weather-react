import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span id="temperature">
          {Math.round(props.celsius)}
          <span className="units">
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span id="temperature">
          {Math.round(fahrenheit)}
          <span className="units">
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
            <span className="unitsF">|°F</span>
          </span>
        </span>
      </div>
    );
  }
}
