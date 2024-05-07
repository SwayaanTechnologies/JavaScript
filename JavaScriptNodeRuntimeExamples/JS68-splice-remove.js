let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
let removedFruits = fruits.splice(1, 2); // Removes elements from index 1 to 2 (inclusive)
console.log(removedFruits); // Output: ["banana", "orange"]
console.log(fruits); // Output: ["apple", "grape", "kiwi"]