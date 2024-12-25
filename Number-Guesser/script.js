let input = document.querySelector('#input');
let submit = document.querySelector('#submit');
let newbtn = document.querySelector('.newbtn')
let result = document.querySelector('#result')

let randomNumber = Math.floor(Math.random() * 100)

submit.addEventListener( 'click', ()=>{
    if( randomNumber > input.value){
        result.innerText = 'you predicted low '
        input.value = ''

    }else if( randomNumber < input.value){
         result.innerText = 'you predicted high '
        input.value = ''
    }else{
        result.innerText = 'Congratulations and celebrations ✌️'
        input.value = ''
        newbtn.disabled = false;
        newbtn.style.cursor = 'pointer';
    }
})


newbtn.addEventListener( 'click', ()=>{
    randomNumber = Math.floor(Math.random() * 100)
    input.value = ''
    result.innerText = ''
})