import React, { Component } from 'react';
import './WeatherApp.css';
import WeatherContent from "./WeatherContent";


// const weatherImages = {
//   cloudy: ""
// }

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      city: "",
      temp: "",
      weatherIcon: "",
      condition: "",
      error: ""
    }
  }

  getGeolocation() {
    //check if browser support HTML geolocation 
    console.log(navigator.geolocation)
    if(navigator.geolocation) {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);

        function showPosition(position) {
          let coords = {};
          coords.latitude = position.coords.latitude;
          coords.longitude = position.coords.longitude;
  
          resolve(coords);
        }

        function showError(error) {
          reject(new Error('ERROR(' + error.code + '): ' + error.message));
        }
      })
    } else {

      return new Promise((reject) => {
        reject(new Error("Geolocation is   not supported by this browser."));
      });
    }
  
  }

  getWeatherData() {
    
    this.getGeolocation()
      .then(coords => {
        fetch(`https://fcc-weather-api.glitch.me//api/current?lon=${coords.longitude}&lat=${coords.latitude}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
           this.setState({
             country: data.sys.country,
             city: data.name,
             temp: data.main.temp,
             weatherIcon: data.weather[0].icon,
             condition: data.weather[0].main
           })
          })
      }, error => this.setState({
        error: error
      }))
  }

  componentDidMount() {

    this.getWeatherData();

    this.timerId = setInterval(() => this.getWeatherData, (10 * 60 * 1000));
  }

  componentWillUnmount() {
    clearInterval(this.timerId); 
  }

  render() {
    const error = (this.state.error).toString();

    if(!error) {
      return (
        <div className="app-container">
          <header className="app__header">
           <h1 className="app__title">Weather App</h1>
          </header>
          <main>
            <WeatherContent data={this.state}/>
          </main>
        </div>
      );
    } else {
      return (
        <div className="error">
          <h1 className="error__title">{error}</h1>
        </div>
      )
    }
    
  }
}

export default WeatherApp;
