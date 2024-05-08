// Define a superclass Shape
class Shape {
    draw() {
        console.log('Drawing a generic shape');
    }
}

// Define a subclass Circle that overrides the draw method
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

// Define another subclass Rectangle that also overrides the draw method
class Rectangle extends Shape {
    draw() {
        console.log('Drawing a rectangle');
    }
}

function drawShape(shape) {
    shape.draw(); // Dynamic method binding based on object type
}

const circle = new Circle();
const rectangle = new Rectangle();

drawShape(circle);     // Output: Drawing a circle
drawShape(rectangle);  // Output: Drawing a rectangle