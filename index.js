// script.js file

// Function to save form data to localStorage
function saveFormData(name, email, password, dob, acceptedTerms) {
  const entry = { name, email, password, dob, acceptedTerms };
  let entries = JSON.parse(localStorage.getItem('entries')) || [];
  entries.push(entry);
  localStorage.setItem('entries', JSON.stringify(entries));
}

// Function to load form data from localStorage
function loadFormData() {
  const entries = JSON.parse(localStorage.getItem('entries')) || [];
  const tableBody = document.querySelector('#entries tbody');

  tableBody.innerHTML = ''; // Clear existing entries before re-rendering

  entries.forEach(entry => {
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.textContent = entry.name;
    cell2.textContent = entry.email;
    cell3.textContent = entry.password;
    cell4.textContent = entry.dob;
    cell5.textContent = entry.acceptedTerms ? 'Yes' : 'No';
  });
}

// Load existing form data when the page loads
document.addEventListener('DOMContentLoaded', loadFormData);

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Gather form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const acceptedTerms = document.getElementById('acceptedTerms').checked;

  // Validate age
  const today = new Date();
  const birthDate = new Date(dob);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  // Validate age and email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (age < 18 || age > 55) {
    alert('Age should be between 18 and 55 years old.');
  } else if (!emailRegex.test(email)) {
    alert('Invalid email address.');
  } else {
    // Save form data to localStorage
    saveFormData(name, email, password, dob, acceptedTerms);

    // Reload table with updated form data
    loadFormData();

    // Reset the form after submission
    document.getElementById('registrationForm').reset();
  }
});

