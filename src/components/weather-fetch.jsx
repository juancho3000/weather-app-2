const API_KEY = "fcf989ca6812a03a6612f1f228806100";
 //const API_BASE_URL = 'http://api.openweathermap.org/';

const WeatherFetch = async (city, units = 'metric') => {
 const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}&units=${units}`;

 const data = await fetch(API_URL).then((res) => res.json())
  .then((data) => data);
 console.log(data);

  const {weather, 
    main: { temp, feels_like},
    sys:{ country },
    name,
} = data;

const {description} = weather[0];

return(
description, temp, feels_like, country, name
);
};

export default WeatherFetch;