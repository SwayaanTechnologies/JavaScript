function showChildren() {
    // Get the parent div element
    const parentDiv = document.getElementById('parentDiv');

    // Get the children nodes of the parent div
    const children = parentDiv.childNodes;

    // Display the number of children nodes and their types in the console
    console.log('Number of Children:', children.length);
    children.forEach(node => {
        console.log('Child Node Type:', node.nodeType);
    });
}