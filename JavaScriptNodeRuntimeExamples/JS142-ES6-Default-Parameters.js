//<!--Default-Parameters-->
// ES6 (Arrow Function)
//const greet = (name = "Anonymous") => {
//    return "Hello, " + name;
//};
//
//console.log(greet("John")); // Output: "Hello, John"
//console.log(greet()); // Output: "Hello, Anonymous"

// ES5 (Function Expression)
var getInfo = function(name, year, color) {
    year = (typeof year !== 'undefined') ? year : 2018;
    color = (typeof color !== 'undefined') ? color : 'Blue';
   // Remainder of the function...
};
 //Usage examples
let nyc = getInfo('Chevy', 1957, 'Green');
let ny = getInfo('Benz', 1965); // Default for color is "Blue"
let module = getInfo('Honda'); // Defaults are 2018 and "Blue"
console.log(nyc);