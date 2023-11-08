import { hideElement, showElement} from '../utilities.js'
import { homeElements } from '../home/home-elements.js'
import { embedCountryInfo } from '../home/country-info.js'


export function hideAction () {
    hideElement(homeElements.actionSection)
    hideElement(homeElements.nameTagSection)
    hideElement(homeElements.capitalNameTagAndDate)
    hideElement(homeElements.capitalWeather)
    showElement(homeElements.backButton)
    embedCountryInfo()
    // showBackToReloadButton()
}

export function showAction () {
    showElement(homeElements.actionSection)
    showElement(homeElements.nameTagSection)
    showElement(homeElements.capitalNameTagAndDate)
    showElement(homeElements.capitalWeather)
    hideElement(homeElements.backButton)
    // hideBackToReloadButton()
}



