import { drawRandomCountry } from '../../utilities/countries/country.js'
import { getWeather } from '../../utilities/weather/weather.js'
import { reloadCountryElements } from '../../components/home-elements.js'
import { fetchCountries } from '../../../api/api.js'
import { getCountry } from '../../utilities/countries/select_country_info.js'

export async function loadNewCountry() {

  const country = await drawRandomCountry()
  const weather = await getWeather(country.capital)
  const elements = reloadCountryElements

// country info
// console.log(country)
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

// async function countriesList() {
//   try {
//     const list = await fetchCountries()
//     let i = 0
//     for ( const element of Object.values(list)) {
//       // console.log(i)
//       i++
//       // console.log(getCountry(element))
//     }
//   } catch (e) {
//     console.log(e)
//   }
// }
// countriesList()