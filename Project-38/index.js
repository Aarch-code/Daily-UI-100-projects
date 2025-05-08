const form = document.getElementById('bookingForm');
const dateInput = document.getElementById('date');
const timeSelect = document.getElementById('time');
const confirmationBox = document.getElementById('confirmation');

const allTimeSlots = [
  '10:00 AM',
  '11:30 AM',
  '2:00 PM',
  '3:30 PM',
  '5:00 PM'
];

// Load booked slots from localStorage
function getBookedSlots() {
  return JSON.parse(localStorage.getItem('bookings')) || {};
}

// Save a new booking
function saveBooking(date, time, name, email) {
  const bookings = getBookedSlots();
  if (!bookings[date]) bookings[date] = [];
  bookings[date].push({ time, name, email });
  localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Get available slots for selected date
function getAvailableSlots(date) {
  const bookings = getBookedSlots();
  const bookedTimes = bookings[date]?.map(b => b.time) || [];
  return allTimeSlots.filter(slot => !bookedTimes.includes(slot));
}

// Update dropdown based on selected date
function updateTimeOptions() {
  const selectedDate = dateInput.value;
  timeSelect.innerHTML = '<option value="">-- Select a Time Slot --</option>';
  if (!selectedDate) return;

  const availableSlots = getAvailableSlots(selectedDate);
  if (availableSlots.length === 0) {
    const opt = document.createElement('option');
    opt.text = 'No slots available';
    opt.disabled = true;
    timeSelect.add(opt);
  } else {
    availableSlots.forEach(slot => {
      const opt = document.createElement('option');
      opt.value = opt.text = slot;
      timeSelect.add(opt);
    });
  }
}

// On date change, update time options
dateInput.addEventListener('change', updateTimeOptions);

// On form submit
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const date = dateInput.value;
  const time = timeSelect.value;

  if (!time || time === 'No slots available') {
    alert("Please select a valid time.");
    return;
  }

  saveBooking(date, time, name, email);

  confirmationBox.classList.remove('hidden');
  confirmationBox.innerHTML = `
    <strong>Success!</strong><br>
    ${name}, your consultation is booked for <br>
    <strong>${date} at ${time}</strong>. <br>
    A confirmation email will be sent to <strong>${email}</strong>.
  `;

  form.reset();
  updateTimeOptions(); // Refresh available slots
});


  