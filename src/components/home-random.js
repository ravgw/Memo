import { drawRandomCountry} from '../api/api-utilities/country.js'
import { getWeather } from '../api/api-utilities/weather.js'

export async function embedHomeRandomCountry() {

    const randomCountry = await drawRandomCountry()
    const weather = await getWeather(randomCountry.capital)

    embedCountryInfo(randomCountry)
    embedWeatherInfo(weather)
}

// function getRandomInfo (country) {
//   const keys = Object.keys(country);
//   const randomKey = keys[Math.floor(Math.random() * keys.length)];
//   const randomValue = country[randomKey];

//   return { key: randomKey, value: randomValue };
// }


function embedCountryInfo (country) {
  const nameTag = document.querySelector('.home-random_nametag')
  const capital = document.querySelector('.home-random_capital')
  const flag = document.querySelector('.home-random_flag')

  nameTag.innerText = country.name.common
  capital.innerText = country.capital
  flag.src = country.flags.png
}

function embedWeatherInfo (weather) {
  const conIcon = document.querySelector('.weather-condition_icon')
  const conText = document.querySelector('.weather-condition_text')
  const conTemp = document.querySelector('.weather-condition_temperature')
  const localTime = document.querySelector('.home-random_local-time')


  conTemp.innerHTML = `${weather.current.temp_c} &#176;C`
  localTime.innerText = weather.location.localtime
  conText.innerText = weather.current.condition.text
  conIcon.src = weather.current.condition.icon
}

