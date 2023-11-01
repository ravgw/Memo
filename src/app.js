import { embedHomeRandomCountry }  from './components/home-random.js'
import { hideReload } from './components/more-info.js'

embedHomeRandomCountry()

document.querySelector('#btn-reload_country').addEventListener('click', () => {
    embedHomeRandomCountry()
  })


document.querySelector('#btn-more_info').addEventListener('click', () => {
  hideReload()
})