// Add an event listener to the dropdown menu to detect changes in the selection.
document.getElementById('numFields').addEventListener('change', generateInputFields);

// Create a function called `generateInputFields()` that takes the selected value from the dropdown menu as a parameter and generates the specified number of text input fields dynamically within the `inputContainer` div.
function generateInputFields(event) {
    // Get the selected value from the dropdown menu.
    const numFields = event.target.value;

    // Clear the inputContainer div.
    document.getElementById('inputContainer').innerHTML = '';

    // Create a loop to generate the specified number of text input fields.
    for (let i = 0; i < numFields; i++) {
        // Create a new text input field.
        const inputField = document.createElement('input');

        // Set the type of the input field to text.
        inputField.type = 'text';

        // Set a unique name attribute for the input field.
        inputField.name = `field${i + 1}`;

        // Append the text input field to the inputContainer div.
        document.getElementById('inputContainer').appendChild(inputField);
    }
}

// Add an event listener to the form to validate the form before submission.
document.getElementById('dynamicForm').addEventListener('submit', validateForm);

// Create a function called `validateForm()` that retrieves the values entered in the dynamically generated text input fields and checks if any of the fields are empty. If any field is empty, prevent the form submission and display the error message `Please fill in all fields`.
function validateForm(event) {
    // Get the values entered in the dynamically generated text input fields.
    const fieldValues = Array.from(document.querySelectorAll('#inputContainer input')).map(inputField => inputField.value);

    // Check if any of the fields are empty.
    if (fieldValues.includes('')) {
        // Prevent the form submission.
        event.preventDefault();

        // Display the error message.
        alert('Please fill in all fields.');
    }
}