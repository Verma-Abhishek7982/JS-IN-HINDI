const accountId = 144553 // const is fixed you cnat change it
let accountEmail = "hitesh@google.com" // 2 ways to declare a variable 1-let 2-var
var accountPassword = "12345"
accountCity = "Jaipur" // also without using let or var we can declare the variable but not prefer it
let accountState; // currently this variable cannot contain anything so its undefined

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// better to use console.table for printing all the variables using square brackets  
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])