// // fetch api and promises

// this will fire first, but finish second
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((json) => console.log(json))


    //this fires second whilst the first is running
    console.log('hello');





// // asynnc and await

// const getTodo = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then((res) => res.json)
//         .then((data) => console.log(data))
// }

// const getodo = async () => {
//    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    const data = await response.json()
//    console.log(data);
// }

// getTodo()

// getodo()




// Arrow functions = () => {}

// // old style:
// function greetOne() {
//     console.log('hello');
// }

// const greetTwo = () => {
//     console.log('hello again');
// }

// // invoke the functions:
// greetOne()

// greetTwo()

// names.map(() => 'hello')


// // template strings
// const name = 'shaun'
// const job = 'developer'

// const string = `Hi, my name is ${name} and I am a ${job}`

// console.log(string);

// console.log('Hello my name is ' + name + ', and my job is a ' + job )

// console.log(`Hello my name is ${name} and my job is a ${job}`);




// // // spread syntax:

// const ninjas = ['shaun', 'mario', 'peach']
// const blog = { title: 'new blog', author: 'bowser' }

// // console.log(...ninjas)

// const idBlog = {...blog, id: 1}

// console.log(idBlog);






// // filter and map methods

// const ninjas = [ 
//     {name: 'shaun', belt:'black'},
//     {name: 'mario', belt:'orange'},
//     {name: 'yoshi', belt:'black'},
//     {name: 'luigi', belt:'green'}
// ]


// // filter method: filter items out, non-destructive
// const blackBelts = ninjas.filter((ninja) => {
//     return ninja.belt == 'black'
// })

// console.log(blackBelts);


// // map method

// const names = ninjas.map((ninja) => {
//     return ninja.name
// })

// console.log(names);



// import and export

// import { ninjas, greet } from './ninjas.js'


// console.log(ninjas)

// greet()






// destructuring:

// // const person = {
// //     firstName: 'yoshi',
// //     age: 30,
// //     favColor: 'green'
// // }

// // // traditional way to make constants from an object
// //     // const firstName = person.firstName
// //     // const favColor = person.favColor


// // // destructure the object and set as constants
// // const { firstName, favColor, age } = person;

// // console.log(firstName, favColor, age);




// // const nums = [7,9,3,5,2]

// // const [a,b,c] = nums

// // console.log(a,b,c,b,a)


// // const getCalculations = (a,b) => {

// //     return {
// //         sum: a + b,
// //         diff: Math.abs(a - b),
// //         product: a * b
// //     }
// // }

// // const {sum, product, diff} = getCalculations(7, 9)

// // console.log(sum, product, diff);


// // const doSomething = ({ name }) => {

// //     console.log(name);
// // }

// // doSomething( {name: 'keith', age: 40 })