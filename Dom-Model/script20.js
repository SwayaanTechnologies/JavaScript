// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New Paragraph';

// Get the container div where we want to insert elements
const containerDiv = document.getElementById('container');

// Insert the new paragraph as the first child of the container div
containerDiv.insertAdjacentElement('afterbegin', newParagraph);

// Insert another paragraph element as the next sibling of the new paragraph
newParagraph.insertAdjacentHTML('afterend', '<p>Next New Paragraph</p>');

// Insert HTML content before the second existing paragraph
const existingParagraph = document.querySelector('#container p:nth-child(2)');
existingParagraph.insertAdjacentHTML('beforebegin', '<p>Before Existing Paragraph</p>');