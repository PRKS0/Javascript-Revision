const num = "12";
console.log(typeof(num));

const asli_num = Number(num);
console.log(typeof(asli_num));

const num2 = "12ab"
const changed_num2 = Number(num2)
console.log(typeof changed_num2);
console.log(changed_num2);

// when we change the nonnumerical string into number than it changed into number and it's type is also number but the value is NaN

const value1 = undefined
const value2 = null
const value3 = true
const value4 = false

const changed_value1 = Number(value1)   // NaN  type of NaN is Number
const changed_value2 = Number(value2)   // 0
const changed_value3 = Number(value3)   // 1
const changed_value4 = Number(value4)   // 0

console.log(changed_value1);
console.log(changed_value2);
console.log(changed_value3);
console.log(changed_value4);


// const isBoolean = 1
// const isBoolean = ""
// const isBoolean = "hacker"
const isBoolean = 500

const typeIsBoolean = Boolean(isBoolean)
console.log(typeIsBoolean);

const isString = true
console.log(String(isString));  // "true" it is


console.log('********************OPERATIONS********************');

let value = 12
let negValue = -value       // to make negative number  
console.log(negValue);

// ** => power operator
// %  => remainder operator

let name1 = "hacker"
let name2 = " hero"
console.log(name1 + name2);     // addition of strings
console.log('hacker'*5);        // this reduce NaN

console.log(1 + "2");               // = 12
console.log("1" + 2);               // = 12
console.log(1 + 2 + "3");           // = 33  first operation is with number
console.log("1" + 2 + 3);           // = 123  first operation is with  string
console.log(1 + "2" + 3 + 4);       // = 1234 


// strict check(===) check whether the given values and their data type are equal or not

