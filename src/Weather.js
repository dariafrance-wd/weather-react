import React from "react";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Warsaw",
    date: "Tuesday 10:00",
    desc: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 90,
    wind: 13,
  };
  return (
    <div className="Weather">
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autofocus="on"
              autocomplete="off"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-light w-100"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <p className="dayToday">Last updated: {weatherData.date}</p>
      <p className="desc">{weatherData.desc}</p>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={weatherData.imgUrl} alt={weatherData.desc} />
            <span className="weatherNow">
              <strong id="temperature"></strong>
              <span className="units">-1°C </span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="humWid">
            <ul>
              <li>
                <strong>
                  Humidity <span>{weatherData.humidity}</span>%
                </strong>
              </li>
              <li>
                <strong>
                  Wind <span>{weatherData.wind}</span> km/h
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
