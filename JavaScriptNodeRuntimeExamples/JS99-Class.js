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