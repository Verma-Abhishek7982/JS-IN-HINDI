const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
console.log(balance.toFixed(1)); // used to get the points or decimals values as 1 means .0, 2 means .00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //precision is imp as gives values accordingly as (4) means 
// give 123.9 doing the roundoff itself if getting (3) gives 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // ranges 0 to 1 where 1 is not included
console.log((Math.random()*10) + 1); // +1 to avoid the 0 as a floor value
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// formula to get the floor value greater then 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min)