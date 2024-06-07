import { homeElements, reloadCountryElements } from '../../components/home-elements.js'
import { loadNewCountry } from '../home/home-random.js'
import { createDetailInfoNewBoard } from '../../utilities/countries/country-info.js'
import { currentDisplay } from '../../utilities/set_display.js'


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

    document.querySelector('#homeButtons__more').addEventListener('click', () => {
      if(currentDisplay.detailInfoButtonStatus){
        currentDisplay.backButtonStatus = false
        const mainInfoBoard = homeElements.mainInfo.element
        mainInfoBoard.addEventListener('animationend', () => {
          if (currentDisplay.detailInfoBoardStatus === false) {
            currentDisplay.detailInfoBoard.create()
          } else {
            currentDisplay.detailInfoBoard.show()
          }
        }, {once:true})
        
        hideStartInfo()
      }
    })
    
    
    document.querySelector('#homeButtons__draw').addEventListener('click', () => {
      reloadCountry()
    })
    
    document.querySelector('.homeButtons__back').addEventListener('click', () => {
    currentDisplay.actionBar.show()
    currentDisplay.elements.infoBoard.hide()
  })
}



function reloadCountry () {
  console.log(document.querySelector('.homeActions'))
  currentDisplay.detailInfoBoardStatus = false

  document.querySelector('.nameOfRandomCountry-content__nametag').addEventListener('animationend', () => {
    console.log('eee?')
    loadNewCountry()
  }, {once:true})

  for ( const element of Object.values(reloadCountryElements())) {
    element.hide()
  }

}

  

export function hideStartInfo () {
  currentDisplay.actionBar.hide()
  currentDisplay.elements.mainInfo.hide()
}