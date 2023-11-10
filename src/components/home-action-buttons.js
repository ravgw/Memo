import { hideElement, showElement} from '../utilities.js'
import { homeElements } from '../home/home-elements.js'
import { embedCountryInfo } from '../home/country-info.js'


export function hideAction () {
    homeElements.nameTagSection.hide()
    homeElements.actionSection.hide()
    homeElements.capitalNameTagAndDate.hide()
    homeElements.capitalWeather.hide()
    homeElements.backButton.show()
    embedCountryInfo()
    // showBackToReloadButton()
}

export function showAction () {
    homeElements.actionSection.show()
    homeElements.nameTagSection.show()
    homeElements.capitalNameTagAndDate.show()
    homeElements.capitalWeather.show()
    homeElements.backButton.hide()
    // hideBackToReloadButton()
}



