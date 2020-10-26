document.addEventListener('DOMContentLoaded', ()=> {
let field = document.querySelector('.field')
let dodo = document.createElement('div')
let top = 4
let isGodown = true
let location = []
let dodoleft 
let dodoBottom
let jumping
let stopInterval = setInterval(goDown, 10)
let dodolevel
let dodoJump
dodo.style.left = 200+ 'px'
console.log(dodo.style.left)
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
        
    }
  
}
// console.log(dodo.style)
let dodoOnPlatform = setInterval(dodoStep, 10)
function dodoStep() {
   
    dodoleft = parseInt(dodo.style.left) 
    dodoBottom = parseInt(dodo.style.top) + 60
    for(let i = 0 ; i < 5 ;i++) {
        if( (dodoleft >= +location[i].left.toFixed() 
          && dodoBottom == +location[i].top.toFixed() 
          && dodoleft < +location[i].left.toFixed() + 40) ||
          (dodoleft + 40 < +location[i].left.toFixed() + 40
          && dodoleft < +location[i].left.toFixed() + 40
          && dodoBottom == +location[i].top.toFixed())
          ) {
            clearInterval(stopInterval)
            // clearInterval(dodoOnPlatform)
            dodolevel =  parseInt(dodo.style.top)
            dodoJump = dodolevel - 100
            // jumping = setInterval(jump, 30)
            // console.log(dodolevel)
            // console.log(dodoJump)
        }
        //    console.log(location[i].top.toFixed())
        }
    }
if(dodoBottom == 600) {
    // clearInterval(dodoOnPlatform )
}
function jump() {
    isGodown = false
    // dodo.style.top = top + 'px'
    top = top - 1
    dodo.style.top = top + 'px'
    
    // console.log(parseInt(dodo.style.top))
    // console.log(dodoJump)
    if(parseInt(dodo.style.top) === dodoJump) {
        console.log('stop')
    
        clearInterval(jumping)
        // isGodown = true
        // setInterval(goDown, 10);

    }
}
  
function goDown() {
    if(isGodown){
            dodo.style.top = top + 'px'
            top = top + 1
            // console.log(top)
        if(parseInt(dodo.style.top) >= 540) {
                clearInterval(stopInterval)
            }
        }

    // dodoleft = parseInt(dodo.style.left) 
    // dodoBottom = parseInt(dodo.style.top) + 60
    // for(let i = 0 ; i < 5 ;i++) {
    //     if( (dodoleft >= +location[i].left.toFixed() 
    //       && dodoBottom == +location[i].top.toFixed() 
    //       && dodoleft < +location[i].left.toFixed() + 40) ||
    //       (dodoleft + 40 < +location[i].left.toFixed() + 40
    //       && dodoleft < +location[i].left.toFixed() + 40
    //       && dodoBottom == +location[i].top.toFixed())
    //       ) {
    //         clearInterval(stopInterval)
    //         // clearInterval(dodoOnPlatform)
    //         dodolevel =  parseInt(dodo.style.top)
    //         dodoJump = dodolevel - 150
    //         jumping = setInterval(jump, 10)
    //         // console.log(dodolevel)
    //         // console.log(dodoJump)
    //     }
    //     //    console.log(location[i].top.toFixed())
    //     }
    }

    

// function goDown() {
// if(isGodown){
//     dodo.style.top = top + 'px'
//     top = top + 1
//     dodoStep()
//     // console.log(top)
// if(parseInt(dodo.style.top) >= 540) {
//         clearInterval(stopInterval)
//     }
// }

// }


createPlatform()


    
})