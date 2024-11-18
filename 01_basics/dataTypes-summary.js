//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // both are numbers

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array
let myObj = {
    name: "hitesh",
    age: 22,
} // anything in curly braces is count as objects

const myFunction = function(){
    console.log("Hello world");
}
// funtions
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3