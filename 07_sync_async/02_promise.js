// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// most of the time we consume promises but let's learn how to create it
// pomise required a callback function and this func have two parameters; resolve and reject.
const readingData = new Promise(function (resolve, reject) {
    // any async task
    setTimeout(function () {
        console.log("inside promise");
        resolve()
    }, 1000)
})


// consuming prmomise
// .then has directly connection with resolve. but we have to execute the resolve() method in prmoise. We can pass data from resolve and get that data in callback func of ".then"
readingData.then(function () {
    console.log("promise consumed");
})


// shortcut method without holding in variable

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("doing async tasks");
        resolve()
    }, 2000)
}).then(function () {
    console.log("async task resolved");
})


// passing data from resolve()

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('doing async task ........');
        let userData = { name: "prakash", age: 18, mail: "user@gamil.com" }
        resolve(userData)
    }, 3000)
})

promise2.then(function (data) {
    console.log(data);
})



// resolve and reject

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ name: "praksh", address: "kohalpur" })
        } else {
            reject("something went wrong")
        }
    }, 4000)
})

promise3.then(function (data) {
    console.log(data);
})
    .catch(function (error) {
        console.log(error);
    })


// when we return the value from .then function where does that value goes
// chaining of .then
// .finally execute both after either resolve or reject

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let err = false
        if (!err) {
            resolve({ name: "darshan", age: "6" })
        }
        else {
            reject("error occured on finding data")
        }
    }, 6000)
})

promise4.then(function (userData) {
    console.log("reading the euser data in first .then");
    return (userData.name)
})
    .then(function (name) {
        console.log(`data passed to 2nd .then, data: ${name} `);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () {
        console.log("async task finally completed")
    })


// there are two ways to consume a promise, first one is with (.then) and secind one is async-await
// async can not handel the error directly that means, can't handle the reject part of promise

const promise5 = new Promise(function (resolve, reject) {
    let err = true
    setTimeout(function () {
        if (!err) {
            resolve("async task completed in promise 5")
        }
        else {
            reject("promise5: failed to read data")
        }
    }, 5000)
})

// let's consume the promise 5 with async await

async function consumePromise5() {
    // const response = await promise5
    // console.log(response);

    // error handling in async await
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5()
