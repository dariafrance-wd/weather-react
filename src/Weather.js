import React from "react";
import "./Weather.css";
import "./App.css";
import axios from "axios";

export default function Weather() {
  const apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let city = "Kyiv";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?weather?q=${city}&appid=${apiKey}&units=metric`;
  let weatherData = {
    city: "Kyiv",
    date: "Tuesday 10:00",
    desc: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/02d@2x.png",
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
              <strong id="temperature">-1</strong>
              <span className="units">°C</span>
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
