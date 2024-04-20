
// Write a function that takes an array of numbers as input and returns a new array containing only the even numbers from the input array.

function filterer(arr){
    let evenOnly = arr.filter( (arr) => {
        return arr%2 == 0
    })
    return evenOnly
}
console.log(filterer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));