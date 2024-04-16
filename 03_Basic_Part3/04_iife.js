// IIFY: Immediately Invoked Function Expression: Function will run without calling it and global scope will not affect here(reduce global pollution) =>    ()()    (function_defination)(function calling)

const pollutant = "plastic";        // should use semicolon before defining iife

(function controller(){     // named iify
    console.log("No global pollution");
    // console.log(pollutant);      // not accessible
})();               // should use semicolon to end the restriction

// this function will run without calling it
// we restrict the global scope inside that function but to define where to end that restriction we have to use semicolon. If we do not use semicolon, we can not use another iify later.


// arrow function inside iify
( () => {       // simple iify
    console.log("arrow function inside iify");
} )();



// how do we pass parameter to this funciton 

( (name) => {
    console.log(`My name is: ${name}`);
} )("prakash");      // should pass argument from here





// code in summary

const pollutant2 = "smoke";

( function controller(city){
    // console.log(pollutant2);         not accessible
    console.log(`Most polluted city is ${city}`);
} )("Kathmandu");

( () => {
    console.log("another polluted city");
} )();