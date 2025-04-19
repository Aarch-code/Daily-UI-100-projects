const toggle = document.getElementById('toggleSwitch');
    const status = document.getElementById('status');
    const popup = document.getElementById('popup');
    const popupClose = document.getElementById('popupClose');

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('on');
      const isOn = toggle.classList.contains('on');
      status.innerText = `Smart Refrigerator: ${isOn ? 'ON' : 'OFF'}`;

      // Show popup when turning the fridge ON
      if (isOn) {
        popup.style.display = 'flex';
      }
    });

    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });