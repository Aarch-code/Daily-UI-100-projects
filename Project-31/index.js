const fileInput = document.getElementById('file-input');
  const progressBar = document.getElementById('progress');
  const fileName = document.getElementById('file-name');

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
      fileName.textContent = `Uploading: ${file.name}`;
      simulateUpload();
    }
  });

  function simulateUpload() {
    let progress = 0;
    progressBar.style.width = '0%';

    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        fileName.textContent = 'Upload Complete!';
      } else {
        progress += 10;
        progressBar.style.width = progress + '%';
      }
    }, 200);
  }