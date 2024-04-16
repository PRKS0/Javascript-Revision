// two ways to define objects
// constructor: singleton object  => object.create
// literal: non-singleton object 

let profile1 = {
    name: "Prakash",                        // we can put key inside " "
    age: 18,
    contact: 123456789,
    address: "Kathmandu",
    isLoggedIn: true,
    "marital status": "unmarried"           
}

// way to access the value
console.log(profile1.name);
// console.log(profile1."marital status"); // can only accessed by another method

// anoter way to access value
console.log(profile1["name"]);              // here we have to put key inside " "
console.log(profile1["marital status"]);

// changing the value 
profile1.name = "hacker hero"

// adding new key value pair
profile1.gender = "male"

// we can make our object value unchangable
Object.freeze(profile1)


// how to use symbol as key in object
const mySymb = Symbol("id")

const profile2 = {
    name: "hacker hero",
    [mySymb]: 123123,
    mySymb: 321321                      // wrong approach, this is not symbol
}

console.log(profile2[mySymb]);
console.log(profile2["mySymb"]);

profile2.gender = "Male"
console.log(profile2.gender);

// adding funciton to the object
profile2.greeting = function(){
    console.log(`Hello world, This is ${this.name}`);       // use this instead of object name
}

profile2.greeting()
profile2.greeting                           // we get only reference of fcuntion, function not executed
// console.log(profile2.greeting());        // this give undefine
