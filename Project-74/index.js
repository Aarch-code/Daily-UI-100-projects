const modal = document.getElementById("modal");

  function openModal() {
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function submitEmail() {
    const email = document.getElementById("emailInput").value;
    if (email.includes("@")) {
      alert("✅ Brochure sent to " + email);
      closeModal();
    } else {
      alert("❌ Please enter a valid email.");
    }
  }

  // Optional: close modal on background click
  window.onclick = function(e) {
    if (e.target == modal) closeModal();
  };