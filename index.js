document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const terms = document.getElementById('terms').checked ? 'Yes' : 'No';

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

  addToTable(name, email, password, dob, terms);
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

function addToTable(name, email, password, dob, terms) {
  const tableBody = document.getElementById('userTableBody');
  const newRow = tableBody.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  cell1.textContent = name;
  cell2.textContent = email;
  cell3.textContent = password;
  cell4.textContent = dob;
  cell5.textContent = terms;
}





