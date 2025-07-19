// Countdown Timer
  const targetDate = new Date("2025-08-01T00:00:00").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (diff <= 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "<strong>🎉 Now Available!</strong>";
    } else {
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }
  }, 1000);

  // Fake form submission
  function submitPreorder(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    if (name && email.includes("@")) {
      alert(`🎉 Thank you, ${name}! Your pre-order is confirmed.`);
    } else {
      alert("❌ Please fill in valid details.");
    }
  }