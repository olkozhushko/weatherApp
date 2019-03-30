import React, { Component } from 'react';
import './WeatherApp.css';
import WeatherContent from "./WeatherContent";


class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      city: "",
      temp: "18",
      weatherIcon: "",
      condition: ""
    }
  }

  componentDidMount() {
    const self = this;

    (function () {

      getGeolocation()
        .then(coords => {
          fetch(`https://fcc-weather-api.glitch.me//api/current?lon=${coords.longitude}&lat=${coords.latitude}`)
            .then(res => res.json())
            .then(data => {
             self.setState({
               country: data.sys.country,
               city: data.name,
               temp: data.main.temp,
               weatherIcon: data.weather[0].icon,
               condition: data.weather[0].main
             })
            })
          return coords;
        })
        .catch(error => console.log(error));;
    })();
  }

  render() {
    return (
      <div className="app-container app">
        <header className="app__header">
         <h1 className="app__title">Weather App</h1>
        </header>
        <main>
          <WeatherContent data={this.state}/>
        </main>
      </div>
    );
  }
}

function getGeolocation() {
  //check if browser support HTML geolocation 
  if(navigator.geolocation) {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let coords = {};
        coords.latitude = position.coords.latitude;
        coords.longitude = position.coords.longitude;

        resolve(coords);
      });
    })
  } else {
    return new Promise((reject) => reject(new Error("Geolocation is not supported by this browser.")));
  }

}


export default WeatherApp;
