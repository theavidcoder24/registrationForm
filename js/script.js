
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
    if (password_one.value.length > 0 && password_two.value.length > 0) {
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
}

/* Modal Box */

document.onkeyup = function(esc) {
    if (esc.keyCode == 27) {
        destroyModal();
    }
}

function createModal() {
    tint.hidden = false;
    modal.hidden = false;
}

function destroyModal() {
    tint.getElementById('tint').hidden = true;
    modal.getElementById('modal').hidden = true;
}

function disableCheckbox() {
    agreed.disabled = true;
    agreed.checked = false;
    destroyModal();
}

function enableCheckbox() {
    agreed.disabled = false;
    agreed.checked = true;
    destroyModal();
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