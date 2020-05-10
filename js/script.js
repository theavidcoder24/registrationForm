/* == Modal == */
// Open modal 
var modal = document.getElementById("myModal");

// Button to opens the modal 
var btn = document.getElementById("myBtn");

// Span element to close it 
var span = document.getElementsByClassName("close")[0];

// When user clicks on the button, open the modal //
btn.onmouseover = function () {
  modal.style.display = "block";
}

// When the user clicks on x close modal 
span.onmouseout = function () {
  modal.style.display = "none";
}

/* == Password Visibility == */
function revealPasswords() {
  // Open Eye Icon 
  if (password_one.getAttribute('type') === 'text') {
    password_one.setAttribute('type', 'password');
    password_two.setAttribute('type', 'password');
    eye.setAttribute('class', 'fas fa-eye');
    eye2.setAttribute('class', 'fas fa-eye');
  }
  // Close/Slash Eye Icon 
  else {
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
