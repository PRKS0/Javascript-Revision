
// here we use a keyword "super()" instead of __proto__ or call()

class user{
    constructor(username, email, pass){
        this.username = username
        this.pass = pass
        this.email = email
    }

    encrypter(){
        return `encrypted pass: 12${this.pass}ab`
    }
}

class admin extends user{
    constructor(username, age, isEligilbe, pass, email){
        super(username, email, pass)        // we should provide all the parameter of user(parent)
        this.age = age
        this.isEligilbe = isEligilbe
    }
}

const admin1 = new admin("victor", 20, true, "hacker", "admin@123.com")
console.log(admin1.encrypter());

// where we do not have to use call, and provide this. all things happens with super()