function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (!name || !email || !password) {
      message.className = "error";
      message.textContent = "Please fill in all fields.";
      return;
    }

    // Simple email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      message.className = "error";
      message.textContent = "Enter a valid email address.";
      return;
    }

    if (password.length < 6) {
      message.className = "error";
      message.textContent = "Password must be at least 6 characters.";
      return;
    }

    message.className = "success";
    message.textContent = `Thanks, ${name}! You’re signed up 🎉`;
  }