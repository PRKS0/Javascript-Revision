
// document object model

// single element object: getElementById, querySelector
// html collection: getElementByClassName
// node list: querySellectorAll

document.getElementById("container")    // single element object
document.getElementById("container").id   // give id

document.getElementsByClassName("container")    // html collection
document.getElementsByClassName("container").className    // give class

document.getElementById("container").getAttribute('id')
// document.getElementById("container").setAttribute('class', 'container title')      // it overwrite the previous attribute so we have to give again when giving new one

const collector = document.getElementById("container")
collector.style.backgroundColor = "blue"


/* 
notes
    textContent: give all the text content that is available (we can have a display:none text)
    innerText: give only visible text content 
    innerHTML: give all the html content inside the targeted box
*/

// can give all css selectors
// querySelector('h2') : give the first h2
// querySelector('#collector') : selecting id
// querySelector('.collector') : selecting class
// querySelector('p:first-child') : selecting the first child of p
// querySelector('input[type=password]') : can select other tags like this


/*
nodelist: like a array but do not have all the array's methods, have forEach method, but do not have map

tempList = document.querySelectorAll('li')
tempList[0].style.color = 'green'   // selecting the first child of nodelist
*/