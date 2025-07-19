const tripRadios = document.querySelectorAll('input[name="trip"]');
  const returnDate = document.getElementById("returnDate");

  tripRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "roundtrip") {
        returnDate.style.display = "block";
        returnDate.required = true;
      } else {
        returnDate.style.display = "none";
        returnDate.required = false;
      }
    });
  });

  const form = document.getElementById("flightForm");
  const results = document.getElementById("results");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const departure = document.getElementById("departure").value;
    const passengers = document.getElementById("passengers").value;

    // Fake search results
    const sampleFlights = [
      {
        airline: "SkyAir",
        time: "06:00 - 08:30",
        duration: "2h 30m",
        price: "$220",
        baggage: "Baggage fee: $30"
      },
      {
        airline: "BlueJet",
        time: "09:15 - 11:45",
        duration: "2h 30m",
        price: "$195",
        baggage: "1 Free Checked Bag"
      },
      {
        airline: "FlySmart",
        time: "13:00 - 15:30",
        duration: "2h 30m",
        price: "$180",
        baggage: "Carry-on only"
      }
    ];

    results.innerHTML = `<h2>Available Flights from ${from} to ${to}</h2>`;

    sampleFlights.forEach(flight => {
      results.innerHTML += `
        <div class="flight-card">
          <h3>${flight.airline}</h3>
          <div class="flight-details">
            <div><strong>${flight.time}</strong> (${flight.duration})</div>
            <div><strong>${flight.price}</strong></div>
          </div>
          <div class="baggage">${flight.baggage}</div>
        </div>
      `;
    });
  });