const data1 = {
    username: "prakash",
    website: "youtube",
    greeder: function(){
        console.log(`${this.username}, welcome to ${this.website}`);
    }
}

// data1.greeder        // only give reference
data1.greeder()
data1.username = "Tanka"
data1.greeder()

console.log(this);      // in node environment, current contex is {} but in browser engine current contex is window{}

// normal function and arrow function

const tempFunc = function(){
    console.log(this);
}
tempFunc()

const arrowFunc = () => {
    console.log(this);
}
arrowFunc()

// summary: value of this in normal function calling depend on how function is used or defined. If function is used as method in object then "this" refer to the obect. But "this" inside arrow function refer to the contex/block outside the function. it can be global of node, or window of browser or any other contex of block.


// arrow function    () => {}

//explicit return
const func1 = (num1, num2) => {
    return (num1 + num2)
}
console.log(func1(3, 4))

// implicit return: no need to write return 
const func2 = (num1, num2) => (num1 + num2);
console.log(func2(5, 5));

// implicit and object
// const func3 = () => {user: "prakash"}   // wrong approach
const func3 = () => ({user: "prakash"})   // right approach
console.log(func3());
