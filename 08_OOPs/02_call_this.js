
// when we have function and we can use "this" but what if we have another sub-function in main function, and inside that function "this" will give the context of global execution context(node-emptyObejct or window-object).

const user = function(name, contact, address){
    this.name = name
    this.contact = contact
    this.address = address
}

const userCreator = function(username, age){
    this.age = age
    // suppose we are calling the above function and want to create username for this contex
    // user(username)  // this will create username in user context, not in userCreator, so need call
    // user.call(username)     // this will not create username in userCreator context, we have to pass "this" so that user func will use context of userCreator func. it will give the user func's variable also
    user.call(this, username)
}
const user1 = new userCreator("prakash", 1000)
const user2 = new user("darshan", 20)
console.log(user1);
console.log(user2);