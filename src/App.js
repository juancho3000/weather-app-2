import './App.css';
import React from 'react';



function App() {

  //const API_KEY = "fcf989ca6812a03a6612f1f228806100";
  //const API_BASE_URL = 'http://api.openweathermap.org/';
  //const link = "api.openweathermap.org/data/2.5/forecast?q=London,us&appid={API_KEY}";
  
  return (
    <section className='app-container'>
      <div className="App">
        <h1>Weather app</h1>
        <div className='overlay'>
          <div className='container'>
            <div className='input'>
              <input type="text" name="city" placeholder="entername"/>
              <button>temeprature</button>
            </div>
            <div className='temperature-results'>
              <h3>City, country</h3>
              <img src="descarga.jpg" alt='background'/>
              <h3>normal weather</h3>
            </div>
            <div className='degree'>
              <h1>32 C</h1>
            </div>
          </div>
        </div>
    </div>
    </section>
  );
}

export default App;
