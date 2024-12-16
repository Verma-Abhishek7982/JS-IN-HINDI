// while and do while loop
let i = 0;
while (i <= 10) {
    console.log(`value of i is ${i}`)
    i = i + 2;
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

let v = 1;
do {
    console.log(`my hero ranking is ${v}`)
    v++;
} while (v <= 0);