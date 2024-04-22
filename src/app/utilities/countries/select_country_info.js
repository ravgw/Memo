class info {
    constructor (tag,multipleTag,value) {
        this.tag = tag
        this.multipleTag = multipleTag
        this.checkMultiple()
        this.setValue(value)
    }

    setValue(value) {
        if (typeof value === 'function') {
            const funcValue = value()
            this.value = funcValue
        } else {
            this.value = value
        }
    }
    checkMultiple() {
        if ( this.value instanceof Array && this.value.length > 1) {
            this.tag = this.multipleTag
        }
    }

}



export function getCountry(country) {

    const countryInformations =
    [
        new info(
            'Name common: ',
            '',
            country.name.common),
        new info(
            'Name official: ',
            '',
            country.name.official),
        new info(
            'Capital: ',
            '',
            country.capital),
        new info(
            'Region: ',
            '',
            country.region),
        new info(
            'Population: ',
            '',
            function () { if (country.population) 
                {
                    return country.population.toLocaleString()
                }
            },),
        new info(
            'Currency: ',
            'Currencies: ',
            function () { if (country.currencies) 
                {
                    return Object.values(country.currencies).map((currency) => `${currency.symbol} ${currency.name}`)
                }
            },),
        new info(
            'Language: ',
            'Languages: ',
            function () { if (country.languages) 
                {
                    return Object.values(country.languages)
                }
            },),
        new info(
            'Car side: ',
            '',
            country.car.side),
        new info(
            'Timezone: ',
            'Timezones: ',
            country.timezones,),
    ]   

    return countryInformations

}