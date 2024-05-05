
// Math.PI give the value of pi, but can we change it? let's try

console.log(Math.PI);
Math.PI = 500;
console.log(Math.PI);
// yes it is not changable but why??

// actually Math is inbuilt object and PI is property and 3.14.... hardcoded value.
// we have some property in object which make the value of property/key unchangable.

const discripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discripter);
// property "writable" is false, so we can not change the value of PI

//sor for Math object, JS developer do not give access to change the value of property like "writable", "enumerable", "configurable", 

// user defined object also have these property and their values are true, but we can change it to false so that we can not change the value of any property/key
const myObj = {
    name: "JS",
    period: "12 months",
    project: "school web page"
}

console.log(Object.getOwnPropertyDescriptor(myObj, "name"));        // user define object also have these properties(writable, ...)

// now let's change those properties of property name
Object.defineProperty(myObj, "name", {
    writable: false,
    enumerable: false,
    configurable: false
}) 

myObj.name = "prakash"          // yes we make it unchangable but do not throw error
console.log(myObj);

// we can make any key :value un iterable using enumerable property false.

for (const key in myObj) {
    console.log(key);       // here the key "name" is not iterable
}