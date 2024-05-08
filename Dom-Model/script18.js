// Create a new paragraph element
const newParagraph = document.createElement('p');

// Create a new text node
const textNode = document.createTextNode('This is a new paragraph created using JavaScript.');

// Append the text node to the paragraph element
newParagraph.appendChild(textNode);

// Get the container div where we want to append the new paragraph
const containerDiv = document.getElementById('container');

// Append the new paragraph to the container div
containerDiv.appendChild(newParagraph);