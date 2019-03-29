import React, { Component } from 'react';
import './WeatherApp.css';
import WeatherContent from "./WeatherContent";


class WeatherApp extends Component {
  render() {
    return (
      <div className="app-container app">
        <header className="app__header">
         <h1 className="app__title"></h1>
        </header>
        <main>
          <WeatherContent />
        </main>
      </div>
    );
  }
}

export default WeatherApp;
