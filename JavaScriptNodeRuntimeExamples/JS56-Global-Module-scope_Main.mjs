import {foo} from './JS56-Global-Module-scope.mjs';

// const foo = "foo";
	console.log(foo); // "foo"
		
	function bar() {
		if (true) {
			let foo = 'Hello';
			console.log(foo);
		}
	}

	bar(); // "foo"