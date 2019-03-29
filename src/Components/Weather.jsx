import React, { Component } from 'react';
import './Weather.css';
import WeatherContent from "./WeatherContent";


class App extends Component {
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

export default App;
