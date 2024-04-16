let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getTime());
console.log(typeof myDate);

let myCreatedDate = new Date(2005, 8, 5, 8, 30)    // yyear, month(0-11), day, hour, minute
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

// in seconds
console.log(Math.floor(Date.now()/1000));


console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());

//we can edit the date here as we want
myDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"
})
