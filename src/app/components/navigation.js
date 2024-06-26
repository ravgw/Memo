import { templates } from '../app_parts/templates.js'
const NavigationItem = [
    ['Home', 'home','home'],
    ['Country List', 'CL','clist'],
    ['Credits', "credits",'cred']
]


export function loadNavigation () {
const activationArea = document.querySelector('navigation')
// default value of activationArea height from stylesheet
// needed '%' unit 
const defaultHeight = '5%'

let naviStatus = false
let naviGenerated = false
let arrowsRotated = false

if(!naviGenerated) {
    generateNavi()
    naviGenerated = !naviGenerated
}

activationArea.addEventListener('click', () => {
    switch (naviStatus) {
        case false:
            unfoldNavigation()
            naviStatus = !naviStatus
            rotateArrows(arrowsRotated)
            break;
        case true:
            foldNavigation()
            naviStatus = !naviStatus
            rotateArrows(arrowsRotated)
            break;
        default:
            console.log(`navi error: ${naviStatus}.`);
    }
})

function unfoldNavigation () {
    activationArea.style.height = activationArea.clientHeight === 100 ? 'auto' : '100vh';
}

function foldNavigation () {
    activationArea.style.height = defaultHeight
}
function rotateArrows(arrowsState) {
    const arrowsContainer = document.querySelector('.naviArrowsContainer')
    switch(arrowsState) {
        case false:
            arrowsContainer.style.transform = 'rotateX(180deg)'
            arrowsRotated = true
            break;
        case true:
            arrowsContainer.style.transform = 'rotateX(0deg)'
            arrowsRotated = false
            break;
        default:
            console.log(`navi error: ${arrowsRotated}.`);

    }
}
}

function generateNavi () {
    const target = document.querySelector('navigation')
    addNaviHearder(target)

    const listContainer = document.createElement('div')
    listContainer.classList.add('navigationContainer')

    const navigationList = document.createElement('ul')
    listContainer.appendChild(navigationList)

    // for (const li of NavigationItem) {
    //     const el = document.createElement('li')
    //     const link = document.createElement('a')
    //     link.innerText = li[0]
    //     link.href = `/${li[2]}`

    //     el.appendChild(link)
    //     navigationList.appendChild(el)
    // }
    for (const template of Object.values(templates)) {
        const el = document.createElement('li')
        const link = document.createElement('a')
        link.innerText = template.title
        link.href = template.hash

        el.appendChild(link)
        navigationList.appendChild(el)
    }

    target.appendChild(listContainer)

    // console.log()

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


