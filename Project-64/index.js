const users = [
    { name: "Alice", avatar: "https://i.pravatar.cc/100?img=32" },
    { name: "Bob", avatar: "https://i.pravatar.cc/100?img=12" },
    { name: "Charlie", avatar: "https://i.pravatar.cc/100?img=56" },
    { name: "Dana", avatar: "https://i.pravatar.cc/100?img=44" },
  ];

  const list = document.getElementById("profileList");
  const modal = document.getElementById("profileModal");
  const message = document.getElementById("selectedMessage");

  users.forEach(user => {
    const profile = document.createElement("div");
    profile.className = "profile";
    profile.innerHTML = `
      <div class="avatar" style="background-image: url('${user.avatar}')"></div>
      <div class="username">${user.name}</div>
    `;
    profile.onclick = () => {
      modal.style.display = "none";
      message.textContent = `Welcome, ${user.name}!`;
    };
    list.appendChild(profile);
  });