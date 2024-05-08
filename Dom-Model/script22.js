function validateEmail() {
    // Get the email input and error span
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    // Reset error message
    emailError.textContent = '';

    // Validate email (required and correct format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email address';
    } else {
        emailError.textContent = 'Email is valid';
    }
}