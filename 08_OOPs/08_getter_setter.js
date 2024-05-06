
// some time we do not want to give the value of property/this.variable, so getter and setter are introduced
// when we introduce getter we have to define setter also,
// get define the value of variable when it is called outside class
// to define get, we have to set the value. We have to take the vairable name in setter for which we are setting value.
// and that func 

class user {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    set age(value){         // we have to create a func of same name as of variable, and that parameter carry the value of that same variable. and we have to use different name of variable inside setter, 
        this._age = value
    }

    get age(){          // we have to use func name same as the value we are modifying. and inside the getter, we should use the variable declared inside the setter
        // return `girl do not tell their age`
        return `${this._age.toUpperCase()}`
    }
    
    // creating getter setter for name also
    set name(value){
        this._name = value
    }
    get name(){
        return `${this._name.toUpperCase()}`
    }
}

const girl1 = new user ("pratima", "twenty")
console.log(girl1.age);
console.log(girl1.name);

// we can not access the _name, _age variable/property outside the class
// but we can use _variable in constructor because _ will be ignored.