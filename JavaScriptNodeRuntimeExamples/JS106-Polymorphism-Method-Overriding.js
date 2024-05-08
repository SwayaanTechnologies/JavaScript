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