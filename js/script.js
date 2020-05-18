/* == Validate Form == */
var fullname = document.getElementById('full-name');
var email = document.getElementById('email');
var password = document.getElementById('password_one');
var password2 = document.getElementById('password_two');
var date = document.getElementById('dateOfBirth');
var form = document.getElementById('formsubmit');
var error = document.getElementById('error');
// Validation Colours
var red = '#fc4949';
var green = '#34d960';

form.addEventListener('submit', (e) => {
  let messages = [];
  if (fullname.value === '' || fullname.value == null) {
    alert('Name is required');
  }
  if (email.value === '' || email.value == null) {
    alert('Email is required');
  }
  if (password.value.length <= 8) {
    messages.push('Password must be longer than 8 characters');
  }
  if (dateOfBirth.value === '' || dateOfBirth.value == null) {
    alert('Date of Birth is required');
  }
  if (messages.length > 0) {
    e.preventDefult();
    error.innerText = messages.join(', ');
  }
})

// Date Validation
function validateDate(form) {
  if (!checkDate(form.startdate)) return false;
  if (!checkTime(form.starttime)) return false;
  return true;
}

/* == Modal == */
// Open modal 
var modal = document.getElementById("myModal");

// Icon to open the modal 
var btn = document.getElementById("myBtn");

// Span element to close it 
var span = document.getElementsByClassName("close")[0];

// When user hovers on the icon open the modal
btn.onmouseover = function () {
  modal.style.display = "block";
}

// When the user clicks the icon open modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on x close modal 
span.onclick = function () {
  modal.style.display = "none";
}

// If user clicks anywhere outside of the modal it closes
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* == Password Visibility == */
function revealPasswords() {
  // Open Eye Icon 
  if (password_one.getAttribute('type') === 'text') {
    password_one.setAttribute('type', 'password');
    password_two.setAttribute('type', 'password');
    eye.setAttribute('class', 'fas fa-eye-slash');
    eye2.setAttribute('class', 'fas fa-eye-slash');
  }
  // Close/Slash Eye Icon 
  else {
    password_one.setAttribute('type', 'text');
    password_two.setAttribute('type', 'text');
    eye.setAttribute('class', 'fas fa-eye');
    eye2.setAttribute('class', 'fas fa-eye');
  }
}
/* Compare Passwords */
function comparePass() {
  if (password_one.value.length > 0 && password_two.value.length > 0) {
    if (password_one.value === password_two.value) {
      error.innerHTML = "Passwords Match";
      error.style.backgroundColor = green;
    } else {
      error.innerHTML = "Passwords Don't Match";
      error.style.backgroundColor = red;
    }
  }
}