import { fetchCountries } from '../api.js'


export async function drawRandomCountry () {
    const countries = await fetchCountries()

        const keysArray = Object.keys(countries)
        const randomIndex = Math.floor(Math.random() * keysArray.length)
        const randomKey = keysArray[randomIndex]
        const randomCountry = countries[randomKey]
        const country = randomCountry
        currentRandomCounrty = country

    return country
}   

export let currentRandomCounrty
