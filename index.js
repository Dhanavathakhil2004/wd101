document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Gather form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTerms = document.getElementById("acceptedTerms").checked;

  // Validate age (assuming today's date is used)
  const today = new Date();
  const birthDate = new Date(dob);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 18 || age > 55) {
    alert("Age should be between 18 and 55 years old.");
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address.");
    return;
  }

  // Create a new table row with the form data
  const table = document.getElementById("entries").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = password;
  cell4.innerHTML = dob;
  cell5.innerHTML = acceptedTerms ? "Yes" : "No";

  // Reset the form after submission
  document.getElementById("registrationForm").reset();
});
