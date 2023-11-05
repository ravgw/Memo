export function hideAction () {
    hideActionElement(actionSection)
    hideActionElement(nameTagSection)
    showActionElement(backButton)
    // showBackToReloadButton()
}

export function showAction () {
    showActionElement(actionSection)
    showActionElement(nameTagSection)
    hideActionElement(backButton)
    // hideBackToReloadButton()
}

// function showBackToReloadButton () {
//     const showButtons = document.querySelector('.back-button_section')
//     showButtons.classList.remove('hideBackToReloadButton')
//     showButtons.classList.add('showBackToReloadButton')
// }

// function hideBackToReloadButton () {
//     const hideButtons = document.querySelector('.showBackToReloadButton')
//     hideButtons.classList.remove('showBackToReloadButton')
//     hideButtons.classList.add('hideBackToReloadButton')
// }


function showActionElement (section) {
    const element = section.element
    element.classList.add(section.show)
    element.classList.remove(section.hide)
}

function hideActionElement (section) {
    const element = section.element
    element.classList.remove(section.show)
    element.classList.add(section.hide)
}

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