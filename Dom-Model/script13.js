function checkClassOnElement() {
    const targetElement = document.getElementById('targetElement');
    const containsClass = targetElement.classList.contains('highlight');
    console.log('Contains Class:', containsClass);
  }