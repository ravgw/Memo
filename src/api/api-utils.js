import { fetchCountries, fetchWeather } from './api.js'


export const getCountries = new Promise((resolve,reject) => {
    const countries = fetchCountries()
    resolve(countries)
})

export function getRandomCountries (iterations) {
    const countries = getCountries
    const randomCountriesArray = []
    
    countries.then((res) => {
        const keysArray = Object.keys(res)

        
        while(randomCountriesArray.length < iterations) {
            const randomIndex = Math.floor(Math.random() * keysArray.length)
            const randomKey = keysArray[randomIndex]
            const randomCountry = res[randomKey]
            
            if(!randomCountriesArray.includes(randomCountry)) {
                randomCountriesArray.push(randomCountry)
            }
        }
    })
    return randomCountriesArray;
}

export async function getRandomCountry () {
    const countries = getCountries
    
    return countries.then((res) => {
        const keysArray = Object.keys(res)
        const randomIndex = Math.floor(Math.random() * keysArray.length)
        const randomKey = keysArray[randomIndex]
        const randomCountry = res[randomKey]
        // console.log(randomCountry)
        return randomCountry
    });

}   




export const getWeather = new Promise((resolve,reject) => {
    const countries = fetchWeather()
    resolve(countries)
})

export function getWarsawWeather () {
    const weat = getWeather
    weat.then((res) => {
        console.log(res)
        console.log('xd')
    })
}