import { fetchWeather } from '../api.js'

export async function getWeather(location) { 
    const weather = await fetchWeather(location)
    console.log(weather)
    return weather
}

