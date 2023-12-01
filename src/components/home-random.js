import { drawRandomCountry} from '../api/api-utilities/country.js'
import { getWeather } from '../api/api-utilities/weather.js'
import { reloadCountryElements } from '../home/home-elements.js'

export async function loadNewCountry() {

  const country = await drawRandomCountry()
  const weather = await getWeather(country.capital)
  const elements = reloadCountryElements

// country info
  elements.countryNameTag.element.innerText = country.name.common
  elements.capitalNameTag.element.innerText = country.capital
  elements.flag.element.src = country.flags.png
// weather info
  elements.weatherTemp.element.innerHTML = `${weather.current.temp_c} &#176;C`
  elements.capitalLocalTime.element.innerText = weather.location.localtime
  elements.weatherText.element.innerText = weather.current.condition.text
  elements.weatherIcon.element.src = weather.current.condition.icon

  for ( const element of Object.values(reloadCountryElements)) {
    element.show()
  }
}

