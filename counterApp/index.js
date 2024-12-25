let increment = document.querySelector('.increment')
let decrement = document.querySelector('.decrement')
let reset = document.querySelector('.reset')
let result = document.querySelector('.result')
let prompt = document.getElementById('prompt')
let clear = document.querySelector('.clear')
console.log(prompt.value)
increment.addEventListener('click', ()=>{
    if(prompt.value){
        return result.innerText = parseInt(prompt.value) + parseInt(result.innerText)
    }
   result.innerText ++
})
decrement.addEventListener('click',()=>{
    if(prompt.value){
        return result.innerText = result.innerText - parseInt(prompt.value)
    }
    result.innerText --
})

reset.addEventListener('click',()=>{
    result.innerText = 0
})

clear.addEventListener('click',()=>{
    prompt.value = parseInt(0)
})
