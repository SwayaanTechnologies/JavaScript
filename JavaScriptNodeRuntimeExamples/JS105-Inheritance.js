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

