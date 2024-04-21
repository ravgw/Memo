import { fetchWeather } from '../../../api/api.js'

export async function getWeather(location) { 
    try {
        const weather = await fetchWeather(location)

        const locationWeather = {
            temp: `${weather.current.temp_c} &#176;C`,
            time: weather.location.localtime,
            conditions: weather.current.condition.text,
            icon: weather.current.condition.icon,
        }

        return locationWeather

    } catch (e) {
        console.log(`${e.name} : ${e.message}`)

        const defaultWeather = {
            temp: `-237 &#176;C`,
            time: '',
            conditions: "It's raining men!",
            icon: 'https://img.icons8.com/color/48/weak-person--v1.png',
        }

        return defaultWeather
    }

}

