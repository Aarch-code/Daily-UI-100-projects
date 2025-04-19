function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function updateDashboard() {
    document.getElementById('temp').textContent = getRandomInt(20, 30) + '°C';
    document.getElementById('humidity').textContent = getRandomInt(30, 60) + '%';
    document.getElementById('power').textContent = (Math.random() * 5 + 2).toFixed(2) + ' kWh';
    document.getElementById('motion').textContent = Math.random() > 0.9 ? 'Motion Detected' : 'None';
    document.getElementById('leak').textContent = Math.random() > 0.95 ? 'Leak Detected' : 'No Leaks';

    const now = new Date();
    document.getElementById('timestamp').textContent = now.toLocaleTimeString();
  }

  setInterval(updateDashboard, 3000);
  updateDashboard();