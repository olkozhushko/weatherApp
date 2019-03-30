import React from "react";

const WeatherContent = ({data}) => {
  const date = new Date();
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="weather-box">
      <div className="weather-box__location">
        <span className="city">{data.city},</span>
        <span className="country">{data.country}</span>
      </div>
      <div className="weather-box__date">
        <p>{weekDays[date.getDay()]}, {date.getDate()}</p>
      </div>
      <div className="weather-box__temp">
        <span className="temp">{Math.round(data.temp)}</span>
        <span className="temp-sign">°C</span>
      </div>
      <div className="weather-box__condition">
        <p>{data.condition}</p>
        <img 
          src={data.weatherIcon} 
          alt="weather condition icon" 
          className="status-icon"/>
      </div>
    </div>
  )
}

export default WeatherContent;