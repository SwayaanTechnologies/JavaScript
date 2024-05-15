# JavaScript

## Table of Content

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

- [JavaScript BOM](#javascript-bom)

   - [Browser Objects](#browser-objects)

      - [Window Object](#window-object)

      - [History Object](#history-object)

      - [Navigator Object](#navigator-object)

      - [Screen Object](#screen-object)

- [JavaScript DOM](#javascript-dom)

   - [Document Object](#document-object)

   - [DOM Model](#dom-model)

   - [DOM other Object](#dom-other-object)

   - [DOM Get Method](#dom-get-method)

   - [Dom styling](#dom-styling)

   - [AddEventListener](#addeventlistener) 

   - [UseCapture](#usecapture)

   - [ClassList method](#classlist-method)

   - [Parent nodes](#parent-nodes)

   - [Children nodes](#children-nodes)

   - [First and last child](#first-and-last-child)

   - [Next and previous siblings](#next-and-previous-siblings)

   - [Create element text node](#create-element-text-node)

   - [Append child and insert before](#append-child-and-insert-before)

   - [Insert adjacent element and insert adjacent HTML](#insert-adjacent-element-and-insert-adjacent-html)

- [JavaScript Validation](#javascript-validation)

   - [JavaScript form validation](#javascript-form-validation)

   - [JavaScript email validation](#javascript-email-validation)

- [JavaScript OOPs](#javascript-oops)

   - [JavaScript Class](#javascript-class)

   - [JavaScript Object](#javascript-object-1)

   - [JavaScript Prototype](#javascript-prototype)

   - [JavaScript constructor Method](#javascript-constructor-method)

   - [JavaScript static Method](#javascript-static-method)

   - [JavaScript Encapsulation](#javascript-encapsulation)

   - [JavaScript Inheritance](#javascript-inheritance)

   - [JavaScript Polymorphism](#javascript-polymorphism)

   - [JavaScript Abstraction](#javascript-abstraction)

- [JavaScript Cookies](#javascript-cookies)

   - [Cookie Attributes](#cookie-attributes)

   - [Cookie with multiple Name](#cookie-with-multiple-name)

   - [Deleting Cookies](#deleting-cookies)

- [JavaScript Events](#javascript-events)

    - [JavaScript addEventListener()](#javascript-addeventlistener)

    - [JavaScript onclick event](#javascript-onclick-event)

    - [JavaScript dblclick event](#javascript-dblclick-event)

    - [JavaScript onload event](#javascript-onload-event)

    - [JavaScript onresize event](#javascript-onresize-event)

- [Exception Handling](#exception-handling)

    - [JavaScript Exception Handling](#javascript-exception-handling)

    - [JavaScript try-catch](#javascript-try-catch)

- [Popup Basics](#popup-basics)

    - [Alert Boxes](#alert-boxes)

    - [Confirm Box](#confirm-box)

    - [Prompt Box](#prompt-box)

    - [Functions](#functions)

    - [Functions with parameters](#functions-with-parameters)

    - [Functions with return](#functions-with-return)

- [Loops](#loops)

    - [While](#while)

    - [Do While](#do-while)

    - [For](#for)

    - [Nested](#nested)

- [Arrays](#arrays)

- [String and its Methods](#string-and-its-methods)

- [Number and its Methods](#number-and-its-methods)

- [Reference](#reference)


## JavaScript Introduction

1. [What is JavaScript](#what-is-javascript-?)
2. [Features of JavaScript](#features-of-javascript)
3. [History of JavaScript](#history-of-javascript)

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

**1.Declaring Variables**: Use `let`, `const`, or `var` to declare variables.

```javascript
let x = 5; // Declaring a variable using let
const pi = 3.14; // Declaring a constant variable
var name = "John"; // Declaring a variable using var (older way, not recommended in modern JavaScript)
console.log(x); // Output: 5
console.log(pi); // Output: 3.14
console.log(name); // Output: John
```

**2.Variable Names**: Variable names can contain letters, digits, underscores, and dollar signs. They cannot start with a digit. 

Examples: `myVariable`, `name_123`, `$price`.

```javascript
let firstName = "Muralitharan";
let userAge = 30;
let isLoggedIn = true;
let favoriteFruits = ["apple", "banana", "orange"];
let personInfo = { name: "Muralitharan", age: 30 };
const PI = 3.14;
const MAX_VALUE = 100;
console.log("First Name:", firstName);
console.log("User Age:", userAge);
console.log("Is Logged In:", isLoggedIn);
console.log("Favorite Fruits:", favoriteFruits);
console.log("Person Info:", personInfo);
console.log("PI Value:", PI);
console.log("Max Value:", MAX_VALUE);
```

**3.Data Types**: Variables can hold different types of data such as numbers, strings, booleans, arrays, objects, etc.

```javascript
let message = "Hello, world!"; // String
let age = 30; // Number
let isTrue = true; // Boolean
let fruits = ["apple", "banana", "orange"]; // Array
let person = { name: "John", age: 30 }; // Object
console.log("Message:", message);
console.log("Age:", age);
console.log("Is True:", isTrue);
console.log("Fruits:", fruits);
console.log("Person:", person);   
```

**4.Variable Scope**: Variables can have global scope (accessible throughout the program) or local scope (accessible only within a specific block of code, like inside a function).

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

**5.Variable Reassignment**: You can change the value of a variable after declaring it.

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

**1.Primitive Data Types**:

*  **Number**: Represents numeric values.

    Example: `let num = 42;`

* **String**: Represents textual data. 

    Example: `let message = "Hello, world!";`

* **Boolean**: Represents true or false values. 

    Example: `let isTrue = true;`

* **Undefined**: Represents a variable that has been declared but not assigned a value.

    Example: `let x;`

* **Null**: Represents the intentional absence of any value. 

    Example: `let y = null;`

* **Symbol** (ES6+): Represents unique identifiers. 

    Example: `const key = Symbol();`

**2.Composite Data Types**:

* **Object**: Represents a collection of key -value pairs. 

    Example:`let person = { name: "John", age: 30 };`

* **Array**: Represents a collection of elements, indexed by integers. 

    Example: `let numbers = [1, 2, 3, 4];`

**3.Special Data Types**:

- **Function**: Functions are a type of object but can be called like a regular function. 

    Example: `function add(a, b) { return a + b; }`

```javascript
let message = "Hello, world!"; // String
let age = 30; // Number
let isTrue = true; // Boolean
let fruits = ["apple", "banana", "orange"]; // Array
let person = { name: "John", age: 30 }; // Object

console.log("Message:", message);
console.log("Age:", age);
console.log("Is True:", isTrue);
console.log("Fruits:", fruits);
console.log("Person:", person);
```

JavaScript is dynamically typed, meaning you don't need to explicitly declare the data type of a variable; the type is automatically determined based on the value assigned to it.

### JavaScript Operators

JavaScript operators are symbols used to perform operations on operands (variables, values, or expressions). Here are some of the key operators in JavaScript:

**1.Arithmetic Operators**:

Arithmetic operators are symbols used to perform mathematical operations on numerical values. Here are the common arithmetic operators:

* **Addition: `+`**

  Addition is one of the fundamental arithmetic operations, where two or more numbers are combined to find their sum. It's represented by the symbol "+". For instance, if you add 2 and 3 together, you get 5: \( 2 + 3 = 5 \). It's a simple but essential concept in mathematics and is used in various fields for calculations and problem-solving.

  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  let sum = num1 + num2;
  
  console.log("The sum of", num1, "and", num2, "is", sum);
  ```


* **Subtraction: `-`**

  Subtraction is another basic arithmetic operation, denoted by the symbol "-". It involves taking away one number from another to find the   difference between them. For example, subtracting 3 from 7 gives you 4: \( 7 - 3 = 4 \). Subtraction is commonly used for finding the   difference between quantities, determining changes over time, and many other applications in mathematics and everyday life.
  
  ```javascript
  let num1 = 10;
  let num2 = 5;
  
  let difference = num1 - num2;
  
  console.log("The difference between", num1, "and", num2, "is", difference);
  ```

* **Multiplication: `*`**

  Multiplication is an arithmetic operation used to find the result of repeated addition of two numbers. It's represented by the symbol "*", often read as "times" or "multiplied by". For example, multiplying 3 by 4 gives you 12: \(3 \times 4 = 12\). Multiplication is a fundamental operation in mathematics and has various applications in areas such as algebra, geometry, and physics. It's used for scaling, finding areas and volumes, and many other mathematical operations.

  ```javascript
  let num1 = 10;
  let num2 = 5;
  
  let difference = num1 * num2;
  
  console.log("The difference between", num1, "and", num2, "is", difference);
  ```

* **Division: `/`**

  Division is an arithmetic operation used to distribute a quantity into equal parts or to find out how many times one number is contained within another. It's    represented by the symbol "÷" or "/", and it's read as "divided by". For example, dividing 10 by 2 gives you 5: \( \frac{10}{2} = 5 \). Division is the inverse    operation of multiplication. It's essential for various mathematical tasks, such as finding averages, solving proportions, and determining rates of change.
  
  ```javascript
  let num1 = 10;
  let num2 = 5;
  
  let difference = num1 / num2;
  
  console.log("The difference between", num1, "and", num2, "is", difference);
  ```

- **Modulus (Remainder): `%`**

  The modulus operator, represented by the symbol "%", calculates the remainder of a division operation between two numbers. For example, if you divide 10 by 3, the   quotient is 3 with a remainder of 1. So, 10 % 3 equals 1. Modulus is commonly used in programming for tasks such as determining if a number is even or odd, cyclic   operations, and ensuring values stay within a certain range.
  
  ```javascript
  let num1 = 10;
  let num2 = 5;
  
  let difference = num1 % num2;
  
  console.log("The difference between", num1, "and", num2, "is", difference);
  ```

* **Increment: `++`**

  Increment refers to increasing a value by a certain amount, typically by one unit. In programming, an increment operation often involves adding 1 to the current value   of a variable. For example, if you have a variable `x` with an initial value of 5, incrementing `x` would result in its value becoming 6. This operation is commonly   represented by the "++" operator, such as `x++` in many programming languages. Incrementing variables is frequently used in loops, counters, and various algorithms to   track progress or manipulate data.
  
  ```javascript
  let num = 5;
  
  // Incrementing the value of num by 1
  num++;
  
  console.log("After incrementing, num is", num);
  ```

* **Decrement: `--`**

  Decrement refers to decreasing a value by a certain amount, usually by one unit. In programming, a decrement operation often involves subtracting 1 from the current   value of a variable. For example, if you have a variable `x` with an initial value of 5, decrementing `x` would result in its value becoming 4. This operation is   typically represented by the "--" operator, such as `x--` in many programming languages. Decrementing variables is commonly used in loops, countdowns, and various   algorithms where values need to be reduced iteratively.
  
  ```javascript
  let num = 5;
  
  // Incrementing the value of num by 1
  num--;
  
  console.log("After incrementing, num is", num);
  ```


**2.Assignment Operators**:

Assignment operators are used in programming languages to assign values to variables. They combine the assignment operation "=" with another operation, such as addition, subtraction, multiplication, or division. This allows for concise expression of operations where the value of a variable is updated based on its current value and another value.

* **Assignment: `=`**

  The assignment operator, represented by "=", is used to assign a value to a variable. It takes the value on its right side and stores it in the variable on its left  side.
  
  ```javascript
  let num1 = 5;
  let num2;
  
  num2 = num1;
  
  console.log("num1:", num1);
  console.log("num2:", num2);
  ```

* **Addition assignment: `+=`**

  The addition assignment operator, represented by +=, is used to add the value of the right operand to the value of the left operand and then assign the result to the   left operand. Essentially, it's a shorthand for performing addition and assignment in a single step.
  
  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  num1 += num2;
  
  console.log("After addition assignment, num1 is", num1);
  ```

* **Subtraction assignment: `-=`**

  The subtraction assignment operator, represented by -=, is used to subtract the value of the right operand from the value of the left operand and then assign the   result to the left operand. Similar to addition assignment, it provides a shorthand for performing subtraction and assignment in a single step.
  
  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  num1 -= num2;
  
  console.log("After addition assignment, num1 is", num1);
  ```

* **Multiplication assignment: `*=`**

  The multiplication assignment operator, represented by *=, is used to multiply the value of the left operand by the value of the right operand and then assign the result to the left operand. It's a shorthand for performing multiplication and assignment in a single step.

  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  num1 *= num2;
  
  console.log("After addition assignment, num1 is", num1);
  ```

* **Division assignment: `/=`**

  The division assignment operator, represented by /=, is used to divide the value of the left operand by the value of the right operand and then assign the result to the left operand. It's a shorthand for performing division and assignment in a single step.

  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  num1 /= num2;
  
  console.log("After addition assignment, num1 is", num1);
  ```

* **Modulus assignment: `%=`**

  The modulus assignment operator, represented by %=, is used to find the remainder when the value of the left operand is divided by the value of the right operand, and   then assign the result to the left operand. It's a shorthand for performing modulus operation and assignment in a single step.
  
  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  num1 %= num2;
  
  console.log("After addition assignment, num1 is", num1);
  ```

**3.Comparison Operators**:

Comparison operators are used to compare two values and return a Boolean result (True or False) based on the comparison. Here are common comparison operators:

* **Equal to: `==` or `===` (strict equality)**

  The "equal to" operator, represented by "==", checks whether two values are equal. It's used to compare the values on both sides of the operator and returns True if   they are equal, and False otherwise.
  
  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  if (num1 == num2) {
      console.log("num1 is equal to num2");
  } else {
      console.log("num1 is not equal to num2");
  }
  ```

* **Not equal to: `!=` or `!==` (strict inequality)**

  The "not equal to" operator, represented by "!=", checks whether two values are not equal. It returns True if the values on both sides of the operator are different   and False if they are equal
  
  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  if (num1 !== num2) {
      console.log("num1 is equal to num2");
  } else {
      console.log("num1 is not equal to num2");
  }
  ```

* **Greater than: `>`**

  The "greater than" operator, represented by ">", compares two values and returns True if the value on the left side is greater than the value on the right side. If the   value on the left side is not greater, it returns False.
  
  ```javascript
  let num1 = 10;
  let num2 = 5;
  
  if (num1 > num2) {
      console.log("num1 is greater than num2");
  } else {
      console.log("num1 is not greater to num2");
  }
  ```

* **Less than: `<`**

  The "less than" operator, represented by "<", compares two values and returns True if the value on the left side is less than the value on the right side. If the value   on the left side is not less, it returns False.
  
  ```javascript
  let num1 = 10;
  let num2 = 5;
  
  if (num1 <> num2) {
      console.log("num1 is greater than num2");
  } else {
      console.log("num1 is not greater to num2");
  }
  ```

* **Greater than or equal to: `>=`**

  The "greater than or equal to" operator, represented by ">=", checks if the value on the left side is greater than or equal to the value on the right side. It returns   True if the left side value is greater than or equal to the right side value; otherwise, it returns False.
  
  ```javascript
  let num1 = 5;
  let num2 = 5;
  
  if (num1 >= num2) {
      console.log("num1 is greater than or equal to num2");
  } else {
      console.log("num1 is less than num2");
  }
  ```

* **Less than or equal to: `<=`**

  The "less than or equal to" operator, represented by "<=", checks if the value on the left side is less than or equal to the value on the right side. It returns True   if the left side value is less than or equal to the right side value; otherwise, it returns False.
  
  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  if (num1 <>= num2) {
      console.log("num1 is greater than or equal to num2");
  } else {
      console.log("num1 is less than num2");
  }
  ```

**4.Logical Operators**:

Logical operators are used to perform logical operations on Boolean values or expressions. Here are the common logical operators:

* **Logical AND: `&&`**

  The logical AND operator, represented by and, returns True if both of its operands are True. Otherwise, it returns False.
  
  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  if (num1 > 0 && num2 > 0) {
      console.log("Both num1 and num2 are greater than 0");
  } else {
      console.log("At least one of num1 or num2 is not greater than 0");
  }
  ```

* **Logical OR: `||`**

  The logical OR operator, represented by or, returns True if at least one of its operands is True. It returns False only if both operands are False.
  
  ```javascript
  let num1 = 5;
  let num2 = 10;
  
  if (num1 > 0 || num2 > 0) {
      console.log("At least one of num1 or num2 is greater than 0");
  } else {
      console.log("Neither num1 nor num2 is greater than 0");
  }
  ```

* **Logical NOT: `!`**

  The logical NOT operator, represented by not, negates the value of its operand. It returns True if the operand is False, and False if the operand is True.
  
  ```javascript
  let isLoggedIn = true;
  
  if (!isLoggedIn) {
      console.log("User is not logged in");
  } else {
      console.log("User is logged in");
  }
  ```

**5.Unary Operators**:

Unary operators are operators that work with only one operand. They perform various operations such as negation, increment, and decrement on a single operand. Here are some common unary operators:

* **Unary plus: `+`**

  The unary plus operator, represented by "+", doesn't change the sign of the operand. It's mainly included for symmetry with the unary minus operator ("*") and is   rarely used since it doesn't have any effect on positive values.
  
  ```Javascript
  let strNum = "123";
  let num = +strNum;
  
  console.log("String Number:", strNum);
  console.log("Converted Number:", num);
  ```

* **Unary minus: `-`**

  The unary minus operator, represented by "-", negates the value of its operand. It changes the sign of the operand to its opposite.
  
  ```JAVASCRIPT
  let num = 10;
  let negatedNum = -num;
  
  console.log("Original Number:", num);
  console.log("Negated Number:", negatedNum);
  ```

* **Typeof: `typeof`**

  In Python, the equivalent of the typeof operator in JavaScript is type(). The type() function returns the type of the specified object. Here's how it's used:
  
  ```javascript
  let num = 5;
  let str = "Hello";
  let bool = true;
  let arr = [1, 2, 3];
  let obj = { key: "value" };
  let func = function() {};
  
  console.log(typeof num);  // Output: "number"
  console.log(typeof str);  // Output: "string"
  console.log(typeof bool); // Output: "boolean"
  console.log(typeof arr);  // Output: "object" (arrays are objects in JavaScript)
  console.log(typeof obj);  // Output: "object"
  console.log(typeof func); // Output: "function"
  ```

* **Delete: `delete`**

  In JavaScript, the delete operator is used to delete properties from objects. It's important to note that it doesn't directly delete variables or identifiers.
  
  ```javascript
  let obj = { a: 1, b: 2, c: 3 };
  
  console.log("Before delete:", obj); // Output: { a: 1, b: 2, c: 3 }
  
  delete obj.b;
  
  console.log("After delete:", obj); // Output: { a: 1, c: 3 }
  ```

**6.Conditional (Ternary) Operator**:

In programming, the conditional operator, also known as the ternary operator, provides a concise way to write conditional statements. It's often used as a shortcut for the if...else statement when the conditions are simple.

* **`condition ? expression1 : expression2`**

  ```javascript
  let num = 10;
  let result = num > 0 ? "Positive" : "Non-positive";
  
  console.log("Number is:", result);
  ```

**7.Bitwise Operators** (operate on binary representations of numbers):

Bitwise operators are operators that manipulate individual bits of binary numbers. They are commonly used in low-level programming for tasks such as data compression, encryption, and optimization. Here are some common bitwise operators:

* **Bitwise AND: `&`**

  The bitwise AND operator (&) in JavaScript performs a bitwise AND operation on each pair of corresponding bits of the operands. Here's a brief explanation and an   example:
  
  * Syntax: operand1 & operand2
  * Explanation: The result of a bitwise AND operation is 1 if both bits at the same position are 1; otherwise, it's 0.
  
  ```Javascript
  let num1 = 5;  // Binary: 101
  let num2 = 3;  // Binary: 011
  
  let result = num1 & num2;  // Binary AND: 101 & 011 = 001 (Decimal: 1)
  
  console.log("Result:", result);  // Output: 1
  ```

* **Bitwise OR: `|`**

  The bitwise OR operator (|) in JavaScript performs a bitwise OR operation on each pair of corresponding bits of the operands. Here's an explanation and an example:
  
  * Syntax: operand1 | operand2
  * Explanation: The result of a bitwise OR operation is 1 if at least one of the bits at the same position is 1; otherwise, it's 0.
  
  ```javascript
  let num1 = 5;  // Binary: 101
  let num2 = 3;  // Binary: 011
  
  let result = num1 | num2;  // Binary AND: 101 & 011 = 001 (Decimal: 1)
  
  console.log("Result:", result);  // Output: 1
  ```

* **Bitwise XOR: `^`**

  The bitwise XOR operator (^) in JavaScript performs a bitwise XOR (exclusive OR) operation on each pair of corresponding bits of the operands. Here's an explanation   and an example:
  
  * Syntax: operand1 ^ operand2
  * Explanation: The result of a bitwise XOR operation is 1 if the bits at the same position are different (one is 0 and the other is 1); otherwise, it's 0.
  
  ```javascript
  let num1 = 5; // Binary: 0101
  let num2 = 3; // Binary: 0011
  
  let result = num1 ^ num2; // Binary result: 0110 (Decimal: 6)
  
  console.log("Result of bitwise XOR:", result);
  ```

* **Bitwise NOT: `~`**

  The bitwise NOT operator (~) in JavaScript performs a bitwise NOT operation on its operand, which is a unary operator (it operates on a single operand). Here's an   explanation and an example:
  
  * Syntax: ~operand
  * Explanation: The result of a bitwise NOT operation is the complement of its operand. It flips each bit of the operand, changing 1s to 0s and 0s to 1s.
  
  ```javascript
  let num = 5;
  let bitwiseNotNum = ~num;
  
  console.log("Original Number:", num);
  console.log("Bitwise NOT Result:", bitwiseNotNum);
  ```

* **Left shift: `<<`**

  The left shift operator (<<) in JavaScript shifts the bits of a number to the left by a specified number of positions. Here's how it works and an example:
  
  * Syntax: operand << count
  * Explanation: Shifting to the left means moving all bits towards the left by count positions. This effectively multiplies the number by 2 raised to the power of count.
  
  ```javaScript
  let num = 5;
  let shiftedNum = num << 2;
  
  console.log("Original Number:", num);
  console.log("Shifted Number:", shiftedNum);
  ```

* **Right shift: `>>`**

  The right shift operator (>>) in JavaScript shifts the bits of a number to the right by a specified number of positions. Here's how it works and an example:
  
  * Syntax: operand >> count
  * Explanation: Shifting to the right means moving all bits towards the right by count positions. For positive numbers, this effectively divides the number by 2 raised   to the power of count, and for negative numbers, it depends on the implementation (sign*extension or zero*fill).
  
  ```javaScript
  let num = 5;
  let shiftedNum = num >> 2;
  
  console.log("Original Number:", num);
  console.log("Shifted Number:", shiftedNum);
  ```

* **Unsigned right shift: `>>>`**

  The unsigned right shift operator (>>>) in JavaScript shifts the bits of a number to the right by a specified number of positions, filling the leftmost positions with   zeros. Here's how it works and an example:
  
  * Syntax: operand >>> count
  * Explanation: Shifting to the right means moving all bits towards the right by count positions. Unlike the right shift operator (>>), the unsigned right shift   operator fills the leftmost positions with zeros, regardless of the sign of the number.
  
  ```javascript
  let num = -8; // Binary representation: 11111111111111111111111111111000 (32-bit signed integer)
  let shiftedNum = (num >>> 2) & 0x3fffffff; // Simulate unsigned right shift
  
  console.log("Original Number:", num);
  console.log("Unsigned Right Shift Result:", shiftedNum);
  ```

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

**1. For Loop**: 

Used when you know the number of iterations.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

**2. While Loop**: 

Used when you don't know the number of iterations beforehand

```javascript
let i = 0;
   while (i < 5) {
    console.log(i);
    i++;
}
```

**3. Do...While Loop**: 

Similar to a `while` loop but always executes the code block at least once before checking the condition

```javascript
 let i = 0;
 do {
     console.log(i);
     i++; 
     }while (i < 5);
```

**4. For...In Loop**: 

Used to iterate over the properties of an object.

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

**5. For...Of Loop**: 

Introduced in ES6, used to iterate over iterable objects like arrays or strings.

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

**Let's break down the parts of a function:**

- `function`: Keyword used to declare a function.
- `functionName`: Name of the function, which you use to call it later.
- `parameters`: Optional list of parameters that the function accepts. These act as variables inside the function.
- `// Code to be executed`: Actual code or instructions that the function performs.
- `return value`: Optional `return` statement that specifies the value the function will output. If omitted, the function returns `undefined`.

**Here's an example of a simple function:**

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

let message = greet("John");
console.log(message); // Output: "Hello, John!"
```

**Functions can also be defined using arrow function syntax, introduced in ES6:**

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

**1.Object Literal**:

```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
```

**2.Accessing Object Properties**:

```javascript
console.log(person.name); // Output: "John"
console.log(person["age"]); // Another way to access properties using bracket notation
```

**3.Adding or Modifying Properties**:

```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
// Adding a new property
person.gender = "Male";
// Modifying an existing property
person.age = 35;
console.log(person);
```

**4.Nested Objects**:

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

console.log(car);
```

**5.Object Methods** (Functions inside objects):

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

**1.Creating Arrays**:

```javascript
let fruits = ["apple", "banana", "cherry"];
```

**2.Accessing Array Elements**:

```javascript
console.log(fruits[0]); // Output: "apple"
console.log(fruits.length); // Length of the array
```

**3.Modifying Array Elements**:

```javascript
fruits[1] = "orange"; // Modifying an element
fruits.push("grape"); // Adding an element to the end
fruits.pop(); // Removing the last element
```

**4.Iterating Over Arrays**:

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

**5.Array Methods**:

- `push()`: Adds one or more elements to the end of an array.

```javascript
// push
let fruits = ["apple", "banana", "orange"];
fruits.push("grape", "kiwi");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi"]
```

- `pop()`: Removes the last element from an array.

```javascript
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: "orange"
console.log(fruits); // Output: ["apple", "banana"]
```

- `shift()`: Removes the first element from an array.

```javascript
let fruits = ["apple", "banana", "orange"];
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: "apple"
console.log(fruits); // Output: ["banana", "orange"]
```

- `unshift()`: Adds one or more elements to the beginning of an array.

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.unshift("grape", "kiwi");
console.log(fruits); // Output: ["grape", "kiwi", "apple", "banana", "orange"]
```

- `splice()`: Adds or removes elements from an array at a specified index.

- `Remove()`

```javascript
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
let removedFruits = fruits.splice(1, 2); // Removes elements fromindex 1 to 2 (inclusive)
console.log(removedFruits); // Output: ["banana", "orange"]
console.log(fruits); // Output: ["apple", "grape", "kiwi"]
```
    
- `Adding()`

```javascript
let fruits = ["apple", "grape", "kiwi"];
fruits.splice(1, 0, "banana", "orange"); // Adds "banana" and"orange" at index 1
console.log(fruits); // Output: ["apple", "banana", "orange","grape", "kiwi"]
```

- `Replacing()`

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grape"); // Replaces element at index 1 with"grape"
console.log(fruits); // Output: ["apple", "grape", "orange"]
```

- `concat()`: Combines two or more arrays.

```javascript
// Two array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
```

```javascript
// Multiple
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];
let newArray = array1.concat(array2, array3);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
```

```javascript
// No array elements
let array1 = [1, 2];
let array2 = "hello";
let newArray = array1.concat(array2);

console.log(newArray); // Output: [1, 2, "hello"]
```

- `slice()`: Extracts a portion of an array into a new array.

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// Extract elements from index 1 to index 3 (inclusive of 1, exclusive of 3)
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'cherry']
```

- `indexOf()`: Returns the index of the first occurrence of a specified element in an array.

```javascript
// indexof() Arrays
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const index = fruits.indexOf('cherry');
console.log(index); // Output: 2
```

```javascript
// indexof() Strings
const sentence = 'Hello, world!';

const index = sentence.indexOf('world');
console.log(index); // Output: 7
```

- `includes()`: Checks if an array includes a certain element.

```javascript
// includes() Array
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const hasCherry = fruits.includes('cherry');
console.log(hasCherry); // Output: true
```

```javascript
// includes() Strings
const sentence = 'Hello, world!';

const hasWorld = sentence.includes('world');
console.log(hasWorld); // Output: true
```

Arrays are commonly used in JavaScript to store and manipulate collections of data, such as lists of items, numerical data, or even complex objects.

### JavaScript String 

In JavaScript, a string is a sequence of characters enclosed within single (' ') or double (" ") quotes. Here are some key points about strings:

**1.Creating Strings**:

```javascript
let message = "Hello, world!";
let name = 'Alice';
```

**2.String Length**:

```javascript
console.log(message.length); // Output: 13
```

**3.Accessing Characters**:

```javascript
console.log(message[0]); // Output: "H"
```

**4.Concatenating Strings**:

```javascript
let greeting = "Hello";
let person = "Alice";
let message = greeting + ", " + person + "!";
console.log(message); // Output: "Hello, Alice!"
```

**5.String Methods**:
- `toUpperCase()`: Converts a string to uppercase.

```javascript
const str = 'hello, world!';
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Output: HELLO, WORLD!
```

- `toLowerCase()`: Converts a string to lowercase.

```javascript
let str = "Hello World";
let lowercaseStr = str.toLowerCase();

console.log(lowercaseStr); // Output: "hello world"
```

- `charAt(index)`: Returns the character at the specified index.

```javascript
let str = "Muralitharan";
console.log(str.charAt(6)); // Output: "e"
```

- `indexOf(substring)`: Returns the index of the first occurrence of a substring.

```javascript
let str = "Hello, welcome to JavaScript!";
let index = str.indexOf("to");
console.log(index); // Output: 7
```

- `substring(startIndex, endIndex)`: Extracts a portion of a string.

```javascript
let str = "Hello, welcome to JavaScript!";
let sub = str.substring(7, 17);
console.log(sub); // Output: "welcome" 
```

- `split(separator)`: Splits a string into an array of substrings based on a separator.

```javascript
let str = "apple,banana,orange";
let fruits = str.split(",");
console.log(fruits); // Output: ["apple", "banana", "orange"]
```

```javascript
let sentence = "Hello world! How are you?";
let words = sentence.split(" ");
console.log(words); // Output: ["Hello", "world!", "How", "are", "you?"]
```

```javascript
let str = "hello";
let characters = str.split("");
console.log(characters); // Output: ["h", "e", "l", "l", "o"]
```


- `trim()`: Removes whitespace from both ends of a string.

```javascript
let str = "   Hello, world!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, world!"
```

**6.Template Literals (ES6+)**:

```javascript
let name = "Alice";
let age = 30;
let message = `Hello, ${name}! You are ${age} years old.`;
console.log(message); // Output: "Hello, Alice! You are 30 years old."
```

Strings are commonly used in JavaScript for text manipulation, user input/output, and various string-related operations.

### JavaScript Date

In JavaScript, the `Date` object is used to work with dates and times. Here's an overview of how to work with dates in JavaScript:

**1.Creating a Date Object**:

```javascript
let currentDate = new Date(); // Current date and time
let specificDate = new Date("2024-05-01"); // Specific date
let customDate = new Date(2024, 4, 1); // Year, month (0-indexed), day
```

**2.Getting Date Components**:

```javascript
let year = currentDate.getFullYear(); // Get the year (4 digits)
let month = currentDate.getMonth(); // Get the month (0-indexed, 0 = January)
let day = currentDate.getDate(); // Get the day of the month (1-31)
let hours = currentDate.getHours(); // Get the hours (0-23)
let minutes = currentDate.getMinutes(); // Get the minutes (0-59)
let seconds = currentDate.getSeconds(); // Get the seconds (0-59)
```

**3.Formatting Dates**:

```javascript
let formattedDate = currentDate.toISOString(); // ISO 8601 format
let dateString = currentDate.toLocaleDateString(); // Localized date string
let timeString = currentDate.toLocaleTimeString(); // Localized time string
```

**4.Working with Timezones**:

```javascript
let utcDate = currentDate.toUTCString(); // UTC date and time
let timezoneOffset = currentDate.getTimezoneOffset(); // Timezone offset in minutes
```

**5.Date Arithmetic**:

```javascript
let tomorrow = new Date();
tomorrow.setDate(currentDate.getDate() + 1); // Get the date for tomorrow
```

**6.Date Comparison**:

```javascript
let date1 = new Date("2024-05-01");
let date2 = new Date("2024-05-15");
if (date1 < date2) {
    console.log("Date1 is earlier than Date2.");
}
```

__Example__

```javascript
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
```

The `Date` object in JavaScript provides a wide range of methods for working with dates and times, making it versatile for handling various date-related tasks in web development and other applications.

### JavaScript Math

JavaScript's `Math` object provides built-in mathematical functions and constants. Here's an overview of some common operations you can perform using `Math`:

**1.Basic Math Operations**:

```javascript
let x = 10;
let y = 5;
console.log(Math.add(x, y)); // Addition
console.log(Math.subtract(x, y)); // Subtraction
console.log(Math.multiply(x, y)); // Multiplication
console.log(Math.divide(x, y)); // Division
```

**2.Rounding Numbers**:

```javascript
// Math.round()
let num = 4.7;
let roundedNum = Math.round(num); // roundedNum = 5
console.log(roundedNum); // Output: 5
// Math.floor()
let num = 4.7;
let roundedNum = Math.floor(num); // roundedNum = 4
console.log(roundedNum); // Output: 4
// Math.ceil()
let num = 4.2;
let roundedNum = Math.ceil(num); // roundedNum = 5
console.log(roundedNum); // Output: 5
//Number.toFixed()
let num = 4.5678;
let roundedNum = num.toFixed(2); // roundedNum = "4.57"
console.log(roundedNum); // Output: "4.57"
```

**3.Generating Random Numbers**:

```javascript
let random = Math.random(); // Random number between 0 and 1
let randomInt = Math.floor(Math.random() * 10) + 1; // Random integer between 1 and 10
```

**4.Exponents and Square Roots**:

```javascript
console.log(Math.pow(2, 3)); // Exponentiation: 2 raised to the power of 3
console.log(Math.sqrt(16)); // Square root: √16 = 4
```

**5.Trigonometric Functions**:

```javascript
let angle = Math.PI / 4; // Angle in radians (45 degrees)
console.log(Math.sin(angle)); // Sine of the angle
console.log(Math.cos(angle)); // Cosine of the angle
console.log(Math.tan(angle)); // Tangent of the angle
```

**6.Constants**:

```javascript
console.log(Math.PI); // Pi (π) constant
console.log(Math.E); // Euler's constant (e)
```

The `Math` object in JavaScript provides a wide range of mathematical functions and constants, making it convenient for performing complex calculations in your code.

### JavaScript Number

In JavaScript, the `Number` object is used to represent numeric values and provides various methods and properties for working with numbers. Here are some key aspects of working with numbers in JavaScript:

**1.Creating Numbers**:

```javascript
let integer = 42; // Integer
let float = 3.14; // Floating-point number
```

**2.Number Methods**:

```javascript
console.log(Number.isInteger(integer)); // Check if a number is an integer
console.log(Number.isNaN(NaN)); // Check if a value is NaN (Not a Number)
console.log(Number.parseFloat("3.14")); // Parse a string to a floating-point number
console.log(Number.parseInt("42")); // Parse a string to an integer
```

**3.Mathematical Operations**:

```javascript
let x = 10;
let y = 5;
console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
```

**4.Number Properties**:

```javascript
console.log(Number.MAX_VALUE); // Maximum representable number
console.log(Number.MIN_VALUE); // Minimum positive representable number
console.log(Number.POSITIVE_INFINITY); // Positive Infinity
console.log(Number.NEGATIVE_INFINITY); // Negative Infinity
```

**5.Number Conversion**:

```javascript
let numStr = "42";
console.log(Number(numStr)); // Convert a string to a number using the Number constructor
console.log(parseInt(numStr)); // Convert a string to an integer using parseInt
console.log(parseFloat("3.14")); // Convert a string to a floating-point number using parseFloat
```

Numbers in JavaScript are versatile and can be used for arithmetic operations, comparisons, conversions, and more. The `Number` object provides utilities to work effectively with numeric data in your code.

### JavaScript Boolean

In JavaScript, the `Boolean` object represents a Boolean value, which can be either `true` or `false`. Here are some key points about working with Booleans in JavaScript:

**1.Creating Boolean Values**:

```javascript
let isTrue = true; // Boolean value true
let isFalse = false; // Boolean value false
```

**2.Boolean Operators**:

- **Logical AND (`&&`)**: Returns `true` if both operands are `true`, otherwise returns `false`.

- **Logical OR (`||`)**: Returns `true` if at least one operand is `true`, otherwise returns `false`.

- **Logical NOT (`!`)**: Returns the opposite Boolean value of the operand.

**3.Comparison Operators**:

- **Equal to (`==` or `===`)**: Returns `true` if operands are equal in value. Use `===` for strict equality (value and type).

- **Not equal to (`!=` or `!==`)**: Returns `true` if operands are not equal in value. Use `!==` for strict inequality.

**4.Boolean Values in Conditions**:

```javascript
let age = 25;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}
```

**5.Boolean Conversion**:

- `Boolean(value)`: Converts a value to a Boolean. Values that convert to `false`: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`. Everything else converts to `true`.

**6.Truthy and Falsy Values**:

- **Truthy**: Values that evaluate to `true` in a Boolean context. Examples: `true`, `"hello"`, `42`, `[]` (non-empty array).

- **Falsy**: Values that evaluate to `false` in a Boolean context. Examples: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.

Understanding Booleans is crucial for making decisions and controlling the flow of your JavaScript code based on conditions.

## JavaScript BOM

### Browser Objects

The Browser Object Model (BOM) in JavaScript provides objects and methods to interact with the browser window. It includes objects like `window`, `document`, `navigator`, `screen`, and `history`. Here's a brief overview of each:

1. **Window Object (`window`):** Represents the browser window and provides methods to manipulate it, such as opening new windows, resizing, moving, and closing windows.

2. **Document Object (`document`):** Represents the HTML document loaded in the browser window and provides methods to access and manipulate the document's content, structure, and styles.

3. **Navigator Object (`navigator`):** Provides information about the browser such as its name, version, platform, and whether cookies are enabled.

4. **Screen Object (`screen`):** Provides information about the user's screen, such as its width, height, color depth, and available space.

5. **History Object (`history`):** Represents the user's browsing history in the current tab and provides methods to navigate through the history, such as going back or forward in the history stack.

These objects allow developers to create dynamic and interactive web applications by controlling browser behavior, accessing user preferences, and manipulating the document structure and content.

Sure, here's an example of how you can use some of the browser objects in JavaScript:


#### Window Object

The `window` object in JavaScript represents the browser window that contains the DOM (Document Object Model). It's a global object and is automatically available in the browser's JavaScript environment. Here are some key aspects and examples of using the `window` object:

**1.Accessing Properties:**

- `window.innerWidth` and `window.innerHeight` provide the width and height of the browser window's content area.
- `window.location` gives information about the URL of the current page.
- `window.document` refers to the document object associated with the current window.
- `window.navigator` provides information about the browser and the user's system.

```javascript
console.log(window.innerWidth); //Output the width of the browser window
console.log(window.location.href); //Output the current URL
console.log(window.documenttitle); // Output the title of thecurrent page
console.log(window.navigatoruserAgent); // Output the user agentstring
```

**2.Opening and Closing Windows:**

- `window.open()` opens a new browser window or tab with the specified URL.

- `window.close()` closes the current browser window.

```javascript
// Open a new window
window.open('https://example.com', '_blank');
// Close the current window
window.close();
```

**3.Timers and Events:**

- `window.setTimeout()` and `window.setInterval()` are used to execute code after a specified delay or at regular intervals.

- `window.addEventListener()` is used to listen for various events like clicks, keypresses, etc.

```javascript
// Execute a function after 3 seconds
window.setTimeout(() => {
  console.log('3 seconds elapsed.');
}, 3000);
// Listen for a click event
window.addEventListener('click', (event) => {
  console.log('Clicked!', event);
});
```

**4.Frames and Popups:**

- `window.frames` provides access to the frames (iframes) within the current window.

- `window.alert()`, `window.confirm()`, and `window.prompt()` are used to display alert boxes, confirmation dialogs, and input prompts.

```javascript
// Accessing an iframe
const iframe = window.frames[0];
// Display an alert
window.alert('This is an alert!');
// Display a confirmation dialog
const result = window.confirm('Are you sure?');
console.log(result); // true if OK is clicked, false otherwise
// Display a prompt for user input
const userInput = window.prompt('Enter your name:');
console.log(userInput); // User's input
```

The `window` object is quite powerful and provides access to a wide range of functionalities for interacting with the browser environment and controlling the behavior of web pages.

#### History Object

The `history` object in JavaScript represents the user's browsing history for the current tab or window. It allows you to navigate back and forward through the history stack and access information about the visited pages. Here are some key aspects and examples of using the `history` object:

**1.Navigating Through History:**

- `history.back()`: Moves back one step in the browser history. Equivalent to clicking the browser's "Back" button.

- `history.forward()`: Moves forward one step in the browser history. Equivalent to clicking the browser's "Forward" button.

- `history.go(n)`: Moves to a specific page in the history stack, where `n` is a positive or negative integer. Positive values move forward, and negative values move backward.

```javascript
// Go back one step in history
history.back();

// Go forward one step in history
history.forward();

// Go to the third page back in history
history.go(-3);
```

**2.History Length:**

- `history.length`: Returns the number of entries in the history stack.

```javascript
console.log(history.length); // Output the number of entries in history
```

**3.Manipulating History Stack:**

    The ability to add or replace entries in the history stack can be useful in certain scenarios, such as implementing custom navigation.

- `history.pushState(stateObj, title, url)`: Adds a new entry to the history stack with the specified state object, title, and URL.
- `history.replaceState(stateObj, title, url)`: Replaces the current entry in the history stack with the specified state object, title, and URL.

```javascript
// Add a new entry to history
history.pushState({ page: 'home' }, 'Home', '/home');

// Replace current entry in history
history.replaceState({ page: 'about' }, 'About', '/about');
```

**4.Handling Popstate Event:**

   When the user navigates through history (e.g., using back or forward buttons), a `popstate` event is fired. You can listen for this event to handle history changes.

```javascript
window.addEventListener('popstate', (event) => {
  console.log('History state changed:', event.state);
  // Handle history state change here
});
```

The `history` object provides a way to manage navigation history within a web application, enabling developers to create more interactive and seamless user experiences.

#### Navigator Object

The `navigator` object in JavaScript provides information about the web browser and the user's system. It contains properties and methods that allow you to retrieve details such as the browser's name, version, platform, and user agent string. Here are some key aspects and examples of using the `navigator` object:

**1.Browser Information:**

- `navigator.userAgent`: Returns the user agent string, which identifies the browser and its version.
- `navigator.appName`: Returns the name of the browser application.
- `navigator.appVersion`: Returns the version of the browser application.
- `navigator.platform`: Returns the operating system platform (e.g., "Win32" for Windows).

```javascript
console.log(navigator.userAgent); // Output the user agent string
console.log(navigator.appName); // Output the browser application name
console.log(navigator.appVersion); // Output the browser version
console.log(navigator.platform); // Output the operating system platform
```

**2.Language Information:**

- `navigator.language`: Returns the preferred language of the user's system.
- `navigator.languages`: Returns an array of the preferred languages in order of preference.

```javascript
console.log(navigator.language); // Output the preferred language
console.log(navigator.languages); // Output an array of preferred languages
```

**3.Cookies and Features:**

- `navigator.cookieEnabled`: Indicates whether cookies are enabled in the browser.
- `navigator.javaEnabled()`: Checks if Java is enabled in the browser (deprecated and not widely supported).
- `navigator.geolocation`: Provides access to the Geolocation API for obtaining the user's geographic location.

```javascript
console.log(navigator.cookieEnabled); // Output true if cookies are enabled
console.log(navigator.javaEnabled()); // Output true or false based on Java support
console.log(navigator.geolocation); // Output the Geolocation API object

```

**4.Media Devices:**

- `navigator.mediaDevices`: Provides access to media input and output devices, such as cameras and microphones.

```javascript
console.log(navigator.mediaDevices); // Output the MediaDevices object
```

**5.User Interaction:**

- `navigator.vibrate()`: Vibrates the device if supported.
- `navigator.share()`: Opens a share dialog to share content (requires user interaction).

```javascript
navigator.vibrate(200); // Vibrate for 200 milliseconds
navigator.share({ title: 'Share Example', text: 'Check out this content!', url: 'https://example.com' });
```

The `navigator` object is useful for obtaining information about the user's environment and browser capabilities, enabling developers to create more personalized and feature-rich web applications.

#### Screen Object

The `screen` object in JavaScript provides information about the user's screen or monitor. It contains properties that allow you to retrieve details such as the screen's width, height, color depth, and orientation. Here are some key aspects and examples of using the `screen` object:

**1.Screen Dimensions:**

- `screen.width`: Returns the width of the screen in pixels.
- `screen.height`: Returns the height of the screen in pixels.
- `screen.availWidth`: Returns the available width of the screen (excluding taskbars and other system elements) in pixels.
- `screen.availHeight`: Returns the available height of the screen (excluding taskbars and other system elements) in pixels.

```javascript
console.log(screen.width); // Output the width of the screen
console.log(screen.height); // Output the height of the screen
console.log(screen.availWidth); // Output the available width of the screen
console.log(screen.availHeight); // Output the available height of the screen

```

2. **Color Depth:**
- `screen.colorDepth`: Returns the color depth of the screen in bits per pixel.
- `screen.pixelDepth`: Returns the color depth of the screen in bits per pixel (an alias for `screen.colorDepth`).

```javascript
   console.log(screen.colorDepth); // Output the color depth of the screen
   console.log(screen.pixelDepth); // Output the color depth of the screen (alias)
   
```

3. **Orientation:**
- `screen.orientation`: Provides information about the screen's orientation (landscape or portrait).

```javascript
   console.log(screen.orientation.type); // Output the screen orientation type (e.g., "landscape-primary")

```

4. **Miscellaneous:**
- `screen.lockOrientation()`: Locks the screen orientation to a specified type.
- `screen.unlockOrientation()`: Unlocks the screen orientation if it was previously locked.

```javascript
screen.lockOrientation('landscape-primary'); // Lock the screen tolandscape mode
screen.unlockOrientation(); // Unlock the screen orientation

```

The `screen` object is particularly useful for web applications that need to adapt their layout or behavior based on the user's screen size, orientation, or color capabilities. It provides valuable information for creating responsive and user-friendly interfaces.

## JavaScript DOM

The Document Object Model (DOM) in JavaScript is a programming interface that represents the structure of an HTML or XML document as a tree-like structure, where each node represents a part of the document, such as elements, attributes, and text. This model allows JavaScript to interact with and manipulate the content, structure, and style of a webpage.

Here are some key concepts related to the JavaScript DOM:

1. **Document Object**: The top-level object representing the entire HTML document. It provides methods and properties to access and manipulate the document's content.

2. **Elements**: HTML elements are represented as nodes in the DOM tree. You can access elements using methods like `document.getElementById()`, `document.querySelector()`, or by navigating the DOM tree using properties like `parentNode`, `childNodes`, `firstChild`, and `lastChild`.

3. **Attributes**: Elements may have attributes like `id`, `class`, `src`, `href`, etc. You can access and modify element attributes using methods like `getAttribute()`, `setAttribute()`, and properties like `element.id`, `element.className`, etc.

4. **Events**: DOM events are actions or occurrences that happen in the DOM, such as a user clicking a button or the browser finishing loading a document. You can attach event listeners to elements using methods like `addEventListener()` to respond to these events.

5. **Manipulating Content**: JavaScript can dynamically modify the content of a webpage by creating, removing, or modifying elements and their attributes. For example, you can create new elements using `document.createElement()`, add them to the DOM using methods like `appendChild()` or `insertBefore()`, and remove elements using `removeChild()`.

6. **Styling**: You can also manipulate the style of elements using the `style` property or by adding/removing CSS classes with the `classList` property.

DOM manipulation is a fundamental part of web development, allowing you to create interactive and dynamic web experiences. If you have specific questions or need more details on any aspect of the DOM, feel free to ask!

### Document Object

The Document Object in JavaScript represents the entire HTML document. It's the top-level object in the DOM hierarchy and provides access to various properties and methods for interacting with the document's structure and content. Here are some key points about the Document Object:

**1.Accessing the Document Object**

You can access the Document Object using the global `document` variable in JavaScript. For example:

```javascript
console.log(document); // Outputs the Document Object
```

**2.Properties of the Document Object**:

- `document.documentElement`: Represents the root element of the document (usually `<html>`).
- `document.body`: Represents the `<body>` element of the document.
- `document.head`: Represents the `<head>` element of the document.
- `document.title`: Gets or sets the title of the document.
- `document.URL`: Gets the full URL of the document.
- `document.domain`: Gets or sets the domain of the document.

**3.Methods of the Document Object**:

- `document.getElementById(id)`: Returns the element with the specified ID.
- `document.querySelector(selector)`: Returns the first element that matches the specified CSS selector.
- `document.createElement(tagName)`: Creates a new element with the specified tag name.
- `document.createTextNode(text)`: Creates a new text node with the specified text.
- `document.querySelectorAll(selector)`: Returns a NodeList of elements that match the specified CSS selector.
- `document.createElementNS(namespaceURI, qualifiedName)`: Creates a new element with the specified namespace URI and qualified name.

**4.Working with Document Content**:

- Adding elements to the document:

```javascript
const newElement = document.createElement('div');
newElement.textContent = 'Hello, World!';
document.body.appendChild(newElement);
```

- Modifying element attributes:

```javascript
const myElement = document.getElementById('myElement');
myElement.setAttribute('class', 'newClass');
```
- Manipulating styles:

```javascript
const myElement = document.getElementById('myElement');
myElement.style.color = 'red';
```

**5.Events**:

- `DOMContentLoaded`: Fires when the initial HTML document has been completely loaded and parsed.
- `load`: Fires when the entire page (including images and other resources) has finished loading.
- `click`, `mouseover`, `submit`, etc.: Various events that can be attached to elements in the document.

The Document Object provides a powerful API for working with HTML documents in JavaScript, allowing you to create, modify, and interact with the content dynamically.

### DOM Model

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML and XML documents as a tree-like model, where each node in the tree corresponds to a part of the document, such as elements, attributes, and text.

Here's a breakdown of the DOM model:

1. **Node Types**:

   - **Element Node**: Represents an HTML element, like `<div>`, `<p>`, `<a>`, etc.
   - **Text Node**: Represents the text within an element, such as "Hello, World!" inside a `<p>` tag.
   - **Attribute Node**: Represents an attribute of an element, like `id="myElement"`.
   - **Comment Node**: Represents a comment within the HTML code, <!-- This is a comment -->.
   - **Document Node**: Represents the entire HTML document.
   - **Document Type Node**: Represents the document type declaration, like `<!DOCTYPE html>`.

2. **Hierarchy**:

   - The DOM tree starts with the Document Node at the top.
   - The Document Node has child nodes representing the `<html>` element, which in turn has child nodes like `<head>` and `<body>`.
   - Elements can have child nodes, which can be other elements, text nodes, or even comment nodes.
   - Nodes can have sibling nodes, which are nodes that share the same parent node.

3. **Accessing Nodes**:

   - **Traversal**: You can navigate the DOM tree using properties like `parentNode`, `childNodes`, `firstChild`, `lastChild`, `nextSibling`, and `previousSibling`.
   - **Selectors**: Methods like `getElementById()`, `querySelector()`, `getElementsByClassName()`, and `getElementsByTagName()` allow you to select specific elements based on IDs, classes, tags, or CSS selectors.
   - **Creating Nodes**: You can create new elements and nodes using `document.createElement()`, `document.createTextNode()`, and other methods.

4. **Manipulating Nodes**:

   - **Adding Nodes**: Use methods like `appendChild()`, `insertBefore()`, and `insertAdjacentHTML()` to add new nodes to the DOM.
   - **Modifying Nodes**: Change element attributes using `setAttribute()`, update text content with `textContent` or `innerHTML`, and modify styles with the `style` property.
   - **Removing Nodes**: Remove nodes using methods like `removeChild()` or `parentNode.removeChild()`.

5. **Events**:

   - DOM events allow JavaScript to respond to user actions and document changes.
   - Common events include `click`, `mouseover`, `keydown`, `submit`, `load`, `DOMContentLoaded`, etc.
   - You can attach event listeners using methods like `addEventListener()`.

Understanding the DOM model is crucial for web development as it enables dynamic interaction with HTML documents, making it possible to create interactive and responsive web applications.

Here's a simple example demonstrating the DOM model in action. This example creates a new paragraph element, sets its text content, and appends it to the body of the HTML document:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Model Example</title>
</head>
<body>
    <h1>DOM Model Example</h1>
    <div id="content">
        <!-- New paragraph will be added here -->
    </div>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
// Create a new paragraph element
const paragraph = document.createElement('p');

// Set the text content of the paragraph
paragraph.textContent = 'This is a new paragraph created using the DOM model.';

// Get the content div where we want to append the paragraph
const contentDiv = document.getElementById('content');

// Append the paragraph to the content div
contentDiv.appendChild(paragraph);
```

___In this example:___

1. We start with an HTML document that includes a `<div>` element with the ID "content," where we'll add the new paragraph.
2. The JavaScript code creates a new `<p>` element using `document.createElement('p')`.
3. We set the text content of the paragraph using `paragraph.textContent`.
4. The `getElementById()` method is used to get the content `<div>` where we want to append the paragraph.
5. Finally, we append the paragraph to the content `<div>` using `contentDiv.appendChild(paragraph)`.

When you open this HTML file in a browser and inspect the DOM using the browser's developer tools, you'll see the newly created paragraph element added inside the "content" `<div>`.

### DOM other Object

Apart from the Document Object, there are several other important objects and concepts in the DOM that are commonly used in JavaScript:

1. **Element Object**:

   - Represents an HTML element in the DOM tree.
   - Provides properties and methods to manipulate the attributes, styles, and content of the element.

2. **Node Object**:

   - Represents a node in the DOM tree.
   - Both Element and non-Element nodes (such as Text nodes, Comment nodes, etc.) are instances of the Node object.
   - Provides common properties and methods for all types of nodes, such as `parentNode`, `childNodes`, `firstChild`, `lastChild`, `nextSibling`, `previousSibling`, etc.

3. **Event Object**:

   - Represents an event that occurs in the DOM, such as a mouse click, keypress, form submission, etc.
   - Contains information about the event, such as the target element, event type, mouse coordinates, key codes, etc.
   - Passed as an argument to event handler functions when an event is triggered.

4. **Window Object**:

   - Represents the browser window that contains the DOM document.
   - Provides properties and methods for interacting with the browser window, such as `window.location`, `window.history`, `window.alert()`, `window.setTimeout()`, etc.
   - Acts as the global object in client-side JavaScript.

5. **DocumentFragment Object**:

   - Represents a lightweight Document object that can hold a collection of nodes.
   - Useful for creating and manipulating a group of nodes before appending them to the main document, improving performance in DOM manipulation.

6. **HTMLCollection and NodeList Objects**:

   - Both represent collections of nodes (usually elements) in the DOM.
   - HTMLCollection is live, meaning it automatically updates as the DOM changes, such as when elements are added or removed.
   - NodeList is static and represents a snapshot of the DOM at the time it was queried.

7. **Location Object**:

   - Represents the current URL of the document and provides properties like `href`, `hostname`, `pathname`, `search`, etc.
   - Accessible via `window.location` or `document.location`.

These objects and concepts work together to provide a powerful and flexible environment for manipulating and interacting with web documents using JavaScript.

Certainly! Let's explore some other important objects and methods in the DOM along with examples.

**1.Document Object**:

- Represents the entire HTML document.

- Provides methods to access and manipulate the document's content.

__Example:__

```javascript
// Access the document title
const title = document.title;
console.log('Document Title:', title);

// Change the document title
document.title = 'New Title';
console.log('New Document Title:', document.title);
```

**2.Element Object**:

- Represents an HTML element.
- Provides methods and properties to interact with elements.

__Example:__

```javascript
// Get an element by ID
const myElement = document.getElementById('myElement');
console.log('Element by ID:', myElement);

// Add a CSS class to the element
myElement.classList.add('highlight');
```

**3.NodeList Object**:

- Represents a collection of nodes (e.g., returned by methods like `querySelectorAll()`).
- Allows iteration over nodes using methods like `forEach()`.

__Example:__

```javascript
// Get all paragraphs in the document
const paragraphs = document.querySelectorAll('p');

// Iterate over paragraphs and log their text content
paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
```

**4.Event Object**:

- Represents an event that occurs in the DOM.
- Contains information about the event (e.g., target element, event type).

__Example:__

```javascript
// Add a click event listener to a button
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Target Element:', event.target);
});
```

**5.Window Object**:

- Represents the browser window or tab.
- Provides methods and properties for interacting with the window.

__Example:__

```javascript
// Open a new window
const newWindow = window.open('https://www.example.com', '_blank');
console.log('New Window:', newWindow);

// Close the current window
window.close();
```

These examples demonstrate how to work with different objects in the DOM, such as accessing elements, handling events, and interacting with the browser window. Each object plays a crucial role in web development for building dynamic and interactive web applications.

### DOM Get Method

In the DOM, the `getElementById` method is used to retrieve an element from the document based on its unique ID. This method is part of the `document` object and is commonly used in JavaScript to access specific elements for manipulation or interaction. Here's an example of how to use the `getElementById` method:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Get Method Example</title>
</head>
<body>
    <h1 id="mainHeading">Welcome to my Website</h1>
    <div id="content">
        <p>This is a paragraph.</p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
// Get the element with ID "mainHeading"
const heading = document.getElementById('mainHeading');

// Change the text content and style of the heading
heading.textContent = 'Hello World!';
heading.style.color = 'blue';
```

__In this example:__

- We have an HTML document with an `<h1>` element that has the ID "mainHeading" and a `<div>` element with the ID "content."
- In the JavaScript code, we use `document.getElementById('mainHeading')` to get the element with the ID "mainHeading" from the document.
- We then modify the text content of the heading using `heading.textContent` and change its color using `heading.style.color`.

After running this code, the text of the `<h1>` element with the ID "mainHeading" will be changed to "Hello World!" and its color will be set to blue.

### DOM styling

Styling elements in the DOM is done using the `style` property of an element. This property allows you to directly modify the CSS styles of an element using JavaScript. Here's an example of how to style elements in the DOM:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Styling Example</title>
    <style>
        .highlight {
            background-color: yellow;
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Welcome to my Website</h1>
    <p id="paragraph">This is a paragraph.</p>
    <button onclick="highlightText()">Highlight Paragraph</button>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
function highlightText() {
    // Get the paragraph element
    const paragraph = document.getElementById('paragraph');

    // Add the 'highlight' class to apply styles
    paragraph.classList.add('highlight');
}
```

__In this example:__

- We have an HTML document with a `<p>` element that has the ID "paragraph" and a CSS style for the "highlight" class.
- The JavaScript code defines a function `highlightText()` that is triggered when a button is clicked.
- Inside the function, we use `document.getElementById('paragraph')` to get the paragraph element with the ID "paragraph."
- We then use `paragraph.classList.add('highlight')` to add the "highlight" class to the paragraph element, which applies the specified styles from the CSS.

When you click the "Highlight Paragraph" button, the background color of the paragraph will change to yellow, the text color will change to red, and the font weight will become bold, as defined in the CSS for the "highlight" class. This demonstrates how to dynamically apply styles to elements in the DOM using JavaScript.

### AddEventListener 

The `addEventListener` method in JavaScript is used to attach an event handler to an element. It allows you to listen for a specific event on the element, such as a click, mouseover, keypress, etc., and execute a function (event handler) when that event occurs. Here's an example of how to use `addEventListener`:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>addEventListener Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
// Get the button element
const button = document.getElementById('myButton');

// Add a click event listener to the button
button.addEventListener('click', function() {
    alert('Button clicked!');
});
```

__In this example:__

- We have an HTML document with a `<button>` element that has the ID "myButton."
- The JavaScript code uses `document.getElementById('myButton')` to get the button element.
- We then use `addEventListener` to attach a click event listener to the button.
- When the button is clicked, the function inside `addEventListener` (`function() { alert('Button clicked!'); }`) is executed, showing an alert message.

You can attach event listeners for various events like click, mouseover, keypress, etc., and perform different actions based on those events. The `addEventListener` method is commonly used in web development to handle user interactions and create dynamic behavior on web pages.

### UseCapture

The `addEventListener` method in JavaScript allows you to specify whether the event should be captured during the event propagation phase. Event propagation refers to the process of how events are handled and propagated through the DOM hierarchy, from the target element to its ancestors (capturing phase) and then back down to the target element (bubbling phase). By default, event handlers are added in the bubbling phase, but you can also choose to add them in the capturing phase using the `useCapture` parameter.

Here's an example demonstrating the use of the `useCapture` parameter in `addEventListener`:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>useCapture Example</title>
</head>
<body>
    <div id="outer">
        <div id="inner">Inner Div</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
// Get the outer and inner div elements
const outerDiv = document.getElementById('outer');
const innerDiv = document.getElementById('inner');

// Add event listeners with and without capturing
outerDiv.addEventListener('click', function() {
    console.log('Outer Div Clicked (Bubbling)');
}, false); // Default is false, indicating bubbling phase

innerDiv.addEventListener('click', function() {
    console.log('Inner Div Clicked (Bubbling)');
}, false);

outerDiv.addEventListener('click', function() {
    console.log('Outer Div Clicked (Capturing)');
}, true); // true indicates capturing phase

innerDiv.addEventListener('click', function() {
    console.log('Inner Div Clicked (Capturing)');
}, true);
```

__In this example:__

- We have an HTML document with two nested `<div>` elements: an outer div with the ID "outer" and an inner div with the ID "inner."
- The JavaScript code attaches click event listeners to both the outer and inner divs, one for the bubbling phase and one for the capturing phase.
- When you click on the inner div, the event is first captured at the outer div during the capturing phase (`console.log('Outer Div Clicked (Capturing)')`), then bubbles up to the inner div during the bubbling phase (`console.log('Inner Div Clicked (Bubbling)')`).

By setting the `useCapture` parameter to `true`, you specify that the event should be handled during the capturing phase. This can be useful for certain scenarios where you want to capture events at higher levels of the DOM hierarchy before they reach the target element.

### ClassList method

The `classList` property in JavaScript provides methods to add, remove, toggle, and check for the presence of CSS classes on an element. This property is available on DOM elements and is very useful for dynamically manipulating classes and styles. Here are the main methods available in `classList`:

**1.`add(className)`** : Adds a CSS class to the element.

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Class Example</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
    </head>
    <body>
    <button onclick="addClassToElement()">Add Class</button>
    <div id="targetElement">This is a target element</div>

    <script src="script.js"></script>
    </body>
    </html>
```

```Javascript
function addClassToElement() {
    const targetElement = document.getElementById('targetElement');
    targetElement.classList.add('highlight');
  }  
```

**2.`remove(className)`** : Removes a CSS class from the element.

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remove Class Example</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
    </head>
    <body>
    <button onclick="removeClassFromElement()">Remove Class</button>
    <div id="targetElement" class="highlight">This is a target element</div>

    <script src="script.js"></script>
    </body>
    </html>
```

```javascript
function removeClassFromElement() {
    const targetElement = document.getElementById('targetElement');
    targetElement.classList.remove('highlight');
  }  
```

**3.`toggle(className)`**: Toggles the presence of a CSS class. If the class is present, it removes it; if not, it adds it.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toggle Class Example</title>
  <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
</head>
<body>
  <button onclick="toggleClassOnElement()">Toggle Class</button>
  <div id="targetElement">This is a target element</div>

  <script src="script.js"></script>
</body>
</html>
```

```javascript
function toggleClassOnElement() {
  const targetElement = document.getElementById('targetElement');
  targetElement.classList.toggle('highlight');
}
```

**4.`contains(className)`**: Checks if the element has a specific CSS class.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contains Class Example</title>
  <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
</head>
<body>
  <button onclick="checkClassOnElement()">Check Class</button>
  <div id="targetElement" class="highlight">This is a target element</div>

  <script src="script.js"></script>
</body>
</html>
```

```javascript
function checkClassOnElement() {
  const targetElement = document.getElementById('targetElement');
  const containsClass = targetElement.classList.contains('highlight');
  console.log('Contains Class:', containsClass);
}
```

Here's an example demonstrating the usage of `classList` methods:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>classList Example</title>
    <style>
        .highlight {
            background-color: yellow;
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <button id="toggleButton">Toggle Highlight</button>
    <p id="myParagraph">This is a paragraph.</p>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
// Get the button and paragraph elements
const toggleButton = document.getElementById('toggleButton');
const myParagraph = document.getElementById('myParagraph');

// Add click event listener to the button
toggleButton.addEventListener('click', function() {
    // Toggle the 'highlight' class on the paragraph
    myParagraph.classList.toggle('highlight');
});
```

__In this example:__

- We have an HTML document with a `<button>` element and a `<p>` element.
- The CSS class "highlight" is defined with specific styles.
- The JavaScript code adds a click event listener to the button.
- When the button is clicked, it toggles the "highlight" class on the paragraph element using `myParagraph.classList.toggle('highlight')`.

When you click the button, the paragraph's background color changes to yellow, text color to red, and font weight to bold if the "highlight" class is toggled on. If you click again, the class is removed, and the styles revert to their original state.

The `classList` property in JavaScript provides a convenient way to add, remove, toggle, and check for the presence of CSS classes on an element. Here's an example demonstrating the use of `classList` methods `add`, `remove`, `toggle`, and `contains`:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>classList Methods Example</title>
    <style>
        .highlight {
            background-color: yellow;
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div id="myDiv">This is a div element</div>
    <button onclick="addClass()">Add Class</button>
    <button onclick="removeClass()">Remove Class</button>
    <button onclick="toggleClass()">Toggle Class</button>
    <button onclick="checkClass()">Check Class</button>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
// Get the div element
const myDiv = document.getElementById('myDiv');

// Function to add a class to the div
function addClass() {
    myDiv.classList.add('highlight');
}

// Function to remove a class from the div
function removeClass() {
    myDiv.classList.remove('highlight');
}

// Function to toggle a class on the div
function toggleClass() {
    myDiv.classList.toggle('highlight');
}

// Function to check if a class is present on the div
function checkClass() {
    const hasClass = myDiv.classList.contains('highlight');
    console.log('Has Highlight Class:', hasClass);
}
```

__In this example:__

- We have an HTML document with a `<div>` element with the ID "myDiv" and several buttons to interact with the div using `classList` methods.
- The JavaScript code defines four functions: `addClass`, `removeClass`, `toggleClass`, and `checkClass`, each corresponding to adding, removing, toggling, and checking the presence of the "highlight" class on the div.
- The `classList.add('highlight')` method adds the "highlight" class to the div, applying the specified styles from the CSS.
- The `classList.remove('highlight')` method removes the "highlight" class from the div.
- The `classList.toggle('highlight')` method toggles the presence of the "highlight" class on the div. If the class is present, it removes it; if not, it adds it.
- The `classList.contains('highlight')` method checks if the "highlight" class is present on the div and returns a boolean value (`true` if present, `false` if not).

When you click the buttons in the HTML, you'll see the changes in the div's appearance based on the `classList` methods used.

### Parent nodes

In the DOM, the concept of parent nodes refers to nodes that are higher in the tree hierarchy compared to a given node. Every node in the DOM (except the root node) has one parent node, except in cases where the node is detached or removed from the DOM.

Here's an example to demonstrate how to access and work with parent nodes in the DOM using JavaScript:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parent Nodes Example</title>
</head>
<body>
    <div id="outerDiv">
        <div id="innerDiv">
            <p id="paragraph">This is a paragraph.</p>
        </div>
    </div>
    <button onclick="showParent()">Show Parent</button>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
function showParent() {
    // Get the paragraph element
    const paragraph = document.getElementById('paragraph');

    // Get the parent node of the paragraph
    const parentDiv = paragraph.parentNode;

    // Display the parent node's ID in the console
    console.log('Parent Node ID:', parentDiv.id);
}
```

__In this example:__

- We have an HTML document with a nested structure of `<div>` and `<p>` elements.
- The JavaScript code defines a function `showParent()` that is triggered when a button is clicked.
- Inside the function, we use `document.getElementById('paragraph')` to get the paragraph element with the ID "paragraph."
- We then use `paragraph.parentNode` to access the parent node of the paragraph, which is the `<div>` element with the ID "innerDiv."
- Finally, we log the ID of the parent node to the console (`parentDiv.id`).

When you click the "Show Parent" button in the HTML, it will trigger the `showParent()` function, and you'll see the ID of the parent node logged in the console. This demonstrates how to access and work with parent nodes in the DOM using JavaScript.

### Children nodes

In the DOM, children nodes are nodes that are directly nested within a parent node. These nodes are located at a lower level in the DOM hierarchy compared to their parent node. Every node in the DOM can have zero or more children nodes, depending on the structure of the document.

Here's an example to demonstrate how to access and work with children nodes in the DOM using JavaScript:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Children Nodes Example</title>
</head>
<body>
    <div id="parentDiv">
        <p>This is a paragraph.</p>
        <span>This is a span element.</span>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
    <button onclick="showChildren()">Show Children</button>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
function showChildren() {
    // Get the parent div element
    const parentDiv = document.getElementById('parentDiv');

    // Get the children nodes of the parent div
    const children = parentDiv.childNodes;

    // Display the number of children nodes and their types in the console
    console.log('Number of Children:', children.length);
    children.forEach(node => {
        console.log('Child Node Type:', node.nodeType);
    });
}
```

__In this example:__

- We have an HTML document with a `<div>` element that serves as the parent node, containing various child nodes such as `<p>`, `<span>`, and `<ul>` with `<li>` elements.
- The JavaScript code defines a function `showChildren()` that is triggered when a button is clicked.
- Inside the function, we use `document.getElementById('parentDiv')` to get the parent div element with the ID "parentDiv."
- We then use `parentDiv.childNodes` to access the children nodes of the parent div.
- We log the number of children nodes (`children.length`) and iterate over each child node using `children.forEach()` to log their node types (`node.nodeType`) in the console.

When you click the "Show Children" button in the HTML, it will trigger the `showChildren()` function, and you'll see the number of children nodes and their node types logged in the console. This demonstrates how to access and work with children nodes in the DOM using JavaScript.

### First and last child

In the DOM, you can access the first and last child nodes of a parent node using the `firstChild` and `lastChild` properties, respectively. These properties return the first and last child nodes of the specified parent node, including text nodes, element nodes, and comment nodes. Here's an example:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First and Last Child Example</title>
</head>
<body>
    <div id="parentDiv">
        <p>This is the first paragraph.</p>
        <span>This is a span element.</span>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <p>This is the last paragraph.</p>
    </div>
    <button onclick="showFirstChild()">Show First Child</button>
    <button onclick="showLastChild()">Show Last Child</button>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
function showFirstChild() {
    // Get the parent div element
    const parentDiv = document.getElementById('parentDiv');

    // Get the first child node of the parent div
    const firstChild = parentDiv.firstChild;

    // Display the first child node in the console
    console.log('First Child Node:', firstChild);
}

function showLastChild() {
    // Get the parent div element
    const parentDiv = document.getElementById('parentDiv');

    // Get the last child node of the parent div
    const lastChild = parentDiv.lastChild;

    // Display the last child node in the console
    console.log('Last Child Node:', lastChild);
}
```

__In this example:__

- We have an HTML document with a `<div>` element that serves as the parent node, containing various child nodes such as `<p>`, `<span>`, and `<ul>` with `<li>` elements.
- The JavaScript code defines two functions: `showFirstChild()` and `showLastChild()`, which are triggered when buttons are clicked.
- Inside each function, we use `document.getElementById('parentDiv')` to get the parent div element with the ID "parentDiv."
- We then use `parentDiv.firstChild` in `showFirstChild()` to access the first child node and `parentDiv.lastChild` in `showLastChild()` to access the last child node of the parent div.
- We log the first and last child nodes to the console in each function.

When you click the "Show First Child" and "Show Last Child" buttons in the HTML, it will trigger the respective functions, and you'll see the first and last child nodes logged in the console.

### Next and previous siblings

To access the next and previous siblings of an element in the DOM, you can use the `nextSibling` and `previousSibling` properties, respectively. These properties allow you to navigate to the adjacent sibling nodes in the DOM tree, which are nodes that share the same parent node and are located immediately before or after the given element. Here's an example:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Next and Previous Siblings Example</title>
</head>
<body>
    <div id="parentDiv">
        <p>This is the first paragraph.</p>
        <span>This is a span element.</span>
        <ul>
            <li>Item 1</li>
            <li id="targetElement">Target Element</li>
            <li>Item 3</li>
        </ul>
        <p>This is the last paragraph.</p>
    </div>
    <button onclick="showNextSibling()">Show Next Sibling</button>
    <button onclick="showPreviousSibling()">Show Previous Sibling</button>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
function showNextSibling() {
    // Get the target element
    const targetElement = document.getElementById('targetElement');

    // Get the next sibling of the target element
    const nextSibling = targetElement.nextSibling;

    // Display the next sibling in the console
    console.log('Next Sibling:', nextSibling);
}

function showPreviousSibling() {
    // Get the target element
    const targetElement = document.getElementById('targetElement');

    // Get the previous sibling of the target element
    const previousSibling = targetElement.previousSibling;

    // Display the previous sibling in the console
    console.log('Previous Sibling:', previousSibling);
}
```

__In this example:__

- We have an HTML document with a `<div>` element that serves as the parent node, containing various child nodes such as `<p>`, `<span>`, and `<ul>` with `<li>` elements.
- One of the `<li>` elements has the ID "targetElement," which is the element we want to focus on for finding its next and previous siblings.
- The JavaScript code defines two functions: `showNextSibling()` and `showPreviousSibling()`, which are triggered when buttons are clicked.
- Inside each function, we use `document.getElementById('targetElement')` to get the target element.
- We then use `targetElement.nextSibling` in `showNextSibling()` to access the next sibling node and `targetElement.previousSibling` in `showPreviousSibling()` to access the previous sibling node of the target element.
- We log the next and previous sibling nodes to the console in each function.

When you click the "Show Next Sibling" and "Show Previous Sibling" buttons in the HTML, it will trigger the respective functions, and you'll see the next and previous sibling nodes logged in the console.

### Create element text node

To create an element and a text node in the DOM using JavaScript, you can use the `document.createElement()` method to create the element and `document.createTextNode()` method to create the text node. After creating these nodes, you can append the text node to the element and then append the element to the document or another parent element. Here's an example:

__HTML__ 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Element and Text Node Example</title>
</head>
<body>
    <div id="container">
        <!-- New elements will be added here -->
    </div>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
// Create a new paragraph element
const newParagraph = document.createElement('p');

// Create a new text node
const textNode = document.createTextNode('This is a new paragraph created using JavaScript.');

// Append the text node to the paragraph element
newParagraph.appendChild(textNode);

// Get the container div where we want to append the new paragraph
const containerDiv = document.getElementById('container');

// Append the new paragraph to the container div
containerDiv.appendChild(newParagraph);
```

__In this example:__

- We start with an HTML document that contains a `<div>` element with the ID "container," where we'll add the new paragraph.
- The JavaScript code creates a new `<p>` element using `document.createElement('p')`.
- We then create a new text node with the content "This is a new paragraph created using JavaScript." using `document.createTextNode('...')`.
- Next, we append the text node to the paragraph element using `newParagraph.appendChild(textNode)`.
- We get the container `<div>` element using `document.getElementById('container')`.
- Finally, we append the new paragraph to the container div using `containerDiv.appendChild(newParagraph)`.

After running this code, a new paragraph with the specified text content will be dynamically added to the container `<div>` in the HTML document using JavaScript.

### Append child and insert before

Sure, here's an example of using both `appendChild` and `insertBefore` methods in the DOM:

__HTML__ 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Append Child and Insert Before Example</title>
</head>
<body>
    <div id="container">
        <!-- New elements will be added here -->
        <p>Existing Paragraph 1</p>
        <p>Existing Paragraph 2</p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New Paragraph';

// Get the container div where we want to append elements
const containerDiv = document.getElementById('container');

// Append the new paragraph as the last child of the container div
containerDiv.appendChild(newParagraph);

// Create another paragraph element
const anotherParagraph = document.createElement('p');
anotherParagraph.textContent = 'Another New Paragraph';

// Get the reference node (existing paragraph) before which to insert the new paragraph
const referenceNode = document.querySelector('#container p:nth-child(2)');

// Insert the new paragraph before the reference node
containerDiv.insertBefore(anotherParagraph, referenceNode);
```

__In this example:__

- We start with an HTML document that contains a `<div>` element with the ID "container," where we have existing paragraphs.
- The JavaScript code creates a new `<p>` element with the text "New Paragraph" using `document.createElement('p')` and `textContent`.
- We get the container `<div>` element using `document.getElementById('container')`.
- We then append the new paragraph as the last child of the container div using `containerDiv.appendChild(newParagraph)`.
- Next, we create another paragraph element with the text "Another New Paragraph."
- We use `document.querySelector('#container p:nth-child(2)')` to select the second existing paragraph as the reference node.
- Finally, we use `containerDiv.insertBefore(anotherParagraph, referenceNode)` to insert the new paragraph before the reference node (second existing paragraph) in the container div.

After running this code, you'll see that a new paragraph ("New Paragraph") is appended as the last child of the container div, and another new paragraph ("Another New Paragraph") is inserted before the second existing paragraph in the HTML document using JavaScript.

### Insert adjacent element and insert adjacent HTML

Certainly! The `insertAdjacentElement` and `insertAdjacentHTML` methods in the DOM allow you to insert elements or HTML code adjacent to a specified element. These methods provide more flexibility compared to `appendChild` and `insertBefore` as they let you specify the position of insertion relative to the target element. Here's an example of using both methods:

__HTML__ 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert Adjacent Element and HTML Example</title>
</head>
<body>
    <div id="container">
        <p>Existing Paragraph 1</p>
        <p>Existing Paragraph 2</p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New Paragraph';

// Get the container div where we want to insert elements
const containerDiv = document.getElementById('container');

// Insert the new paragraph as the first child of the container div
containerDiv.insertAdjacentElement('afterbegin', newParagraph);

// Insert another paragraph element as the next sibling of the new paragraph
newParagraph.insertAdjacentHTML('afterend', '<p>Next New Paragraph</p>');

// Insert HTML content before the second existing paragraph
const existingParagraph = document.querySelector('#container p:nth-child(2)');
existingParagraph.insertAdjacentHTML('beforebegin', '<p>Before Existing Paragraph</p>');
```

__In this example:__

- We start with an HTML document that contains a `<div>` element with the ID "container," where we have existing paragraphs.
- The JavaScript code creates a new `<p>` element with the text "New Paragraph" using `document.createElement('p')` and `textContent`.
- We get the container `<div>` element using `document.getElementById('container')`.
- We then use `containerDiv.insertAdjacentElement('afterbegin', newParagraph)` to insert the new paragraph as the first child of the container div.
- Next, we use `newParagraph.insertAdjacentHTML('afterend', '<p>Next New Paragraph</p>')` to insert another paragraph element as the next sibling of the new paragraph.
- Finally, we use `existingParagraph.insertAdjacentHTML('beforebegin', '<p>Before Existing Paragraph</p>')` to insert HTML content before the second existing paragraph in the container div.

After running this code, you'll see that a new paragraph ("New Paragraph") is inserted as the first child of the container div, another new paragraph ("Next New Paragraph") is inserted as the next sibling of the first new paragraph, and HTML content ("Before Existing Paragraph") is inserted before the second existing paragraph in the HTML document using JavaScript.

## JavaScript Validation

### JavaScript form validation

JavaScript validation refers to the process of validating user input or data on the client-side using JavaScript before submitting it to the server. This helps ensure that the data meets certain criteria or constraints, such as required fields, correct format, and valid values, before further processing. Here's an example of how you can perform form validation using JavaScript:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation Example</title>
</head>
<body>
    <form id="myForm" onsubmit="return validateForm()">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <span id="usernameError" style="color: red;"></span><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <span id="emailError" style="color: red;"></span><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <span id="passwordError" style="color: red;"></span><br>

        <input type="submit" value="Submit">
    </form>

    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
function validateForm() {
    // Get form inputs and error spans
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validate username (required)
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        return false; // Prevent form submission
    }

    // Validate email (required and correct format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email address';
        return false; // Prevent form submission
    }

    // Validate password (required and minimum length)
    if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        return false; // Prevent form submission
    }

    // Form is valid, allow submission
    return true;
}
```

__In this example:__

- We have an HTML form with fields for username, email, and password, along with error spans to display validation messages.
- The form has an `onsubmit` attribute set to call the `validateForm()` function when the form is submitted.
- The JavaScript code defines the `validateForm()` function, which performs validation checks on the form inputs.
- Inside `validateForm()`, we get references to form inputs and error spans, reset any existing error messages, and then perform validation checks.
- Validation checks include ensuring that the username is not empty, the email is in a correct format using a regular expression (`emailPattern`), and the password has a minimum length of 6 characters.
- If any validation fails, an error message is displayed, and the function returns `false` to prevent form submission.
- If all validations pass, the function returns `true`, allowing the form to be submitted.

This setup demonstrates basic form validation using JavaScript on the client-side. You can extend this example to include more complex validation rules based on your specific requirements.

### JavaScript email validation

Sure, here's an example of how you can perform email validation using JavaScript:

__HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Validation Example</title>
</head>
<body>
    <label for="email">Email:</label>
    <input type="text" id="email" name="email">
    <span id="emailError" style="color: red;"></span><br>

    <button onclick="validateEmail()">Validate Email</button>

    <script src="script.js"></script>
</body>
</html>
```

__JavaScript (script.js):__

```javascript
function validateEmail() {
    // Get the email input and error span
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    // Reset error message
    emailError.textContent = '';

    // Validate email (required and correct format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email address';
    } else {
        emailError.textContent = 'Email is valid';
    }
}
```

__In this example:__

- We have an HTML input field for entering an email address, along with an error span to display validation messages.
- The JavaScript code defines a `validateEmail()` function that is called when the "Validate Email" button is clicked.
- Inside `validateEmail()`, we get references to the email input field and the error span.
- We reset any existing error message in the error span.
- We use a regular expression (`emailPattern`) to validate the email format. The pattern `^[^\s@]+@[^\s@]+\.[^\s@]+$` checks for at least one character before the "@" symbol, followed by at least one character before and after the dot in the domain.
- If the email format is valid according to the pattern, we display "Email is valid" in the error span. Otherwise, we display "Enter a valid email address".

You can test this example by entering different email addresses and clicking the "Validate Email" button to see how the validation works.

## JavaScript OOPs

### JavaScript Class

In JavaScript, the concept of classes was introduced with ECMAScript 6 (ES6) to provide a more familiar syntax for creating objects and implementing object-oriented programming (OOP) principles. JavaScript classes are primarily syntactic sugar over JavaScript's existing prototype-based inheritance system. Here's an example of how you can define and use classes in JavaScript:

```javascript
// Define a class using the class keyword
class Person {
    // Constructor method to initialize object properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method definition inside the class
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    // Static method (accessible on the class itself, not on instances)
    static describe() {
        console.log('This is a Person class');
    }
}

// Create instances of the Person class
const john = new Person('John', 30);
john.greet(); // Output: Hello, my name is John

// Access static method
Person.describe(); // Output: This is a Person class
```

__In this example:__

- We define a class `Person` using the `class` keyword.
- The `constructor` method is used to initialize object properties (`name` and `age`) when creating instances of the class.
- We define a method `greet` inside the class to log a greeting message.
- Additionally, we define a static method `describe` using the `static` keyword, which can be accessed directly on the class itself (`Person.describe()`).

JavaScript classes provide a cleaner syntax for creating objects and implementing OOP concepts such as inheritance, encapsulation, and polymorphism. Here's an example of inheritance using classes:

```javascript
// Define a subclass (Employee) that extends the superclass (Person)
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Call the superclass constructor
        this.position = position;
    }

    // Method overriding (overrides greet method from Person class)
    greet() {
        console.log(`Hello, my name is ${this.name} and I work as a ${this.position}`);
    }
}

// Create an instance of the Employee class
const jane = new Employee('Jane', 25, 'Developer');
jane.greet(); // Output: Hello, my name is Jane and I work as a Developer
```

__In this example:__

- We define a subclass `Employee` that extends the superclass `Person` using the `extends` keyword.
- The `constructor` method in `Employee` calls the superclass constructor (`super(name, age)`) to initialize inherited properties.
- We override the `greet` method in `Employee` to provide a customized greeting message.

JavaScript classes simplify the process of creating and managing objects, allowing developers to write more structured and maintainable code following OOP principles.

### JavaScript Object.

Objects: Objects in JavaScript are collections of key-value pairs, where keys are strings (or symbols) and values can be any data type, including other objects or functions. Objects can be created using object literals or constructor functions.

```JavaScript
// Object literal
const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Outputs: Hello, my name is John

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const john = new Person('John', 30);
john.greet(); // Outputs: Hello, my name is John
```

### JavaScript Prototype

Every JavaScript object has a prototype, which is another object that it inherits properties and methods from. Prototypes allow for inheritance in JavaScript, where objects can share behavior through their prototype chain.

```javascript
function Animal(type) {
    this.type = type;
}

Animal.prototype.sound = function() {
    console.log(`${this.type} makes a sound`);
};

function Dog(name) {
    this.name = name;
}

// Link Dog's prototype to Animal's prototype for inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Buddy');
dog.sound(); // Output: Dog makes a sound
```

### JavaScript constructor Method

Constructor Functions: Constructor functions are used to create objects with a shared prototype. When using constructor functions with the new keyword, a new object is created with the constructor's properties and methods.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John', 30);
john.greet(); // Output: Hello, my name is John
```

### JavaScript static Method

In JavaScript, static methods are methods that are defined on a class itself rather than on its instances. This means static methods are accessible directly on the class itself and not on individual objects created from the class. Static methods are useful for utility functions or operations that are related to the class but do not depend on specific instance properties.

Here's an example of how you can define and use static methods in JavaScript classes:

```javascript
class MathUtils {
    // Static method to calculate the square of a number
    static square(num) {
        return num * num;
    }

    // Static method to calculate the cube of a number
    static cube(num) {
        return num * num * num;
    }
}

// Call static methods directly on the class
console.log(MathUtils.square(5)); // Output: 25
console.log(MathUtils.cube(3));   // Output: 27
```

__In this example:__

- We define a class `MathUtils` with two static methods: `square` and `cube`.
- The `square` method calculates the square of a number (`num * num`).
- The `cube` method calculates the cube of a number (`num * num * num`).
- We can call these static methods directly on the class without creating instances of the class (`MathUtils.square(5)` and `MathUtils.cube(3)`).

Static methods are not tied to specific object instances, so they can be used for operations that are independent of instance properties or state. They are often used for utility functions, helper methods, or operations that are common to all instances of a class.

### JavaScript Encapsulation

- JavaScript doesn't have access modifiers like private or protected, but you can achieve encapsulation by using closure and module patterns to create private variables and methods.

- Encapsulation in JavaScript refers to the bundling of data (properties) and methods (functions) that operate on the data into a single unit, called an object. This concept helps in hiding the internal state and implementation details of an object from the outside world, promoting data abstraction and reducing complexity.

Here's an example of encapsulation in JavaScript using object literals and closures:

```javascript
// Using object literal to encapsulate data and methods
const person = {
    // Private data (encapsulated within closure)
    name: 'John',
    age: 30,

    // Public method to access private data
    getName() {
        return this.name;
    },

    // Public method to modify private data
    setName(newName) {
        this.name = newName;
    },

    // Private method (encapsulated within closure)
    _privateMethod() {
        console.log('This is a private method');
    }
};

// Accessing public methods to interact with encapsulated data
console.log(person.getName()); // Output: John
person.setName('Jane');
console.log(person.getName()); // Output: Jane
```

__In this example:__

- We use an object literal (`person`) to encapsulate data (`name` and `age`) and methods (`getName()` and `setName(newName)`).
- The `getName()` method is a public method that allows external code to access the encapsulated `name` property.
- The `setName(newName)` method is a public method that allows external code to modify the encapsulated `name` property.
- The `_privateMethod()` method is a private method that is encapsulated within the closure of the object literal and cannot be accessed from outside the object.

Encapsulation is achieved through the use of closures in JavaScript. Private data and methods are defined within the object's scope using variables and functions, which are not directly accessible outside the object. Public methods act as interfaces that provide controlled access to the encapsulated data, ensuring data integrity and security.

JavaScript also supports encapsulation using constructor functions and classes:

Using Constructor Functions:
```javascript
function Person(name, age) {
    // Private data (encapsulated within closure)
    let _name = name;
    let _age = age;

    // Public method to access private data
    this.getName = function() {
        return _name;
    };

    // Public method to modify private data
    this.setName = function(newName) {
        _name = newName;
    };
}

const person = new Person('John', 30);
console.log(person.getName()); // Output: John
person.setName('Jane');
console.log(person.getName()); // Output: Jane
```

Using ES6 Classes:
```javascript
class Person {
    // Private data (encapsulated using # prefix in ES6)
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // Public method to access private data
    getName() {
        return this.#name;
    }

    // Public method to modify private data
    setName(newName) {
        this.#name = newName;
    }
}

const person = new Person('John', 30);
console.log(person.getName()); // Output: John
person.setName('Jane');
console.log(person.getName()); // Output: Jane
```

In both examples using constructor functions and classes, we encapsulate private data (`_name` or `#name` and `_age` or `#age`) within the object's closure or using ES6 private fields, respectively. Public methods (`getName()` and `setName(newName)`) provide controlled access to the encapsulated data, maintaining encapsulation principles.

### JavaScript Inheritance

 In JavaScript, inheritance is achieved by linking objects through their prototypes. Child objects inherit properties and methods from their parent object's prototype.

```javascript
function Animal(type) {
    this.type = type;
}

Animal.prototype.sound = function() {
    console.log(`${this.type} makes a sound`);
};

function Dog(name) {
    Animal.call(this, 'Dog'); // Call parent constructor
    this.name = name;
}

// Link Dog's prototype to Animal's prototype for inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Buddy');
dog.sound(); // Output: Dog makes a sound
```

### JavaScript Polymorphism

- Polymorphism in JavaScript is achieved through method overriding and method overloading. By dynamically changing object behaviors through prototypes and functions, you can implement polymorphic behavior.

- In JavaScript, polymorphism refers to the ability of objects to respond to the same method or property in different ways based on their specific types or classes. Polymorphism is achieved through method overriding and method overloading, although JavaScript does not have native support for method overloading like some other languages. Here's how you can implement polymorphism in JavaScript using method overriding:

**1. Method Overriding**:

   Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. This allows objects of different classes to share a common interface while providing custom behavior for specific instances. Here's an example:

```javascript
// Define a superclass Animal
class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
}
// Define a subclass Dog that overrides the speak method
class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
}
// Define another subclass Cat that also overrides the speak method
class Cat extends Animal {
    speak() {
        console.log('Cat meows');
    }
}
const dog = new Dog();
const cat = new Cat();
dog.speak(); // Output: Dog barks
cat.speak(); // Output: Cat meows
```

   In this example, both `Dog` and `Cat` classes inherit the `speak` method from the `Animal` superclass, but they override it with their specific implementations (`Dog` barks and `Cat` meows). This demonstrates polymorphism, as objects of different types (`Dog` and `Cat`) respond differently to the same method (`speak`) based on their specific classes.

**2. Dynamic Method Binding**:

   JavaScript uses dynamic method binding, which means that the specific implementation of a method is determined at runtime based on the actual type of the object, not the declared type. This allows for flexibility and polymorphic behavior in object-oriented designs.

```javascript
// Define a superclass Shape
class Shape {
    draw() {
        console.log('Drawing a generic shape');
    }
}
// Define a subclass Circle that overrides the draw method
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}
// Define another subclass Rectangle that also overrides the drawmethod
class Rectangle extends Shape {
    draw() {
        console.log('Drawing a rectangle');
    }
}
function drawShape(shape) {
    shape.draw(); // Dynamic method binding based on object type
}
const circle = new Circle();
const rectangle = new Rectangle();
drawShape(circle);     // Output: Drawing a circle
drawShape(rectangle);  // Output: Drawing a rectangle
```

In this example, the `drawShape` function takes a `Shape` object as a parameter, and the specific implementation of the `draw` method is dynamically bound at runtime based on the actual type of the object passed (`Circle` or `Rectangle`). This dynamic method binding is a key aspect of polymorphism in JavaScript.

Polymorphism allows for code reuse, flexibility, and extensibility in object-oriented designs by enabling objects to exhibit different behaviors through method overriding and dynamic method binding.

### JavaScript Abstraction

- Abstraction in JavaScript involves hiding complex implementation details and exposing only necessary interfaces. Constructor functions and prototypes help create abstraction by defining public methods and properties.

- Abstraction in JavaScript refers to the concept of hiding complex implementation details and exposing only necessary interfaces or functionalities. It allows developers to focus on using objects or functions without needing to understand their internal complexities. Abstraction helps in reducing code complexity, improving code reusability, and enhancing maintainability. Here are some ways to implement abstraction in JavaScript:

**1. Constructor Functions with Prototypes:**

Using constructor functions along with prototypes is a common way to achieve abstraction in JavaScript. You can define public methods and properties that are accessible from outside the object, while keeping internal details private.

```javascript
function Car(make, model) {
    this.make = make;
    this.model = model;
}
Car.prototype.startEngine = function() {
    console.log('Engine started');
};
const myCar = new Car('Toyota', 'Camry');
myCar.startEngine(); // Output: Engine started
```

**2. ES6 Classes:**

ES6 introduced a more syntax-friendly way to create classes in JavaScript. You can define class methods and properties, and hide implementation details within the class.

```javascript
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine() {
        console.log('Engine started');
    }
}
const myCar = new Car('Toyota', 'Camry');
myCar.startEngine(); // Output: Engine started
```

**3. Module Pattern:**

The module pattern uses closures to create private variables and methods, exposing only a public API. This helps in achieving encapsulation and abstraction.

```javascript
const CarModule = (function() {
    let make;
    let model;
    function startEngine() {
        console.log('Engine started');
    }
    return {
        setMake: function(m) {
            make = m;
        },
        setModel: function(m) {
            model = m;
        },
        start: startEngine
    };
})();
CarModule.setMake('Toyota');
CarModule.setModel('Camry');
CarModule.start(); // Output: Engine started
```

**4. ES6 Modules:**

With ES6 modules, you can create separate modules for different functionalities and import/export only the necessary parts. This helps in abstracting away implementation details and managing dependencies.

```javascript
// car.js module
export class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine() {
        console.log('Engine started');
    }
}
// main.js module
import { Car } from './car.js';
const myCar = new Car('Toyota', 'Camry');
myCar.startEngine(); // Output: Engine started
```

In all these examples, abstraction is achieved by exposing only the necessary methods and properties while hiding the internal implementation details. This helps in creating more modular, maintainable, and reusable code in JavaScript.

## JavaScript Cookies

- Cookies in JavaScript are small pieces of data that websites can store on a user's browser. They are commonly used for various purposes such as remembering user preferences, tracking user behavior, and maintaining user sessions. Here's how you can work with cookies in JavaScript:

 - In Node.js, working with cookies is a bit different compared to client-side JavaScript (which runs in a web browser). Node.js typically handles cookies in the context of server-side web development, such as creating, reading, and manipulating cookies as part of HTTP request and response handling.

Here's an example of how you can work with cookies in a Node.js web application using the Express framework:

**1. Install Express and Cookie-parser:**

First, make sure you have Node.js installed. Then, create a new Node.js project and install Express and the cookie-parser middleware.

```bash
> mkdir myapp
> cd myapp
> npm init -y
> npm install express cookie-parser
```

**2. Create an Express App:**

Create an `app.js` file with the following code to set up an Express server and configure the cookie-parser middleware:

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;
// Use cookie-parser middleware
app.use(cookieParser());
// Route to set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('myCookie', 'Hello from cookie!');
    res.send('Cookie set!');
});
// Route to read a cookie
app.get('/read-cookie', (req, res) => {
    const myCookie = req.cookies.myCookie;
    res.send(`Cookie value: ${myCookie}`);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

**3. Run the Express App:**

Start your Express server by running `node app.js` in your terminal. Your server will start running on port 3000 by default.

**4. Test the Cookie Endpoints:**

   Use a web browser or a tool like cURL or Postman to test the cookie endpoints:

- Access `http://localhost:3000/set-cookie` to set a cookie.
- Access `http://localhost:3000/read-cookie` to read the cookie.

You should see "Cookie set!" when setting the cookie and "Cookie value: Hello from cookie!" when reading the cookie.

In this example, we used the `cookie-parser` middleware to parse cookies in incoming HTTP requests and set cookies in outgoing HTTP responses. This is a basic example, and in a real-world application, you would handle cookies based on your specific requirements, such as setting expiration dates, managing multiple cookies, and handling cookie security.


### Cookie Attributes

Cookies can have various attributes such as `expires` (to set expiration date), `path` (to specify the URL path the cookie is valid for), `domain` (to specify the domain the cookie is valid for), `secure` (to indicate if the cookie should only be sent over HTTPS), and `samesite` (to control when cookies are sent in cross-site requests).

```javascript
document.cookie = 'username=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/; secure; samesite=strict';
```

### Cookie with multiple Name

A cookie with multiple names typically refers to a situation where a single cookie contains multiple key-value pairs. Each key-value pair represents a different piece of information stored within the cookie. In JavaScript, you can create such cookies by separating each key-value pair with a semicolon.

Here's an example of creating a cookie with multiple names:

```javascript
document.cookie = "name1=value1; name2=value2; name3=value3";
```

In this example, the cookie contains three name-value pairs: "name1=value1", "name2=value2", and "name3=value3". You can then access these values individually when needed.


### Deleting Cookies

   To delete cookies in JavaScript, you can set their expiration date to a past date. This tells the browser to remove the cookie from its storage. Here's an example of how you can delete a cookie:

```javascript
// Set the expiration date to a past date
document.cookie = "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

```

In this example, replace "cookieName" with the name of the cookie you want to delete. Setting the expiration date to a past date (January 1, 1970) effectively removes the cookie from the browser's storage.

If the cookie you want to delete has multiple names (key-value pairs), you can include all the names and values in the same way, separated by semicolons. For example:

```javascript
document.cookie = "name1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "name2=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "name3=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

This code snippet deletes three cookies named "name1," "name2," and "name3."

## JavaScript Events

JavaScript events are actions or occurrences that happen in the browser or document, such as a user clicking a button, hovering over an element, submitting a form, or a page finishing loading. These events can trigger JavaScript code to run, allowing developers to create interactive and dynamic web applications.

Here are some common JavaScript events:

1. **Mouse Events**:

    - `click`: Occurs when a mouse button is clicked on an element.
    - `mouseover`: Fires when the mouse pointer enters an element.
    - `mouseout`: Fires when the mouse pointer leaves an element
    - `mousemove`: Occurs when the mouse pointer is moved over an element.

2. **Keyboard Events**:

    - `keydown`: Triggered when a key is pressed down.
    - `keyup`: Fired when a key is released.
    - `keypress`: Occurs when a key is pressed down and released.

3. **Form Events**:

   - `submit`: Fired when a form is submitted.
   - `reset`: Triggered when a form is reset.
   - `input`: Occurs when the value of an input element changes.

4. **Window Events**:

   - `load`: Fires when the document and all external resources (like images and stylesheets) have finished loading.
   - `resize`: Triggered when the browser window is resized.
   - `scroll`: Occurs when the user scrolls in the document.

To handle events in JavaScript, you can use event listeners. Here's an example of attaching an event listener to a button click event:

```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```

In this code, `"myButton"` is the ID of the button element, and the function inside `addEventListener` is the event handler that will run when the button is clicked.

### JavaScript addEventListener()

The `addEventListener()` method in JavaScript is used to attach an event handler to a specified element. This method allows you to listen for a specific event on an element and execute a function (the event handler) when that event occurs. Here's the syntax for `addEventListener()`:

```javascript
element.addEventListener(event, function, useCapture);
```

- `element`: The DOM element to which you want to attach the event listener.

- `event`: A string specifying the name of the event to listen for (e.g., "click", "mouseover", "keydown").

- `function`: The function to be executed when the specified event occurs.

- `useCapture` (optional): A boolean value that specifies whether the event should be captured during the event propagation phase. 

This parameter is typically set to `false` for most cases.

Here's an example of using `addEventListener()` to handle a click event on a button:

```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```

__In this example:__

- `document.getElementById("myButton")` selects the button element with the ID "myButton".

- `.addEventListener("click", function() { ... })` attaches an event listener for the "click" event to the button.

- `function() { alert("Button clicked!"); }` is the event handler function that displays an alert when the button is clicked.

You can use `addEventListener()` to handle various types of events such as mouse events, keyboard events, form events, and more. It's a versatile method for adding interactivity to web pages.

Would you like to see examples of handling other types of events with `addEventListener()`?

### JavaScript onclick event

The `onclick` event in JavaScript is a specific type of event that occurs when an element is clicked by the user. It's commonly used to add interactivity to web pages, such as triggering a function when a button is clicked. Here's how you can use the `onclick` event:

**1. Inline Event Handling**:

You can directly attach an `onclick` event handler to an HTML element using the `onclick` attribute. Here's an example with a button:

```html
<button onclick="myFunction()">Click me</button>
```

In this example, `myFunction()` is called when the button is clicked.

**2. Using JavaScript**:

Alternatively, you can attach an `onclick` event handler to an element using JavaScript code. This is often preferred for better separation of concerns. Here's an example:

```html
<button id="myButton">Click me</button>
<script>
  document.getElementById("myButton").onclick = function() {
    alert("Button clicked!");
  };
</script>
```

   In this example, an event handler function is assigned to the `onclick` property of the button element.

**3. addEventListener() Method**:
   You can also use the `addEventListener()` method to handle click events, as mentioned earlier. Here's how you can do it:

```html
<button id="myButton">Click me</button>
<script>
  document.getElementById("myButton").addEventListener("click",function() {
    alert("Button clicked!");
  });
</script>
```

This approach allows for more flexibility, especially when you need to attach multiple event handlers to the same element.

The `onclick` event is just one of many events you can handle in JavaScript. Depending on your needs, you might also work with `onmouseover`, `onkeydown`, `onsubmit`, and other events to create interactive behaviors in your web pages.

### JavaScript dblclick event

The `dblclick` event in JavaScript occurs when an element is double-clicked by the user. It's similar to the `click` event but specifically triggers when two clicks happen in quick succession on the same element. Here's how you can use the `dblclick` event:

**1. Inline Event Handling**:

You can directly attach a `dblclick` event handler to an HTML element using the `ondblclick` attribute. Here's an example with a div element:

```html
<div ondblclick="myFunction()">Double-click me</div>
```

In this example, `myFunction()` is called when the div is double-clicked.

**2. Using JavaScript**:

Alternatively, you can attach a `dblclick` event handler to an element using JavaScript code. Here's an example:

```html
<div id="myDiv">Double-click me</div>
<script>
  document.getElementById("myDiv").ondblclick = function() {
    alert("Double-clicked!");
  };
</script>
```

In this example, an event handler function is assigned to the `ondblclick` property of the div element.

**3. addEventListener() Method**:

You can also use the `addEventListener()` method to handle double-click events. Here's how you can do it:

```html
<div id="myDiv">Double-click me</div>
<script>
  document.getElementById("myDiv").addEventListener("dblclick",function() {
    alert("Double-clicked!");
  });
</script>
```

This approach allows for more flexibility, especially when you need to attach multiple event handlers to the same element or handle events on dynamically created elements.

The `dblclick` event is useful for implementing functionalities that require a double-click action, such as opening a detailed view or editing an item.

### JavaScript onload event

The `onload` event in JavaScript occurs when a page or an element has finished loading. It's commonly used to perform actions that require the entire page, including its content and resources like images and stylesheets, to be fully loaded and ready for interaction. Here's how you can use the `onload` event:

**1.Page Load**:

You can use the `onload` event in the `<body>` tag to execute JavaScript code when the entire page has finished loading. For example:

```html
<body onload="myFunction()">
  <!-- Page content -->
</body>
```

In this example, `myFunction()` will be called when the page finishes loading.

**2. Image Load**:

You can also use the `onload` event with images to perform actions when an image has finished loading. For instance:

```html
<img src="image.jpg" onload="imageLoaded()">
```

In this case, the `imageLoaded()` function will be called when the image "image.jpg" has finished loading.

**3. Using JavaScript**:

You can attach an `onload` event handler to elements using JavaScript code as well. This gives you more control and flexibility. Here's an example:

```html
<script>
  window.onload = function() {
    alert("Page loaded!");
    // Additional actions
  };
</script>
```

In this example, the anonymous function is executed when the entire page, including all resources, has finished loading.

**4. addEventListener() Method**:

Similar to other events, you can also use the `addEventListener()` method to handle the `load` event. Here's how you can do it:

```html
<script>
  window.addEventListener("load", function() {
    alert("Page loaded!");
    // Additional actions
  });
</script>
```

This approach is often preferred as it allows you to attach multiple event handlers to the same event or handle events on dynamically loaded content.

The `onload` event is commonly used for initializing scripts, loading dynamic content, or executing actions that require the entire page to be loaded.

### JavaScript onresize event

The `onresize` event in JavaScript is triggered whenever the size of the browser window is changed. This event is useful for implementing responsive design or adjusting elements based on the window dimensions. Here's how you can use the `onresize` event:

**1. Inline Event Handling**:

You can directly attach an `onresize` event handler to the `window` object using the `onresize` attribute. Here's an example:

```html
<script>
  window.onresize = function() {
    // Your resize event handling code here
    console.log("Window resized!");
  };
</script>
```

In this example, the anonymous function is executed every time the window is resized, and it logs a message to the console.

**2. Using JavaScript**:

Alternatively, you can attach an `onresize` event handler using JavaScript code. This method allows for more control and flexibility. Here's an example:

```html
<script>
  window.addEventListener("resize", function() {
    // Your resize event handling code here
    console.log("Window resized!");
  });
</script>
```

This approach is similar to the previous one but uses the `addEventListener()` method, which is often preferred for managing events.

The `onresize` event is commonly used in responsive web design to adjust layouts, update element sizes, or trigger specific actions based on the window size. Keep in mind that frequent execution of code in response to resize events can impact performance, so it's essential to optimize your event handling code accordingly.

## JavaScript Exception Handling

Exception handling in JavaScript allows you to gracefully handle errors that occur during the execution of your code. JavaScript provides try...catch statements for this purpose. Here's how it works:

**1. try...catch Statement**:

- The `try` block contains the code that you want to monitor for exceptions.
- If an exception occurs within the `try` block, JavaScript immediately jumps to the `catch` block.
- The `catch` block catches the exception and allows you to handle it gracefully.

__Here's a basic example:__

```javascript
try {
  // Code that may throw an error
  let result = someFunction();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error);
}
```

__In this example:__

- The `try` block contains a function call `someFunction()` that may throw an error.
- If `someFunction()` throws an error, JavaScript jumps to the `catch` block, where you can handle the error. The error object (`error`) contains information about the error, such as its message.

**2. Error Types**:

JavaScript has several built-in error types, such as `Error`, `SyntaxError`, `TypeError`, `ReferenceError`, etc. You can catch specific types of errors using multiple `catch` blocks:

```javascript
try {
  // Code that may throw an error
} catch (error) {
  if (error instanceof TypeError) {
    // Handle TypeError
  } else if (error instanceof ReferenceError) {
    // Handle ReferenceError
  } else {
    // Handle other errors
  }
}
```

**3. finally Block**:

You can also use a `finally` block after the `try...catch` block. The code inside the `finally` block runs whether an exception occurs or not. It's often used for cleanup tasks.

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
} finally {
  // Cleanup code (always executed)
}
```

**4. Throwing Custom Errors**:

You can throw custom errors using the `throw` statement. This can be helpful for signaling specific conditions in your code:

```javascript
function validateInput(input) {
  if (!input) {
    throw new Error("Input cannot be empty");
  }
  // More validation logic
}

try {
  validateInput(null);
} catch (error) {
  console.error(error.message); // Output: "Input cannot be empty"
}
```

Exception handling is crucial for robust JavaScript applications as it allows you to handle unexpected situations and prevent crashes.

### JavaScript try-catch

The `try...catch` statement in JavaScript is used for error handling. It allows you to write code that might throw an error inside a `try` block, and if an error occurs, you can catch and handle it gracefully in the `catch` block. Here's a basic example of how `try...catch` works:

```javascript
try {
  // Code that may throw an error
  let result = someFunction();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error);
}
```

__In this example:__

- The `try` block contains the code that might throw an error, such as calling a function (`someFunction()` in this case).
- If an error occurs within the `try` block (for example, if `someFunction()` throws an error), JavaScript immediately jumps to the `catch` block.
- The `catch` block catches the error, and you can handle it accordingly. The `error` object contains information about the error, such as its message.

You can also catch specific types of errors using multiple `catch` blocks or conditional checks inside the `catch` block:

```javascript
try {
  // Code that may throw an error
} catch (error) {
  if (error instanceof TypeError) {
    // Handle TypeError
  } else if (error instanceof ReferenceError) {
    // Handle ReferenceError
  } else {
    // Handle other errors
  }
}
```

Additionally, you can use a `finally` block after the `try...catch` block. The code inside the `finally` block runs whether an exception occurs or not. It's often used for cleanup tasks:

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
} finally {
  // Cleanup code (always executed)
}
```

The `try...catch` statement is crucial for handling errors and preventing unexpected crashes in JavaScript applications.

## Popup Basics

Popup windows in web development typically refer to small browser windows that open on top of the main browser window. They are often used for displaying additional information, alerts, or forms. Here are the basics of creating popup windows in JavaScript:

**1. Using `window.open()`**:

The `window.open()` method is used to open a new browser window or tab. It takes parameters for specifying the URL of the page to be opened, window size, position, and other options. 
   
   __Here's a basic example:__

```javascript
// Open a popup window with a specified URL and dimensions
let popup = window.open("https://www.example.com", "Popup","width=400,height=300");
```

   __In this example:__

- `"https://www.example.com"` is the URL of the page to open in the popup.
- `"Popup"` is the name of the popup window (optional but useful for referencing the window later).
- `"width=400,height=300"` specifies the dimensions of the popup window.

**2. Controlling Popup Behavior**:

You can customize the behavior of the popup window by adding additional options to the third parameter of `window.open()`. For example:

```javascript
let popup = window.open(
  "https://www.example.com",
  "Popup",
  "width=400,height=300,toolbar=no,location=no,status=no,menubar=no"
);
```

In this example, `toolbar`, `location`, `status`, and `menubar` are set to `no`, which hides these elements in the popup window.

**3. Closing Popup Windows**:
   
You can close a popup window programmatically using the `window.close()` method. For example:

```javascript
if (popup && !popup.closed) {
  popup.close(); // Close the popup window if it's open
}
```

This code snippet checks if the `popup` variable refers to an open window and then closes it.

**4. Popup Blockers**:

Note that modern browsers often block popup windows by default to prevent unwanted behavior. Popup blockers can interfere with your attempts to open popup windows, especially if they are triggered without user interaction (e.g., not triggered by a click event).

**5. Best Practices**:

Use popup windows judiciously and consider user experience when deciding to open a popup. They can be intrusive if overused. Ensure that your popup windows provide value to the user and are not used for spammy or deceptive purposes.

Would you like to see more specific examples or have any particular questions about popup windows in JavaScript?

### Alert Boxes

Alert boxes in JavaScript are simple pop-up dialogs that display a message to the user and provide an OK button for acknowledgment. They are often used to alert users about important information or to display error messages. Here's how you can create an alert box:

```javascript
alert("This is an alert message!");
```

When this code runs, a pop-up dialog with the message "This is an alert message!" will appear in the browser window. The user can then click the OK button to close the dialog.

You can also use variables or dynamic content within the alert message:

```javascript
let message = "Hello, user!";
alert(message);
```

In this case, the alert box will display the content of the `message` variable ("Hello, user!").

Alert boxes are synchronous, meaning that JavaScript code execution pauses until the user acknowledges the alert by clicking the OK button. This can be both a benefit and a limitation depending on your use case.

However, note that alert boxes can be quite intrusive and can disrupt the user experience if overused. They are best suited for displaying critical messages that require immediate attention from the user.

### Confirm Box

A confirm box in JavaScript is a pop-up dialog that prompts the user to confirm or cancel an action. It typically provides two buttons: "OK" and "Cancel." Confirm boxes are useful for asking users to confirm before proceeding with a potentially irreversible action, such as deleting a record or submitting a form. Here's how you can create a confirm box:

```javascript
let result = confirm("Do you want to proceed?");
if (result === true) {
  // User clicked OK
  console.log("User confirmed.");
} else {
  // User clicked Cancel or closed the dialog
  console.log("User canceled.");
}
```

When this code runs, a confirm box with the message "Do you want to proceed?" will appear. If the user clicks "OK," the `confirm()` function returns `true`, and the code inside the `if` block executes. If the user clicks "Cancel" or closes the dialog, the `confirm()` function returns `false`, and the code inside the `else` block executes.

Confirm boxes are synchronous like alert boxes, meaning that JavaScript code execution pauses until the user makes a choice.

**Here are some key points about confirm boxes:**

- They are commonly used for actions that require user confirmation, such as deleting data or submitting a critical form.
- The returned value (`true` or `false`) from `confirm()` can be used to determine the user's choice and execute corresponding actions.
- It's important to handle both the "OK" and "Cancel" cases appropriately in your code.


### Prompt Box

A prompt box in JavaScript is a pop-up dialog that prompts the user to enter input, typically text. It provides an input field along with "OK" and "Cancel" buttons. Prompt boxes are often used when you need to get user input, such as asking for a name, age, or any other information. Here's how you can create a prompt box:

```javascript
let userInput = prompt("Please enter your name:");
if (userInput !== null) {
  // User entered a value and clicked OK
  console.log("User entered:", userInput);
} else {
  // User clicked Cancel or closed the dialog
  console.log("User canceled or closed the prompt.");
}
```

When this code runs, a prompt box with the message "Please enter your name:" and an input field will appear. The `prompt()` function returns the text entered by the user when they click "OK." If the user clicks "Cancel" or closes the dialog, the `prompt()` function returns `null`.

**Here are some key points about prompt boxes:**

- They are commonly used for getting user input, such as text data.
- The returned value from `prompt()` is either the user's input or `null` if the user cancels or closes the dialog.
- It's important to check if the returned value is not `null` before using the user's input, as `null` indicates that the user canceled the prompt.

Would you like to see more examples or have any specific questions about using prompt boxes?

### Functions

Functions in JavaScript are blocks of reusable code that perform a specific task when called. They allow you to organize and encapsulate code, making it easier to manage and reuse. Here's a basic example of a function:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Call the function
greet("John"); // Output: "Hello, John!"
greet("Alice"); // Output: "Hello, Alice!"
```

__In this example:__

- `function greet(name)` defines a function named `greet` that takes a parameter `name`.
- Inside the function, `console.log("Hello, " + name + "!");` prints a greeting message using the `name` parameter.
- `greet("John");` and `greet("Alice");` are function calls, passing different values ("John" and "Alice") to the `name` parameter.

Functions can also return values using the `return` statement. Here's an example:

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum); // Output: "Sum: 8"
```

__In this example:__

- `function add(a, b)` defines a function named `add` that takes two parameters `a` and `b`.
- Inside the function, `return a + b;` returns the sum of `a` and `b`.
- `let sum = add(5, 3);` calls the `add` function with arguments `5` and `3` and assigns the returned value (`8`) to the variable `sum`.


### Functions with parameters

Functions in JavaScript can take parameters, which are variables that you define within the parentheses of the function declaration. These parameters allow you to pass values to the function when you call it. Here's an example of a function with parameters:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Call the function with a parameter
greet("John"); // Output: "Hello, John!"
greet("Alice"); // Output: "Hello, Alice!"
```

In this example, the `greet` function takes a `name` parameter. When you call the function `greet("John")`, the value `"John"` is passed as the `name` parameter, and the function outputs "Hello, John!" Similarly, calling `greet("Alice")` outputs "Hello, Alice!".

You can define functions with multiple parameters as well:

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum); // Output: "Sum: 8"
```

In this example, the `add` function takes two parameters, `a` and `b`. When you call `add(5, 3)`, `5` is passed as `a`, `3` is passed as `b`, and the function returns their sum, which is assigned to the variable `sum`.

JavaScript functions can have any number of parameters, and you can use them inside the function body just like variables. Additionally, you can set default values for parameters and use rest parameters (`...args`) to handle variable numbers of arguments.

### Functions with return

Functions in JavaScript can return values using the `return` statement. When a function returns a value, you can use that value in other parts of your code. Here's an example of a function that returns a value:

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum); // Output: "Sum: 8"
```

In this example, the `add` function takes two parameters, `a` and `b`, and returns their sum using the `return` statement. When you call `add(5, 3)`, the function returns `8`, which is then assigned to the variable `sum`. You can then use `sum` in your code, such as logging it to the console.

Functions can return any type of value, including numbers, strings, booleans, arrays, objects, and even other functions. Here's another example that returns a string:

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

let greeting = greet("John");
console.log(greeting); // Output: "Hello, John!"
```

In this example, the `greet` function returns a greeting message as a string. When you call `greet("John")`, the function returns `"Hello, John!"`, which is assigned to the variable `greeting` and then logged to the console.

It's important to note that when a function encounters a `return` statement, it immediately exits the function, and no further code in that function is executed.

## Arrays

### Nested

Nested loops in JavaScript are loops that are placed inside another loop. This allows you to perform repetitive tasks within repetitive tasks, making it possible to handle complex iterations and patterns. There are various scenarios where nested loops can be beneficial, such as when working with multidimensional arrays or when generating combinations of elements. Here's an example of nested loops:

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log("i:", i, "j:", j);
  }
}
```

In this example, we have a `for` loop nested inside another `for` loop. The outer loop (`i`) runs from `1` to `3`, and for each iteration of the outer loop, the inner loop (`j`) runs from `1` to `2`. The console output will show combinations of `i` and `j` values:

```
i: 1 j: 1
i: 1 j: 2
i: 2 j: 1
i: 2 j: 2
i: 3 j: 1
i: 3 j: 2
```

**Nested loops can be used to traverse and manipulate multidimensional arrays:**

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
```

In this example, we have a 2D array `matrix`, and nested loops are used to iterate through each element of the matrix and log its value to the console.

Nested loops can be nested further to handle more complex structures or patterns. However, keep in mind that deeply nested loops can lead to code that is harder to read and maintain. It's essential to strike a balance between using nested loops for necessary tasks and avoiding excessive complexity.

## Arrays 

Arrays in JavaScript are used to store multiple values in a single variable. They are a fundamental data structure and are widely used for organizing and manipulating collections of data. Here's an overview of arrays in JavaScript:

**1. Creating Arrays**:

You can create an array in JavaScript using square brackets `[]` and separating elements with commas. Arrays can hold values of any data type, including numbers, strings, booleans, objects, and even other arrays. Here are some examples:

```javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
let mixedArray = [1, "hello", true, { key: "value" }];
let emptyArray = [];
```

**2. Accessing Array Elements**:

You can access individual elements in an array using square bracket notation and the index of the element. JavaScript arrays are zero-indexed, meaning the first element has an index of `0`, the second element has an index of `1`, and so on. Here's how you access array elements:

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"
```

**3. Array Length**:

You can get the length of an array using the `length` property. It represents the number of elements in the array. Here's an example:

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5
```

**4. Modifying Arrays**:

Arrays in JavaScript are mutable, meaning you can modify their elements. You can add elements to the end of an array using the `push()` method, remove elements from the end using `pop()`, add elements to the beginning using `unshift()`, and remove elements from the beginning using `shift()`. Here are some examples:

```javascript
let fruits = ["apple", "banana"];
fruits.push("orange"); // Adds "orange" to the end
fruits.pop(); // Removes the last element ("orange")
fruits.unshift("grape"); // Adds "grape" to the beginning
fruits.shift(); // Removes the first element ("grape")
```

Arrays in JavaScript offer powerful functionalities for working with collections of data. They are used extensively in programming to store and manipulate lists of items efficiently. If you have specific questions about arrays or would like to see more examples, feel free to ask!

## String and its Methods

Strings in JavaScript are sequences of characters, such as letters, numbers, and symbols, enclosed in single ('') or double ("") quotes. JavaScript provides a variety of methods that allow you to manipulate and work with strings efficiently. Here are some common string methods:

**1. Length** (`length` property):

The `length` property of a string returns the number of characters in the string. It doesn't count spaces or other non-visible characters. 

__Example:__

```javascript
let str = "Hello, world!";
console.log(str.length); // Output: 13
```

**2. charAt()** and **charCodeAt()**:

- `charAt(index)` returns the character at the specified index in the string.
- `charCodeAt(index)` returns the Unicode value (integer code) of the character at the specified index. 

__Example:__

```javascript
let str = "Hello";
console.log(str.charAt(0)); // Output: "H"
console.log(str.charCodeAt(0)); // Output: 72 (Unicode value of "H")
```

**3. indexOf()** and **lastIndexOf()**:

- `indexOf(substring)` returns the index of the first occurrence of the specified substring in the string, or -1 if the substring is not found.
- `lastIndexOf(substring)` returns the index of the last occurrence of the specified substring in the string, or -1 if the substring is not found. 

__Example:__

```javascript
let str = "Hello, world!";
console.log(str.indexOf("l")); // Output: 2
console.log(str.lastIndexOf("l")); // Output: 10
```

**4. slice()**:
   The `slice(startIndex, endIndex)` method extracts a portion of a string starting from `startIndex` up to, but not including, `endIndex`. 

```javascript
let str = "Hello, world!";
console.log(str.slice(0, 5)); // Output: "Hello"
```

These are just a few examples of string methods available in JavaScript. There are many more, each serving a specific purpose in string manipulation. If you have specific tasks or scenarios where you'd like to use string methods, feel free to ask for more details or examples!

## Number and its Methods

In JavaScript, numbers are numeric values, such as integers or floating-point numbers. JavaScript provides a variety of methods and properties that allow you to work with numbers efficiently. Here are some common methods and properties associated with numbers in JavaScript:

**1. **toString()**:**

The `toString()` method converts a number to a string. You can also specify the radix (base) for the string representation. Example:

```javascript
let num = 10;
console.log(num.toString()); // Output: "10"
console.log(num.toString(2)); // Output: "1010" (binaryrepresentation)
```

**2. **toFixed()** and **toPrecision()**:**

- `toFixed(digits)` formats a number with a fixed number of decimal places specified by `digits`.

```javascript
// Define a number
let number = 123.456;
// Format the number with 2 digits after the decimal point usingtoFixed
let formattedNumber = number.toFixed(2);
console.log("Formatted number:", formattedNumber);
```

- `toPrecision(precision)` formats a number with the specified precision (total number of digits).

```javascript
// Define a number
let number = 123.456;
// Format the number with a precision of 5 using toPrecision
let formattedNumber = number.toPrecision(5);
console.log("Formatted number:", formattedNumber);
```


**3. **parseInt()** and **parseFloat()**:**

- `parseInt(string, radix)` parses a string and returns an integer based on the specified radix (base).

```javascript
// Define a string containing a number
let str = "123";
// Parse the string to an integer using parseInt
let parsedInt = parseInt(str);
console.log("Parsed integer:", parsedInt);
```

- `parseFloat(string)` parses a string and returns a floating-point number.

```javascript
// Define a number
let number = 123.456;
// Format the number with a precision of 5 using toPrecision
let formattedNumber = number.toPrecision(5);
console.log("Formatted number:", formattedNumber);
```


**4. **isNaN()** and **isFinite()**:**

- `isNaN(value)` checks if a value is NaN (Not a Number).
- `isFinite(value)` checks if a value is a finite number.

```javascript
console.log(isNaN(10)); // Output: false
console.log(isFinite(Infinity)); // Output: false
```

**5. **Math Object**:**

JavaScript provides a `Math` object with many mathematical methods and constants, such as `Math.abs()`, `Math.round()`, `Math.max()`, `Math.min()`, `Math.PI`, `Math.sqrt()`, and more.

```javascript
console.log(Math.abs(-5)); // Output: 5
console.log(Math.round(3.14)); // Output: 3
console.log(Math.max(10, 20, 30)); // Output: 30
console.log(Math.PI); // Output: 3.141592653589793
```

These are just a few examples of methods and properties related to numbers in JavaScript. They are useful for various mathematical operations, formatting numbers, and checking number-related conditions. If you have specific tasks or scenarios where you'd like to use number methods, feel free to ask for more details or examples!

## Reference

**If to learn click this link button** 👇

- [Reference](https://chat.openai.com/c/e656347c-8985-4b3c-b717-2033b18ab671)

- [Reference](https://chat.openai.com/c/e0c0fff2-c45f-4f0d-8646-093da16af632)
