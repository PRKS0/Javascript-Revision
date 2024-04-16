
const name = "Prakash"
const age = 16

console.log("Hello my name is ", name, "and I am ", age, "years old");
// string interpolation - good method
console.log(`Hello, my name is ${name} and I am ${age} yeas old`);

// another method to declare string
const location = new String('Kathmandu')    // store in object 
console.log(location);
console.log(location[0]);
console.log(location.length);
console.log(location.toUpperCase());  // and like this we can use different prototype but the original string is not changed cause it is stored in static memory

console.log(location.charAt(5));
console.log(location.indexOf('a'));
console.log(location.substring(0, 5)); // end index not included
console.log(location.slice(-9, 4)); // same as substring but can also give negative index

const anotherStr = "   hacker      hero    "
console.log(anotherStr.trim());             // only work for white spaces and lines
console.log(anotherStr);

// replace
const url = "https://www.google.com/*20prakash"
console.log(url.replace('*20', '-'));

console.log(url.includes('prakash'));

//split
const companyName = "stdio-lxduo-pvt-ltd"
console.log(companyName.split('-', 2));   //split(seperator, limit)  and return array