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
    addNaviHearder(target)

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

function addNaviHearder (target) {
    const headerContainer = document.createElement('div')
    headerContainer.classList.add('naviHeaderContainer')
    target.appendChild(headerContainer)

    const header = document.createElement('h1')
    header.innerText = 'SILKIPP'
    headerContainer.appendChild(header)

    const arrows = document.createElement('div')
    arrows.classList.add('naviArrowsContainer')
    headerContainer.appendChild(arrows)

    for ( let i = 1; i <= 3; i++) {
        const arrow = document.createElement('img')
        arrow.classList.add(`naviArrow${i}`)
        arrow.src = "../../components/img/icons8-arrow-down-24.png"
        arrows.appendChild(arrow)
    }
}


