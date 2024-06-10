//  ES6 (Arrow Function)
const greet = (name = "Anonymous") => {
    return "Hello, " + name;
};

console.log(greet("John")); // Output: "Hello, John"
console.log(greet()); // Output: "Hello, Anonymous"

