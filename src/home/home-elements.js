class homeElement {
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
        this.element.classList.add(this.showClass)
         this.element.classList.remove(this.hideClass)
    }
}

const nameTagSection = new homeElement(
    document.querySelector('.home-random_section-nametag'),
    'animationShow',
    'animationHide'
)

const actionSection = new homeElement (
    document.querySelector('.home-random_section-action'),
    'animationShow',
    'animationHide',
)

const backButton = new homeElement(
    document.querySelector('.back-button_section'),
    'showBackToReloadButton',
    'hideBackToReloadButton',
)

const capitalNameTagAndDate = new homeElement(
    document.querySelector('.home-random_capital-info'),
    'animationShowByScale',
    'animationHideByScale',
)

const capitalWeather = new homeElement(
    document.querySelector('.weather-condition_container'),
    'animationShowByScale',
    'animationHideByScale',
)


export const homeElements = {
    nameTagSection: nameTagSection,
    actionSection: actionSection,
    backButton: backButton,
    capitalNameTagAndDate: capitalNameTagAndDate,
    capitalWeather: capitalWeather,
}

