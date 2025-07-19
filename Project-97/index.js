const form = document.getElementById('giveawayForm');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      if (!name || !email) {
        successMsg.style.color = 'red';
        successMsg.textContent = 'Please fill in both fields.';
        return;
      }

      successMsg.style.color = 'green';
      successMsg.textContent = `Thanks for entering, ${name}! 🎉 Good luck!`;
      form.reset();
    });