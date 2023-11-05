import { embedHomeRandomCountry }  from './components/home-random.js'
import { hideAction, showAction } from './components/home-action-buttons.js'

embedHomeRandomCountry()

document.querySelector('#btn-reload_country').addEventListener('click', () => {
    embedHomeRandomCountry()
  })


document.querySelector('#btn-more_info').addEventListener('click', () => {
  hideAction()
})

document.querySelector('.back-button_section img').addEventListener('click', () => {
  showAction()
})