// Create a new paragraph element
const paragraph = document.createElement('p');

// Set the text content of the paragraph
paragraph.textContent = 'This is a new paragraph created using the DOM model.';

// Get the content div where we want to append the paragraph
const contentDiv = document.getElementById('content');

// Append the paragraph to the content div
contentDiv.appendChild(paragraph);