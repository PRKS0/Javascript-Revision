// creating new element 
const div = document.createElement("div")
div.innerText = "hacker hero"       // this will replace the innerText

// we can also do this to give innerText
// const addText = document.createTextNode("learning DOM")
// div.appendChild(addText)

// adding properties like class, id 
div.className = "container"     // adding class attribute

//giving other attribute
div.setAttribute("title", "title1")

//giving other styles
div.style.backgroundColor = "blue"

// but this created div is not visible in webpage because it is located only inside memory. 
// let's attach the div
document.body.appendChild(div)
console.log(div);