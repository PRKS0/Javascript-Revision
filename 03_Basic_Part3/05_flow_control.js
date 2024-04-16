// falsey values: false, 0, -0, bigint 0n, "", null, undefined, NaN
// all other values are truthy
// some special truthy values: "0", "false", " ", [], {}, function(){}


// switch case
const month = "Sept"

switch (month) {
    case "Jan":
        console.log("Happy Birthday Jan");
        break;
    case "Feb":
        console.log("Happy Birthday Feb");
        break;
    case "March":
        console.log("Happy Birthday March");
        break;
    case "April":
        console.log("Happy Birthday April");
        break;
    case "May":
        console.log("Happy Birthday May");
        break;
    case "June":
        console.log("Happy Birthday June");
        break;
    case "July":
        console.log("Happy Birthday July");
        break;
    case "Aug":
        console.log("Happy Birthday Aug");
        break;
    case "Sept":
        console.log("Happy Birthday Sept");
        break;
    case "Oct":
        console.log("Happy Birthday Oct");
        break;
    case "Nov":
        console.log("Happy Birthday Nov");
        break;
    case "Dec":
        console.log("Happy Birthday Dec");
        break;

    default:
        console.log("out of the range");
        break;
}

// if we do not use break, all case automatically execute after the matching case (except default)

// check whether array is empty or not
const myArr = []
if (myArr.length === 0) {
    console.log("arrya is empty");
}

// check whether object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {       // keys are in form of array, and we check the length of array
    console.log("object is empty");
}


// some imporatnt cases: false == 0, false == "", 0 == ""
if (false == 0) {
    console.log("how is this even possible");
}



// Nulllish Coalescing Operator (??): null, undefined
// sometime we will get two values from database, and value can be null or undefined. So we want to ignore null or undefined and assign othervalue

let val1;
// val1 = 5 ?? 10                       // assign 5
// val1 = null ?? 11                    // assign 11
// val1 = undefined ?? 12                // assign 12
val1 = undefined ?? 20 ?? 30            // assign the first one
console.log(val1);


// terniary operator: condition ? true : false
(5<10) ? console.log("5 is lesser") : console.log("5 is greater");