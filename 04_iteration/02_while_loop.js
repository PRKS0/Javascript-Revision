
// while

let index1 = 1;
while (index1 <= 10) {
    console.log(index1);
    index1 = index1 + 2
}

const myArr = ["Prakash", "Darshan", "Namaste"]
let index2 = 0;
while (index2 < myArr.length) {
    console.log(myArr[index2]);
    index2++
}



// do while: first execute and then check loop
let score = 11
do {
    console.log(`score: ${score}`);
    score++
} while (score <= 10);