import { fetchCountries } from '../api.js'


// export async function getRandomCountries (iterations) {
//     const countries = await fetchCountries()
//     const randomCountriesArray = []
    
//     countries.then((country) => {
//         const keysArray = Object.keys(country)

//         while(randomCountriesArray.length < iterations) {
//             const randomIndex = Math.floor(Math.random() * keysArray.length)
//             const randomKey = keysArray[randomIndex]
//             const randomCountry = country[randomKey]
            
//             if(!randomCountriesArray.includes(randomCountry)) {
//                 randomCountriesArray.push(randomCountry)
//             }
//         }
//     })
//     return randomCountriesArray;
// }

export async function drawRandomCountry () {
    const countries = await fetchCountries()

        const keysArray = Object.keys(countries)
        const randomIndex = Math.floor(Math.random() * keysArray.length)
        const randomKey = keysArray[randomIndex]
        const randomCountry = countries[randomKey]
        const country = randomCountry

    return country
}   

