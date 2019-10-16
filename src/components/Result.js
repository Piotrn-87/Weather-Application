import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Result = props => {
  const {
    date,
    city,
    country,
    sunrise,
    sunset,
    temp,
    maxTemp,
    minTemp,
    pressure,
    wind,
    error
  } = props.weather;

  let content = null;

  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <h1 className="Date"> {date} </h1>
        <h2 className="Localization">
          {" "}
          <FontAwesomeIcon
            className="Localization__icon"
            icon={faMapMarkerAlt}
          />
          {city}, {country}{" "}
        </h2>
        <h1> Aktualna temperatura: {temp} &#176;C</h1>
        <h4> Minimalna temperatura: {minTemp} &#176;C</h4>
        <h4> Maksymalna temperatura: {maxTemp} &#176;C</h4>
        <h4>Aktualne ciśnienie: {pressure} hpa</h4>
        <h4>Siła wiatru: {wind} m/s</h4>
        <h4>Wschód słońca: {sunriseTime}</h4>
        <h4>Zachód słońca: {sunsetTime}</h4>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="Result">
        {" "}
        {error ? `Brak w bazie: ${city}` : content}{" "}
      </div>{" "}
    </React.Fragment>
  );
};

export default Result;
