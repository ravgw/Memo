import { fetchCountries } from '../../../api/api.js'

export async function countries () {
const countries = await fetchCountries()

console.log(countries)
}