const logoUpload = document.getElementById('logo-upload');
  const logoPreview = document.getElementById('logo-preview');
  const customText = document.getElementById('custom-text');
  const textPreview = document.getElementById('text-preview');

  logoUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        logoPreview.src = e.target.result;
        logoPreview.style.display = 'block';
      }
      reader.readAsDataURL(file);
    }
  });

  customText.addEventListener('input', function() {
    textPreview.textContent = this.value;
  });

  function resetCustomizer() {
    logoPreview.src = '';
    logoPreview.style.display = 'none';
    customText.value = '';
    textPreview.textContent = '';
  }