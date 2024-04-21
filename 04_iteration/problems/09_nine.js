
// Write a function that takes two arrays as input and returns a new array containing the elements that are common to both input arrays.

function commonFinder (arr1, arr2){
    let commonElements = []
    for (const item of arr1) {
        if (arr2.includes(item)) {
            commonElements.push(item)
        }
    }
    return commonElements
}

const num1 = [1, 2, 3, 4, 5]
const num2 = [4, 5, 6, 7, 8]
console.log(commonFinder(num1, num2));