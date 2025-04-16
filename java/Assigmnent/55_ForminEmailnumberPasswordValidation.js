//Q.55 Form in Email, number, Password, Validation?

1. HTML Form Example

    < !DOCTYPE html >
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Form Validation Example</title>
                    </head>
                    <body>
                        <h2>Form Validation</h2>
                        <form id="userForm" onsubmit="return validateForm()">
                            <!-- Email Field -->
                            <label for="email">Email:</label>
                            <input type="text" id="email" name="email">
                                <span id="emailError" style="color: red;"></span><br><br>

                                    <!-- Number Field -->
                                    <label for="number">Phone Number:</label>
                                    <input type="text" id="number" name="number">
                                        <span id="numberError" style="color: red;"></span><br><br>

                                            <!-- Password Field -->
                                            <label for="password">Password:</label>
                                            <input type="password" id="password" name="password">
                                                <span id="passwordError" style="color: red;"></span><br><br>

                                                    <!-- Confirm Password Field -->
                                                    <label for="confirmPassword">Confirm Password:</label>
                                                    <input type="password" id="confirmPassword" name="confirmPassword">
                                                        <span id="confirmPasswordError" style="color: red;"></span><br><br>

                                                            <input type="submit" value="Submit">
                                                            </form>

                                                            <script src="formValidation.js"></script>
                                                        </body>
                                                        </html>

                                                        2. JavaScript Validation (formValidation.js)

                                                        function validateForm() {
                                                            // Clear previous error messages
                                                            document.getElementById('emailError').textContent = '';
                                                        document.getElementById('numberError').textContent = '';
                                                        document.getElementById('passwordError').textContent = '';
                                                        document.getElementById('confirmPasswordError').textContent = '';

                                                        let isValid = true;

                                                        // Get form values
                                                        const email = document.getElementById('email').value;
                                                        const number = document.getElementById('number').value;
                                                        const password = document.getElementById('password').value;
                                                        const confirmPassword = document.getElementById('confirmPassword').value;

                                                        // Email validation: Ensure it follows a correct email format
                                                        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, 6}$/;
                                                        if (!emailPattern.test(email)) {
                                                            document.getElementById('emailError').textContent = "Please enter a valid email address.";
                                                        isValid = false;
    }

                                                        // Phone number validation: Ensure it is a number and between 10 to 12 digits
                                                        const numberPattern = /^[0-9]{10, 12}$/;
                                                        if (!numberPattern.test(number)) {
                                                            document.getElementById('numberError').textContent = "Please enter a valid phone number (10-12 digits).";
                                                        isValid = false;
    }

                                                        // Password validation: Ensure it has at least 8 characters, includes a number, and a special character
                                                        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
                                                        if (!passwordPattern.test(password)) {
                                                            document.getElementById('passwordError').textContent = "Password must be at least 8 characters long, include a number and a special character.";
                                                        isValid = false;
    }

                                                        // Confirm password validation: Ensure it matches the password
                                                        if (password !== confirmPassword) {
                                                            document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
                                                        isValid = false;
    }

                                                        // Return false if the form is not valid, preventing form submission
                                                        return isValid;
}