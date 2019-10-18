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
    const firstLetterUppercase = e => {
      return e.charAt(0).toUpperCase() + e.slice(1);
    };
    content = (
      <div className="Content">
        <h4 className="Content__description">Updated:</h4>
        <h1 className="Content__date"> {date} </h1>
        <h2 className="Content__localization">
          {" "}
          <FontAwesomeIcon className="Content__icon" icon={faMapMarkerAlt} />
          {city}, {country}{" "}
        </h2>
        <div className="ContentTemp">
          <h1 className="ContentTemp__temperature">{temp} &#176;C</h1>
          <span className="ContentTemp__min-max">
            <h4> Min temp: {minTemp} &#176;C</h4>
            <h4> Max temp: {maxTemp} &#176;C</h4>
          </span>
        </div>
        <h2>Pressure: {pressure} hpa</h2>
        <h2>Wind: {wind} m/s</h2>
        <h2>Sunrise: {sunriseTime}</h2>
        <h2>Sunset: {sunsetTime}</h2>
      </div>
    );
  }

  return (
    <React.Fragment>
      {" "}
      {error ? `Brak w bazie: ${city}` : content}{" "}
    </React.Fragment>
  );
};

export default Result;
