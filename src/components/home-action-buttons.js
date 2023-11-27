import { homeElements } from '../home/home-elements.js'
import { embedCountryInfo } from '../home/country-info.js'

export const actionBar = {
    elements: homeElements,
    detailInfoStatus: false,
    hide() {
        this.elements.nameTagSection.hide()
        this.elements.actionSection.hide()
        this.elements.capitalNameTagAndDate.hide()
        this.elements.capitalWeather.hide()
        this.elements.mainInfo.hide()   
        this.elements.backButton.show()
    },
    show() {
        this.elements.infoBoard.hide()
        this.elements.actionSection.show()
        this.elements.nameTagSection.show()
        this.elements.capitalNameTagAndDate.show()
        this.elements.capitalWeather.show()
        this.elements.mainInfo.show()
        this.elements.backButton.hide()
    },
}

export function createDetailInfoBoard () {
    embedCountryInfo()

    const board = document.querySelector('.countryInfoBoard')

    homeElements.addElement('infoBoard', board,
    'animationSlideUp',
    'animationSlideDown',
    )

    board.addEventListener('animationend', () => {
        document.querySelector('.back-button_section img').addEventListener('click', () => {
            actionBar.show()
          })
    })
    
    createDetailInfoBoard = showDetailInfoBoard
}

function showDetailInfoBoard () {
    homeElements.infoBoard?.show()
}