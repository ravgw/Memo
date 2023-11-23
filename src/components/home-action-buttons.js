import { homeElements } from '../home/home-elements.js'
import { embedCountryInfo } from '../home/country-info.js'


export function hideAction () {
    homeElements.nameTagSection.hide()
    homeElements.actionSection.hide()
    homeElements.capitalNameTagAndDate.hide()
    homeElements.capitalWeather.hide()
    console.log('before')
    document.querySelector('.back-button_section').addEventListener('animationend',() => {
        console.log('inside')
        embedCountryInfo()
        console.log('after')
    })
    homeElements.backButton.show()
}

export function showAction () {
    homeElements.actionSection.show()
    homeElements.nameTagSection.show()
    homeElements.capitalNameTagAndDate.show()
    homeElements.capitalWeather.show()
    homeElements.backButton.hide()
}



