import { currentRandomCounrty } from "../api/api-utilities/country.js"
import { homeElements } from '../home/home-elements.js'


export async function createDetailInfoNewBoard  () {
    createBoard(currentRandomCounrty)
}

function createBoard (randomCounrty) {
    const infoSection = document.querySelector('#main-info_test_div')
    const board = document.createElement('div')
    board.classList.add('countryInfoBoard')
    board.classList.add('animationSlideUp')
    infoSection.appendChild(board)

    homeElements.addElement('infoBoard', board,
    'animationSlideUp',
    'animationSlideDown',
    )

    const infoArray = selectInformations(randomCounrty)
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

function selectInformations(country) {

    class info {
        constructor (tag,value,multipleTag) {
            this.tag = tag
            this.multipleTag = multipleTag
            this.value = value
            this.checkMultiple()
        }

        checkMultiple() {
            if ( this.value instanceof Array && this.value.length > 1) {
                this.tag = this.multipleTag
            }
        }
    }

    const informations =
    [
        new info('Capital: ', country.capital),
        new info('Car side: ',country.car.side),
        new info('Currency: ', Object.values(country.currencies).map((currency) => `${currency.symbol} ${currency.name}`),'Currencies: '),
        new info('Language: ', Object.values(country.languages),'Languages: '),
        new info('Name common: ', country.name.common),
        new info('Name official: ', country.name.official),
        new info('Population: ', country.population.toLocaleString()),
        new info('Region: ', country.region),
        new info('Timezone: ', country.timezones, 'Timezones: '),
    ]   

    return informations
}
