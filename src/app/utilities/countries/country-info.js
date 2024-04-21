import { currentRandomCounrty } from "./country.js"
import { homeElements } from '../../components/home-elements.js'


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

export function selectInformations(country) {

    class info {
        constructor (tag,value,multipleTag) {
            this.tag = tag
            this.multipleTag = multipleTag
            this.value
            this.setValue(value)
            this.checkMultiple()
        }

        setValue(value) {
            try {
                this.value = value()
            } catch (e) {
                // console.log(e)
                this.value = value
            }
        }

        checkMultiple() {
            if ( this.value instanceof Array && this.value.length > 1) {
                this.tag = this.multipleTag
            }
        }

    }

    const informations =
    [
        new info('Name common: ', country.name.common),
        new info('Name official: ', country.name.official),
        new info('Capital: ', country.capital),
        new info('Region: ', country.region),
        new info('Population: ', country.population.toLocaleString()),
        new info('Currency: ',function test (){ 
            try {
                const value = Object.values(country.currencies).map((currency) => `${currency.symbol} ${currency.name}`)

                return value
            }catch(e){
            return 'Ds'
            }
    },'Currencies: '),
        new info('Language: ', Object.values(country.languages),'Languages: '),
        new info('Car side: ',country.car.side),
        new info('Timezone: ', country.timezones, 'Timezones: '),
    ]   

    return informations
}
