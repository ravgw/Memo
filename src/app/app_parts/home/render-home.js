import { loadNavigation } from '../../components/navigation.js'
export function renderApp () {
    const container = document.querySelector('body')
    const main = document.createElement('main')
    container.appendChild(main)

    loadNavigation()
}

export function renderRandomCountry () {
    const main = document.querySelector('main')
    const home = document.createElement('div')
    home.classList.add('home')
    main.appendChild(home)


    home.appendChild(createRandomCountryElements())
    home.appendChild(createNameOfRandomCountry())
    home.appendChild(createHomeActions())
    home.appendChild(createBackButton())
}


function createRandomCountryElements () {

    const randomCountry = document.createElement('div')
    randomCountry.classList.add("randomCountry")

    const randomCountryFlag = document.createElement('img')
    randomCountryFlag.classList.add("randomCountry__flag")
    randomCountry.appendChild(randomCountryFlag)

    const capital = document.createElement('div')
    capital.classList.add("randomCountry-capital")
    randomCountry.appendChild(capital)

    const capitalHomeView = document.createElement('div')
    capitalHomeView.classList.add("capital-homeview")
    capital.appendChild(capitalHomeView)

    const capitalInfo = document.createElement('div')
    capitalInfo.classList.add("capital-info")
    capitalHomeView.appendChild(capitalInfo)

    const capitalInfoName = document.createElement('div')
    capitalInfoName.classList.add("capital-info__name")
    capitalInfo.appendChild(capitalInfoName)

    const capitalInfoTime = document.createElement('div')
    capitalInfoTime.classList.add("capital-info__localtime")
    capitalInfo.appendChild(capitalInfoTime)

    const capitalWeather = document.createElement('div')
    capitalWeather.classList.add("capital-weather")
    capitalHomeView.appendChild(capitalWeather)

    const weatherImg = document.createElement('img')
    weatherImg.classList.add("capital-weather__img")
    capitalWeather.appendChild(weatherImg)

    const capitalWeatherConditions = document.createElement('div')
    capitalWeatherConditions.classList.add("capital-weather-conditions")
    capitalWeather.appendChild(capitalWeatherConditions)

    
    const conditionsText = document.createElement('div')
    conditionsText.classList.add("weather-conditions__text")
    capitalWeatherConditions.appendChild(conditionsText)

    const conditionsTemp = document.createElement('div')
    conditionsTemp.classList.add("weather-conditions__temp")
    capitalWeatherConditions.appendChild(conditionsTemp)

    return randomCountry
}
 
function createNameOfRandomCountry () {
    const nameContainer = document.createElement('div')
    nameContainer.classList.add('nameOfRandomCountry')

    const content = document.createElement('div')
    content.classList.add('nameOfRandomCountry-content')
    nameContainer.appendChild(content)

    const nametag = document.createElement('div')
    nametag.classList.add('nameOfRandomCountry-content__nametag')
    content.appendChild(nametag)

    return nameContainer
}

function createHomeActions () {
    const actionsContainer = document.createElement('div')
    actionsContainer.classList.add('homeActions')

    const buttons = document.createElement('div')
    buttons.classList.add('homeButtons')
    actionsContainer.appendChild(buttons)

    const buttonMore = document.createElement('button')
    buttonMore.classList.add('homeButton')
    buttonMore.id = 'homeButtons__more'
    const buttonMoreImg = document.createElement('img')
    buttonMoreImg.src = '../../components/img/icons8-view-more-64.png'
    buttonMore.appendChild(buttonMoreImg)

    buttons.appendChild(buttonMore)

    const buttonDraw = document.createElement('button')
    buttonDraw.classList.add('homeButton')
    buttonDraw.id = 'homeButtons__draw'
    const buttonDrawImg = document.createElement('img')
    buttonDrawImg.src = '../../components/img/icons8-dice-cubes-64.png'
    buttonDraw.appendChild(buttonDrawImg)
    
    buttons.appendChild(buttonDraw)

    return actionsContainer
}

function createBackButton () {
    const back = document.createElement('div')
    back.classList.add('homeButtons__back')

    const backImg = document.createElement('img')
    backImg.src = '../../components/img/icons8-arrow-up-50.png'
    back.appendChild(backImg)

    return back
}