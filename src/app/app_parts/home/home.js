export function renderHome () {
    const container = document.querySelector('body')
    const main = document.createElement('main')
    container.appendChild(main)
    const home = document.createElement('div')
    home.classList.add('home')
    main.appendChild(home)


    home.appendChild(createRandomCountryElements())
    home.appendChild(createNameOfRandomCountry())
    home.appendChild(createHomeActions())
}


function createRandomCountryElements () {

    const randomCountry = document.createElement('div')
    randomCountry.classList.add("randomCountry")

    const randomCountryFlag = document.createElement('img')
    randomCountryFlag.classList.add("randomCountry__flag")
    randomCountry.appendChild(randomCountryFlag)

    const randomCountryCapital = document.createElement('div')
    randomCountryCapital.classList.add("randomCountry-capital")
    randomCountry.appendChild(randomCountryCapital)
    
    const capital = document.createElement('div')
    capital.classList.add("capital")
    randomCountryCapital.appendChild(capital)

    const capitalInfo = document.createElement('div')
    capitalInfo.classList.add("capital-info")
    capital.appendChild(capitalInfo)

    const capitalInfoName = document.createElement('div')
    capitalInfoName.classList.add("capital-info__name")
    capitalInfo.appendChild(capitalInfoName)
    const capitalInfoTime = document.createElement('div')
    capitalInfoTime.classList.add("capital-info__localtime")
    capitalInfo.appendChild(capitalInfoTime)

    const capitalWeather = document.createElement('div')
    capitalWeather.classList.add("capital-weather")
    capital.appendChild(capitalWeather)

    const weatherImg = document.createElement('img')
    weatherImg.classList.add("weather__img")
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
    content.classList.add('nameOfRandomCountry-content__nametag')
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