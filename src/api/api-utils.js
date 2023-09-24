import { fetchCountries } from './api.js'


export const getCountries = new Promise((resolve,reject) => {
    const countries = fetchCountries()
    resolve(countries)
})


export function getRandomCountries (countries, iterations) {
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