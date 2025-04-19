const devices = [
    { el: document.getElementById('device1'), x: 100, y: 150 },
    { el: document.getElementById('device2'), x: 300, y: 200 },
    { el: document.getElementById('device3'), x: 500, y: 350 }
  ];

  function moveRandomly(device) {
    device.x += Math.random() * 10 - 5;
    device.y += Math.random() * 10 - 5;

    device.x = Math.max(0, Math.min(window.innerWidth - 20, device.x));
    device.y = Math.max(0, Math.min(window.innerHeight - 20, device.y));

    device.el.style.left = `${device.x}px`;
    device.el.style.top = `${device.y}px`;
  }

  setInterval(() => {
    devices.forEach(moveRandomly);
  }, 500);