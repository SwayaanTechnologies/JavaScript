function showNextSibling() {
    // Get the target element
    const targetElement = document.getElementById('targetElement');

    // Get the next sibling of the target element
    const nextSibling = targetElement.nextSibling;

    // Display the next sibling in the console
    console.log('Next Sibling:', nextSibling);
}

function showPreviousSibling() {
    // Get the target element
    const targetElement = document.getElementById('targetElement');

    // Get the previous sibling of the target element
    const previousSibling = targetElement.previousSibling;

    // Display the previous sibling in the console
    console.log('Previous Sibling:', previousSibling);
}