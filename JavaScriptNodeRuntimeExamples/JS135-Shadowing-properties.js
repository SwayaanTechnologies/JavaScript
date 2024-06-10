const myDate = new Date(2002, 5, 20);

console.log(myDate.getYear()); // 102

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'
