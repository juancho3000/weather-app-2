import { useState } from "react";

const API_KEY = "fcf989ca6812a03a6612f1f228806100";
//const API_URL = 'http://api.openweathermap.org/data/2.5';

const WeatherFetch = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt =>{
        if(evt.key === "Enter"){
            fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            )
            .then((res)=>res.json())
            .then(result => {
             setWeather(result);
             setCity('');
             console.log(result);
            })
         }
        
    };
    return(
        <div>
            <div className='input'>
            <input type="text" name="city" placeholder="enter name"
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={search}
            />
            <button onClick={search}>click here</button>
          </div>
          <div>
            {(typeof weather.main != "undefined") ?( 
                <div className='temperature-results'>
                <h3>{weather.name},{weather.sys.country}</h3>
                <h3>normal weather</h3>
            <div className='degree'>
                    <h1>32 C</h1>
                </div>
                </div>   
            ) : ('')}    
         </div>
        </div>
    )
};

export default WeatherFetch;