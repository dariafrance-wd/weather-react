import React, { useState } from "react";
import "./Weather.css";
import "./App.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: "Tuesday 10:00",
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/04d@2x.png",
    });
  }

  if (weatherData.ready) {
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
        <p className="dayToday">{weatherData.date}</p>
        <p className="desc">{weatherData.description}</p>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="weatherNow">
                <strong id="temperature">
                  {Math.round(weatherData.temperature)}
                  <span className="units">°C</span>
                </strong>
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
  } else {
    const apiKey = "2ff29bed3181c3526c35cc5408037f85";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
