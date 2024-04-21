// Write a function that takes an array of strings and an integer n as input, and returns a new array containing only the strings that have a length greater than n.

function findLongStrings(arr, n) {
    let modifiedArr = []
    for (const str of arr) {
        if (str.length >6) {
            modifiedArr.push(str)
        }
    }
    return modifiedArr
}

const name = ['prakash', 'darshan', 'sandesh', 'nishant', 'max', 'leo', 'stdio', 'sandy', 'hacker Hero']
console.log(findLongStrings(name, 6));