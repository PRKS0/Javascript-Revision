
// guessing game

const randNum = Math.floor(Math.random()* (100 - 1 + 1)) + 1
console.log(randNum);
let storeArr = []

const form = document.querySelector("form")
form.addEventListener("submit", (e) =>{
    
    e.preventDefault()

    let result = document.querySelector("#result")
    let guess = document.querySelector("#num").value
    let attemptsStore = document.querySelector("#attempts")
    let remNumEle = document.querySelector("#remNum")
    let remNum = parseInt(remNumEle.textContent)
    function effect() {
        result.style.backgroundColor = "red"; // Change the background color to red
        setTimeout(() => {
            result.style.backgroundColor = ""; // Revert the background color after 200 milliseconds
        }, 200);
    }
    
    if(remNum < 1){
        result.textContent = "no more attempts, restart game"
        effect()
    }

    else if (guess <= 0 || guess > 100) {
        result.textContent = "please guess valid number"
        effect()
    }
    else if (randNum == guess) {
        result.textContent = "Correct guess"
        effect()
    }
    else if(guess < randNum){
        result.textContent = "Enter bigger number"
        remNum = remNum - 1
        remNumEle.textContent = remNum
        effect()
        
        storeArr.push(guess)
        attemptsStore.textContent = `You past guesses: ${storeArr}`
    }
    else if(guess > randNum){
        result.textContent = "Enter smaller number"
        remNum = remNum -1
        remNumEle.textContent = remNum
        effect()

        storeArr.push(guess)
        attemptsStore.textContent = `You past guesses: ${storeArr}`
    }
    
} )