import { weatherKey } from '../keys.js'
const API_URL_ALL = "https://restcountries.com/v3.1/all";

export const fetchCountries = async () => {
    const response = await fetch(API_URL_ALL)
    const countriesJSON = await response.json()
    // ---------------------------CONSOLE LOG FETCH ELEMENTS
    // let counter = 0
    // countriesJSON.forEach(element => {
    //     console.log(element)
    //     counter++
    // })
    // console.log(countriesJSON)
    // -----------------------------------------------
    return countriesJSON;
} 



export const fetchWeather = async () => {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=Warsaw&days=1&aqi=no&alerts=no`)
    const weatherJSON = await response.json()
    // ---------------------------CONSOLE LOG FETCH ELEMENTS
    // let counter = 0
    // weatherJSON.forEach(element => {
    //     console.log(element)
    //     counter++
    // })
    // console.log(weatherJSON)
    // -----------------------------------------------
    return weatherJSON;
} 
