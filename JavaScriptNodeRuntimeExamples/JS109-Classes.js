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