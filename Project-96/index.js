const inventory = [
      { name: "Bananas", quantity: 25, category: "Fruit" },
      { name: "Almond Milk", quantity: 0, category: "Dairy Alternatives" },
      { name: "Brown Bread", quantity: 12, category: "Bakery" },
      { name: "Eggs (Dozen)", quantity: 3, category: "Poultry" },
      { name: "Basmati Rice", quantity: 0, category: "Grains" },
      { name: "Olive Oil", quantity: 5, category: "Pantry" },
      { name: "Spinach", quantity: 9, category: "Vegetables" },
      { name: "Tomatoes", quantity: 0, category: "Vegetables" },
    ];

    const container = document.getElementById("stockList");

    function displayItems(filter = "all") {
      container.innerHTML = "";
      inventory.forEach(item => {
        const isAvailable = item.quantity > 0;

        if (filter === "available" && !isAvailable) return;
        if (filter === "out" && isAvailable) return;

        const card = document.createElement("div");
        card.className = "stock-card";
        card.innerHTML = `
          <h3>${item.name}</h3>
          <p>Category: <strong>${item.category}</strong></p>
          <p>Quantity: <strong>${item.quantity}</strong></p>
          <span class="badge ${isAvailable ? 'in-stock' : 'out-stock'}">
            ${isAvailable ? 'In Stock' : 'Out of Stock'}
          </span>
        `;
        container.appendChild(card);
      });
    }

    function filterItems(mode) {
      displayItems(mode);
    }

    // Initial load
    displayItems();