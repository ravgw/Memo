const nameTagSection = {
    element: document.querySelector('.home-random_section-nametag'),
    show: 'animationShow',
    hide: 'animationHide',
}

const actionSection = {
    element: document.querySelector('.home-random_section-action'),
    show: 'animationShow',
    hide: 'animationHide',
}

const backButton = {
    element: document.querySelector('.back-button_section'),
    show: 'showBackToReloadButton',
    hide: 'hideBackToReloadButton',
}

const capitalNameTagAndDate = {
    element: document.querySelector('.home-random_capital-info'),
    show: 'animationShowByScale',
    hide: 'animationHideByScale',
}

const capitalWeather = {
    element: document.querySelector('.weather-condition_container'),
    show: 'animationShowByScale',
    hide: 'animationHideByScale',
}

export const homeElements = {
    nameTagSection: nameTagSection,
    actionSection: actionSection,
    backButton: backButton,
    capitalNameTagAndDate: capitalNameTagAndDate,
    capitalWeather: capitalWeather,
}