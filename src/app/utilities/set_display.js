import { homeElements } from '../components/home-elements.js'

function setDisplay(board) {
  
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