//<!--for numeric values-->
//function check(n) {
//    if (!(n >= -500 && n <= 500)) {
//      throw new RangeError("The argument must be between -500 and 500.");
//    }
//  }
//  
//  try {
//    check(2000);
//  } catch (error) {
//    if (error instanceof RangeError) {
//      console.log("Error caught: " + error.message);
//      // Handle the error
//    }
//  }
  
// <!--for non-numeric values-->
function check(value) {
    if (!["apple", "banana", "carrot"].includes(value)) {
      throw new RangeError(
        'The argument must be an "apple", "banana", or "carrot".',
      );
    }
  }
  
  try {
    check("cabbage");
  } catch (error) {
    if (error instanceof RangeError) {
      console.log("Error caught: " + error.message);
    }
  }