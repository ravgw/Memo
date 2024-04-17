import { drawRandomCountry} from '../api/country.js'
import { getWeather } from '../api/weather.js'
import { reloadCountryElements } from '../home/home-elements.js'

export async function loadNewCountry() {

  const country = await drawRandomCountry()
  const weather = await getWeather(country.capital)
  const elements = reloadCountryElements

// country info
console.log(country)
  elements.countryNameTag.element.innerText = country.name.common
  elements.capitalNameTag.element.innerText = country.capital ?? 'Radom'
  elements.flag.element.src = country.flags.png
// weather info
  elements.weatherTemp.element.innerHTML = weather.temp
  elements.capitalLocalTime.element.innerText = weather.time
  elements.weatherText.element.innerText = weather.conditions
  elements.weatherIcon.element.src = weather.icon

  for ( const element of Object.values(reloadCountryElements)) {
    element.show()
  }
}