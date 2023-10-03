const loginForm = document.getElementById("login-form");

document.addEventListener("DOMContentLoaded", function () {
    showWelcomeMessageOrForm(); // Call this function when the page loads
});

// Function to set the cookies
function setCookies() {
    // Get the values of the firstname and email inputs.
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;

    // Check if the firstname and email values are empty.
    if (firstname && email) {
        // Set the expiration date of the cookies to 10 days from now.
        const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

        // Set the firstname and email cookies.
        Cookies.set('firstname', firstname, { expires: expires });
        Cookies.set('email', email, { expires: expires });
    }
}

// function setCookies() {
//     // Get the values of the firstname and email inputs.
//     const firstname = document.getElementById("firstname").value;
//     const email = document.getElementById("email").value;

//     // Check if the firstname and email values are empty.
//     if (firstname && email) {
//         // Set the expiration date of the cookies to 10 days from now.
//         const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

//         // Set the firstname and email cookies.
//         document.cookie = `firstname=${firstname}; expires=${expires.toUTCString()}`;
//         document.cookie = `email=${email}; expires=${expires.toUTCString()}`;
//     }
// }

// Function to get the value of the cookie with the given name.
function getCookie(name) {
  return Cookies.get(name);
}

// function getCookie(name) {
//     const cookies = document.cookie.split(";");
//     for (const cookie of cookies) {
//         const [key, value] = cookie.split("=");
//         if (key.trim() === name.trim()) {
//             return value;
//         }
//     }
//     return "";
// }

function showCookies() {
    // Get the values of the firstname and email cookies.
    const firstname = getCookie("firstname");
    const email = getCookie("email");

    // Create a paragraph element to display the cookies.
    const paragraph = document.createElement("p");

 // If the firstname and email cookies exist, display them.
    if (firstname || email) {
        paragraph.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
    } else {
        paragraph.innerHTML = "";
    }

    // Remove the old paragraph element if it exists.
    const oldParagraph = document.body.querySelector("p");
    if (oldParagraph) {
        document.body.removeChild(oldParagraph);
    }

    // Append the paragraph element to the body of the page.
    document.body.appendChild(paragraph);
}

// Function to show the login form
function showForm() {
    const welcomeMessage = document.getElementById("welcome-message");

    if (welcomeMessage) {
        welcomeMessage.remove();
    }
    if (loginForm) {
      loginForm.style.display = "block";
    }
}

// Function to hide the login form
function hideForm() {
  const login_Form = document.getElementById("login-form");
  
    if (login_Form) {
        login_Form.style.display = "none";
    }
}

// Function to delete cookies and show the form
function deleteCookiesAndShowForm() {
  // Delete the cookies.
  Cookies.remove('firstname');
  Cookies.remove('email');
  // Show the login form.
  showForm();
}

// function deleteCookiesAndShowForm() {
//     // Delete the cookies.
//     document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
//     document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
//     // Show the login form.
//     showForm();
// }

// Function to show the welcome message or form
function showWelcomeMessageOrForm() {
    const firstname = getCookie("firstname");
    const body = document.body;

    if (firstname) {

        const welcomeMessage = document.createElement("h1");
        welcomeMessage.id = "welcome-message";
        welcomeMessage.innerText = `Welcome: ${firstname}`;

        const logoutLink = document.createElement("a");
        logoutLink.href = "#";
        logoutLink.textContent = "(logout)";
        logoutLink.style.fontStyle = "italic";
        logoutLink.style.marginLeft = "10px";
        logoutLink.style.fontWeight = "normal";
        logoutLink.addEventListener('click', deleteCookiesAndShowForm);

        welcomeMessage.appendChild(logoutLink);
        body.appendChild(welcomeMessage); // User is logged in

        if(loginForm) {
          loginForm.style.display = "none";
        }
    } else {
        // User is not logged in
        showForm();
    }
}

// Function to log in (set cookies and show welcome message or form)
// function logIn() {
//     setCookies();
//     showWelcomeMessageOrForm();
// }
function setCookiesAndShowWelcomeMessage() {
    // Set the cookies.
    setCookies();

    // Show welcome message or form.
    showWelcomeMessageOrForm();
}