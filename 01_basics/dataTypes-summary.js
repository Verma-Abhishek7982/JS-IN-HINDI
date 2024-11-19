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

// stack (primitive) heap (Non premitive)
let myAccountId = "Abhishek@googledotcom"
let anotherAccount = myAccountId
anotherAccount = "hello world" // using stack memory

console.log(myAccountId)
console.log(anotherAccount)

//heap memory
//as objects using heap memory so call by reference
let userOne = {
    emailId: "abhishek@2003.com", //object is storing data in key value pair
    upiId: "abhishek@ybl" // next line is proceed after using comma
}
let userTwo = userOne

//let change in userTwo
userTwo.emailId = "abhi262003@google.com" //objects keys is accessed by using (.) dot

console.log(userOne.emailId)
console.log(userTwo.emailId) //as changing any one is change the real one as we provide userTwo to the
//referece of the userOne 

