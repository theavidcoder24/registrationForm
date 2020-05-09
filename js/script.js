/* == Modal Box == */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onmouseover = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onmouseout = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




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
