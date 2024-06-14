class animationElement {
    constructor (element,showClass,hideClass){
        this.element = element,
        this.showClass = showClass,
        this.hideClass = hideClass
    }
    hide() {
        this.element.classList.remove(this.showClass)
        this.element.classList.add(this.hideClass)
    }
    show() {
        // console.log(this)
        this.element.classList.add(this.showClass)
        this.element.classList.remove(this.hideClass)
    }
}

export const homeBoard = {
    mainBoard: new animationElement(
        document.querySelector('.randomCountry'),
        'animationSlideUp',
        'animationSlideDown',
    )
}
export const navigationBoard = {
    mainBoard: new animationElement(
        document.querySelector('.navigation-container'),
        'animationSlideUp',
        'animationSlideDown',
    )
}

export function getHomeElements() {
    const elements = {
    nameTagSection: new animationElement(
        document.querySelector('.nameOfRandomCountry'),
        'animationShow',
        'animationHide'
    ),
    actionSection: new animationElement (
        document.querySelector('.homeActions'),
        'animationShow',
        'animationHide',
    ),
    backButton: new animationElement(
        document.querySelector('.homeButtons__back'),
        'showBackToReloadButton',
        'hideBackToReloadButton',
    ),
    capitalNameTagAndDate: new animationElement(
        document.querySelector('.capital-info'),
        'animationSlideUp',
        'animationSlideDown',
    ),
    capitalWeather: new animationElement(
        document.querySelector('.capital-weather'),
        'animationSlideUp',
        'animationSlideDown',
    ),
    mainInfo: new animationElement(
        document.querySelector('.randomCountry-capital'),
        'animationSlideUp',
        'animationSlideDown',
    ),
    addElement(name, element, showClass, hideClass) {
        // console.log(name)
        // console.log(element)
        // console.log(showClass)
        // console.log(hideClass)
        // console.log(elements)
        this[name] = new animationElement(element, showClass, hideClass);
    }
    }
    return elements
}

//use for appropriate elements 
export function reloadCountryElements () {
    const reloadCountryElements = {
        flag: new animationElement(
        document.querySelector('.randomCountry__flag'),
        'animationShowByScale',
        'animationHideByScale'
    ),
    capitalNameTag: new animationElement(
        document.querySelector('.capital-info__name'),
        'animationShowByScale2',
        'animationHideByScale2'
    ),
    capitalLocalTime: new animationElement(
        document.querySelector('.capital-info__localtime'),
        'animationShowByScale2',
        'animationHideByScale2'
    ),
    weatherIcon: new animationElement(
        document.querySelector('.capital-weather__img'),
        'animationShowByScale3',
        'animationHideByScale3'
    ),
    weatherText: new animationElement(
        document.querySelector('.weather-conditions__text'),
        'animationShowByScale3',
        'animationHideByScale3'
    ),
    weatherTemp: new animationElement(
        document.querySelector('.weather-conditions__temp'),
        'animationShowByScale3',
        'animationHideByScale3'
    ),
    countryNameTag: new animationElement(
        document.querySelector('.nameOfRandomCountry-content__nametag'),
        'animationShowByScale4',
        'animationHideByScale4'
    )
    }

    return reloadCountryElements

}
