
// Write a function that takes an array as input and returns an object where each key is an element from the array, and the value is the frequency of that element in the array.

let obj = {}
function frequency(arr){
    arr.forEach( (element) => {
        if (obj.hasOwnProperty(element)) {
            obj[element] += 1
        }
        else{
            obj[element] = 1
        }
    });
    return obj
}


const num = [1, 1, 2, 2, 1, 1, 2, 2, 3, 4, 3, 5]
console.log( frequency(num) );
