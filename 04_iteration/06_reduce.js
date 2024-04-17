
// reduce: reduce to single value operating the all values of array
// array.reduce(accumulator, currentValue) => accumulator +  currentvalue, initialValue
// for the first loop, itnitialValue is assigned as summed. 
// passed value for acc will be used for first loop only

const num = [1, 2, 3, 4, 5]

const initialValue = 0
// const sumation = num.reduce( (acc, currVal) => acc + currVal, initialValue )
const sumation = num.reduce( function (acc, currVal){
    return acc + currVal
}, initialValue )


// console.log(sumation);

// some problems
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const totalPrice = shoppingCart.map( (product) => product.price ).reduce( (acc, currVal) => acc + currVal, 0 )
const totalPrice = shoppingCart.reduce( (acc, item) => (acc + item.price), 0 )
console.log(totalPrice);
