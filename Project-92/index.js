const questions = document.querySelectorAll('.faq-question');

    questions.forEach(q => {
      q.addEventListener('click', () => {
        const currentlyOpen = document.querySelector('.faq-question.active');
        if (currentlyOpen && currentlyOpen !== q) {
          currentlyOpen.classList.remove('active');
          currentlyOpen.nextElementSibling.classList.remove('open');
        }

        q.classList.toggle('active');
        q.nextElementSibling.classList.toggle('open');
      });
    });