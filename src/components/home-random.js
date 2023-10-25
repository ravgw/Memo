import { getRandomCountry } from '../api/api-utilities/country.js'
import { getWeather } from '../api/api-utilities/weather.js'

export function getRandomCountryInfo() {
    const flag = document.querySelector('.home-random_flag')
    const nameTag = document.querySelector('.home-random_nametag')
    const infoDiv = document.querySelector('.home-random_random-info')

    const country = new Promise((resolve) => {
      const randomCountry = getRandomCountry()
      resolve(randomCountry)
    }) 
    
    country.then((randomCountry) => {
      console.log(randomCountry)
      nameTag.innerText = randomCountry.name.common
      flag.src = randomCountry.flags.png

      const info = getRandomInfo(randomCountry)
      if (validatingInfo(info)) {
      }
      infoDiv.innerText = `${info.key} : ${info.value}`
      getWeather(randomCountry.capital)
    })


}

function getRandomInfo (country) {
  const keys = Object.keys(country);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const randomValue = country[randomKey];

  return { key: randomKey, value: randomValue };
}

function validatingInfo (countryInfo) {
  if ( countryInfo.key === 'capital') {
    return true
  } else {
    return false
  }
}