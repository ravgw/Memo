import { currentRandomCounrty } from "./country.js"
import { homeElements } from '../../components/home-elements.js'
import { getCountry } from './select_country_info.js'


export async function createDetailInfoNewBoard  () {
    createBoard(currentRandomCounrty)
}

function createBoard (randomCounrty) {
    const infoSection = document.querySelector('.randomCountry-capital')
    const board = document.createElement('div')
    board.classList.add('countryInfoBoard')
    board.classList.add('animationSlideUp')
    infoSection.appendChild(board)

    homeElements.addElement('infoBoard', board,
    'animationSlideUp',
    'animationSlideDown',
    )

    const infoArray = getCountry(randomCounrty)
    for (const element of infoArray) {

        const info = embedInfo(element.tag, element.value)

        board.appendChild(info)
    }
}

function embedInfo (nametag, value) {

    const infoContainer = document.createElement('div')
    infoContainer.classList.add('info-div')
    const infoTag = document.createElement('p')
    infoTag.classList.add('info-tag')
    
    infoTag.innerText = nametag
    infoContainer.appendChild(infoTag)
    
        if(typeof(value) === 'object' && value !== null) {
            for (const el of Object.values(value)) {
                
                const infoValue = document.createElement('p')
                infoValue.classList.add('info-value')
                
                infoValue.innerText = el

                infoContainer.appendChild(infoValue)
            }
        } else {
            const infoValue = document.createElement('p')
            infoValue.classList.add('info-value')
            infoValue.innerText = value
            infoContainer.appendChild(infoValue)
        }




    return infoContainer
} 


