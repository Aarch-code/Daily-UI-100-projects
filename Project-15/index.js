const toggle = document.getElementById('toggleSwitch');
    const status = document.getElementById('status');

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('on');
      const isOn = toggle.classList.contains('on');
      status.innerText = `Smart Refrigerator: ${isOn ? 'ON' : 'OFF'}`;
    });