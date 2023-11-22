import { currentRandomCounrty } from "../api/api-utilities/country.js"

const infoSection = document.querySelector('.home-random_section-info')

export async function embedCountryInfo  () {
    const randomCountry = currentRandomCounrty
    createBoard(randomCountry)
    
}

function createBoard (randomCounrty) {
    const board = document.createElement('div')
    board.classList.add('countryInfoBoard')
    infoSection.appendChild(board)

    const infoArray = countryInfo(randomCounrty)
    for (const element of infoArray) {
        element.setValues()
        const info = embedInfo(element.tag, element.value)
        board.appendChild(info)
    }
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
    console.log(country)
    class informations {
        constructor (tag,data,multipleTag) {
            this.tag = tag;
            this.multipleTag = multipleTag;
            this.data = data;
            this.value;
        }

        setValues () {
            let values = this.data
            if (typeof(this.data) != 'string' && typeof(this.data[0]) != 'string') {
                values = Object.values(this.data).map((element) => `${element.name} ${element.symbol}`)
            } else if (typeof(this.data) != 'string') {
                values = Object.values(this.data).join(", ")
            }
            // console.log(values)
            this.value = values
        }
    }

    const infoArray =[
        new informations('Capital: ', country.capital),
        new informations('Car side: ',country.car.side),
        new informations('Currency: ', country.currencies),
        new informations('Language: ', country.languages,'Languages: '),
        new informations('Name common: ', country.name.common),
        new informations('Name official: ', country.name.official),
        new informations('Population: ', country.population.toLocaleString()),
        new informations('Region: ', country.region),
        new informations('Timezones: ', country.timezones),
    ]   
    return infoArray
}


// {
//     tag: 'Capital: ',
//     value: country.capital,
// },
// {
//     tag: 'Car side: ',
//     value: country.car.side,
// },
// {
//     tag: 'Currency: ', 
//     value: Object.values(country.currencies)
//     .map((currency) => currency.name)
//     .join(", "),
// },
// {
//     tag: 'Lalnguage: ',
//     multipleTag: 'Languages: ',
//     value: function setValues() {
//         Object.values(country.languages).join(", ")
//     },
// },
// {
//     tag: 'Name common: ',
//     value: country.name.common,
// },
// {
//     tag: 'Name official: ',
//     value: country.name.official,
// },
// {
//     tag:'Population: ', 
//     value: country.population.toLocaleString(),
// },
// {
//     tag: 'Region: ', 
//     value: country.region,
// },
// {
//     tag: 'Timezones: ', 
//     value: country.timezones,
// }