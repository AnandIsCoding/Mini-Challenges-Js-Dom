let input = document.querySelector('#input');
let uppercase = document.querySelector('#uppercase');
let lowercase = document.querySelector('#lowercase');
let camelcase = document.querySelector('#camelcase');
let pascalcase = document.querySelector('#pascalcase')
let kebabcase = document.querySelector('#kebabcase')
let trimcase = document.querySelector('#trimcase');

const tocamelcase = (str) =>{
    let formattedcamelcase =''
    let words = str.split(' ');
    words.map((item,index)=>{
        if(index === 0){
            formattedcamelcase += item.toLowerCase();
        }else{
            formattedcamelcase += item.charAt(0).toUpperCase() + item.slice(1,item.length)
        }
    })
    return formattedcamelcase
}

const tokababcase  = (str) =>{
    let formattedkababcase = ''
    let words = str.split(' ')
    words.map((item,index)=>{
       if(index === 0){
           formattedkababcase += item
       }else{
           formattedkababcase += `-${item}`
       }
    })
    return formattedkababcase
}

const totrimcase = (str) =>{
    let words = str.split(' ')
    let formattedtrim = ''
    words.map((item,index)=>{
        formattedtrim += item.trim() 
    })
    console.log(formattedtrim)
    return  formattedtrim
}

const topascalcase = (str) =>{
    let formattedpascalcase = ''
    let words = str.split(' ')
    words.map((item,index)=>{
        formattedpascalcase += item.charAt(0).toUpperCase() + item.slice(1,item.length)
    })
    return formattedpascalcase
}


input.addEventListener('input',(event)=>{
    let uppercasevalue = (event.target.value).toUpperCase();
    let lowercasevalue = (event.target.value).toLowerCase();
    camelcase.innerText = tocamelcase(event.target.value)
    pascalcase.innerText = topascalcase(event.target.value)
    kebabcase.innerText = tokababcase(event.target.value)
    trimcase.innerText = totrimcase(event.target.value)
    uppercase.innerText = uppercasevalue;
    lowercase.innerText = lowercasevalue;   
    
    
})