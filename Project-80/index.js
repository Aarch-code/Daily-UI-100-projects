const dateInput = document.getElementById('dateInput');
  const calendar = document.getElementById('calendar');
  const today = new Date();

  let selectedDate = null;
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  dateInput.addEventListener('click', () => {
    calendar.style.display = calendar.style.display === 'block' ? 'none' : 'block';
    buildCalendar(currentMonth, currentYear);
  });

  function buildCalendar(month, year) {
    calendar.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'calendar-header';
    header.innerHTML = `
      <button onclick="changeMonth(-1)">&#8249;</button>
      <span>${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}</span>
      <button onclick="changeMonth(1)">&#8250;</button>
    `;
    calendar.appendChild(header);

    const days = document.createElement('div');
    days.className = 'calendar-days';

    const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    dayNames.forEach(d => {
      const name = document.createElement('div');
      name.style.fontWeight = 'bold';
      name.innerText = d;
      days.appendChild(name);
    });

    const firstDay = new Date(year, month).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      days.appendChild(empty);
    }

    for (let i = 1; i <= totalDays; i++) {
      const day = document.createElement('div');
      day.className = 'calendar-day';
      day.innerText = i;

      const fullDate = new Date(year, month, i);
      if (
        fullDate.toDateString() === today.toDateString()
      ) {
        day.classList.add('today');
      }

      if (
        selectedDate &&
        fullDate.toDateString() === selectedDate.toDateString()
      ) {
        day.classList.add('selected');
      }

      day.addEventListener('click', () => {
        selectedDate = fullDate;
        dateInput.value = fullDate.toLocaleDateString();
        calendar.style.display = 'none';
      });

      days.appendChild(day);
    }

    calendar.appendChild(days);
  }

  function changeMonth(offset) {
    currentMonth += offset;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    buildCalendar(currentMonth, currentYear);
  }

  document.addEventListener('click', (e) => {
    if (!calendar.contains(e.target) && e.target !== dateInput) {
      calendar.style.display = 'none';
    }
  });