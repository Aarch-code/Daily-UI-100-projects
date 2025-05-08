const feed = document.getElementById("feed");

const activities = [
  {
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/150?img=31",
    action: "commented on a post",
    content: "This article on Icelandic glaciers was mind-blowing! ❄️",
    time: "2 mins ago"
  },
  {
    name: "Bob Smith",
    avatar: "https://i.pravatar.cc/150?img=17",
    action: "liked a travel post",
    content: "🏔️ Mountain escapes in Switzerland",
    time: "10 mins ago"
  },
  {
    name: "Charlie Gomez",
    avatar: "https://i.pravatar.cc/150?img=5",
    action: "shared a destination",
    content: "Santorini sunsets are unmatched 😍",
    time: "30 mins ago"
  }
];

function renderActivity(activity) {
  const item = document.createElement("div");
  item.className = "feed-item";

  item.innerHTML = `
    <img src="${activity.avatar}" class="avatar" alt="${activity.name}" />
    <div class="content">
      <h4>${activity.name} <span style="font-weight: normal;">${activity.action}</span></h4>
      <p>${activity.content}</p>
      <div class="timestamp">${activity.time}</div>
    </div>
  `;

  feed.prepend(item);
}

function addActivity() {
  const random = activities[Math.floor(Math.random() * activities.length)];
  renderActivity(random);
}

// Initial render
activities.forEach(renderActivity);
