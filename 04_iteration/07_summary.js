const myArr = ['python', 'java', 'javascript', 'cpp']
const myObj = {
    name: "Prakash",
    mail: "nepali@yyy.com",
    address: "kohalpur"
}

// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element);
// }

for (const i of myArr) {        // of loop give value ---- can use for 
    // console.log(i);   
}
// for (const i of myObj) {        // object is not iterable with "of" loop
    // console.log(i);
// }

for (const i in myArr) {        // in loop give key
    // console.log(i);
}

for (const i in myObj) {        // object is iterable with "in" loop --- give key
    // console.log(i);
}

myArr.forEach( (i, j, k ) => {         // give value, key, array --- but obj is not accessible for each
    // console.log(i, j, k);
} )



// filter and map: method of array, need callback function which take (currentvalue, index, array) as parameter.
const num = [100, 200, 300, 400, 500]

const filteredNum = num.filter( (value) => {
    console.log(value);
} )