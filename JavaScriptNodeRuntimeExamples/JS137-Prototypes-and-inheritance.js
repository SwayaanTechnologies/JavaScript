// Define a prototype object
const personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Create a new object that inherits from personPrototype
const person1 = Object.create(personPrototype);
person1.name = 'Murali';
person1.greet(); // Output: Hello, my name is Murali

const person2 = Object.create(personPrototype);
person2.name = 'Bob';
person2.greet(); // Output: Hello, my name is Bob