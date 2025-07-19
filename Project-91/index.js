const userInterests = ["travel", "productivity", "wellness"];

    const allRecommendations = [
      {
        title: "Explore Bali - Travel Guide 2025",
        category: "travel",
        desc: "Top destinations, tips, and culture insights for your next adventure.",
        link: "#"
      },
      {
        title: "10-Minute Morning Routine That Works",
        category: "wellness",
        desc: "Boost energy, reduce stress, and start your day mindfully.",
        link: "#"
      },
      {
        title: "Digital Declutter Checklist",
        category: "productivity",
        desc: "A step-by-step guide to streamline your digital life.",
        link: "#"
      },
      {
        title: "Ultimate Hiking Trails in India",
        category: "travel",
        desc: "Discover breathtaking trails across the Himalayas and Western Ghats.",
        link: "#"
      },
      {
        title: "Sleep Better: Evening Habits That Help",
        category: "wellness",
        desc: "Science-backed techniques to wind down and get deep sleep.",
        link: "#"
      },
      {
        title: "Focus Like a Pro – Pomodoro Toolkit",
        category: "productivity",
        desc: "Master deep work with structured focus sessions.",
        link: "#"
      },
    ];

    const container = document.getElementById("recommendationList");

    const filtered = allRecommendations.filter(item =>
      userInterests.includes(item.category)
    );

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <span class="tag">${item.category.toUpperCase()}</span><br/>
        <a class="btn" href="${item.link}">View</a>
      `;

      container.appendChild(card);
    });