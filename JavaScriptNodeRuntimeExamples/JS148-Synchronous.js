//function firstTask() {
//    console.log("Task 1");
//  }
  
//  function secondTask() {
//    console.log("Task 2");
//  }
  
//  function thirdTask() {
//  console.log("Task 3");  
//  }
  
//  // Execute the functions
//  firstTask(); //output : Task 1
//  secondTask();//output : Task 2
//  thirdTask(); //output : Task 3

function someLongRunningFunction() {
    let start = Date.now();
    while (Date.now() - start < 5000) {
        // do nothing
    }
    return "Hello";
}
console.log('Starting...');
let result = someLongRunningFunction();
console.log(result);

console.log('...Finishing');