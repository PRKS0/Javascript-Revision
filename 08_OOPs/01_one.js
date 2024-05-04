// javascript is more prototype based lang. Yes, it has classes but it is syntatic sugar only so that OOP oriented programmer do not feel something missin gout.

// OOP: object oriented programming
// object: collection of properties and method

// suppose we have created an object to store user data. What if we have to store data of different user, should we create new object for each array?
// to solve this, we have constructor function

// new keyword is a constructor function in js

// using this 
function userData (name, roll, address){
    this.name = name
    this.roll = roll
    this.address = address
    // return (`user name: ${this.name} roll: ${this.roll} address: ${this.address}`);
    // return this
}


// now we can create multiple instances 
const user1 = new userData("prakash", "12", "mars")
const user2 = new userData("darshan", "20", "nowhere")


// here we create a new method and it is linked with main func because of "new"
userData.prototype.displayInfo = function(){
    console.log(`${this.name}, ${this.roll}, ${this.address}`);
}

// console.log(user1);
// console.log(user2);


// user1.displayInfo()

// about __proto__ . we can inherit the property of one object to other
//  and this is called prototypal inheritance but this is old method(outdated0)
const nation = {
    language: "nepali",
    nationality: "nepali"
}

const province = {
    minister: "someone",
    project: "hydropower"
}

const local = {
    population: 13000,
    __proto__: province
}

// console.log(local.minister);

// modern syntax
Object.setPrototypeOf(province, nation)         // province will consume property of nation
// console.log(province.language);     



// creating a method which will applied to all the string
const userName = "prakash      "
console.log(userName.length);

String.prototype.realLength = function (){
    console.log(`actual lenght is: ${this.trim().length}`);
}

userName.realLength()
"    hacker          ".realLength()