document.addEventListener("DOMContentLoaded", function () {

    // Sign Up Process
    const signupForm = document.querySelector('.signup-form form');
    const signupTab = document.getElementById('signup-tab');
    const signinTab = document.getElementById('signin-tab');

    // Sign In Process
    const signinForm = document.querySelector('.signin-form form');

    // Sign up form submission handler
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get form values
        const fullname = signupForm.querySelector('input[name="fullname"]').value;
        const email = signupForm.querySelector('input[name="email"]').value;
        const password = signupForm.querySelector('input[name="password"]').value;
        const confirmPassword = signupForm.querySelector('input[name="password"][placeholder="Confirm Password"]').value;

        // Validate passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Store user data in localStorage
        const userData = {
            fullname: fullname,
            email: email,
            password: password
        };

        localStorage.setItem('userData', JSON.stringify(userData)); // Save user data to localStorage

        // Redirect to Sign In page
        signinTab.checked = true;
        alert("Sign Up Successful! Please log in.");
    });

    // Sign in form submission handler
    signinForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get input values
        const username = signinForm.querySelector('input[name="username"]').value;
        const password = signinForm.querySelector('input[name="password"]').value;

        // Retrieve data from localStorage
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData) {
            // Check if entered data matches stored user data
            if (username === storedUserData.email && password === storedUserData.password) {
                alert("Sign In Successful! You are logged in.");
            } else {
                alert("Invalid credentials, please try again.");
            }
        } else {
            alert("No user found. Please sign up first.");
        }
    });

});
