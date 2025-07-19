const events = [
    {
      title: "Summer Coding Bootcamp",
      date: "2025-07-10",
      location: "Online",
    },
    {
      title: "Design Thinking Workshop",
      date: "2025-06-25",
      location: "San Francisco, CA",
    },
    {
      title: "Music Fest 2024",
      date: "2024-12-20",
      location: "New York City",
    },
    {
      title: "Cybersecurity Seminar",
      date: "2025-08-15",
      location: "Tokyo, Japan",
    },
    {
      title: "Leadership Conference",
      date: "2024-11-05",
      location: "Berlin, Germany",
    }
  ];

  const eventList = document.getElementById("eventList");
  const today = new Date();

  function filterEvents(type) {
    const buttons = document.querySelectorAll(".filters button");
    buttons.forEach(btn => btn.classList.remove("active"));
    eventList.innerHTML = "";

    if (type === "upcoming") {
      buttons[0].classList.add("active");
    } else {
      buttons[1].classList.add("active");
    }

    const filtered = events.filter(event => {
      const eventDate = new Date(event.date);
      return type === "upcoming" ? eventDate >= today : eventDate < today;
    });

    if (filtered.length === 0) {
      eventList.innerHTML = `<p style="grid-column: 1/-1; text-align:center;">No ${type} events.</p>`;
      return;
    }

    filtered.forEach(event => {
      const date = new Date(event.date);
      const formatted = date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

      const card = `
        <div class="card">
          <div class="date">${formatted}</div>
          <div class="title">${event.title}</div>
          <div class="location">📍 ${event.location}</div>
          <button class="btn" onclick="alert('RSVP Confirmed for ${event.title}')">RSVP</button>
        </div>
      `;
      eventList.innerHTML += card;
    });
  }

  // Show upcoming by default
  filterEvents('upcoming');