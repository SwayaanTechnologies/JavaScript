//function sayWord(word) {
//	return () => console.log(word);
//}
//
//const sayHello = sayWord("hello");
//
//sayHello(); // "hello"
//------
//if (true) {
//	const foo = "foo";
//	console.log(foo); // "foo"
//}
//------
function sayFoo() {
	const foo = "foo";
	console.log(foo);
}

sayFoo(); // "foo"

console.log(foo); // Uncaught ReferenceError: foo is not defined

