// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// Mon May 26 2025 04:41:55 GMT+0000 (Coordinated Universal Time)
// Mon May 26 2025
// 2025-05-26T04:41:55.474Z
// 2025-05-26T04:41:55.474Z
// 5/26/2025
// 5/26/2025, 4:41:55 AM
// 4:41:55 AM
// 04:41:55 GMT+0000 (Coordinated Universal Time)
// Mon, 26 May 2025 04:41:55 GMT
console.log(typeof myDate);
// let mycreatedDate=new Date(2023,0,23,5,3)
//month starts with zero in js
let mycreatedDate=new Date("2025-01-13")
//in india we prefer mm dd yyyy
let mytimestamp=Date.now()
//very useful in declaring winners in poll
// console.log(mytimestamp);
// console.log(mycreatedDate.getTime());
//gives values in ms
//we can compare these give values
//converting to seconds imp for intview
// console.log(Math.floor(Date.now()/1000))
let newDate=new Date()
console.log(newDate.getDate());
// `${newDate.getDay()} and the time` is a writing technique
newDate.toLocaleString('en-IN',{
    weekday:"long",
    timeZone:'Asia/Kolkata'
})
console.log(newDate.toLocaleString());
