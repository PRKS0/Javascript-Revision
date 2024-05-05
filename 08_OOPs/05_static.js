
// sometime we have to prevent the use of method of class, so we for this, we use static
// and static prevent to all the childs(inherit)

class user {
    constructor (username){
        this.username = username
    }

    static printMe(){
        console.log( `username: ${this.username}`)
    }
}

const user1 = new user("prakash")
// user1.printMe()         // can't find the func