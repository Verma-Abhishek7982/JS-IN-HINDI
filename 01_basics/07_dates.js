// Dates

let myDate = new Date() // new date() function used to give the date with time
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // give time is milliseconds since 1st january 1970 till now

console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // give time in seconds by dividing it by 1000

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // month starting from indexing 0
console.log(newDate.getDay()); // day starting at sunday = 0 and monday = 1

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long"
})
