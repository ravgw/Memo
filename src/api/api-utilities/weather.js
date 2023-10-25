import { fetchWeather } from '../api.js'

export function getWeather (location) {
    
    new Promise((resolve,reject) => {
        const data = fetchWeather(location)
        resolve(data)
    })
    .then((res) => {
    console.log(res)
})
}