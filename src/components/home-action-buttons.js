import { homeElements } from '../home/home-elements.js'
import { embedCountryInfo } from '../home/country-info.js'


export function createDetailInfoBoard () {
    embedCountryInfo()

    const board = document.querySelector('.countryInfoBoard')

    homeElements.addElement('infoBoard', board,
    'animationSlideUp',
    'animationSlideDown',
    )

    board.addEventListener('animationend', () => {
        if(actionBar.detailInfoStatus){
            actionBar.show()
            console.log(actionBar.detailInfoStatus)
        } 
    })
    
    createDetailInfoBoard = showDetailInfoBoard
}

function showDetailInfoBoard () {
    homeElements.infoBoard?.show()
}