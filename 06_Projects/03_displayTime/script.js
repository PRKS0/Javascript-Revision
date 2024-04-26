
const timeDiv = document.querySelector(".clock")

setInterval((ele) => {
    // function formatDate(date) {
    //     const year = date.getFullYear(); // Full year (e.g., 2024)
    //     const month = date.getMonth() + 1; // Month (0-based, so add 1 for 1-based indexing)
    //     const day = date.getDate(); // Day of the month (e.g., 26)
    //     let hour = date.getHours(); // Hour in 24-hour format (e.g., 14 for 2 PM)
    //     const minute = date.getMinutes(); // Minutes (e.g., 30)
    //     const second = date.getSeconds(); // Seconds (e.g., 45)

    //     function formatHour (hr){
    //         if (hour != 0) {
    //             hour = Math.floor(hr/2)
    //         }
    //     }
    //     formatHour(hour)
        
    //     newDate = `${hour} : ${minute} : ${second} || ${year} / ${month} / ${day} `
    //     return newDate
    // }
    const myDate = new Date()
    const date = `${myDate.toLocaleString()}` 
    // const date = (formatDate(myDate));
    timeDiv.textContent = date
}, 1000);