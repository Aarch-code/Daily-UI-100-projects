const data = [
      { name: "Snake Plant", category: "air", image: "snake-plant.jpg" },
      { name: "Aloe Vera", category: "succulent", image: "aloe-vera.jpg" },
      { name: "Peace Lily", category: "flowering", image: "peace-lily.jpg" },
      { name: "Spider Plant", category: "indoor", image: "spider-plant.jpg" },
      { name: "Jade Plant", category: "succulent", image: "jade-plant.jpg" },
      { name: "Areca Palm", category: "indoor", image: "areca-palm.jpg" },
      { name: "Boston Fern", category: "air", image: "boston-fern.jpg" },
      { name: "Orchid", category: "flowering", image: "orchid.jpg" },
    ];

    const grid = document.getElementById('grid');

    function renderItems(category) {
      grid.innerHTML = '';
      const filtered = category === 'all' ? data : data.filter(item => item.category === category);
      filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
        `;
        grid.appendChild(card);
      });
    }

    function filterItems(category) {
      document.querySelectorAll('.category-buttons button').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      renderItems(category);
    }

    // Load all items initially
    renderItems('all');