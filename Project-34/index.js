let speed = 0;
  let fuel = 100;
  let lightsOn = false;

  function accelerate() {
    if (fuel > 0) {
      speed += 10;
      fuel -= 5;
      updateDashboard();
    }
  }

  function brake() {
    speed -= 10;
    if (speed < 0) speed = 0;
    updateDashboard();
  }

  function toggleLights() {
    lightsOn = !lightsOn;
    document.getElementById('lights').textContent = `Lights: ${lightsOn ? 'ON' : 'OFF'}`;
  }

  function updateDashboard() {
    document.getElementById('speed').textContent = `${speed} km/h`;
    document.getElementById('fuel').textContent = `Fuel: ${fuel}%`;
  }