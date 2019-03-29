import React from "react";

const WeatherContent = () => {
  return (
    <div className="weather-box">
      <p className="weather-box__location">
        <span className="city"></span>
        <span className="country"></span>
      </p>
      <p>
        <span className="temp">12.5</span>
        <span className="temp-sign">°C</span>
      </p>
      <p className="weather-box__condition">Clear</p>
      <div className="weather-box__status-icon">
      </div>
    </div>
  )
}

export default WeatherContent;