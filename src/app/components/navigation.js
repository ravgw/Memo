const NavigationItem = [
    ['Home', 'home'],
    ['Country List', 'CL'],
    ['Credits', "credits"]
]



export function loadNavigation () {
const activationArea = document.querySelector('navigation')
// default value of activationArea height from stylesheet
// have to be '%' unit 
const defaultHeight = '5%'

let naviStatus = false
let naviGenerated = false

if(!naviGenerated) {
    generateNavi()
    naviGenerated = !naviGenerated
}

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

function generateNavi () {
    const target = document.querySelector('navigation')
    const listContainer = document.createElement('div')
    listContainer.classList.add('navigationContainer')

    const navigationList = document.createElement('ul')
    listContainer.appendChild(navigationList)

    for (const li of NavigationItem) {
        const el = document.createElement('li')
        el.innerText = li[0]
        navigationList.appendChild(el)
        console.log(li[1])
    }

    target.appendChild(listContainer)

}