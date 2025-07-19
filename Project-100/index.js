const prompts = [
      { id: 91, title: "Sign Up Form", desc: "Design a sign up page or modal for an app or website." },
      { id: 92, title: "Agree to Terms", desc: "Create a UI asking users to accept Terms & Conditions." },
      { id: 93, title: "Create New", desc: "Design a UI for creating a new item like a file or post." },
      { id: 94, title: "Curated for You", desc: "Show personalized suggestions or content for the user." },
      { id: 95, title: "FAQ Section", desc: "Design a clean, searchable FAQ section." },
      { id: 96, title: "Splash Screen", desc: "Create a beautiful first screen users see when launching." },
      { id: 97, title: "News Reader", desc: "Design an interface for reading news or blogs." },
      { id: 98, title: "Product Tour", desc: "Guide users through key product features." },
      { id: 99, title: "Stock Viewer", desc: "Display what's currently available or low in stock." },
      { id: 100, title: "Giveaway Page", desc: "Create a page to promote a product giveaway." },
    ];

    const grid = document.getElementById('promptGrid');

    prompts.forEach(prompt => {
      const card = document.createElement('div');
      card.className = 'prompt-card';
      card.innerHTML = `
        <h3>#${prompt.id}: ${prompt.title}</h3>
        <p>${prompt.desc}</p>
      `;
      grid.appendChild(card);
    });