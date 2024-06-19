class template {
    constructor(title, hash){
        this.title = title
        this.hash = hash
    }
}

export const templates = {
    home: new template (
        'Home',
        '?home'
    ),
    list: new template (
        'Country List',
        '?list'
    ),
    credits: new template (
        'Credits',
        '?credits'
    ),
}