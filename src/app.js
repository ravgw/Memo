import { embedHomeRandomCountry }  from './components/home-random.js'

embedHomeRandomCountry()

document.querySelector('#btn-reload_country').addEventListener('click', () => {
    embedHomeRandomCountry()
  })