import { hideBoard, showBoard } from '../utilities/utilities.js'
import { homeBoard,navigationBoard } from '../components/home-elements.js'


export function loadNavigation () {
const activationArea = document.querySelector('navigation')

let naviStatus = false

activationArea.addEventListener('click', () => {
    switch (naviStatus) {
        case false:
            console.log(`F: ${naviStatus}`)
            naviStatus = !naviStatus
            break;
        case true:
            console.log(`T: ${naviStatus}`)
            naviStatus = !naviStatus
            break;
        default:
            console.log(`navi err: ${naviStatus}.`);
    }
})

function unfoldNavigation () {
    activationArea.style.height = activationArea.clientHeight === 100 ? 'auto' : '100vh';
}
// const board = document.querySelector('main')

// const navigation = document.createElement('div')
// navigation.classList.add('navigation-container')
// board.appendChild(navigation)

console.log(navigation)
}