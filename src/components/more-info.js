export function hideReload () {
    const section = document.querySelector('.home-random_section-reload')
    const buttons = document.querySelectorAll('.reload')

    section.style.animation = 'hideSectionReload forwards 1s ease'
    buttons.forEach((button) => {
        button.style.display = 'none'
    })

    const nameTagSection = document.querySelector('.home-random_section-nametag')
    const nameTag = document.querySelector('.home-random_nametag')

    nameTagSection.style.animation = 'hideSectionNameTag forwards 0.5s ease'
    nameTag.style.display = 'none'

    const showButtons = document.querySelector('.show-button_section')
    // showButtons.style.display = 'flex'
    showButtons.style.animation = 'showButtonsSection forwards 0.5s 1s ease'
}