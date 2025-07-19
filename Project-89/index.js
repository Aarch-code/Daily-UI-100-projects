const checkbox = document.getElementById('agreeCheckbox');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('signupForm');
    const successMsg = document.getElementById('successMsg');

    checkbox.addEventListener('change', () => {
      submitBtn.disabled = !checkbox.checked;
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      successMsg.textContent = "🎉 Thanks for signing up and agreeing to the terms!";
      form.reset();
      submitBtn.disabled = true;
    });