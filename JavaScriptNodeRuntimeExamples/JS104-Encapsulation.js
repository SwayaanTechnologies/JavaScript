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