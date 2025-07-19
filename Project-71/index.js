const slotsContainer = document.getElementById("slots");
  const confirmation = document.getElementById("confirmation");
  const bookedSlots = {
    // Format: 'YYYY-MM-DD': ['10:00', '13:00']
    '2025-06-20': ['09:00', '14:00'],
    '2025-06-21': ['11:00'],
  };

  const timeSlots = [
    '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00'
  ];

  document.getElementById("date").addEventListener("change", function () {
    const selectedDate = this.value;
    renderSlots(selectedDate);
    confirmation.textContent = "";
  });

  function renderSlots(date) {
    slotsContainer.innerHTML = "";
    const booked = bookedSlots[date] || [];

    timeSlots.forEach(time => {
      const slot = document.createElement("div");
      slot.classList.add("slot");
      slot.textContent = time;

      if (booked.includes(time)) {
        slot.classList.add("booked");
      } else {
        slot.addEventListener("click", () => {
          bookedSlots[date] = [...booked, time];
          confirmation.textContent = `✅ Appointment booked on ${date} at ${time}`;
          renderSlots(date);
        });
      }

      slotsContainer.appendChild(slot);
    });
  }

  // Initialize today's date
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("date").value = today;
  renderSlots(today);