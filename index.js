document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Gather form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const terms = document.getElementById('terms').checked ? 'Yes' : 'No';

  // Validate email and age
  const isValidEmail = validateEmail(email);
  const age = calculateAge(dob);

  if (!isValidEmail) {
    alert('Please enter a valid email address.');
    return;
  }

  if (age < 18 || age > 55) {
    alert('Age must be between 18 and 55.');
    return;
  }

  // Add entry to the table
  const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = password;
  cell4.innerHTML = dob;
  cell5.innerHTML = terms;

  // Clear form fields after submission
  document.getElementById('registrationForm').reset();
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}




