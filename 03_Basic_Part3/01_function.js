// function is block of code which do any task and can be used as many time we want

function sum(num1, num2) {
    console.log(num1 + num2);

}

// sum(3, 5)

// parameter: value passed during funciton defining
// argument: value passed during function calling

const result = sum(4, 10)
console.log("result:", result);         // we  will get undefined cause we do not return any thing from funtion



function multiplier(num1, num2) {
    return (num1 * num2)
    console.log("this code is unreachable");        // code after return is unreachable
}

const output = multiplier(3, 12)
console.log("result:", output);


// note: same variable inside funciton and same outside function can hold different values

function isLoggedIn(username = "user"){         // taking predefined value(only when argument is not passed)
    console.log(`${username} just logged in`);
}
isLoggedIn("prakash")
isLoggedIn()


// using rest operator(...) to store the given multiple argument in funciton

function cartItems(price1){             // can't store multiple parameters
    return price1       
}
console.log(cartItems(2000, 3000, 5000))

// using rest operator
function cartPrice(...price){           // parameters store in the form of array
    return price
}

console.log(cartPrice(300, 400, 500, 600));

// function func(val1, val2, val3, ....restValue){}    // also can be used like this


// passing object inside function

const user = {
    username: "prakash",
    email: "some@gmail.colm"
}

function handleObject(obj){
    console.log(`Hello I am ${obj.username} and you can contact me via ${obj.email}`);
}

// handleObject(user)
handleObject({username: "sam", email: "sam@google.com"})        // can pass like this