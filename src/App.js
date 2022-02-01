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

  const dateSet= (d) => {
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return  ` ${day} , ${date} ${month} ${year}` 
  }
  return (
    <div className="App">
      <main className=''>
          <h1> Weather Forecast </h1>

          <div className="body">
              <div className="searchBody">
                  <input type="search" placeholder='Search Location .....' />
              </div>

              <div className="Display">
                  <h4 className='searchedLocation'>
                    Lahore, Pakistan
                  </h4>
                  <h3 className='datePresent'>{dateSet(new Date())} </h3>
               
                    <span className='degrees'>
                        15°
                    </span>
           
                  
                  <p className='dayStatus'>Sunny or Dusky</p>

              </div>
          </div>
      </main>
        
    </div>
  );
}

export default App;
