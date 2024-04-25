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
        console.log(this)
        this.element.classList.add(this.showClass)
        this.element.classList.remove(this.hideClass)
    }
}

export const homeBoard = {
    mainBoard: new animationElement(
        document.querySelector('.home-random_container'),
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

export const homeElements = {
    nameTagSection: new animationElement(
        document.querySelector('.home-random_section-nametag'),
        'animationShow',
        'animationHide'
    ),
    actionSection: new animationElement (
        document.querySelector('.home-random_section-action'),
        'animationShow',
        'animationHide',
    ),
    backButton: new animationElement(
        document.querySelector('.back-button_section'),
        'showBackToReloadButton',
        'hideBackToReloadButton',
    ),
    capitalNameTagAndDate: new animationElement(
        document.querySelector('.home-random_capital-info'),
        'animationSlideUp',
        'animationSlideDown',
    ),
    capitalWeather: new animationElement(
        document.querySelector('.weather-condition_container'),
        'animationSlideUp',
        'animationSlideDown',
    ),
    mainInfo: new animationElement(
        document.querySelector('.home-random_main-info'),
        'animationSlideUp',
        'animationSlideDown',
    ),
    addElement(name, element, showClass, hideClass) {
        this[name] = new animationElement(element, showClass, hideClass);
    }
}

//use for appropriate elements 

export const reloadCountryElements = {
    flag: new animationElement(
        document.querySelector('.home-random_flag'),
        'animationShowByScale',
        'animationHideByScale'
    ),
    capitalNameTag: new animationElement(
        document.querySelector('.home-random_capital'),
        'animationShowByScale2',
        'animationHideByScale2'
    ),
    capitalLocalTime: new animationElement(
        document.querySelector('.home-random_local-time'),
        'animationShowByScale2',
        'animationHideByScale2'
    ),
    weatherIcon: new animationElement(
        document.querySelector('.weather-condition_icon'),
        'animationShowByScale3',
        'animationHideByScale3'
    ),
    weatherText: new animationElement(
        document.querySelector('.weather-condition_text'),
        'animationShowByScale3',
        'animationHideByScale3'
    ),
    weatherTemp: new animationElement(
        document.querySelector('.weather-condition_temperature'),
        'animationShowByScale3',
        'animationHideByScale3'
    ),
    countryNameTag: new animationElement(
        document.querySelector('.home-random_nametag'),
        'animationShowByScale4',
        'animationHideByScale4'
    )
}