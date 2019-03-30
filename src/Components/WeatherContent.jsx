import React from "react";

const WeatherContent = ({data}) => {
  return (
    <div className="weather-box">
      <p className="weather-box__location">
        <span className="city">{data.city},</span>
        <span className="country">{data.country}</span>
      </p>
      <p>
        <span className="temp">{data.temp}</span>
        <span className="temp-sign">°C</span>
      </p>
      <p className="weather-box__condition">{data.condition}</p>
      <div className="weather-box__status-icon">
        <img src={data.weatherIcon} alt=""></img>
      </div>
    </div>
  )
}

export default WeatherContent;