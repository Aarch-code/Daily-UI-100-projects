function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
      document.getElementById("formContainer").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
    } else {
      alert("Please fill in all fields!");
    }
  }