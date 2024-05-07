// Creating a Date object for the current date and time
let currentDate = new Date();
console.log("Current date and time:", currentDate);

// Getting specific components of a date
let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // Note: Month starts from 0 (January is 0)
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log("Year:", year);
console.log("Month:", month + 1); // Adding 1 to month to display correctly
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);

// Formatting dates as strings
let dateString = currentDate.toDateString();
let isoString = currentDate.toISOString();
let utcString = currentDate.toUTCString();

console.log("Date string:", dateString);
console.log("ISO string:", isoString);
console.log("UTC string:", utcString);

// Parsing dates from strings
let dateStringExample = "2024-05-07T12:30:00Z";
let parsedDate = new Date(Date.parse(dateStringExample));
console.log("Parsed date:", parsedDate);