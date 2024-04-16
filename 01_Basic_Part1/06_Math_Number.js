// regular method to define a number

const num1 = 100    // js detect it as number
console.log(num1);
const num2 = new Number(100)    // we define it as a number
console.log(num2)

console.log(num2.toString());
console.log(num2.toFixed(3));

const num3 = 123.856
console.log(num3.toPrecision(3));
console.log(num3.toPrecision(4));

const num4 = 1000000
console.log(num4.toLocaleString());
console.log(num4.toLocaleString('en-IN'));

// maths in JS
console.log(Math.abs(-12)); // change the negative number into positive
console.log(Math.round(5.4));
console.log(Math.ceil(9.2));    // choose the bigger round
console.log(Math.floor(9.9));   // choose the smaller round
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 0));   // give the lowest num
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 0));   // give the highest num

//random number in js (generate number 0 and greater than 0 but less than 1(1 excluded))
console.log(Math.random());
const max = 75
const min = 25
console.log(Math.floor(Math.random()* (max - min + 1)) + min);