import { homeElements } from '../home/home-elements.js'
import { embedCountryInfo } from '../home/country-info.js'


export function hideAction () {
    homeElements.nameTagSection.hide()
    homeElements.actionSection.hide()
    homeElements.capitalNameTagAndDate.hide()
    homeElements.capitalWeather.hide()
    homeElements.mainInfo.hide()
    
    let infoBoard = false
    document.querySelector('.back-button_section').addEventListener('animationend',() => {
        if(infoBoard) {
            homeElements.infoBoard.show()
        } else {
            embedCountryInfo()
            infoBoard = true
        }
    })
    
    homeElements.backButton.show()
}

export function showAction () {
    homeElements.actionSection.show()
    homeElements.nameTagSection.show()
    homeElements.capitalNameTagAndDate.show()
    homeElements.capitalWeather.show()
    homeElements.mainInfo.show()

    homeElements.infoBoard.hide()
    homeElements.backButton.hide()
}



