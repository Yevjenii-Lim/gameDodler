document.addEventListener('DOMContentLoaded', ()=> {
let field = document.querySelector('.field')
let dodo = document.createElement('div')


dodo.classList.add('dodo')
field.appendChild(dodo)
class Platform {
    constructor(){
        this.left = Math.random() * 300
        this.bottom = Math.random() * 500
    }
}
function createPlatform(){
    for(let i = 0; i < 5; i++) {
         let platform = document.createElement('div')
        platform.classList.add('platform')
        platform.style.left = new Platform().left + 'px'
        platform.style.bottom = new Platform().bottom + 'px'
        field.appendChild(platform) 
    }
  
}
let top = 4
function goDown() {
    dodo.style.top = top + 'px'
    top = top + 2
    if(dodo.style.top === '540px') {
        clearInterval(stopInterval)
    }
}
let stopInterval = setInterval(goDown, 30)

createPlatform()


    
})