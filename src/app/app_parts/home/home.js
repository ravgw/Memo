export function renderHome () {
    const container = document.querySelector('body')
    const main = document.createElement('main')
    container.appendChild(main)
    const home = document.createElement('div')
    home.classList.add('home')
    main.appendChild(home)


    createRandomCountryElements(home)
}


function createRandomCountryElements (target) {

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

    target.appendChild(randomCountry)
}
 