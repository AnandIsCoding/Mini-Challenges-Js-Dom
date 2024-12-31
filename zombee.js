const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35]

const fixedTemperatures = []
const healthyPeople = []
//increase each value by 2
celsiusTemperatures.forEach((item,index)=>{
    item += 2
    let farenheit = Math.ceil(item * (9/5) + 32)
    fixedTemperatures.push(farenheit)
    if(farenheit < 104){
        healthyPeople.push(farenheit)
    }
})
console.log(fixedTemperatures)
console.log(healthyPeople)

let healthy = fixedTemperatures.filter((item,index)=>{
   return item < 98.6
})
console.log(healthy)

//°F = °C × (9/5) + 32. 

const warehouse = [86, 76, 98, 50, 12, 98, 85, 84, 81]
let totalfoodinkg = 0
let totalfood = warehouse.map((item,index)=>{
     totalfoodinkg += item * 0.00220462 // kilograms per pound
    return item * 16 // pounds per ounce
})
console.log(totalfoodinkg)