document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Gather form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTerms = document.getElementById("acceptedTerms").checked;

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
    alert("Age should be between 18 and 55 years old.");
  } else if (!emailRegex.test(email)) {
    alert("Invalid email address.");
  } else {
    // Create a new table row with the form data
    const table = document.getElementById("entries").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.textContent = name;
    cell2.textContent = email;
    cell3.textContent = password;
    cell4.textContent = dob;
    cell5.textContent = acceptedTerms ? "Yes" : "No";

    // Reset the form after submission
    document.getElementById("registrationForm").reset();
  }
});
