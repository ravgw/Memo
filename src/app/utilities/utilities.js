export function showElement (section) {
    const element = section.element
    element.classList.add(section.show)
    element.classList.remove(section.hide)
}

export function hideElement (section) {
    const element = section.element
    element.classList.remove(section.show)
    element.classList.add(section.hide)
}

