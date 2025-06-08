const email = document.getElementById('name'); // Assuming this is for the email field
const password = document.getElementById('password');
const button = document.querySelector('button[type="submit"]'); // Select the submit button
const passwordError = document.querySelector('.passwordError');

passwordError.style.fontSize = "10px";
passwordError.style.color = "rgb(48, 162, 200)";

password.addEventListener('input', () => {
    if (password.value.length < 6) {
        button.disabled = true;
        passwordError.textContent = 'Must be at least 6 characters long.';
        // You might want to style the input border here as well
        password.classList.add('error');
        password.classList.remove('success');
    } else {
        passwordError.textContent = '';
        button.disabled = false;
        password.classList.remove('error');
        password.classList.add('success');
    }
});

const form = document.querySelector('form'); // Select the form element

form.addEventListener('submit', (event) => {
    if (button.disabled) {
        event.preventDefault(); // Prevent submission if the button is disabled
        // Optionally, display a more general error message
        // const submitError = document.createElement('p');
        // submitError.textContent = 'Please correct the errors in the form.';
        // form.insertBefore(submitError, button.parentNode);
    } else {
        // If the button is enabled, the form will submit (or your custom submission logic here)
        // You can add your AJAX request or redirection here
        // location.href = "page 2.html";
        location.href = "page 2.html";
    }
});

// Optional: Initial check on page load
if (password.value.length < 6) {
    button.disabled = true;
}