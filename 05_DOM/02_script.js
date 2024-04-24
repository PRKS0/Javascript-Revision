
// const tempList = document.getElementsByClassName("list-item")
// console.log(tempList);

// we can not use htmlCollection like nodeList so at first we have to change htmlCollection to array

// const myListArr = Array.from(tempList)
// let i = 1
// myListArr.forEach( (li) => {
//     li.innerText = `one ${i}`
//     i++
// } )


// parent-child cases

// const parent = document.querySelector(".list")
// console.log(parent);

// children of parent 
// console.log(parent.children);       // give htmlCollection
// console.log(parent.children[0]);    // selecting the first child
// console.log(parent.children[0].innerText);    // accessing the text

// using for loop in nodeList
// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerText);
// }

// other html COllection properties
const list = document.querySelector(".list")

const child1 = list.firstElementChild
child1.parentElement        // accessing the parent element with child element
child1.nextElementSibling        // accessing the next child element 


// childNodes: give all the lists and also the line break as "text", and also comment is added with it's line break
console.log(list.childNodes);   

