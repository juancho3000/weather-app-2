import './App.css';
import React, { useEffect } from 'react';
import WeatherFetch from './components/weather-fetch';
import Outcome from './components/outcome';

function App() {


  useEffect(() =>{
    const getData = async () => {
      const data = await WeatherFetch('paris');
      console.log(data);
    };
    getData();
  }, [])
 
  return (
    <section className='app-container'>
      <div className="App">
        <h1>Weather app</h1>
        <div className='overlay'>

          <div className='container'>
          <div className='input'>
            <input type="text" name="city" placeholder="enter name"/>
            <button>click here</button>
          
          </div>
          <div><Outcome/></div>
        </div>
        
        </div>
    </div>
    </section>
  );
}

export default App;
