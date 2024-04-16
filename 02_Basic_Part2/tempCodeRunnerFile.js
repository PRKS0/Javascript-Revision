// Arrays: can store different types of data inside the same array, and it is resizable(can add elements later). [element1, element2, element3, .....]
//array is an object

//literal method
const myArr = [0, 1, 2, 3, 4, 5, true, "praksh", { contact: 12345, address: "kohalpur" }]
console.log(typeof myArr);

console.log(myArr[0]);      // accessing the element of array 

//shallow copy: share the same reference point and array have shallow copy  
//deep copy: do not share the same reference point

//constructor method
const arr2 = new Array(1, 2, 3, 4, 5)
const arr3 = new Array(1).fill(1)   //.way to create array with only one element
const arr4 = new Array(1)  //this will create array of size 1 not array with element '1'
console.log(arr2);
console.log(arr3);
console.log(arr4);

//array methods

const demoArray = [1, 2, 3, 4, 5]

// demoArray.push(6,7)     //add to the last, we see there is permanent change in main array while using methods. that's the heep memory
// demoArray.pop(2)         // remove the last element
// demoArray.unshift(10)    // add to the start of arary
// demoArray.shift()        // remove the first element
console.log(demoArray);

// boolean array method
console.log(demoArray.includes(10));
console.log(demoArray.indexOf(10));     //return -1 if element is not in array


const demoArray2 = demoArray.join()     // return all the value of demoArray in string to the demoArray2
console.log(demoArray2);
console.log(typeof demoArray2);


//slice, splice
console.log('***********************');
const num1 = [1, 2, 3, 4, 5, 6]
console.log(num1);

const sliced = num1.slice(0, 3)     //extract given range from without modifying original(last index excluded)
console.log(sliced);
console.log(num1);

const spliced = num1.splice(1, 2)   //extract given range with modifying original(last index is also )
console.log(spliced);
console.log(num1);