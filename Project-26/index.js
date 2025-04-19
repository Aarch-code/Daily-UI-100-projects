const form = document.getElementById('subscribeForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const country = document.getElementById('country').value;
      const consent = document.getElementById('ageConsent').checked;

      if (name && email && country && consent) {
        successMessage.textContent = `Thanks for subscribing, ${name}! 🎉`;
        form.reset();
      }
    });