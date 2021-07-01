import { useState } from 'react'
import './App.css';
import Form from './components/Form'
import WeatherDisplay from './components/WeatherDisplay'

function App() {

  const apiKey = "63141b67f040b24594bd809982cd9433"



  const [weather, setWeather] = useState(null)



  const getWeather = async (searchTerm) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${searchTerm},us&units=imperial&appid=${apiKey}`)
    const data = await response.json()



    setWeather(data)
  }

  const style = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center"
  }

  return (
    <div className="App" style={style}>
      <div><Form zipsearch={getWeather} /></div>
      <div>< WeatherDisplay weather={weather} /></div>
    </div>
  );
}

export default App;