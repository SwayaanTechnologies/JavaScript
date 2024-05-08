// Constructor function for Animal
function Animal(type) {
    this.type = type;
}

// Add a method to Animal's prototype
Animal.prototype.sound = function() {
    console.log(`${this.type} makes a sound`);
};

// Constructor function for Dog
function Dog(name) {
    Animal.call(this, 'Dog');
    this.name = name;
}

// Link Dog's prototype to Animal's prototype for inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Buddy');
dog.sound(); // Output: Dog makes a sound
