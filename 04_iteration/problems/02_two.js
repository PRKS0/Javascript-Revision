// Write a function that takes an array of numbers as input and returns the sum of all the elements in the array.


function summer (arr){
    let sum = arr.reduce( (acc, curVal) => {
        return acc + curVal
    }, 0)
    return sum;
}

console.log(summer([1, 2, 3, 4, 5]));