document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Fields
    let nameField = document.getElementById("name");
    let emailField = document.getElementById("email");
    let messageField = document.getElementById("message");
    let successMessage = document.getElementById("successMessage");

    // Error Elements
    let nameError = nameField.nextElementSibling;
    let emailError = emailField.nextElementSibling;
    let messageError = messageField.nextElementSibling;

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (nameField.value.trim() === "") {
        nameError.textContent = "Full name is required.";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailField.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(emailField.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Message validation
    if (messageField.value.trim() === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }

    // If valid, show success
    if (isValid) {
        successMessage.textContent = "✅ Thank you for contacting us!";
        // Clear form
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";
    }
});