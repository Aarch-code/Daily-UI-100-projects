// Example trending topics — you can replace this dynamically
    const trends = [
      "Taylor Swift - 'Fortnight'",
      "Bitcoin hits $70,000",
      "Inside Out 2 tops box office",
      "Nvidia stock surges 12%",
      "Olympics 2024 countdown begins",
      "ChatGPT gets smarter!",
      "Apple Vision Pro updates"
    ];

    const container = document.getElementById("trendItems");
    container.innerHTML = trends.map(item => `<span>${item}</span>`).join(" • ");