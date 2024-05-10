
let city;
let entered = false
const tempTag = document.querySelector(".temp")
const humidityTag = document.querySelector(".humidity")
const pressureTag = document.querySelector(".pressure")
const timeTag = document.querySelector(".time")
const dateTag = document.querySelector(".date")

const hour1 = document.querySelector("#hour1")
const hour2 = document.querySelector("#hour2")
const hour3 = document.querySelector("#hour3")

const temp1 = document.querySelector("#temp1")
const temp2 = document.querySelector("#temp2")
const temp3 = document.querySelector("#temp3")


const searchTag = document.querySelector("#search")
let currentInterval;

function calcTime(offset, int) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000 * offset));

    const options = {
        weekday: 'short', // Abbreviated weekday (e.g., "Wed")
        day: 'numeric', // Day of the month as a number (e.g., "13")
        month: 'long', // Full month name (e.g., "June")
    };
    
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    if (int == 1) {
        return nd.toLocaleTimeString()
    }
    else if(int == 2){
        return formatter.format(nd);
    }
    else{
        return nd.getHours()
    }
}

searchTag.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        city = searchTag.value;     // city changed
        if (currentInterval) {
            clearInterval(currentInterval)
        }

        let weatherData;

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fed4705e6da845a059fcdd29b49019f&units=metric`
        const promise1 = fetch(apiUrl)
            .then(function (data) {
                return data.json()
            })
            .then(function (data) {
                weatherData = data;         // weather data getted

                const wData = {             // data arranged in object
                    temperature: weatherData.main.temp,
                    humidity: weatherData.main.humidity,
                    pressure: weatherData.main.pressure,
                    cloud: weatherData.clouds.all,
                    timezone: weatherData.timezone,
                    name: weatherData.name,
                }

                tempTag.textContent = `${Math.floor(wData.temperature)}°C`
                dateTag.textContent = `${calcTime(wData.timezone / 3600, 2)}`
                humidityTag.textContent = `Humidity: ${wData.humidity}`
                pressureTag.textContent = `Pressure: ${wData.pressure}`
                currentInterval = setInterval(function () {
                    timeTag.textContent = `${calcTime(wData.timezone / 3600, 1)}`
                }, 1000)

                const effectTime = calcTime(wData.timezone / 3600, 4);
                
                if (effectTime <= 6 || effectTime >= 19) {
                    const search = document.querySelector("#search")
                    search.style.backgroundColor = "#001f3f"
                    search.style.color = "whitesmoke"

                    document.querySelector(".container").style.backgroundColor = "#001f3f"

                    document.querySelector(".temp").style.color = "#ffffff"

                    document.querySelector(".pressure").style.color = "#d3d3d3"
                    document.querySelector(".time").style.color = "#d3d3d3"
                    document.querySelector(".subMeasure").style.color = "#d3d3d3"
                    document.querySelector(".humidity").style.color = "#d3d3d3"

                    document.querySelector(".circle").style.backgroundColor = "#d3d3d3"
                    document.querySelector(".circle").style.boxShadow = "0 0 15px 10px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.5)"
                    
                    document.querySelector(".future").style.color = "#f0e68c"
                    document.querySelector(".future").style.backgroundColor = "#2f413d"

                }
                else{
                    const search = document.querySelector("#search")
                    search.style.backgroundColor = "white"
                    search.style.color = "black"

                    document.querySelector(".container").style.backgroundColor = "#b2f7ef"

                    document.querySelector(".temp").style.color = "#001f3f"

                    document.querySelector(".pressure").style.color = "#627080"
                    document.querySelector(".time").style.color = "#627080"
                    document.querySelector(".subMeasure").style.color = "#627080"
                    document.querySelector(".humidity").style.color = "#627080"

                    document.querySelector(".circle").style.backgroundColor = "rgb(233, 233, 77)"
                    document.querySelector(".circle").style.boxShadow = "0px 0px 50px 15px rgba(233, 233, 77, 1)"
                    
                    document.querySelector(".future").style.color = "white"
                    document.querySelector(".future").style.backgroundColor = "#001f3f"
                }

            })
            .catch(function(error){
                console.log(error);
            })
            
            
            const future = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9fed4705e6da845a059fcdd29b49019f&units=metric&cnt=10`)
            .then(function(data){
                return data.json()
        })
        .then(function(data){
            
            hour1.textContent = data.list[5].dt_txt.slice(-8, -3)
            hour2.textContent = data.list[6].dt_txt.slice(-8, -3)
            hour3.textContent = data.list[7].dt_txt.slice(-8, -3)
            
            temp1.textContent = `${data.list[5].main.temp}°C`
            temp2.textContent = `${data.list[6].main.temp}°C`
            temp3.textContent = `${data.list[7].main.temp}°C`
            
            // console.log(data.list[5]);
            // console.log(data.list[5].main.temp);
            // console.log(data.list[5].dt_txt.slice(-8, -3));
        })
    }
})
