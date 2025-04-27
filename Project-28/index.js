const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMsg');

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      successMsg.textContent = 'Thank you for reaching out. Our team will get back to you soon!';
      contactForm.reset();
    });