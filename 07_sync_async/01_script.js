
const starter = function(){
    console.log("Present sir", Date.now());
}

// setInterval(starter, 1000)
document.querySelector("#start").addEventListener("click", function(){
    const interval = setInterval(starter, 1000)
    document.querySelector("#stop").addEventListener("click", function(){
        clearInterval(interval)
    })
})

// 

