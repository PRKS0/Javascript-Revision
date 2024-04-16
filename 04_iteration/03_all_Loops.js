// we have different loops in js for object and arrays, which make our task easy.

// for of: array: no need to give index, increment, and check condition (for_of will automatically do for us)

const natural_num = [1, 2, 3, 4, 5]
for (const num of natural_num) {
    // console.log(num);
}



// for_of for string

const name = "prakash budha chhetri"
for (const char of name) {
    if (char == " ") {
        continue
    }
    else{
        // console.log(`each character: ${char}`);
    }
}

// maps: do not store duplicate values. If we give same key again, then it replace the previous value
// map is also kind of object and iterable(value can be get through loop)

const country = new Map()
country.set('NP', 'Nepal')
country.set('IN', 'India')
country.set('UK', 'United Kingdom')
country.set('NP', 'Nepal')
country.set('NP', 'No papa')

// console.log(country);

// accessing the key and value
for (const [key, value] of country) {
    // console.log(key, ':-', value);
} 


// forof for object: object is not iterable using for_of loop. use for_in loop

// for_in: basically for_in loop give the key or index of object/array
// using for_in loop for object

const myGame = {
    game1: "Freefire",
    game2: "Clash of Clan",
    game3: "Player Under Battle Ground",
    game4: "Call of Duty"
}

for (const key in myGame) {
//    console.log(`key: ${key} and value: ${myGame[key]}`);
}

// using for_in loop for Array: ----> only index is itereble

const capital = ['kathmandu', 'delhi', 'Beijing', 'London']
for (const index in capital) {
    // console.log(capital[index]);
}



// every array have property name forEach from where we can get every element of array and can do any thing with it in function.
// forEach property need a callback func which automatically take element of array as parameter
// and we do not give name of callback func

const num = [100, 200, 300, 400]

num.forEach( function (element){
    // console.log(element);
} )

// for each with arrow func
num.forEach( (element) =>{
    // console.log(element);
})

// passing already defined function
function printMe (item){
    console.log(item);
}

// num.forEach( printMe )      // only reference, not execution

// callback function have three different paremeter (item, index, array)

num.forEach( (item, index, arr) =>{
    // console.log(`item${index}: ${item} ====> ${arr}`);
} )



// complex cases like: [ {}, {}, {} ]
// we have array and different object inside it.
const people = [
    {
        name: "Prakash",
        address: "kathmandu",
    },
    {
        name: "Darshan",
        address: "Nepalgunj",
    },
    {
        name: "Nishant",
        address: "Kohalpur",
    }
]

// now we are accessing the name of every object
people.forEach( (item) => {
    console.log(item.name);
} )
