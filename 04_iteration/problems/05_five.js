
// Write a function that takes an array of numbers as input and returns the maximum number in the array.

function maxNumFinder(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(maxNumFinder([100, 2, 3, 4, 5, 6]));