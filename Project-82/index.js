function nextStep(current) {
    const inputs = document.querySelectorAll(`#step${current} input`);
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#ccc';
      }
    });

    if (valid) {
      document.getElementById(`step${current}`).classList.remove('active');
      document.getElementById(`step${current + 1}`).classList.add('active');
    }
  }

  document.getElementById('multiStepForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const course = document.getElementById('course').value.trim();
    if (course) {
      document.getElementById('step3').classList.remove('active');
      document.getElementById('successMsg').classList.add('active');
    } else {
      document.getElementById('course').style.borderColor = 'red';
    }
  });