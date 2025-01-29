document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get input values
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const city=document.getElementById('city');
    const age=document.getElementById('age');

    // Validate Name
    if (name.value.trim() === '') {
        showError(name, "Full Name is required");
        isValid = false;
    } else {
        hideError(name);
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Enter a valid email");
        isValid = false;
    } else {
        hideError(email);
    }

    // Validate Phone Number (10-digit)
    if (phone.value.trim().length !== 10 || isNaN(phone.value.trim())) {
        showError(phone, "Enter a valid 10-digit phone number");
        isValid = false;
    } else {
        hideError(phone);
    }

    //validate city name
    const cityPattern=/^[a-zA-Z\s]+$/;
    if (!cityPattern.test(city.value.trim())) {
        showError(city, "Enter a valid city name");
        isValid = false;
    } else {
        hideError(city);
    }
  
    //validate age
    if (age.value.trim() === '' || isNaN(age.value) || age.value < 18 || age.value > 100) {
        showError(age, "Enter a valid age (between 18 and 100)");
        isValid = false;
    } else {
        hideError(age);
    }

    // Validate Password (Minimum 6 characters)
    if (password.value.trim().length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        hideError(password);
    }

    // Validate Confirm Password
    if (confirmPassword.value.trim() !== password.value.trim()) {
        showError(confirmPassword, "Passwords do not match");
        isValid = false;
    } else {
        hideError(confirmPassword);
    }

    // If valid, show confirmation message
    if (isValid) {
        document.getElementById('confirmationMessage').classList.remove('hidden');
        document.getElementById('displayData').innerHTML = `
            <strong>Name:</strong> ${name.value} <br>
            <strong>Email:</strong> ${email.value} <br>
            <strong>City:</strong> ${city.value} <br>
            <strong>Age:</strong> ${age.value} <br>
            <strong>Phone:</strong> ${phone.value}
        `;
        this.reset();
    }
});

// Function to show error
function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.innerText = message;
    errorElement.style.display = "block";
}

// Function to hide error
function hideError(input) {
    const errorElement = input.nextElementSibling;
    errorElement.style.display = "none";
}
