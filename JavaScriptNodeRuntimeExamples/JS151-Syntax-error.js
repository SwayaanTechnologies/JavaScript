//try {
//    eval("hoo bar");
//  } catch (e) {
//    console.log(e instanceof SyntaxError); // true
//    console.log(e.message);
//    console.log(e.name); // "SyntaxError"
//    console.log(e.stack); // Stack of the error
//  }

try {
    throw new SyntaxError("Hello");
  } catch (e) {
    console.log(e instanceof SyntaxError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "SyntaxError"
    console.log(e.stack); // Stack of the error
  }