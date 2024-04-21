
// Write a function that takes an array of strings as input and returns a new array where each string is converted to uppercase.

function convertToUppercase(arr) {
    let modifiedArray = arr.map( (item) => item.toUpperCase())
    return modifiedArray
}

const name = ['prakash', 'darshan', 'sandesh', 'nishant']
console.log(convertToUppercase(name));