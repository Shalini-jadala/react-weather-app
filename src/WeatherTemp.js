import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(e) {
    e.preventDefault();
    setUnit("Fahrenheit");
  }

  function convertToCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  const temperatureValue =
    unit === "celsius" ? props.celsius : fahrenheit();

  const unitJSX =
    unit === "celsius" ? (
      <>
        °C | <a href="/" onClick={convertToFahrenheit} className="unitDec">°F</a>
      </>
    ) : (
      <>
        <a href="/" onClick={convertToCelsius} className="unitDec">°C</a> | °F
      </>
    );

  return (
    <span className="temperature">
      {Math.round(temperatureValue)}
      <span className="units">{unitJSX}</span>
    </span>
  );
}

