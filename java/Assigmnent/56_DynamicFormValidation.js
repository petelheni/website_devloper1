
Q.56 Dynamic Form Validation in JS ?

    1. HTML Form Example

        < !DOCTYPE html >
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Dynamic Form Validation</title>
                            <style>
                                .error {
                                    color: red;
        }
                                .success {
                                    color: green;
        }
                            </style>
                        </head>
                        <body>
                            <h2>Dynamic Form Validation</h2>
                            <form id="dynamicForm">
                                <!-- Email Field -->
                                <label for="email">Email:</label>
                                <input type="text" id="email" name="email">
                                    <span id="emailError" class="error"></span><br><br>

                                        <!-- Number Field -->
                                        <label for="number">Phone Number:</label>
                                        <input type="text" id="number" name="number">
                                            <span id="numberError" class="error"></span><br><br>

                                                <!-- Password Field -->
                                                <label for="password">Password:</label>
                                                <input type="password" id="password" name="password">
                                                    <span id="passwordError" class="error"></span><br><br>

                                                        <input type="submit" value="Submit">
                                                        </form>

                                                        <script src="dynamicValidation.js"></script>
                                                    </body>
                                                    </html>


                                                    2. JavaScript (dynamicValidation.js)

                                                    window.onload = function() {
    // Select form elements
    const emailInput = document.getElementById('email');
                                                    const numberInput = document.getElementById('number');
                                                    const passwordInput = document.getElementById('password');

                                                    // Add event listeners for real-time validation
                                                    emailInput.addEventListener('input', validateEmail);
                                                    numberInput.addEventListener('input', validateNumber);
                                                    passwordInput.addEventListener('input', validatePassword);

                                                    // Email validation function
                                                    function validateEmail() {
        const emailError = document.getElementById('emailError');
                                                    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, 6}$/;
                                                    if (emailInput.value === '') {
                                                        emailError.textContent = "Email is required.";
        } else if (!emailPattern.test(emailInput.value)) {
                                                        emailError.textContent = "Please enter a valid email address.";
        } else {
                                                        emailError.textContent = "Valid email!";
                                                    emailError.classList.add('success');
        }
    }

                                                    // Phone number validation function
                                                    function validateNumber() {
        const numberError = document.getElementById('numberError');
                                                    const numberPattern = /^[0-9]{10, 12}$/;
                                                    if (numberInput.value === '') {
                                                        numberError.textContent = "Phone number is required.";
        } else if (!numberPattern.test(numberInput.value)) {
                                                        numberError.textContent = "Please enter a valid phone number (10-12 digits).";
        } else {
                                                        numberError.textContent = "Valid number!";
                                                    numberError.classList.add('success');
        }
    }

                                                    // Password validation function
                                                    function validatePassword() {
        const passwordError = document.getElementById('passwordError');
                                                    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
                                                    if (passwordInput.value === '') {
                                                        passwordError.textContent = "Password is required.";
        } else if (!passwordPattern.test(passwordInput.value)) {
                                                        passwordError.textContent = "Password must be at least 8 characters long, include a number and a special character.";
        } else {
                                                        passwordError.textContent = "Valid password!";
                                                    passwordError.classList.add('success');
        }
    }

                                                    // Prevent form submission if there are errors
                                                    document.getElementById('dynamicForm').onsubmit = function(event) {
                                                        validateEmail();
                                                    validateNumber();
                                                    validatePassword();
                                                    const errors = document.querySelectorAll('.error');
                                                    for (let error of errors) {
            if (error.textContent !== '' && !error.classList.contains('success')) {
                                                        event.preventDefault(); // Prevent form submission if there are validation errors
            }
        }
    }
};