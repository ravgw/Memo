import { getHomeElements } from '../components/home-elements.js'
import { createDetailInfoNewBoard } from './countries/country-info.js'

function setDisplay(board) {
  
}


export const currentDisplay = {
    elements: getHomeElements,
    detailInfoBoardStatus: false,
    backButtonStatus: false,
    detailInfoButtonStatus: true,
    actionBar: {
      show() {
        currentDisplay.elements().backButton.hide()
        currentDisplay.elements().nameTagSection.show()
        currentDisplay.elements().actionSection.show()
      },
      hide() {
        currentDisplay.elements().nameTagSection.hide()
        currentDisplay.elements().actionSection.hide()
        currentDisplay.elements().backButton.show()
      }
    },
    detailInfoBoard: {
      create(){
        // clearDetailInfo()
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

function createDetailInfo() {

  createDetailInfoNewBoard()
  // console.log(getHomeElements())
  const board = getHomeElements().infoBoard.element
  
  board.addEventListener('animationend', (e) => {
    const classes = e.target.classList
    if (classes.contains('animationSlideDown'))
    {
      currentDisplay.showStartInfoBoard()
    }
  })

}