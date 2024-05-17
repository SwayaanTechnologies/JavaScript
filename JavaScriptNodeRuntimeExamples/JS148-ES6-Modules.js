const { PI } = Math;

exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;
// foo.js
const circle = require('./JS148-ES6-Modules.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);