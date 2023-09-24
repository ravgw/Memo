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

