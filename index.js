// Get the form element
const form = document.getElementById('registrationForm');

// Function to validate form fields
function validateForm(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const acceptedTerms = document.getElementById('acceptedTerms').checked;

  if (name === '' || email === '' || password === '' || dob === '' || !acceptedTerms) {
    alert('Please fill in all fields and accept the terms.');
    event.preventDefault(); // Prevent form submission
  }
}

// Event listener for form submission
form.addEventListener('submit', validateForm);
