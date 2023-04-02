import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p className="dayToday">
        <FormattedDate date={props.data.date} />
      </p>
      <p className="desc">{props.data.description}</p>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <span className="weatherNow">
              <strong id="temperature">
                {Math.round(props.data.temperature)}
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
                  Humidity <span>{props.data.humidity}</span>%
                </strong>
              </li>
              <li>
                <strong>
                  Wind <span>{props.data.wind}</span> km/h
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
