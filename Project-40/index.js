// Toggle step completion
const steps = document.querySelectorAll('#steps li');

steps.forEach(step => {
  step.addEventListener('click', () => {
    step.classList.toggle('done');
  });
});
