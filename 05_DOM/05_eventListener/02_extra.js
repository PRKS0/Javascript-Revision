
console.log("script attached");

const container = document.querySelector(".container")
container.addEventListener( "keydown", function(e){
    // console.log(e.type);        
    // console.log(e.timeStamp); 
    // e.preventDefault()       
    // console.log(e.defaultPrevented);        
    // console.log(e.currentTarget);
    // console.log(e.clientX);
    console.log(e.key);
} )


// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// notes
// type: give the type of event
// timestamp: at what period of time, the event happen
// defaultPrevented: it gives boolean value whichdetermine whether the preventDefault() method is used or not
// target: element from which event occur
// toElement: 
// srcElement: is same like .target(may provide the child element)
// currentTarget: only provide the parent element
// clientXY: coordinated according to the viewport(the visible area of the page)
// screenXY: coordinated according to the entire screen/display size(the visible area of the page)
// keys: give the boolean value whether the event happen with the key pressed or not

document.addEventListener("keydown", function(e){
    console.log(e.key);
    console.log(e.keyCode);
})