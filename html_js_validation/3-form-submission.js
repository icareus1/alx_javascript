function handleFormSubmit(event) {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Retrieve the values entered in the form fields.
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validate the required fields.
    if (name === '' || email === '') {
        // Display an error message.
        alert('Please fill in all required fields.');

        // Return to prevent the form submission.
        return;
    }

    // All validations pass.
    // Display a success message.
    alert('Form submitted successfully!');

    // Submit the form.
    document.getElementById('submitForm').submit();
}
