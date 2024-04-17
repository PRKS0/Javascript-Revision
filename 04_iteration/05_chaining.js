
// chaining: use property(map,filter) to array and again use property and ......
// first property will return array to the second and second will return to the third, and at last the modified array will return to the variable

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const modifiedNumbers = numbers
    .filter((num) => num % 2 == 0)
    .map((num) => num * 2)
console.log(modifiedNumbers);