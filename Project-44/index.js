const books = [
    { id: 1, title: "The Hobbit" },
    { id: 2, title: "1984" },
    { id: 3, title: "Atomic Habits" },
    { id: 4, title: "Clean Code" },
    { id: 5, title: "The Alchemist" },
  ];
  
  const bookList = document.getElementById("bookList");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  function renderBooks() {
    bookList.innerHTML = "";
    books.forEach(book => {
      const card = document.createElement("div");
      card.className = "book-card";
  
      const title = document.createElement("div");
      title.className = "book-title";
      title.textContent = book.title;
  
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = favorites.includes(book.id) ? "❤️" : "🤍";
      if (favorites.includes(book.id)) heart.classList.add("favorited");
  
      heart.addEventListener("click", () => toggleFavorite(book.id, heart));
  
      card.appendChild(title);
      card.appendChild(heart);
      bookList.appendChild(card);
    });
  }
  
  function toggleFavorite(bookId, heartEl) {
    const index = favorites.indexOf(bookId);
    if (index >= 0) {
      favorites.splice(index, 1);
      heartEl.textContent = "🤍";
      heartEl.classList.remove("favorited");
    } else {
      favorites.push(bookId);
      heartEl.textContent = "❤️";
      heartEl.classList.add("favorited");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  
  renderBooks();
  