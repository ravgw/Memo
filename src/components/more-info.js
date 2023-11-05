export function hideReload () {
    const section = document.querySelector('.home-random_section-reload')
    const nameTagSection = document.querySelector('.home-random_section-nametag')

    hideReloadElement(section)
    hideReloadElement(nameTagSection)

    showBackToReloadButton()
}

export function showReload () {
    const sections = document.querySelectorAll('.animationHide')
    showReloadElements(sections)
    hideBackToReloadButton()
}

function showBackToReloadButton () {
    const showButtons = document.querySelector('.show-button_section')
    showButtons.classList.remove('hideBackToReloadButton')
    showButtons.classList.add('showBackToReloadButton')
}

function hideBackToReloadButton () {
    const hideButtons = document.querySelector('.showBackToReloadButton')
    hideButtons.classList.remove('showBackToReloadButton')
    hideButtons.classList.add('hideBackToReloadButton')
}


function showReloadElements (elements) {
    elements.forEach((element) => {
        element.classList.remove('animationHide')
        element.classList.add('animationShow')
    })
}

function hideReloadElement (element) {
    element.classList.remove('animationShow')
    element.classList.add('animationHide')
}