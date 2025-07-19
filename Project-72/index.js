const slider = document.getElementById("slider");
  const totalSlides = document.querySelectorAll(".slide").length;
  let index = 0;

  function showSlide(i) {
    if (i >= totalSlides) index = 0;
    if (i < 0) index = totalSlides - 1;
    slider.style.transform = `translateX(${-index * 100}%)`;
  }

  function nextSlide() {
    index++;
    showSlide(index);
  }

  function prevSlide() {
    index--;
    showSlide(index);
  }

  // Optional: Auto-play every 5 seconds
  setInterval(nextSlide, 5000);