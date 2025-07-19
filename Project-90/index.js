const modal = document.getElementById("createModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close");
    const form = document.getElementById("createForm");
    const successMsg = document.getElementById("successMsg");

    openModal.onclick = () => {
      modal.style.display = "block";
    };

    closeModal.onclick = () => {
      modal.style.display = "none";
      form.reset();
      successMsg.textContent = "";
    };

    window.onclick = (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
        form.reset();
        successMsg.textContent = "";
      }
    };

    form.onsubmit = function(e) {
      e.preventDefault();
      const title = document.getElementById("docTitle").value.trim();
      const type = document.getElementById("docType").value;

      if (!title || !type) {
        successMsg.style.color = "red";
        successMsg.textContent = "Please enter title and select a type.";
        return;
      }

      successMsg.style.color = "green";
      successMsg.textContent = "✅ Document created successfully!";
      form.reset();
    };