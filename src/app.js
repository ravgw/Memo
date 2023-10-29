import { embedHomeRandomCountry }  from './components/home-random.js'
// import { getWeather }  from './api/api-utilities/weather.js'
// import { } from './components/navigation.js'

embedHomeRandomCountry()

document.querySelector('#btn-reload_country').addEventListener('click', () => {
    embedHomeRandomCountry()
  })