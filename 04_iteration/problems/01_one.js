// Given an array of integers, calculate the product of all the numbers in the array and return the result. Make sure to handle cases where the array contains zero

const integer = [1, 2 , 0, 4, 5, 6]
// const integer = []

// if (integer.length == 0) {
//     console.log("please give num in array");
// } else {
//     const product = integer.reduce( (acc, currVal) => {
//         return acc * currVal
//     },1 )
//     console.log(product);
// }

let collector = 1;

if (integer.length == 0) {
    console.log("please give items to the array");
} 
else {
    for (const element of integer) {
        if (element == 0) {
            console.log("zero detected and we skip it");
            continue
        } else {
            collector = collector * element
        }
    }
    console.log(collector);
}