// creating new li and appending it
// this method is more struggling because of tree traversal
function addLi (content){
    const element = document.createElement("li")
    element.innerText = content
    document.querySelector("#language").appendChild(element)
}

addLi("python")
addLi("cpp")


// more optimized method. tree do not traversed
function addOptiLi(content) {
    const element = document.createElement("li")
    element.appendChild(document.createTextNode(content))
    document.querySelector("#language").appendChild(element)
}

addOptiLi("rust")
addOptiLi("Java")

// changing the 2nd li with replaceWith
const secLi = document.querySelector("li:nth-child(2)")
const newLi = document.createElement('li')
newLi.appendChild(document.createTextNode("language changed"))
secLi.replaceWith(newLi)

// using outerHTML
const firstLi = document.querySelector("li:first-child")
firstLi.outerHTML = "<li>no lang</li>"


// removing li
const lastLi = document.querySelector("li:last-child")
lastLi.remove()