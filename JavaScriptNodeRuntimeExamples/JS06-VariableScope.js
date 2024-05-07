let globalVariable = "I'm value";

function myFunction() {
    let localVariable = "I'm local";
    console.log(globalVariable); // Accessing global variable
    console.log(localVariable); // Accessing local variable
}

myFunction();
// console.log(localVariable); // This line will cause an error because localVariable is not accessible outside the function scope