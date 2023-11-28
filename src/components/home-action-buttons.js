import { homeElements } from '../home/home-elements.js'
import { embedCountryInfo } from '../home/country-info.js'


export function createDetailInfoBoard () {
    embedCountryInfo()

    const board = document.querySelector('.countryInfoBoard')

    homeElements.addElement('infoBoard', board,
    'animationSlideUp',
    'animationSlideDown',
    )

    board.addEventListener('animationend', () => {
        if(actionBar.detailInfoStatus){
            actionBar.show()
            console.log(actionBar.detailInfoStatus)
        } 
    })
    
    createDetailInfoBoard = showDetailInfoBoard
}

function showDetailInfoBoard () {
    homeElements.infoBoard?.show()
}

export function addButtonsListeners () {

    document.querySelector('#btn-more_info').addEventListener('click', () => {
      currentDisplay.actionBar.hide()
      currentDisplay.elements.mainInfo.hide()
    })
    
    document.querySelector('#btn-reload_country').addEventListener('click', () => {
      embedHomeRandomCountry()
    })
    
    document.querySelector('.back-button_section').addEventListener('click', () => {
      currentDisplay.actionBar.show()
    })
  }
  
  document.querySelector('.home-random_main-info').addEventListener('animationend', (e) => {
    if(e.target.classList.contains('animationHideByScale')){
      currentDisplay.showDetailInfoBoard()
    }
  })
   

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
    }
  }
  