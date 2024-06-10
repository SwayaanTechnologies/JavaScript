function makePerson(name) {
	let _name = name;

	function privateSetName(newName) {
		_name = newName;
	}

	return {
		setName: (newName) => privateSetName(newName),
		getName: () => _name,
	};
}

const person = makePerson("John");
console.log(person.getName()); // Output: "John"

person.setName("Alice");
console.log(person.getName()); // Output: "Alice"
