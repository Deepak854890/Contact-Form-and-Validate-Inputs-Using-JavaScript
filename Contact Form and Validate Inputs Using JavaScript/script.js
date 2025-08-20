const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function validateName() {
    if (nameField.value === '') {
        nameError.textContent = 'Name is required.';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

function validateEmail() {
    const emailValue = emailField.value;
    if (emailValue === '') {
        emailError.textContent = 'Email is required.';
        return false;
    } else if (!emailValue.includes('@')) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validateMessage() {
    if (messageField.value === '') {
        messageError.textContent = 'Message is required.';
        return false;
    } else {
        messageError.textContent = '';
        return true;
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields correctly.');
    }
});
