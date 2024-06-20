import { loadNewCountry }  from './app_parts/home/home-random.js'
import { addButtonsListeners} from './app_parts/home/home-action-buttons.js'
import { renderApp, renderRandomCountry } from './app_parts/home/render-home.js'

renderApp()

if (window.location.search.includes("?cred")) {
    console.log('cred')
} else if (window.location.search.includes("?clist")) {
    console.log('list')
} else {
    renderRandomCountry()
    addButtonsListeners()
    loadNewCountry()
}