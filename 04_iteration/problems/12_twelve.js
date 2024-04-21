
// Write a function that takes an array of numbers as input and returns a new array containing only the odd numbers from the input array.

function filterOddNumbers(arr) {
    let oddNum = arr.filter( (item) => item%2 != 0 )
    return oddNum
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 16, 18, 21, 22, 23]
console.log(filterOddNumbers(num));