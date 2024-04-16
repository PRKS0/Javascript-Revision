let mc_heros = ["spiderman", "ironman", "thor"]
let dc_heros = ["batman", "superman", "flash"]

//mc_heros.push(dc_heros)         // this push the whole array inside the array
//console.log(mc_heros);
//console.log(mc_heros[3][0]);    // accessing the value of insider array

let allHeros = mc_heros.concat(dc_heros)        // return new array which store the concated elements of both array
console.log(allHeros);

//another method to concat arrays
const all_New_Heros = [...dc_heros, ...mc_heros]
console.log(all_New_Heros);

let deep_array = ["earth", ["asia", ["nepal", "india", "china"], "europe", "africa"], "mars", "venus"]      //here we have array inside arrya nd also innner array
let flatted_array = deep_array.flat(1)
// let flatted_array = deep_array.flat(Infinity)
console.log(flatted_array);



// converting string into array
console.log(Array.isArray("hacker"));
console.log(Array.from("hacker"))       // can't give value like this ("hacker", "prakash") so, use Array.of(), -------Array.from(arrayLike[, mapFn[, thisArg]])

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

