// nested object
const youUser = {
    email: "some@gmail.com",
    name: {
        fullname: {
            firstName: "Prakash",
            lastName: "Budha Chhetri"
        },
        nickname: "prks"
    },
    address: "kathmandu"
}

// console.log(youUser.name.fullname.firstName);

// method to concatenate objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const mixObj1 = { obj1, obj2}
const mixObj2 = {...obj1, ...obj2}
const mixObj3 = Object.assign(obj1, obj2)       // assign the object 2 in obj1(obj1 modified)this will open the first nest only
// console.log(mixObj1);
// console.log(mixObj2);
// console.log(mixObj3);
// console.log(obj1);

// in mixObj3, the obj1 is modified so to control/overcome this, we add empty obje{} during assign
const data1 = {name: "prakash", email: "some@gmmail.com"}
const data2 = {address: "kathmandu", contact: 98766534}

const totalData = Object.assign({}, data1, data2)
// console.log(data1);                             // here data1 is not modified
// console.log(totalData);

// summary: Object.assign(target-object, source1,source2, source3). we keep empty object as target so that the source1 is not modified


//when we get data from server, we get in this form
const user = [
    {
        id: 1,
        email: "some1@gmail.com"
    },
    {
        id: 2,
        email: "some2@gmail.com"
    }
]

// we can access data like this or by using map
console.log(user[0].email);
console.log(user[1].email);



// to access the keys and values of object  -------- we get keys in the form of array, but when we check the type of array we get object
const objKeys = Object.keys(data1)
const objValue = Object.values(data1)

console.log(objKeys);
console.log(typeof objKeys);

// entries  => get every set of key and value in array
console.log(Object.entries(data1));

// to check whether the object include specific key(no values)
console.log(data1.hasOwnProperty('prakash'));



// destructuring of object:
const fruit = {
    name: "apple",
    price: "35",
    market: "panga buspark"
}
console.log(fruit.name);

const {name, market} = fruit        // this make shortcut to use the key-value
// we can specify the key-name further
const {price: mulya} = fruit
console.log(name);
console.log(market);
console.log(mulya);

