// Write a function that takes two arrays as input and returns a new array that is the combination of the two input arrays, with elements from the first array followed by elements from the second array.

function merger(arr1, arr2){
    const mergedArr = [...arr1, ...arr2]
    return mergedArr
}

console.log(merger([1, 2, 3], [4, 5, 6]));