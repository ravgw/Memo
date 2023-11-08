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

function checkInfo (c) {
    console.log(c.capital)
    console.log(c.car.side)
    console.log(Object.values(c.currencies)
    .map((currency) => currency.name)
    .join(", "))
    console.log(c.languages)
    console.log(c.name.common)
    console.log(c.name.official)
    console.log(c.population)
    console.log(c.region)
    console.log(c.timezones[0])
}
