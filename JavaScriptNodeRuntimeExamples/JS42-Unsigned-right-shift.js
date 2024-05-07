let num = -8; // Binary representation: 11111111111111111111111111111000 (32-bit signed integer)
let shiftedNum = (num >>> 2) & 0x3fffffff; // Simulate unsigned right shift

console.log("Original Number:", num);
console.log("Unsigned Right Shift Result:", shiftedNum);