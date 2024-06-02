import { loadNewCountry }  from './app_parts/home/home-random.js'
import { addButtonsListeners} from './app_parts/home/home-action-buttons.js'
import { loadNavigation } from './components/navigation.js'
import { renderHome } from '../app/app_parts/home/home.js'


loadNavigation()
// loadNewCountry()
// addButtonsListeners()
renderHome()

if (window.location.search.includes("=home")) {
    console.log('main')
} else if (window.location.search.includes("=c-list")) {
    console.log('list')
} else if (window.location.search.includes("=cred")) {
    console.log('cred')
}