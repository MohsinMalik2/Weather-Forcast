
import React, { useState } from 'react';
import './App.css';
import '../src/asset/style/index.css'
import '../src/asset/style/style.css'

const api = {
  key : process.env.REACT_APP_WEATHER_API , 
  baseUrl: "https://api.openweathermap.org/data/2.5/"
}



function App() {

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  const dateSet= (d) => {
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return  ` ${day} , ${date} ${month} ${year}` 
  }
  return (
    <div className="App">
      <main className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'sec' : '') : ''}>
          <h1> Weather Forecast </h1>

          <div className="body">
              <div className="searchBody">
                  <input type="search" placeholder='Search Location .....'   onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
              </div>
              {(typeof weather.main != "undefined") ? (
              <div className="Display">
                  <h4 className='searchedLocation'>
                      {weather.name}, {weather.sys.country}
                  </h4>
                  <h3 className='datePresent'>{dateSet(new Date())} </h3>
               
                    <span className='degrees'>
                      {Math.round(weather.main.temp)}°C
                    </span>
           
                  
                  <p className='dayStatus'>{weather.weather[0].main}</p>

              </div>
               ) : ('')}
          </div>
      </main>
        
    </div>
  );
}

export default App;
