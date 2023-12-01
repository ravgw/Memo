import { homeElements, reloadCountryElements } from '../home/home-elements.js'
import { loadNewCountry } from './home-random.js'
import { createDetailInfoNewBoard } from '../home/country-info.js'


function createDetailInfo() {

  createDetailInfoNewBoard()
  
  const board = homeElements.infoBoard.element
  
  board.addEventListener('animationend', (e) => {
    const classes = e.target.classList
    if (classes.contains('animationSlideDown'))
    {
      currentDisplay.showStartInfoBoard()
    }
  })

}

function clearDetailInfo() {
  if (document.querySelector('.countryInfoBoard')) {
    document.querySelector('.countryInfoBoard').remove()
  }
}

export function addButtonsListeners () {

    document.querySelector('#btn-more_info').addEventListener('click', () => {
      if(currentDisplay.detailInfoButtonStatus){
        currentDisplay.backButtonStatus = false
        const mainInfoBoard = homeElements.mainInfo.element
        mainInfoBoard.addEventListener('animationend', () => {
          console.log('animation end')
          if (currentDisplay.detailInfoBoardStatus === false) {
            currentDisplay.detailInfoBoard.create()
          } else {
            currentDisplay.detailInfoBoard.show()
          }
        }, {once:true})
        
        hideStartInfo()
      }
    })
    
    
    document.querySelector('#btn-reload_country').addEventListener('click', () => {
      reloadCountry()
    })
    
  document.querySelector('.back-button_section').addEventListener('click', () => {
    currentDisplay.actionBar.show()
    currentDisplay.elements.infoBoard.hide()
  })
}
  

   
function reloadCountry () {
  currentDisplay.detailInfoBoardStatus = false

  document.querySelector('.reload-element').addEventListener('animationend', () => {
    loadNewCountry()
  }, {once:true})

  for ( const element of Object.values(reloadCountryElements)) {
    element.hide()
  }

}

export const currentDisplay = {
    elements: homeElements,
    detailInfoBoardStatus: false,
    backButtonStatus: false,
    detailInfoButtonStatus: true,
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
    detailInfoBoard: {
      create(){
        clearDetailInfo()
        createDetailInfo()
        currentDisplay.detailInfoBoardStatus = true
        
      },
      show(){
        currentDisplay.elements.infoBoard.show()
        
      }
    },

    showStartInfoBoard() {
      currentDisplay.elements.mainInfo.show()
    }
  }
  

function hideStartInfo () {
  
  currentDisplay.actionBar.hide()
  currentDisplay.elements.mainInfo.hide()

}