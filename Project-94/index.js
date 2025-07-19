// Sample fake news data
    const newsData = [
      {
        title: "NASA Plans Mission to Europa in 2026",
        summary: "The space agency will investigate signs of life beneath Jupiter's icy moon.",
        image: "https://source.unsplash.com/600x400/?space,planet",
        tag: "Science"
      },
      {
        title: "Tech Giants Report Record Profits in Q2",
        summary: "Despite global slowdown, the top 5 tech firms post better-than-expected earnings.",
        image: "https://source.unsplash.com/600x400/?technology,data",
        tag: "Business"
      },
      {
        title: "Global Heatwave Intensifies",
        summary: "Countries across Europe and Asia experience record temperatures amid climate concerns.",
        image: "https://source.unsplash.com/600x400/?climate,heatwave",
        tag: "Environment"
      },
      {
        title: "Breakthrough in Cancer Research",
        summary: "A new treatment shows promise in reducing tumor growth by 80% in early trials.",
        image: "https://source.unsplash.com/600x400/?health,science",
        tag: "Health"
      },
      {
        title: "World Cup 2026 Cities Announced",
        summary: "FIFA names 16 cities across North America as official venues for the upcoming event.",
        image: "https://source.unsplash.com/600x400/?sports,soccer",
        tag: "Sports"
      },
      {
        title: "AI in Education: Help or Hurdle?",
        summary: "Educators weigh the benefits and drawbacks of AI tools in classrooms.",
        image: "https://source.unsplash.com/600x400/?ai,learning",
        tag: "Education"
      }
    ];

    const container = document.getElementById("newsFeed");

    newsData.forEach(article => {
      const card = document.createElement("div");
      card.className = "news-card";

      card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="news-image" />
        <div class="news-content">
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <span class="tag">${article.tag}</span>
        </div>
      `;

      container.appendChild(card);
    });