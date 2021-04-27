import React from 'react'




const WeatherDisplay = ({weather}) => {

        const loaded = () => {

            return (
                
                <div>
                <h4 className="app-title">Weather App</h4>
                <p>{weather.name}</p>
                <p>{weather.weather.main}</p>
                <p>{weather.weather.icon}</p>
                <p>{weather.weather.description}</p>
                <p>{weather.main.temp}</p>
                <p>{weather.main.temp_min}</p>
                <p>{weather.main.temp_max}</p>

                </div>
            
            )
        }

   const loading = ()=> {
        return <h1>No Zip Code</h1>
   } 
    return (loaded < 40 ) ? 'blue' : ((loading > 90) ? 'red': '')  
}



export default WeatherDisplay