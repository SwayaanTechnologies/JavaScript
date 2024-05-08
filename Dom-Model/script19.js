// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New Paragraph';

// Get the container div where we want to append elements
const containerDiv = document.getElementById('container');

// Append the new paragraph as the last child of the container div
containerDiv.appendChild(newParagraph);

// Create another paragraph element
const anotherParagraph = document.createElement('p');
anotherParagraph.textContent = 'Another New Paragraph';

// Get the reference node (existing paragraph) before which to insert the new paragraph
const referenceNode = document.querySelector('#container p:nth-child(2)');

// Insert the new paragraph before the reference node
containerDiv.insertBefore(anotherParagraph, referenceNode);