class test {
    constructor() {
        this.name = "bind"
        this.link = "https://google.com"

        // document create a new object and "this" give the reference of that element from where event is listened. 
        // we are creating a new object so, "this" inside listener do not have access of main object (class)
        document.querySelector("button").addEventListener("click", function () {
            console.log("button clicked");
            console.log(this);
        })
    }
}

// const tester = new test()


// using bind to give reference of object of class along with object of listener 
// and we have to provide "this.function" when defining function on event listener 
// this of button is separate so, we have to use bind to pass "this" of class

class binder {
    constructor(){
        this.name = "bind tester"
        this.link = "https://youtube.com"
        document.querySelector("button").addEventListener("click", this.infoLogger.bind(this))
    }

    infoLogger(){
        console.log("button clicked");
        console.log(this.name);
        console.log(this);
    }

}

const test2 = new binder()