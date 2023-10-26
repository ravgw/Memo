import { fetchWeather } from '../api.js'

export function getWeather (location) { 
    return new Promise((resolve,reject) => {
        const data = fetchWeather(location)
        resolve(data)
    })

}