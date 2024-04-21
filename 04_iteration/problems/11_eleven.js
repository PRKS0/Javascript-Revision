
// Write a function that takes an object as input and returns an array of key-value pairs (as objects) where the values are even numbers.

function findEvenValues(obj) {
    let collector = []
    for (const key in obj) {
        if (obj[key]%2 == 0) {
            let objCollector = {evenKey: key, evenValue: obj[key]} 
            collector.push(objCollector)
        }
    }
    return collector
}

const sampleObj = { a: 1, b: 2, c: 3, d: 4 };
console.log(findEvenValues(sampleObj));
// Output: [{ key: 'b', value: 2 }, { key: 'd', value: 4 }]
