import { getRandomCountries } from '../api/api-utils.js'

export function getRandomCountryInfo() {
    const flag = document.querySelector('.home-random_flag')
    const nameTag = document.querySelector('.home-random_nametag')

    const country = new Promise((resolve) => {
      const country = getRandomCountries(1)
      console.log(country)
      return country
    })


}