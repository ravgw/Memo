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


export const homeElements = {
    nameTagSection: new homeElement(
        document.querySelector('.home-random_section-nametag'),
        'animationShow',
        'animationHide'
    ),
    actionSection: new homeElement (
        document.querySelector('.home-random_section-action'),
        'animationShow',
        'animationHide',
    ),
    backButton: new homeElement(
        document.querySelector('.back-button_section'),
        'showBackToReloadButton',
        'hideBackToReloadButton',
    ),
    capitalNameTagAndDate: new homeElement(
        document.querySelector('.home-random_capital-info'),
        'animationSlideUp',
        'animationSlideDown',
    ),
    capitalWeather: new homeElement(
        document.querySelector('.weather-condition_container'),
        'animationSlideUp',
        'animationSlideDown',
    ),
    mainInfo: new homeElement(
        document.querySelector('.home-random_main-info'),
        'animationSlideUp',
        'animationSlideDown',
    ),
    addElement(name, element, showClass, hideClass) {
        this[name] = new homeElement(element, showClass, hideClass);
    }
}

