import {useEffect, useState} from 'react'
import Form from './components/Form'
import WeatherDisplay from './components/WeatherDisplay'
import './App.css';




function App() {

  const apiKey= '28d16bb5f85ac24e3c1aef8d245dc35b'


    const [weather, setWeather]=useState(null)

    const getWeather = async(searchTerm)=>{
        
        const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?zip=99501,us&appid=${apiKey} ${searchTerm}`
        )

        const data = await response.json()

        setWeather(data)

    };

    useEffect(() => {getWeather('')},[])



  return (
    <div className="App">

      <Form weathersearch={getWeather} />
      <WeatherDisplay weather={weather} /> 
      
    </div>
  );
}

export default App;
