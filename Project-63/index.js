const books = [
      {
        title: "The Midnight Library",
        author: "Matt Haig",
        desc: "A novel about all the choices that go into a life well lived."
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        desc: "An easy & proven way to build good habits & break bad ones."
      },
      {
        title: "Lessons in Chemistry",
        author: "Bonnie Garmus",
        desc: "A scientist in the 1960s who becomes an unexpected TV cooking star."
      },
      {
        title: "It Ends With Us",
        author: "Colleen Hoover",
        desc: "A deeply emotional tale of love and the impact of difficult decisions."
      },
      {
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        desc: "A dragon academy fantasy full of suspense and fiery tension."
      }
    ];

    const listContainer = document.getElementById('bookList');

    books.forEach((book, index) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <div class="rank">#${index + 1}</div>
        <div class="book-info">
          <div class="book-title">${book.title}</div>
          <div class="book-author">by ${book.author}</div>
          <div class="book-desc">${book.desc}</div>
        </div>
      `;

      listContainer.appendChild(card);
    });