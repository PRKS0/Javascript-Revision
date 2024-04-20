
// Given an array of objects and a key, group the objects by the value of the specified key.

function groupBy(arr, key) {
    // Create an empty object to store the groups
    const grouped = {};

    // Iterate through each object in the array
    arr.forEach((obj) => {
        // Get the value of the specified key from the current object
        const keyValue = obj[key];

        // Check if the key already exists in the grouped object
        if (!grouped[keyValue]) {
            // If the key does not exist, initialize it with an empty array
            grouped[keyValue] = [];
        }

        // Add the current object to the array corresponding to the key
        grouped[keyValue].push(obj);
    });

    // Return the grouped object
    return grouped;
}

// Example usage
const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
];
console.log(groupBy(data, 'age'));
// Output:
// {
//     '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//     '30': [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
// }


// Output:
// {
//     '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//     '30': [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
// }

// const myObj = {
    
// }