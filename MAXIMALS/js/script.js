let webBlock = document.querySelector('.web-design')
let devBlock = document.querySelector('.web-dev')
let showBlock= document.querySelector('.web-block')
let showDev= document.querySelector('.dev-block')

function minusPlus(tag, checkClass, elem){
    if(tag.classList.contains(checkClass)){
        document.querySelector(elem).textContent = '-'
    }else{
        document.querySelector(elem).textContent = '+'
    }
}

webBlock.addEventListener('click', () => {
    showBlock.classList.toggle('web-block-show')
    minusPlus(showBlock, 'web-block-show', 'web-design sapn')

})
devBlock.addEventListener('click', () => {
    showDev.classList.toggle('web-block-show')

})

let auto = 0


function sliderAuto(){
    let poloska = document.querySelector('.polosa')
   
    auto = auto -175;
    if(auto < -1250){
        auto = 0
    }

    poloska.style.left = auto+'px'

}

setInterval(sliderAuto, 1000)