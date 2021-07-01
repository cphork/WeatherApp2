import React from 'react'

const WeatherDisplay = ({ weather }) => {
    const loaded = () => {

        const mainweather = Math.floor(weather.main.temp)
        const minweather = Math.floor(weather.main.temp_min)
        const maxweather = Math.floor(weather.main.temp_max)

        let tempcolor;
        if (mainweather > 90) {
            tempcolor = "red"
        }
        else if (mainweather < 40) {
            tempcolor = "blue"
        } else {
            tempcolor = "black"
        }

        const style = {
            display: "flex",
            justifyContent: "space-around"

        }

        return (


            <div>
                <hr />
                <h5>{weather.name}</h5>
                <h4>Today's weather: <br />{weather.weather[0].main}</h4>
                <h1>{mainweather}</h1>
                <div className='min-max'>
                    <div>
                        <h5>Min</h5>
                        <h3>{minweather} </h3>
                    </div>
                    <div>
                        <h5>Max</h5>
                        <h3>{maxweather}</h3>
                    </div>
                </div>
            </div>
        )
    }

    const loading = () => {
        return (
            <p>No weather to display</p>
        )
    }

    return weather ? loaded() : loading()
}

export default WeatherDisplay