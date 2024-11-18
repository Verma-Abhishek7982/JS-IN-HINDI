let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score)); =>both method is used to know the type

let valueInNumber = Number(score) // conversion from string to number by using capital N in Number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN(Not a Number)
// null gives => 0
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// results=>
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value // new variable negValue stores the negative (-) of the value i.e, -3 
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 // concatenation using (+) symbol
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); gives => 122 in result
// console.log(1 + 2 + "2"); // not good practice gives=> 32

// console.log( (3 + 4) * 5 % 3); //better way

// console.log(+true); // gives => 1 not #true
// console.log(+""); // gives 0 as we know thats empty string returns 0

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; // preIncreament
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion