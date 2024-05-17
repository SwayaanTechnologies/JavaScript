//const myObject = {
//    city: "Salem",
//    greet() {
//      console.log(`Greetings from ${this.city}`);
//    },
//  };
//  
//  myObject.greet(); // Greetings from Salem

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);