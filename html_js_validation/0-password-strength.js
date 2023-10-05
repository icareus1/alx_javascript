function validatePassword(password) {
    // Check if the password is at least 8 characters long.
    if (password.length < 8) {
        document.getElementById('error').textContent = "Password must be at least 8 characters long.";
        return false;
    }

    // Check if the password contains at least one uppercase letter.
    if (!/[A-Z]/.test(password)) {
        document.getElementById('error').textContent = "Password must contain at least one uppercase letter.";
        return false;
    }

    // Check if the password contains at least one lowercase letter.
    if (!/[a-z]/.test(password)) {
        document.getElementById('error').textContent = "Password must contain at least one lowercase letter.";
        return false;
    }

    // Check if the password contains at least one numeric digit.
    if (!/[0-9]/.test(password)) {
        document.getElementById('error').textContent = "Password must contain at least one numeric digit.";
        return false;
    }

    // Check if the password contains at least one special character.
    if (!/[!@#$%^&*]/.test(password)) {
        document.getElementById('error').textContent = "Password must contain at least one special character.";
        return false;
    }

    // If all the criteria are met, the password is valid.
    return true;
}