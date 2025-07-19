document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
    const room = document.getElementById("room").value;

    if (!checkin || !checkout || !guests || !room) {
      alert("Please complete all fields.");
      return;
    }

    alert(`Booking Confirmed!\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\nRoom: ${room}`);
  });