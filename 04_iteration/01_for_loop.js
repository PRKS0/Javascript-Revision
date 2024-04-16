
// for loop

// for (let index = 1; index <= 10; index++) {
//     console.log(index);;
// }


// table from 1 to 10

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${i*j}`);
    }
    // console.log("\n");
}


// for loop for array

const myArray = ["Prakash", "Darshan", "Nishant"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}



// break: end the loop when condition match and continue: skip that loop and jump to next loop

const myNum = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let i = 0; i < myNum.length; i++) {
    const element = myNum[i];
    if(element%2 != 0){
        continue
    }
    else{
        console.log(`even number detected: ${element}`);
    }
    
}

for (let i = 0; i < myNum.length; i++) {
    const element = myNum[i];
    if (element%5 == 0) {
        console.log(`Multiple of 5 detected`);
        break
    }
    else{
        console.log(element);
    }
    
}
