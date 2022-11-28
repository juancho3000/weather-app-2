import './App.css';
import React from 'react';
import WeatherFetch from './components/weather-fetch';

function App() {

  return (
    <section className='app-container'>
      <div className="App">
        <h1>Weather app</h1>
        <div className='overlay'>
          <div className='container'>
            <WeatherFetch/>
        </div>
        </div>
    </div>
    </section>
  );
}

export default App;
