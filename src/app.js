import { embedHomeRandomCountry }  from './components/home-random.js'
import { homeElements } from './home/home-elements.js'

embedHomeRandomCountry()
addButtonsListeners()

function addButtonsListeners () {

  document.querySelector('#btn-more_info').addEventListener('click', () => {
    currentDisplay.actionBar.hide()
  })
  
  document.querySelector('#btn-reload_country').addEventListener('click', () => {
    embedHomeRandomCountry()
  })
  
  document.querySelector('.back-button_section').addEventListener('click', () => {
    currentDisplay.actionBar.show()
  })
}

const currentDisplay = {
  elements: homeElements,
  actionBar: {
    show() {
      currentDisplay.elements.backButton.hide()
      currentDisplay.elements.nameTagSection.show()
      currentDisplay.elements.actionSection.show()

    },
    hide() {
      currentDisplay.elements.nameTagSection.hide()
      currentDisplay.elements.actionSection.hide()
      currentDisplay.elements.backButton.show()

    }
  }
}