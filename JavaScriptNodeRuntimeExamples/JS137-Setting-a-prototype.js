// Using Object.create
//const personPrototype = {
//    greet() {
//      console.log("hello!");
//    },
//  };
//  
//  const carl = Object.create(personPrototype);
//  carl.greet(); // hello!

//Using a constructor
const personPrototype = {
    students() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
  function Person(name) {
    this.name = name;
  }
  // Assign Method to the Prototype
  // Object.assign(Person.prototype, personPrototype);
  // or
  Person.prototype.students = personPrototype.students;
  // Create instances of Person 
  const alice = new Person(`Muralitharan`);
  const bob = new Person(`Yoganath`);
  
  //Call the students Method
  alice.students();
  bob.students();