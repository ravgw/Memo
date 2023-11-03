export function hideReload () {
    const section = document.querySelector('.home-random_section-reload')
    const buttons = document.querySelectorAll('.reload')

    section.classList.add('animationHide')
    buttons.forEach((button) => {
        // button.style.display = 'none'
    })

    const nameTagSection = document.querySelector('.home-random_section-nametag')
    const nameTag = document.querySelector('.home-random_nametag')
    
    nameTagSection.classList.add('animationHide')
    // nameTag.style.display = 'none'

    const showButtons = document.querySelector('.show-button_section')
    showButtons.style.animation = 'showButtonsSection forwards 0.5s 1s ease'
}

export function showReload () {
    const section = document.querySelector('.home-random_section-reload')
    const buttons = document.querySelectorAll('.reload')

    section.style.animation = 'showSection forwards 1s ease'
    buttons.forEach((button) => {
        button.style.display = 'block'
    })

    const nameTagSection = document.querySelector('.home-random_section-nametag')
    const nameTag = document.querySelector('.home-random_nametag')

    nameTagSection.style.animation = 'showSection forwards 0.5s ease'
    nameTag.style.display = 'flex'

    const showButtons = document.querySelector('.show-button_section')
    showButtons.style.animation = 'hideSection 0.5s 1s ease'
}