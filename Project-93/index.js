// Hide splash screen after 2.5 seconds
    setTimeout(() => {
      document.getElementById('splash').classList.add('hidden');
      document.getElementById('mainContent').classList.add('show');
    }, 2500);