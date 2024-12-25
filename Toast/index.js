let generatebtn = document.querySelector('.generatebtn')
let Container = document.querySelector('.toast-container')
let direction = document.querySelector('#direction')
let nature = document.querySelector('#nature')
let range = document.querySelector('#range')
let message = document.querySelector('#message')

generatebtn.addEventListener('click', ()=>{
    let newToast = document.createElement('div')
    if(direction.value === 'top'){
        Container.style.top = '2px'
    }else if(direction.value === 'bottom'){
         Container.style.top = '70%'
    }else if(direction.value === 'left'){
        Container.style.right = '77%'
    }else{
        Container.style.right = '2px'
    }

    if(nature.value === 'success'){
        newToast.style.backgroundColor = 'rgb(22, 254, 22)'
    }else if(nature.value === 'error'){
        newToast.style.backgroundColor = 'rgb(255, 22, 22)'
    }else{
        newToast.style.backgroundColor = 'rgb(227, 224, 23)'
    }
    newToast.innerText = message.value
    
    newToast.classList.add('toast')
    Container.appendChild(newToast)
    let cut = document.createElement('span')
    cut.innerText = 'x'
    cut.classList.add('shiftend')
    newToast.append(cut)

    cut.addEventListener('click', ()=>{
        newToast.remove()
    })
    
    setTimeout(()=>{
       newToast.remove()
    }, parseInt(range.value)*1000)
})