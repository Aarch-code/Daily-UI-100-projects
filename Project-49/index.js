function showNotification() {
      const notif = document.getElementById('notification');
      notif.style.display = 'flex';

      // Auto-hide after 5 seconds
      setTimeout(() => {
        hideNotification();
      }, 5000);
    }

    function hideNotification() {
      const notif = document.getElementById('notification');
      notif.style.display = 'none';
    }

    // Show the notification on page load
    window.onload = showNotification;