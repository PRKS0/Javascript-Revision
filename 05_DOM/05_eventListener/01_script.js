
// adding color to 6 boxes 
const boxes = document.querySelectorAll(".box")
const boxArr = Array.from(boxes)

const boxBgColor = [
    "#F08080", // Light Coral
    "#FFDAB9", // Soft Peach
    "#AFEEEE", // Pale Blue
    "#FFFACD", // Light Lemon
    "#C8A2C8", // Soft Lilac
    "#FFE4E1", // Misty Rose
    "#E0FFFF"  // Light Cyan
];


let i = 0
for (const box of boxArr) {
    box.style.backgroundColor = boxBgColor[i];
    i++
}


// we can add event listener from directly from html like this: <div class="box" id="box1" onclick="alert("clicked")"></div>.
// also we can do from js like this

// boxArr[0].onclick = function (){
//     alert("box 1 clicked")
// }


// but below method is more reliable - addEventListener()

// boxArr[0].addEventListener("click", (e)=>{
//     alert("box1 clicked")
// })

// boxArr.forEach((box, index) => {
//     box.addEventListener("click", (e) =>{
//         alert(`box${index + 1} clicked`)
//     })
// })


// syntax of eventLitener = element.addEventListener("event", function(event){}, false)

// things to learn of event properties:
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// c;oemtX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode



// false value in eventListener is about event propagation: event Bubbling and event caputring

const container = document.querySelector(".container")

// container.addEventListener("click", (e) =>{
//     console.log("container clicked");
// }, true)
// boxArr[0].addEventListener("click", (e) =>{
//     console.log("first box clicked");
//     e.stopPropagation()
// }, true)

// summary(false) Bubbling: when we click on the box, both box and container are clicked. eventListener of box is activated first and the container later.

// summary(true) capturing: when we make value true on container, and then if we click on the container's child box, the eventListener of container will activated first and then only child-box. 

// stopPropagation: stop the event bubbling and capturing. Separate the parent and child

// preventDefault will prevent the activity when event occured. like this link of google will not be followed
// const link = document.getElementById("link")
// link.addEventListener("click", function(e){
//     e.preventDefault()
//     console.log("default prevented");
// })


// (which children make happen the event for container) it's parent node will given
// box ----> container
// container ----> body
container.addEventListener("click", function(e){
    console.log(e.target.parentNode)
    // to remove the target or target's parent
    const removeIt = e.target
    console.log("target removed");
    removeIt.remove()
})

// removing: there is also method called removeChild(child) to remove the child of target