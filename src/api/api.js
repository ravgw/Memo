import { weatherKey } from '../keys.js'
const API_URL_ALL = "https://restcountries.com/v3.1/all";

export const fetchCountries = async () => {
    const response = await fetch(API_URL_ALL)
    const countriesJSON = await response.json()
    return countriesJSON;
} 



export const fetchWeather = async (location) => {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${location}&days=1&aqi=no&alerts=no`)
    const weatherJSON = await response.json()
    return weatherJSON;
} 
