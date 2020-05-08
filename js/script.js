

/* == Password Visibility == */
function revealPasswords() {
    if (password_one.getAttribute('type') === 'text') {
        password_one.setAttribute('type', 'password');
        password_two.setAttribute('type', 'password');
        eye.setAttribute('class', 'fas fa-eye');
        eye2.setAttribute('class', 'fas fa-eye');
    } else {
        password_one.setAttribute('type', 'text');
        password_two.setAttribute('type', 'text');
        eye.setAttribute('class', 'fas fa-eye-slash');
        eye2.setAttribute('class', 'fas fa-eye-slash');
    }
}

function comparePass() {
    if (password_one.value === password_two.value) {
        error.innerHTML = "Passwords Match";
        password_one.setCustomValidity("");
        password_two.setCustomValidity("");
    }
    else {
        error.innerHTML = "Passwords don't match";
        password_one.setCustomValidity("");
        password_two.setCustomValidity("");
    }
}


/* Agree Terms 
function agreedChecked(literalString) {
    console.log(literalString);
    if (agreedChecked.checked) {
        agreedToTerms.removeAttribute('disabled');
    } else {
        agreedToTerms.setAttribute('disabled', 'disabled');
    }
}
*/