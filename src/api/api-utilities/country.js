import { fetchCountries } from '../api.js'


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

export async function drawRandomCountry () {
    const countries = getCountries
    
    return countries.then((res) => {
        const keysArray = Object.keys(res)
        const randomIndex = Math.floor(Math.random() * keysArray.length)
        const randomKey = keysArray[randomIndex]
        const randomCountry = res[randomKey]
        return randomCountry
    });

}   

