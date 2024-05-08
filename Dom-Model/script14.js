function showParent() {
    // Get the paragraph element
    const paragraph = document.getElementById('paragraph');

    // Get the parent node of the paragraph
    const parentDiv = paragraph.parentNode;

    // Display the parent node's ID in the console
    console.log('Parent Node ID:', parentDiv.id);
}