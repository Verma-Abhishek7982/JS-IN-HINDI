const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //Spreading in array just as concatenate 
// spread mean glass fek dia => (drop drop drop) same by using ...

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flat make only a single array of depth 1.2,3 or for all we do infinity
console.log(real_another_array);



console.log(Array.isArray("Abhishek"))
console.log(Array.from("Abhishek"))
console.log(Array.from({name: "Abhishek"})) // interesting here gives the empty array as using object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// using array.from or array.of is same as both making any variable, string etc => array