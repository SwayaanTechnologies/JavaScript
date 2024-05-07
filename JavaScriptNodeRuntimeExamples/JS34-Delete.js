let obj = { a: 1, b: 2, c: 3 };

console.log("Before delete:", obj); // Output: { a: 1, b: 2, c: 3 }

delete obj.b;

console.log("After delete:", obj); // Output: { a: 1, c: 3 }