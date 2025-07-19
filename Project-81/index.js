function startUpload() {
    const bar = document.getElementById('progressBar');
    const msg = document.getElementById('statusMessage');
    let progress = 0;
    msg.innerText = 'Uploading...';

    const interval = setInterval(() => {
      progress += 10;
      bar.style.width = progress + '%';
      msg.innerText = `Uploading... ${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        msg.innerText = '✅ Upload Complete!';
        msg.classList.add('success');
      }
    }, 400);
  }