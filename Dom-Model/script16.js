function showFirstChild() {
    // Get the parent div element
    const parentDiv = document.getElementById('parentDiv');

    // Get the first child node of the parent div
    const firstChild = parentDiv.firstChild;

    // Display the first child node in the console
    console.log('First Child Node:', firstChild);
}

function showLastChild() {
    // Get the parent div element
    const parentDiv = document.getElementById('parentDiv');

    // Get the last child node of the parent div
    const lastChild = parentDiv.lastChild;

    // Display the last child node in the console
    console.log('Last Child Node:', lastChild);
}