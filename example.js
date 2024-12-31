// console.log(this)

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const fruitCount = {};

// fruits.forEach((item)=>{
//     itemCount = 0
//     for(let i=0;i<fruits.length;i++){
//         if(fruits[i] === item){
//             itemCount++
//             fruitCount[item] = `${item} = ${itemCount}`;
//         }
//     }
// })

// console.log(fruitCount)


const fruits = ['apple', 'banana', 'cherry'];

let totalLength = 0;

fruits.forEach((item)=>{
    totalLength +=item.length 
})
console.log(totalLength)