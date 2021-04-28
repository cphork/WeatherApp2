import React from 'react'




const WeatherDisplay = ({weather}) => {
    

        const loaded = () => {

            return (
                
                <div>
                <h4 className="app-title">Today's Weather</h4>
                <p>{weather.name}</p>
                <p>{weather.weather.main}</p>
                <p>{weather.weather.icon}</p>
                <p>{weather.weather.description}</p>
                <p>Today's Temp.:{weather.main.temp}</p>
                <p>Min. Temp.:{weather.main.temp_min}</p>
                <p>Max. Temp.:{weather.main.temp_max}</p>

                </div>
            
            )
        }

   const loading = ()=> {
        return <h1>No Zip Code</h1>
   } 
    // return (weather < 40 ) ? 'blue' : ((weather > 90) ? 'red': 'null' ) 
    // return (weather < 40 ) ? backgroundColor : 'blue' : (weather > 90 ) : backgroundColor: 'red'
    return weather ? loaded () : loading ()
 
}



export default WeatherDisplay