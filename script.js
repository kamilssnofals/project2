const input = document.querySelector('#text')
const button = document.querySelector('.button')
const up = document.querySelector('.up')

function addLine () {
    const newDiv = document.createElement('div')
    const newImg = document.createElement('img')
    newImg.classList.add('indexes')
    newImg.src="./img/Group 77.svg"
    newDiv.classList.add('main-block')

    const newInput = document.createElement('input')
    const text01 = document.querySelector('.text01')

    newDiv.append(newInput)
    newDiv.append(newImg)
    text01.append(newDiv)

    newImg.addEventListener('mouseover',(event) => {
        event.target.style.backgroundColor = 'purple';
    })
    
    newImg.addEventListener('mouseout',(event) => {
        event.target.style.backgroundColor = 'white';
    })

    newImg.addEventListener('click',(e) => {
        newDiv.remove()
    })
}
button.addEventListener('click',(e) => {
    addLine()
})
addLine()

let multiplier = 1
const newArrow = document.querySelector('.up')

newArrow.addEventListener("click",(event) => {
    if (multiplier === -1) {
        up.src = "./img/Group 73.svg"
    } else if (multiplier === 1){
        up.src = "./img/Group 91.svg"
    }
   
    
    const lines = document.querySelectorAll('.main-block')
    let arr = []

    lines.forEach((item) => {
        arr.push(item)
    })
    console.log(arr)
    arr.sort((a , b) => {
     const textA = a.firstElementChild.value 
     const textB = b.firstElementChild.value 
     return textA.localeCompare(textB)*multiplier
     
    })
     const text01 = document.querySelector(".text01")
    arr.forEach((el) => {
        el.remove()
       text01.append(el)
    })
    multiplier = multiplier*-1
});

newArrow.addEventListener('mouseout',(event) => {
    if (multiplier === 1) {
        up.src = './img/Group 74.svg'
    } else if (multiplier === -1){
        up.src = "./img/Group 90.svg"
        
    }
    
});

newArrow.addEventListener('mouseover',(event) => {
    if (multiplier === 1) {
        up.src = './img/Group 73.svg'
    } else if (multiplier === -1){
        up.src = './img/Group 91.svg'
    }
})









 // newLilButton.addEventListener('click', () => {
    //     let parent = document.querySelector('.')
    //     if (parent.childElementCount !== 1) {
    //         newline.remove()
    //     }
    // })
  