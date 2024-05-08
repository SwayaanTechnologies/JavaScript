function validateForm() {
    // Get form inputs and error spans
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validate username (required)
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        return false; // Prevent form submission
    }

    // Validate email (required and correct format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email address';
        return false; // Prevent form submission
    }

    // Validate password (required and minimum length)
    if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        return false; // Prevent form submission
    }

    // Form is valid, allow submission
    return true;
}