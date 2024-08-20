import axios from "axios"
import { useEffect, useState } from "react"

const Weather = ({latlng}) => {
    const[weather, setWeather] = useState(null)
    const api_key = import.meta.env.VITE_WEATHER_API_KEY

    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${api_key}&units=metric`)
        .then(response => {
            setWeather(response.data)
        })
    }, [])

    if(!weather) {
        return null
    }

    return (
        <div>
            <div>temprature: {weather.main.temp} Celsius</div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <div> wind: {weather.wind.speed} meters/sec</div>
        </div>
    )
}

export default Weather