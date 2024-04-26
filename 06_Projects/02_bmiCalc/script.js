
document.body.style.backgroundColor = "#212121"
document.body.style.color = "#f2f2f2"
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let bmi;

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    if( height === '' || height === 0 || isNaN(height)){
        result.textContent = `Please input valid height`
    }
    else if( weight === '' || weight === 0 || isNaN(weight)){
        result.textContent = `Please input valid width`
    }else{
        bmi = ( weight / ((height * height) / 1000)).toFixed(2)
        result.textContent = `Your BMI is ${bmi}`
    }
    
    const para = document.querySelectorAll("p")
    if(bmi < 18.6){
        para[0].style.backgroundColor = "rgb(118 97 97)"
        para[1].style.backgroundColor = "#212121"
        para[2].style.backgroundColor = "#212121"
        
    }else if(bmi >=18.6 && bmi <= 24.9){
        para[1].style.backgroundColor = "rgb(118 97 97)"
        para[0].style.backgroundColor = "#212121"
        para[2].style.backgroundColor = "#212121"
    }else if(bmi>24.9){
        para[2].style.backgroundColor = "rgb(118 97 97)"
        para[0].style.backgroundColor = "#212121"
        para[1].style.backgroundColor = "#212121"
    }

})