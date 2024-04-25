export function loadNavigation () {
const activationArea = document.querySelector('navigation')
// default value of activationArea height from stylesheet
// have to be '%' unit 
const defaultHeight = '5%'

let naviStatus = false

activationArea.addEventListener('click', () => {
    switch (naviStatus) {
        case false:
            unfoldNavigation()
            naviStatus = !naviStatus
            break;
        case true:
            foldNavigation()
            naviStatus = !naviStatus
            break;
        default:
            console.log(`navi err: ${naviStatus}.`);
    }
})

function unfoldNavigation () {
    activationArea.style.height = activationArea.clientHeight === 100 ? 'auto' : '100vh';
}

function foldNavigation () {
    activationArea.style.height = defaultHeight
}

}