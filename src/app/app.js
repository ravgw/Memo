import { loadNewCountry }  from './app_parts/home/home-random.js'
import { addButtonsListeners} from './app_parts/home/home-action-buttons.js'
import { loadNavigation } from './components/navigation.js'
import { renderHome } from './app_parts/home/render-home.js'
// import { reloadCountryElements } from '../../components/home-elements.js'

loadNavigation()
renderHome()
// console.log(reloadCountryElements)
addButtonsListeners()
loadNewCountry()

if (window.location.search.includes("?home")) {
    // console.log('main')
} else if (window.location.search.includes("?clist")) {
    // console.log('list')
} else if (window.location.search.includes("?cred")) {
    // console.log('cred')
}