// Get form elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginMessage = document.getElementById('loginMessage');
const signupMessage = document.getElementById('signupMessage');

// Ensure login form is visible on page load
loginForm.classList.add('active');
signupForm.classList.add('hidden');

// Switch to Signup Form
function showSignup() {
    loginForm.classList.remove('active');
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    signupForm.classList.add('active');
}

// Switch to Login Form
function showLogin() {
    signupForm.classList.remove('active');
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    loginForm.classList.add('active');
}

// Add submit event listener for login form
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Debugging: Check the values
    console.log("Email: " + email);
    console.log("Password: " + password);

    // Simulate login validation (replace with actual validation logic)
    if (email === "admin@gmail.com" && password === "admin123") {
        localStorage.setItem('isLoggedIn', 'true');
        // Show success message
        loginMessage.textContent = "Login successful! Redirecting...";
        loginMessage.style.color = "green";

        // Redirect to index page after a delay
        setTimeout(() => {
            window.location.href = "index.html"; // Replace with your index page path
        }, 2000);  // Delay of 2 seconds before redirecting
    } else {
        // Show error message
        loginMessage.textContent = "Invalid email or password. Please try again.";
        loginMessage.style.color = "red";
    }
});

// Add submit event listener for signup form
signupForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Debugging: Check the values
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("Confirm Password: " + confirmPassword);

    // Simulate signup validation (replace with actual validation logic)
    if (password === confirmPassword) {
        // Show success message
        signupMessage.textContent = "Sign Up successful!";
        signupMessage.style.color = "green";
       // Redirect to login form after a short delay
       setTimeout(() => {
        showLogin();  // Switch to login form
    }, 2000);  // Delay of 2 seconds before redirecting
} else {
    // Show error message
    signupMessage.textContent = "Passwords do not match. Please try again.";
    signupMessage.style.color = "red";
}
});
// Assuming you have a logout button with id "logoutBtn" on the index page
const logoutBtn = document.getElementById('logoutBtn');

// Add event listener for logout
logoutBtn.addEventListener('click', function() {
     // Remove login flag from localStorage
     localStorage.removeItem('isLoggedIn');
    // Redirect the user back to the login page
    window.location.href = "login.html"; // Replace with your login page path
});

// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    // If not logged in, redirect to the login page
    window.location.href = "login.html";
}

/*register*/

// JavaScript to validate form
function validateform() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phonenum').value.trim();
    const age = document.querySelector('input[name="myage"]').value;
    const gender = document.querySelector('input[name="mygender"]:checked');
    const locations = document.querySelector('input[name="locations"]:checked');
    const terms = document.querySelector('input[name="t&c"]').checked;

    // Validate name
    if (name === '') {
        alert("Please enter your name.");
        return false;
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Validate age (must be above 0)
    if (age <= 0 || isNaN(age)) {
        alert("Please enter a valid age.");
        return false;
    }

    // Validate gender
    if (!gender) {
        alert("Please select your gender.");
        return false;
    }

    // Validate package selection
    if (!locations) {
        alert("Please select a package.");
        return false;
    }

    // Validate terms and conditions
    if (!terms) {
        alert("You must accept the Terms & Conditions.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}


// JavaScript to validate the Contact Us form
function validateContactForm() {
    const name = document.querySelector('input[name="myname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const subject = document.querySelector('input[name="subject"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Validate name
    if (name === '') {
        alert("Please enter your name.");
        return false;
    }

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate subject
    if (subject === '') {
        alert("Please specify the subject.");
        return false;
    }

    // Validate message
    if (message === '') {
        alert("Please write a message.");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}
/*index img*/
