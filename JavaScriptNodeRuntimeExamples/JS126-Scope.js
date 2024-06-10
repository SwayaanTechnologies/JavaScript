function sayWord(word) {
	return () => console.log(word);
}

const sayHello = sayWord("hello");

sayHello(); // "hello"

if (true) {
	const foo = "foo";
	console.log(foo); // "foo"
}


