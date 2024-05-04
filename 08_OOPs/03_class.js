
// syntax: class class_name {}
// constructor inside calss will be executed when we add new keyword. 

class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    printer() {
        return `my name is ${this.username} and my email is ${this.email}, And secretly my pass is ${this.password}`
    }
    modifyName() {
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new user("prakash", "someone@gmail.com", "123@123")
console.log(user1.printer())
console.log(user1.modifyName())

// behind the scene

// function user(username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
// }
// user.prototype.printer = function(){
//     return `my name is ${this.username} and my email is ${this.email}, And secretly my pass is ${this.password}`
// }
// user.prototype.modifyName = function(){
//     return `${this.username.toUpperCase()}`
// }

// const user2 = new user("darshan", "dar@123.com", "abcabc")
// user2.printer()