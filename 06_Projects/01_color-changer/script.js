
// event listener  .addEventListener("event", "input", "keyup", function-reference)

const container = document.querySelector(".container")

const buttons = document.querySelectorAll(".btn")

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        container.style.backgroundColor = btn.id
    })
});

// we start listening to each and every button so, lope will stop after 4 iteration but the EventListener is still listening for every buttons