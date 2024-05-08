// Add a click event listener to a button
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Target Element:', event.target);
});