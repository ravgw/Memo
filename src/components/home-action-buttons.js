import { homeElements } from '../home/home-elements.js'
import { embedHomeRandomCountry } from './home-random.js'
import { embedCountryInfo } from '../home/country-info.js'


export function createDetailInfoBoard () {
  embedCountryInfo()
  
  const board = document.querySelector('.countryInfoBoard')
  
  homeElements.addElement('infoBoard', board,
  'animationSlideUp',
  'animationSlideDown',
  )
  
  board.addEventListener('animationend', (e) => {
    if(e.target.classList.contains('animationSlideDown')){
      currentDisplay.showStartInfoBoard()
    }
  })
  
    createDetailInfoBoard = showDetailInfoBoard
}

function showDetailInfoBoard () {
    embedCountryInfo()
    homeElements.infoBoard?.show()
}

export function addButtonsListeners () {

    document.querySelector('#btn-more_info').addEventListener('click', () => {
      currentDisplay.actionBar.hide()
      currentDisplay.elements.mainInfo.hide()
    })
    
    
    document.querySelector('#btn-reload_country').addEventListener('click', () => {
      reloadCountry()
    })
    
  document.querySelector('.back-button_section').addEventListener('click', () => {
    currentDisplay.actionBar.show()
    currentDisplay.elements.infoBoard.hide()
  })
}
  
document.querySelector('.home-random_main-info').addEventListener('animationend', (e) => {
  if(e.target.classList.contains('animationSlideDown')){
    currentDisplay.showDetailInfoBoard()
  }
})
   
function reloadCountry () {
  const reloadElemnts = document.querySelectorAll('.reload-element')

  document.querySelector('.reload-element').addEventListener('animationend', () => {
    embedHomeRandomCountry()
  }, {once:true})

  reloadElemnts.forEach((e) => {
    e.classList.add('animationHideByScale')
  })

}

function tester (cos) {
  cos.forEach((e) => {
    e.classList.remove('animationHideByScale')
    e.classList.add('animationShowByScale')
  })
}
export const currentDisplay = {
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
    },
    showDetailInfoBoard() {
      createDetailInfoBoard()
    },
    showStartInfoBoard() {
      currentDisplay.elements.mainInfo.show()
    }
  }
  

