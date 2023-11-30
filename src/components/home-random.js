import { drawRandomCountry} from '../api/api-utilities/country.js'
import { getWeather } from '../api/api-utilities/weather.js'

export async function embedHomeRandomCountry(callback) {

    const randomCountry = await drawRandomCountry()
    const weather = await getWeather(randomCountry.capital)

    embedCountryInfo(randomCountry)
    embedWeatherInfo(weather)

    if (typeof callback === 'function') {
      callback()
      console.log('guv')
    }
}



function embedCountryInfo (country) {
  const nameTag = document.querySelector('.home-random_nametag')
  const capital = document.querySelector('.home-random_capital')
  const flag = document.querySelector('.home-random_flag')

  nameTag.innerText = country.name.common
  capital.innerText = country.capital
  flag.src = country.flags.png

  const arr = [
    nameTag,
    capital,
    flag
  ]

  arr.forEach((e) => {
    e.classList.add('reload-element')
    e.classList.remove('animationHideByScale')
    e.classList.add('animationShowByScale')
  })
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

  const container = document.querySelector('.weather-condition_container')
  container.classList.add('reload-element')
  container.classList.remove('animationHideByScale')
  container.classList.add('animationShowByScale')
  localTime.classList.add('reload-element')
  localTime.classList.remove('animationHideByScale')
  localTime.classList.add('animationShowByScale')
}

