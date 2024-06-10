const { PI } = Math;

export function area(r) { return PI * r ** 2; }
export function circumference(r) { return 2 * PI * r; }
// foo.js
import { area } from './JS146-ES6-Classes.js';
console.log(`The area of a circle of radius 4 is ${area(4)}`);