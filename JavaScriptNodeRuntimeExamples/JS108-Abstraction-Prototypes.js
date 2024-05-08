function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.startEngine = function() {
    console.log('Engine started');
};

const myCar = new Car('Toyota', 'Camry');
myCar.startEngine(); // Output: Engine started