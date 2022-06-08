import { ninjas, greet } from './ninjas.js'


console.log(ninjas)

greet()


// const person = {
//     firstName: 'yoshi',
//     age: 30,
//     favColor: 'green'
// }

// // traditional way to make constants from an object
//     // const firstName = person.firstName
//     // const favColor = person.favColor


// // destructure the object and set as constants
// const { firstName, favColor, age } = person;

// console.log(firstName, favColor, age);




// const nums = [7,9,3,5,2]

// const [a,b,c] = nums

// console.log(a,b,c,b,a)



// const getCalculations = (a,b) => {

//     return {
//         sum: a + b,
//         diff: Math.abs(a - b),
//         product: a * b
//     }
// }

// const {sum, product, diff} = getCalculations(7, 9)

// console.log(sum, product, diff);


// const doSomething = ({ name }) => {

//     console.log(name);
// }

// doSomething( {name: 'keith', age: 40 })