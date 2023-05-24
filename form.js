function checkPassword (pass1, pass2) {
    pass1 = document.getElementById("password").value; 
    pass2 = document.getElementById("password_confirm").value;

    if (pass1 != pass2) {
        alert ("Passwords don't match.")
    }
}