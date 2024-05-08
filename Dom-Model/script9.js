// Get the outer and inner div elements
const outerDiv = document.getElementById('outer');
const innerDiv = document.getElementById('inner');

// Add event listeners with and without capturing
outerDiv.addEventListener('click', function() {
    console.log('Outer Div Clicked (Bubbling)');
}, false); // Default is false, indicating bubbling phase

innerDiv.addEventListener('click', function() {
    console.log('Inner Div Clicked (Bubbling)');
}, false);

outerDiv.addEventListener('click', function() {
    console.log('Outer Div Clicked (Capturing)');
}, true); // true indicates capturing phase

innerDiv.addEventListener('click', function() {
    console.log('Inner Div Clicked (Capturing)');
}, true);