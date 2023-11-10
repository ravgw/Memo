import { currentRandomCounrty } from "../api/api-utilities/country.js"

const infoSection = document.querySelector('.home-random_section-info')

export async function embedCountryInfo  () {
    const randomCountry = currentRandomCounrty
    checkInfo(randomCountry)
    createBoard()
}

function createBoard () {
    const board = document.createElement('div')
    board.classList.add('countryInfoBoard')
    infoSection.appendChild(board)
}

function embedInfo (nametag, value) {
    const infoContainer = document.createElement('div')
    const infoTag = document.createElement('p')
    const infoValue = document.createElement('p')

    infoTag.innerText = nametag
    infoValue.innerText = value

    infoContainer.appendChild(infoTag)
    infoContainer.appendChild(infoValue)

    return infoContainer
} 

function countryInfo (country) {
    const infoArray =[
        ['Capital', country.capital],
        ['Car side', country.car.side],
        ['Currency', Object.values(country.currencies
        .map((currency) => {
        const curr = `${currency.name} : ${currency.symbol}`
        return curr
        }).join(", "))],
        ['Lalnguages',country.languages],
        ['Name common', country.name.common],
        ['Name official', country.name.official],
        ['Population', country.population],
        ['Region', country.region],
        ['Timezones', country.timezones]
    ]

    
}