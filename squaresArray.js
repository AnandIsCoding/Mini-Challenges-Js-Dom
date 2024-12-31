//squares -----------------------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5];
// let squaresArray = []
// numbers.forEach((item,index)=>{
//     let square = item * item
//     squaresArray.push(square)
// })

// console.log(squaresArray)


//filter out odd numbers -----------------------------------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = numbers.filter((item)=>{
//     return item % 2 !== 0
// })

// console.log(newArr)


//product--------------------------------------------------
// const numbers = [1, 2, 3, 4, 5];
// let product = 1
// numbers.map((item,index)=>{

//     product *= item
// })
// console.log(product)




//  Given an array of numbers, create a new array that contains the squares of only the odd numbers.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let squeareOfOdd = []
// numbers.map((item,index)=>{
//     if(item %2 !== 0){
//         let square = item*item
//         squeareOfOdd.push(square)
//     }

// })
// console.log(squeareOfOdd)




 //  Given an array of objects representing products with a price property, calculate the total cost of all products after applying a 10% discount.

const products = [

{ name: 'Product 1', price: 100 },

{ name: 'Product 2', price: 200 },

{ name: 'Product 3', price: 300 }

];


// let total = 0
// products.map((item,index)=>{
//     total += (item.price * 0.9)
// })
// console.log(total)




// Given three arrays, names, ages, and cities, write a program to combine them into one array of objects where each object contains a name, age, and city property.

const names = ['Alice', 'Bob', 'Charlie'];

const ages = [25, 30, 35];

const cities = ['New York', 'Los Angeles', 'Chicago'];

// Your code here

// Expected Output: [

// { name: 'Alice', age: 25, city: 'New York' },

// { name: 'Bob', age: 30, city: 'Los Angeles' },

// { name: 'Charlie', age: 35, city: 'Chicago' }

// ]



