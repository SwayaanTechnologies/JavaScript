class MathUtils {
    // Static method to calculate the square of a number
    static square(num) {
        return num * num;
    }

    // Static method to calculate the cube of a number
    static cube(num) {
        return num * num * num;
    }
}

// Call static methods directly on the class
console.log(MathUtils.square(5)); // Output: 25
console.log(MathUtils.cube(3));   // Output: 27