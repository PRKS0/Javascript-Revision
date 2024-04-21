
// Write a function that takes an array as input and returns a new array with duplicates removed.

function removeDuplicate(arr) {
    let onlyOriginal = []
    for (const item of arr) {
        if (!(onlyOriginal.includes(item))) {
            onlyOriginal.push(item)
        }
    }
    return onlyOriginal
}
const myArr = [1, 2, 3, 4, 2, 3, 1, 5]
console.log(removeDuplicate(myArr));

