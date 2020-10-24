document.addEventListener('DOMContentLoaded', ()=> {
let field = document.querySelector('.field')
let dodo = document.createElement('div')
let top = 4
let isGodown = true
let location = []
let dodoleft 
let dodoBottom



dodo.classList.add('dodo')
field.appendChild(dodo)
class Platform {
    constructor(){
        this.left = Math.random() * 200
        this.top = Math.random() * 500
    }
}
function createPlatform(){
    for(let i = 0; i < 5; i++) {
        location.push(new Platform)
        let platform = document.createElement('div')
        platform.classList.add('platform')
        platform.style.left = location[i].left + 'px'
        platform.style.top = location[i].top + 'px'
        field.appendChild(platform) 
        // location.push(platform)
        // console.log(location)
    }
  
}
// console.log(dodo.style)
let dodoOnPlatform = setInterval(dodoStep, 10)
function dodoStep() {
    dodo.style.left = 150+ 'px'
    dodoleft = parseInt(dodo.style.left) 
    dodoBottom = parseInt(dodo.style.top) + 60
    // console.log(dodoleft + 40)
    // console.log(+location[0].left.toFixed())
    // dodoBottom == +location[i].top.toFixed()
    for(let i = 0 ; i < 5 ;i++) {
        if( (dodoleft >= +location[i].left.toFixed() 
          && dodoBottom == +location[i].top.toFixed() 
          && dodoleft < +location[i].left.toFixed() + 40) ||
           dodoleft + 40 < +location[i].left.toFixed() + 40
          && dodoleft < +location[i].left.toFixed() + 40
          && dodoBottom == +location[i].top.toFixed()
          ) {
            clearInterval(stopInterval)
            clearInterval(dodoOnPlatform )
        }
        //    console.log(location[i].top.toFixed())
        }
if(dodoBottom == 600) {
    clearInterval(dodoOnPlatform )
}
  
    
}
function goDown() {
if(isGodown){
    // dodo.style.left = top + 'px'
    dodo.style.top = top + 'px'
    top = top + 1
    if(dodo.style.top === '540px') {
        clearInterval(stopInterval)
    }
}
}

let stopInterval = setInterval(goDown, 20)

createPlatform()


    
})