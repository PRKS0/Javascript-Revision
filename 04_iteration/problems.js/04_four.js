// Write a function that takes an object as input and returns the number of properties (keys) in the object.

let i = 0;
function countProperties (obj){
    for (const key in obj) {
        i++
    }
    return i;
}

const profile1 = {
    name: "prakash",
    age: "18",
    height: "5.8",
    qualification: "+2"
}
console.log(countProperties(profile1));