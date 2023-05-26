const form = document.querySelector("form");
const validInputBorderColor = "green";
const invalidInputBorderColor = "red";
const firstName = document.getElementById("first_name");
const firstNameError = document.querySelector("#first_name + span.error");
const firstNameInputBox = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const lastNameError = document.querySelector("#last_name + span.error");
const lastNameInputBox = document.getElementById("last_name");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const emailInputBox = document.getElementById("email");
const phone = document.getElementById("phone");
const phoneError = document.querySelector("#phone + span.error");
const phoneInputBox = document.getElementById("phone");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const passwordInputBox = document.getElementById("password");
const passwordConfirm = document.getElementById("password_confirm");
const passwordConfirmError = document.querySelector("#password_confirm + span.error");
const passwordConfirmInputBox = document.getElementById("password_confirm");

// FORM: FIRST NAME ERROR MESSAGE

// Display error messages for input in form
firstName.addEventListener("input", (event) => {
    // Clear error message if form input is valid
    if (firstName.validity.valid) {
        firstNameError.textContent = "";
        firstNameError.className = "error";
        firstNameInputBox.style.border = `2px solid ${validInputBorderColor}`;
    } else {
    // Show error message if form input is invalid
        showErrorFirstName();
    }
});

// Prevent form submission if input in form is invalid
form.addEventListener("submit", (event) => {
    if (!firstName.validity.valid) {
        showErrorFirstName();
        event.preventDefault();
    }
});

// Define error messages
function showErrorFirstName() {
    if (firstName.validity.tooShort) {
        firstNameError.textContent = "Enter your first name";
        firstNameInputBox.style.border = `2px solid ${invalidInputBorderColor}`;
    }
    firstNameError.className = "error active";
}

// FORM: LAST NAME ERROR MESSAGE

// Display error messages for input in form
lastName.addEventListener("input", (event) => {
    // Clear error message if form input is valid
    if (lastName.validity.valid) {
        lastNameError.textContent = "";
        lastNameError.className = "error";
        lastNameInputBox.style.border = `2px solid ${validInputBorderColor}`;
    } else {
    // Show error message if form input is invalid
        showErrorLastName();
    }
});

// Prevent form submission if input in form is invalid
form.addEventListener("submit", (event) => {
    if (!lastName.validity.valid) {
        showErrorLastName();
        event.preventDefault();
    }
});

// Define error messages
function showErrorLastName() {
    if (lastName.validity.tooShort) {
        lastNameError.textContent = "Enter your last name";
        lastNameInputBox.style.border = `2px solid ${invalidInputBorderColor}`;
    }
    lastNameError.className = "error active";
}

// FORM: EMAIL ERROR MESSAGE

// Display error messages for input in form
email.addEventListener("input", (event) => {
    // Clear error message if form input is valid
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
        emailInputBox.style.border = `2px solid ${validInputBorderColor}`;
    } else {
    // Show error message if input is invalid
        showErrorEmail();
    }
});

// Prevent form submission if input in form is invalid
form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

// Define error messages
function showErrorEmail() {
    if (email.validity.typeMismatch) {
        emailError.textContent = "You need to enter a valid email address";
        emailInputBox.style.border = `2px solid ${invalidInputBorderColor}`;
    }
    emailError.className = "error active";
}

// FORM: PHONE ERROR MESSAGE

// Display error messages for input in form
phone.addEventListener("input", (event) => {
    // Clear error message if form input is valid
    if (phone.validity.valid) {
        phoneError.textContent = "";
        phoneError.className = "error";
        phoneInputBox.style.border = `2px solid ${validInputBorderColor}`;
    } else {
    // Show error message if input is invalid
        showErrorPhone();
    }
});

// Prevent form submission if input in form is invalid
form.addEventListener("submit", (event) => {
    if (!phone.validity.valid) {
        showErrorPhone();
        event.preventDefault();
    }
});

// Define error messages
function showErrorPhone() {
    if (phone.validity.patternMismatch) {
        phoneError.textContent = "You need to enter a telephone number in the format ###-###-####";
        phoneInputBox.style.border = `2px solid ${invalidInputBorderColor}`;
    }
    phoneError.className = "error active";
}

// FORM: PASSWORD ERROR MESSAGE

// Display error messages for input in form
password.addEventListener("input", (event) => {
    // Clear error message if form input is valid
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "error";
        passwordInputBox.style.border = `2px solid ${validInputBorderColor}`;
    } else {
    // Show error message if input is invalid
        showErrorPassword();
    }
});

// Prevent form submission if input in form is invalid
form.addEventListener("submit", (event) => {
    if (!password.validity.valid) {
        showErrorPassword();
        event.preventDefault();
    }
});

// Define error messages
function showErrorPassword() {
    if (password.validity.patternMismatch) {
        passwordError.textContent = "Your password must contain at least one number, one uppercase and lowercase letter, and 8 or more characters";
        passwordInputBox.style.border = `2px solid ${invalidInputBorderColor}`;
    }
    passwordError.className = "error active";
}

// FORM: PASSWORD CONFIRM ERROR MESSAGE

// Display error messages for input in form
passwordConfirm.addEventListener("input", (event) => {
    // Clear error message if form input is valid
    if (passwordConfirm.validity.valid) {
        passwordConfirmError.textContent = "";
        passwordConfirmError.className = "error";
        passwordConfirmInputBox.style.border = `2px solid ${validInputBorderColor}`;
    } else {
    // Show error message if form input is invalid
        showErrorPasswordConfirm();
    }
});

// Prevent form submission if input in form is invalid
form.addEventListener("submit", (event) => {
    if (!password.validity.valid) {
        showErrorPasswordConfirm();
        event.preventDefault();
    }
});

// Define error messages
function showErrorPasswordConfirm() {
    if (passwordConfirm != password) {
        passwordConfirmError.textContent = "Your password must match.";
        passwordConfirmInputBox.style.border = `2px solid ${invalidInputBorderColor}`;
    } 
    passwordConfirmError.className = "error active";
}