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
- [JavaScript Objects](#javascript-object)
    - [JavaScript Object](#javascript-object)
    - [JavaScript Array](#javascript-array)
    - [JavaScript String](#javascript-string)
    - [JavaScript Date](#javascript-date)
    - [JavaScript Math](#javascript-math)
    - [JavaScript Number](#javascript-number)
    - [JavaScript Boolean](#javascript-boolean)


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

## JavaScript Objects

In JavaScript, objects are used to store collections of key-value pairs, where each key is a string (or symbol) and each value can be of any data type, including other objects or functions. Here's how you can create and work with objects:

### JavaScript Object

In JavaScript, objects are a fundamental data structure used to store collections of key-value pairs. Here's a basic overview of creating and working with objects:

1. **Object Literal**:
   ```javascript
   let person = {
       name: "John",
       age: 30,
       city: "New York"
   };
   ```

2. **Accessing Object Properties**:
   ```javascript
   console.log(person.name); // Output: "John"
   console.log(person["age"]); // Another way to access properties using bracket notation
   ```

3. **Adding or Modifying Properties**:
   ```javascript
   person.gender = "Male"; // Adding a new property
   person.age = 35; // Modifying an existing property
   ```

4. **Nested Objects**:
   ```javascript
   let car = {
       make: "Toyota",
       model: "Camry",
       year: 2020,
       owner: {
           name: "Alice",
           age: 25
       }
   };
   ```

5. **Object Methods** (Functions inside objects):
   ```javascript
   let calculator = {
       add: function(a, b) {
           return a + b;
       },
       subtract: function(a, b) {
           return a - b;
       }
   };

   console.log(calculator.add(5, 3)); // Output: 8
   console.log(calculator.subtract(10, 4)); // Output: 6
   ```

Objects are versatile and commonly used in JavaScript to represent structured data, such as user profiles, product details, configurations, and more.

### Javascript Array

In JavaScript, an array is a data structure used to store a collection of elements, which can be of any data type (including other arrays and objects). Here's how you can work with arrays:

1. **Creating Arrays**:
   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   ```

2. **Accessing Array Elements**:
   ```javascript
   console.log(fruits[0]); // Output: "apple"
   console.log(fruits.length); // Length of the array
   ```

3. **Modifying Array Elements**:
   ```javascript
   fruits[1] = "orange"; // Modifying an element
   fruits.push("grape"); // Adding an element to the end
   fruits.pop(); // Removing the last element
   ```

4. **Iterating Over Arrays**:
   - Using a `for` loop:
     ```javascript
     for (let i = 0; i < fruits.length; i++) {
         console.log(fruits[i]);
     }
     ```
   - Using `forEach()` method:
     ```javascript
     fruits.forEach(function(item, index) {
         console.log(index, item);
     });
     ```

5. **Array Methods**:
   - `push()`: Adds one or more elements to the end of an array.
   - `pop()`: Removes the last element from an array.
   - `shift()`: Removes the first element from an array.
   - `unshift()`: Adds one or more elements to the beginning of an array.
   - `splice()`: Adds or removes elements from an array at a specified index.
   - `concat()`: Combines two or more arrays.
   - `slice()`: Extracts a portion of an array into a new array.
   - `indexOf()`: Returns the index of the first occurrence of a specified element in an array.
   - `includes()`: Checks if an array includes a certain element.

Arrays are commonly used in JavaScript to store and manipulate collections of data, such as lists of items, numerical data, or even complex objects.

### JavaScript String 

In JavaScript, a string is a sequence of characters enclosed within single (' ') or double (" ") quotes. Here are some key points about strings:

1. **Creating Strings**:
   ```javascript
   let message = "Hello, world!";
   let name = 'Alice';
   ```

2. **String Length**:
   ```javascript
   console.log(message.length); // Output: 13
   ```

3. **Accessing Characters**:
   ```javascript
   console.log(message[0]); // Output: "H"
   ```

4. **Concatenating Strings**:
   ```javascript
   let greeting = "Hello";
   let person = "Alice";
   let message = greeting + ", " + person + "!";
   console.log(message); // Output: "Hello, Alice!"
   ```

5. **String Methods**:
   - `toUpperCase()`: Converts a string to uppercase.
   - `toLowerCase()`: Converts a string to lowercase.
   - `charAt(index)`: Returns the character at the specified index.
   - `indexOf(substring)`: Returns the index of the first occurrence of a substring.
   - `substring(startIndex, endIndex)`: Extracts a portion of a string.
   - `split(separator)`: Splits a string into an array of substrings based on a separator.
   - `trim()`: Removes whitespace from both ends of a string.

6. **Template Literals** (ES6+):
   ```javascript
   let name = "Alice";
   let age = 30;
   let message = `Hello, ${name}! You are ${age} years old.`;
   console.log(message); // Output: "Hello, Alice! You are 30 years old."
   ```

Strings are commonly used in JavaScript for text manipulation, user input/output, and various string-related operations.

### JavaScript Date

In JavaScript, the `Date` object is used to work with dates and times. Here's an overview of how to work with dates in JavaScript:

1. **Creating a Date Object**:
   ```javascript
   let currentDate = new Date(); // Current date and time
   let specificDate = new Date("2024-05-01"); // Specific date
   let customDate = new Date(2024, 4, 1); // Year, month (0-indexed), day
   ```

2. **Getting Date Components**:
   ```javascript
   let year = currentDate.getFullYear(); // Get the year (4 digits)
   let month = currentDate.getMonth(); // Get the month (0-indexed, 0 = January)
   let day = currentDate.getDate(); // Get the day of the month (1-31)
   let hours = currentDate.getHours(); // Get the hours (0-23)
   let minutes = currentDate.getMinutes(); // Get the minutes (0-59)
   let seconds = currentDate.getSeconds(); // Get the seconds (0-59)
   ```

3. **Formatting Dates**:
   ```javascript
   let formattedDate = currentDate.toISOString(); // ISO 8601 format
   let dateString = currentDate.toLocaleDateString(); // Localized date string
   let timeString = currentDate.toLocaleTimeString(); // Localized time string
   ```

4. **Working with Timezones**:
   ```javascript
   let utcDate = currentDate.toUTCString(); // UTC date and time
   let timezoneOffset = currentDate.getTimezoneOffset(); // Timezone offset in minutes
   ```

5. **Date Arithmetic**:
   ```javascript
   let tomorrow = new Date();
   tomorrow.setDate(currentDate.getDate() + 1); // Get the date for tomorrow
   ```

6. **Date Comparison**:
   ```javascript
   let date1 = new Date("2024-05-01");
   let date2 = new Date("2024-05-15");
   if (date1 < date2) {
       console.log("Date1 is earlier than Date2.");
   }
   ```

The `Date` object in JavaScript provides a wide range of methods for working with dates and times, making it versatile for handling various date-related tasks in web development and other applications.

### JavaScript Math

JavaScript's `Math` object provides built-in mathematical functions and constants. Here's an overview of some common operations you can perform using `Math`:

1. **Basic Math Operations**:
   ```javascript
   let x = 10;
   let y = 5;
   console.log(Math.add(x, y)); // Addition
   console.log(Math.subtract(x, y)); // Subtraction
   console.log(Math.multiply(x, y)); // Multiplication
   console.log(Math.divide(x, y)); // Division
   ```

2. **Rounding Numbers**:
   ```javascript
   let number = 3.7;
   console.log(Math.round(number)); // Round to the nearest integer
   console.log(Math.floor(number)); // Round down to the nearest integer
   console.log(Math.ceil(number)); // Round up to the nearest integer
   ```

3. **Generating Random Numbers**:
   ```javascript
   let random = Math.random(); // Random number between 0 and 1
   let randomInt = Math.floor(Math.random() * 10) + 1; // Random integer between 1 and 10
   ```

4. **Exponents and Square Roots**:
   ```javascript
   console.log(Math.pow(2, 3)); // Exponentiation: 2 raised to the power of 3
   console.log(Math.sqrt(16)); // Square root: √16 = 4
   ```

5. **Trigonometric Functions**:
   ```javascript
   let angle = Math.PI / 4; // Angle in radians (45 degrees)
   console.log(Math.sin(angle)); // Sine of the angle
   console.log(Math.cos(angle)); // Cosine of the angle
   console.log(Math.tan(angle)); // Tangent of the angle
   ```

6. **Constants**:
   ```javascript
   console.log(Math.PI); // Pi (π) constant
   console.log(Math.E); // Euler's constant (e)
   ```

The `Math` object in JavaScript provides a wide range of mathematical functions and constants, making it convenient for performing complex calculations in your code.

### JavaScript Number

In JavaScript, the `Number` object is used to represent numeric values and provides various methods and properties for working with numbers. Here are some key aspects of working with numbers in JavaScript:

1. **Creating Numbers**:
   ```javascript
   let integer = 42; // Integer
   let float = 3.14; // Floating-point number
   ```

2. **Number Methods**:
   ```javascript
   console.log(Number.isInteger(integer)); // Check if a number is an integer
   console.log(Number.isNaN(NaN)); // Check if a value is NaN (Not a Number)
   console.log(Number.parseFloat("3.14")); // Parse a string to a floating-point number
   console.log(Number.parseInt("42")); // Parse a string to an integer
   ```

3. **Mathematical Operations**:
   ```javascript
   let x = 10;
   let y = 5;
   console.log(x + y); // Addition
   console.log(x - y); // Subtraction
   console.log(x * y); // Multiplication
   console.log(x / y); // Division
   ```

4. **Number Properties**:
   ```javascript
   console.log(Number.MAX_VALUE); // Maximum representable number
   console.log(Number.MIN_VALUE); // Minimum positive representable number
   console.log(Number.POSITIVE_INFINITY); // Positive Infinity
   console.log(Number.NEGATIVE_INFINITY); // Negative Infinity
   ```

5. **Number Conversion**:
   ```javascript
   let numStr = "42";
   console.log(Number(numStr)); // Convert a string to a number using the Number constructor
   console.log(parseInt(numStr)); // Convert a string to an integer using parseInt
   console.log(parseFloat("3.14")); // Convert a string to a floating-point number using parseFloat
   ```

Numbers in JavaScript are versatile and can be used for arithmetic operations, comparisons, conversions, and more. The `Number` object provides utilities to work effectively with numeric data in your code.

### JavaScript Boolean

In JavaScript, the `Boolean` object represents a Boolean value, which can be either `true` or `false`. Here are some key points about working with Booleans in JavaScript:

1. **Creating Boolean Values**:
   ```javascript
   let isTrue = true; // Boolean value true
   let isFalse = false; // Boolean value false
   ```

2. **Boolean Operators**:
   - **Logical AND (`&&`)**: Returns `true` if both operands are `true`, otherwise returns `false`.
   - **Logical OR (`||`)**: Returns `true` if at least one operand is `true`, otherwise returns `false`.
   - **Logical NOT (`!`)**: Returns the opposite Boolean value of the operand.

3. **Comparison Operators**:
   - **Equal to (`==` or `===`)**: Returns `true` if operands are equal in value. Use `===` for strict equality (value and type).
   - **Not equal to (`!=` or `!==`)**: Returns `true` if operands are not equal in value. Use `!==` for strict inequality.

4. **Boolean Values in Conditions**:
   ```javascript
   let age = 25;
   if (age >= 18) {
       console.log("You are an adult.");
   } else {
       console.log("You are not an adult.");
   }
   ```

5. **Boolean Conversion**:
   - `Boolean(value)`: Converts a value to a Boolean. Values that convert to `false`: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`. Everything else converts to `true`.

6. **Truthy and Falsy Values**:
   - **Truthy**: Values that evaluate to `true` in a Boolean context. Examples: `true`, `"hello"`, `42`, `[]` (non-empty array).
   - **Falsy**: Values that evaluate to `false` in a Boolean context. Examples: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.

Understanding Booleans is crucial for making decisions and controlling the flow of your JavaScript code based on conditions.