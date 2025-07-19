const modal = document.getElementById("signupModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close");
    const form = document.getElementById("signupForm");
    const errorMsg = document.getElementById("errorMsg");

    openModalBtn.onclick = () => {
      modal.style.display = "block";
    };

    closeModalBtn.onclick = () => {
      modal.style.display = "none";
      errorMsg.textContent = '';
      form.reset();
    };

    window.onclick = (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
        errorMsg.textContent = '';
        form.reset();
      }
    };

    form.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!name || !email || !password) {
        errorMsg.textContent = "Please fill in all fields.";
        return;
      }

      if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters.";
        return;
      }

      alert("Thanks for signing up, " + name + "!");
      modal.style.display = "none";
      form.reset();
    };