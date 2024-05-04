# JavaScript

# Table of Content

- [JavaScript Introduction](#javascript-introduction)
    - [What is JavaScript](#what-is-javascript-?)
    - [Features of JavaScript](#features-of-javascript)
    - [History of JavaScript](#history-of-javascript)
- [JavaScript Basics](#javascript-basics)
    - [JavaScript Comment](#JavaScript-comment)
    - [JavaScript Variable](#JavaScript-variable)
    - [JavaScript Global Variabl](#JavaScript-global-variable)
    - [JavaScript Data Types](#JavaScript-Data-Types)
    - [JavaScript Operators](#JavaScript-Operators)
    - [JavaScript If Statement](#JavaScript-If-Statement)
    - [JavaScript Switch](#JavaScript-Switch)
    - [JavaScript Loop](#JavaScript-loop)
    - [JavaScript Function](#JavaScript-function)


## JavaScript Introduction

### What is JavaScript ?

- JavaScript is a high-level, interpreted programming language primarily known for its use in web development. It was created by Brendan Eich in 1995 while he was working at Netscape Communications Corporation. Initially named "LiveScript," it was later renamed JavaScript, despite having few similarities with Java.

- JavaScript is widely used for creating interactive and dynamic web pages. It allows developers to add functionality to web pages, manipulate content, respond to user actions, and communicate with servers asynchronously. JavaScript code is typically embedded directly into HTML documents or included from external files.

**Key features of JavaScript include:**

1. **Client-Side Scripting:** JavaScript runs on the client's web browser, enabling dynamic updates to web pages without requiring a server roundtrip.
2. **Interactivity:** It enables developers to create interactive elements like dropdown menus, forms validation, sliders, and more, enhancing user experience.
3. **Asynchronous Programming:** JavaScript supports asynchronous programming, allowing tasks to be performed concurrently without blocking other operations. This is crucial for handling events, making AJAX requests, and fetching data from servers without page reloads.
4. **DOM Manipulation:** JavaScript interacts with the Document Object Model (DOM), enabling developers to manipulate HTML elements, change styles, add or remove elements dynamically, and respond to user events.
5. **Versatility:** Beyond web development, JavaScript has expanded its reach to server-side programming (Node.js), mobile app development (React Native, NativeScript), desktop applications (Electron), game development, IoT (Internet of Things), and more.
6. **Rich Ecosystem:** JavaScript has a vast ecosystem of libraries and frameworks like React.js, AngularJS, Vue.js, jQuery, Express.js, and many more, providing developers with tools to streamline development and build complex applications efficiently.


### Features of JavaScript

JavaScript boasts a wide array of features that make it a versatile and powerful programming language. Here are some key features:

1. **Interpreted Language:** JavaScript is an interpreted language, meaning that it doesn't require compilation before execution. Browsers directly interpret JavaScript code.

2. **Dynamic Typing:** JavaScript is dynamically typed, meaning you don't need to specify the data type of a variable explicitly. Variables can hold values of any data type and can change types during the execution of a program.

3. **Prototype-based Object-Oriented:** JavaScript is based on prototypes rather than classes. Objects can inherit properties and methods from other objects.

4. **Functions as First-Class Citizens:** In JavaScript, functions are treated as first-class citizens, which means they can be passed as arguments to other functions, returned from functions, assigned to variables, and stored in data structures.

5. **Closures:** JavaScript supports closures, allowing functions to retain access to variables from their containing scope even after the outer function has finished executing.

6. **Asynchronous Programming:** JavaScript is designed for asynchronous programming, which is essential for handling tasks such as fetching data from servers, responding to user actions without blocking the main thread, and executing code concurrently.

7. **Event-Driven Programming:** In web development, JavaScript facilitates event-driven programming, where functions are executed in response to events like user interactions (clicks, keypresses, mouse movements) or changes in the application's state.

8. **DOM Manipulation:** JavaScript interacts with the Document Object Model (DOM), enabling developers to manipulate HTML elements, change their attributes, styles, and content dynamically, which is fundamental for creating interactive web pages.

9. **Cross-platform Compatibility:** JavaScript is supported by all modern web browsers, making it a cross-platform language. It's not limited to web browsers; it can also run on server-side environments like Node.js, enabling full-stack development with a single language.

10. **Rich Ecosystem:** JavaScript has a vast ecosystem of libraries, frameworks, and tools that extend its capabilities and streamline development. Frameworks like React.js, Angular, and Vue.js, along with libraries like jQuery, provide developers with powerful tools for building complex applications efficiently.

These features, along with its simplicity and ubiquity, contribute to JavaScript's popularity and widespread use in various domains, including web development, server-side programming, mobile app development, and more.

### History of JavaScript

JavaScript, initially named LiveScript, was created by Brendan Eich in 1995 while he was working at Netscape Communications Corporation. The development of JavaScript was spurred by the need for a scripting language that could be embedded in web browsers to make web pages more dynamic and interactive.

**Here's a brief timeline of JavaScript's history:**

1. **1995:** JavaScript was introduced in Netscape Navigator 2.0 as LiveScript. It was later renamed JavaScript as part of a marketing agreement between Netscape and Sun Microsystems, leveraging the popularity of Java at the time.

2. **1996:** Microsoft introduced its own version of JavaScript called JScript in Internet Explorer 3.0. While JScript was similar to JavaScript, there were some differences, leading to compatibility issues between browsers.

3. **1997:** The European Computer Manufacturers Association (ECMA) standardized JavaScript, resulting in ECMAScript, the official specification for the language. ECMAScript 1 was based on JavaScript 1.1 and served as the foundation for subsequent versions of the language.

4. **1999:** ECMAScript 3 was released, introducing significant improvements and becoming the widely adopted standard for JavaScript. It remained the dominant version for many years.

5. **2005:** Ajax (Asynchronous JavaScript and XML) gained popularity, revolutionizing web development by enabling asynchronous communication between the browser and the server, leading to more dynamic and interactive web applications.

6. **2009:** ECMAScript 5 was released, introducing new features such as strict mode, JSON support, and additional array methods. This version further solidified JavaScript's position as a powerful and versatile language.

7. **2015:** ECMAScript 6 (also known as ECMAScript 2015 or ES6) was a major update to the language, introducing significant enhancements such as arrow functions, classes, modules, and Promises. ES6 marked a significant milestone in JavaScript's evolution and served as the foundation for future versions.

8. **Subsequent Years:** The ECMAScript specification continued to evolve, with new features and improvements introduced in subsequent versions, including ES7 (2016), ES8 (2017), ES9 (2018), ES10 (2019), and ES11 (2020).

JavaScript has become one of the most widely used programming languages globally, powering the interactive features and functionality of countless websites and web applications. Its versatility, ease of use, and continuous evolution have contributed to its enduring popularity among developers.

## JavaScript Basics

JavaScript basics refer to the fundamental concepts and syntax used in the JavaScript programming language. This includes understanding variables, data types, operators, functions, conditional statements, loops, arrays, objects, and basic DOM manipulation for web development.

### JavaScript Comment

In JavaScript, you can add comments to your code to make it more readable and to explain what your code does. There are two types of comments:

1. Single-line comments: Use `//`to add a comment on a single line. For Example:

    ```javascript
    // This is a single-line comment
    let x = 5; // Initializing a variable
    ```
2. Multi-line comments: Enclose multi-line comments between  `/*` and `*/`. For example:

   ```javascript
   /*
   This is a
   multi-line comment
   */
   let y = 10; // Another variable
   ```

Comments are ignored by the JavaScript engine when it executes your code, so they are useful for adding explanations, notes, or reminders without affecting the program's functionality.

### JavaScript Variable

In JavaScript, variables are used to store data values. Here are the basics of working with variables:

1. **Declaring Variables**: Use `let`, `const`, or `var` to declare variables.
   ```javascript
   let x = 5; // Declaring a variable using let
   const pi = 3.14; // Declaring a constant variable
   var name = "John"; // Declaring a variable using var (older way, not recommended in modern JavaScript)
   ```

2. **Variable Names**: Variable names can contain letters, digits, underscores, and dollar signs. They cannot start with a digit. Examples: `myVariable`, `name_123`, `$price`.

3. **Data Types**: Variables can hold different types of data such as numbers, strings, booleans, arrays, objects, etc.
   ```javascript
   let message = "Hello, world!"; // String
   let age = 30; // Number
   let isTrue = true; // Boolean
   let fruits = ["apple", "banana", "orange"]; // Array
   let person = { name: "John", age: 30 }; // Object
   ```

4. **Variable Scope**: Variables can have global scope (accessible throughout the program) or local scope (accessible only within a specific block of code, like inside a function).
   ```javascript
   let globalVariable = "I'm global";

   function myFunction() {
       let localVariable = "I'm local";
       console.log(globalVariable); // Accessing global variable
       console.log(localVariable); // Accessing local variable
   }

   myFunction();
   // console.log(localVariable); // This would cause an error because localVariable is not accessible outside the function
   ```

5. **Variable Reassignment**: You can change the value of a variable after declaring it.
   ```javascript
   let number = 10;
   console.log(number); // Output: 10
   number = 20;
   console.log(number); // Output: 20
   ```

Variables are fundamental in JavaScript and are used extensively in writing scripts for web development, server-side development, and more.

### JavaScript Global Variable

Global variables in JavaScript are variables declared outside of any function. They are accessible from any part of the code, including inside functions. Here's an example:

```javascript
let globalVariable = "I'm global";

function myFunction() {
    console.log(globalVariable); // Accessing globalVariable inside the function
}

myFunction(); // Output: I'm global
console.log(globalVariable); // Output: I'm global
```

However, using global variables extensively is not recommended because they can lead to issues such as variable name clashes, unintended side effects, and difficulty in debugging. It's often better to use local variables within functions and pass data as arguments or return values when needed.

### JavaScript Data Types

JavaScript supports several data types that are used to represent different kinds of values. Here are the basic data types in JavaScript:

1. **Primitive Data Types**:
   - **Number**: Represents numeric values. Example: `let num = 42;`
   - **String**: Represents textual data. Example: `let message = "Hello, world!";`
   - **Boolean**: Represents true or false values. Example: `let isTrue = true;`
   - **Undefined**: Represents a variable that has been declared but not assigned a value. Example: `let x;`
   - **Null**: Represents the intentional absence of any value. Example: `let y = null;`
   - **Symbol** (ES6+): Represents unique identifiers. Example: `const key = Symbol();`

2. **Composite Data Types**:
   - **Object**: Represents a collection of key-value pairs. Example: `let person = { name: "John", age: 30 };`
   - **Array**: Represents a collection of elements, indexed by integers. Example: `let numbers = [1, 2, 3, 4];`

3. **Special Data Types**:
   - **Function**: Functions are a type of object but can be called like a regular function. Example: `function add(a, b) { return a + b; }`

JavaScript is dynamically typed, meaning you don't need to explicitly declare the data type of a variable; the type is automatically determined based on the value assigned to it.

### JavaScript Operators

JavaScript operators are symbols used to perform operations on operands (variables, values, or expressions). Here are some of the key operators in JavaScript:

1. **Arithmetic Operators**:
   - Addition: `+`
   - Subtraction: `-`
   - Multiplication: `*`
   - Division: `/`
   - Modulus (Remainder): `%`
   - Increment: `++`
   - Decrement: `--`

2. **Assignment Operators**:
   - Assignment: `=`
   - Addition assignment: `+=`
   - Subtraction assignment: `-=`
   - Multiplication assignment: `*=`
   - Division assignment: `/=`
   - Modulus assignment: `%=`

3. **Comparison Operators**:
   - Equal to: `==` or `===` (strict equality)
   - Not equal to: `!=` or `!==` (strict inequality)
   - Greater than: `>`
   - Less than: `<`
   - Greater than or equal to: `>=`
   - Less than or equal to: `<=`

4. **Logical Operators**:
   - Logical AND: `&&`
   - Logical OR: `||`
   - Logical NOT: `!`

5. **Unary Operators**:
   - Unary plus: `+`
   - Unary minus: `-`
   - Logical NOT: `!`
   - Typeof: `typeof`
   - Delete: `delete`

6. **Conditional (Ternary) Operator**:
   - `condition ? expression1 : expression2`

7. **Bitwise Operators** (operate on binary representations of numbers):
   - Bitwise AND: `&`
   - Bitwise OR: `|`
   - Bitwise XOR: `^`
   - Bitwise NOT: `~`
   - Left shift: `<<`
   - Right shift: `>>`
   - Unsigned right shift: `>>>`

Understanding and using these operators effectively is key to writing JavaScript code that performs calculations, makes decisions, and manipulates data efficiently.

### JavaScript If Statement

In JavaScript, the `if` statement is used to execute a block of code if a specified condition is true. Here's the basic syntax of an `if` statement:

```javascript
if (condition) {
    // Code block to execute if the condition is true
}
```

**For example, let's say we want to check if a number is greater than 10 and then log a message:**

```javascript
let number = 15;

if (number > 10) {
    console.log("The number is greater than 10.");
}
```

**You can also include an `else` statement to specify a block of code to execute if the condition is false:**

```javascript
let number = 5;

if (number > 10) {
    console.log("The number is greater than 10.");
} else {
    console.log("The number is not greater than 10.");
}
```

**Additionally, you can use `else if` to specify multiple conditions:**

```javascript
let number = 7;

if (number > 10) {
    console.log("The number is greater than 10.");
} else if (number === 10) {
    console.log("The number is equal to 10.");
} else {
    console.log("The number is less than 10.");
}
```

This allows you to handle different scenarios based on various conditions in your code.

### JavaScript Switch

The `switch` statement in JavaScript is used to perform different actions based on different conditions. It's an alternative to using multiple `if` statements. Here's the basic syntax of a `switch` statement:

```javascript
switch (expression) {
  case value1:
    // Code block to execute if expression matches value1
    break;
  case value2:
    // Code block to execute if expression matches value2
    break;
  // More cases as needed
  default:
    // Code block to execute if expression doesn't match any case
}
```

**Here's an example to illustrate how `switch` works:**

```javascript
let day = "Monday";
let message;

switch (day) {
  case "Monday":
    message = "Today is Monday.";
    break;
  case "Tuesday":
    message = "Today is Tuesday.";
    break;
  case "Wednesday":
    message = "Today is Wednesday.";
    break;
  // More cases for other days
  default:
    message = "Unknown day.";
}

console.log(message); // Output: "Today is Monday."
```

In this example, the `switch` statement evaluates the value of the `day` variable and executes the corresponding code block based on the matching case. If none of the cases match, the `default` block is executed. The `break` statement is important to exit the `switch` statement after executing the correct case.

### JavaScript Loop

JavaScript provides several types of loops to iterate over data or execute code repeatedly. Here are the main types of loops:

1. **For Loop**: Used when you know the number of iterations.
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(i);
   }
   ```

2. **While Loop**: Used when you don't know the number of iterations beforehand.
   ```javascript
   let i = 0;
   while (i < 5) {
       console.log(i);
       i++;
   }
   ```

3. **Do...While Loop**: Similar to a `while` loop but always executes the code block at least once before checking the condition.
   ```javascript
   let i = 0;
   do {
       console.log(i);
       i++;
   } while (i < 5);
   ```

4. **For...In Loop**: Used to iterate over the properties of an object.
   ```javascript
   const person = {
       name: "John",
       age: 30,
       city: "New York"
   };

   for (let key in person) {
       console.log(key + ": " + person[key]);
   }
   ```

5. **For...Of Loop**: Introduced in ES6, used to iterate over iterable objects like arrays or strings.
   ```javascript
   const fruits = ["apple", "banana", "cherry"];

   for (let fruit of fruits) {
       console.log(fruit);
   }
   ```

Each type of loop has its use cases depending on the specific scenario you're dealing with. Experimenting with these loops will give you a good understanding of how to use them effectively in your code.

### JavaScript Function

In JavaScript, a function is a block of code that can be defined and then called or invoked to perform a specific task. Here's the basic syntax of a function:

```javascript
function functionName(parameters) {
    // Code to be executed
    return value; // Optional return statement
}
```

Let's break down the parts of a function:

- `function`: Keyword used to declare a function.
- `functionName`: Name of the function, which you use to call it later.
- `parameters`: Optional list of parameters that the function accepts. These act as variables inside the function.
- `// Code to be executed`: Actual code or instructions that the function performs.
- `return value`: Optional `return` statement that specifies the value the function will output. If omitted, the function returns `undefined`.

Here's an example of a simple function:

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

let message = greet("John");
console.log(message); // Output: "Hello, John!"
```

Functions can also be defined using arrow function syntax, introduced in ES6:

```javascript
const greet = (name) => {
    return `Hello, ${name}!`;
};

let message = greet("Jane");
console.log(message); // Output: "Hello, Jane!"
```

Functions are reusable blocks of code that help organize and modularize your JavaScript code, making it easier to maintain and understand.