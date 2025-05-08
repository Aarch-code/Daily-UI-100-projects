const gamers = [
    {
      name: "ShadowStriker",
      avatar: "https://i.pravatar.cc/150?img=12",
      rank: "Diamond",
      level: 47,
      wins: 243,
      kd: 2.3,
      accuracy: "89%"
    },
    {
      name: "PixelHunter",
      avatar: "https://i.pravatar.cc/150?img=32",
      rank: "Platinum",
      level: 38,
      wins: 189,
      kd: 1.9,
      accuracy: "83%"
    },
    {
      name: "QuickScopeX",
      avatar: "https://i.pravatar.cc/150?img=45",
      rank: "Gold",
      level: 29,
      wins: 152,
      kd: 1.6,
      accuracy: "76%"
    },
    {
      name: "StealthNinja",
      avatar: "https://i.pravatar.cc/150?img=17",
      rank: "Silver",
      level: 22,
      wins: 98,
      kd: 1.3,
      accuracy: "69%"
    }
  ];
  
  const container = document.getElementById("leaderboard");
  
  gamers.forEach(player => {
    const card = document.createElement("div");
    card.className = "gamer-card";
  
    card.innerHTML = `
      <img src="${player.avatar}" class="avatar" alt="${player.name}" />
      <div class="gamer-info">
        <h2>${player.name}</h2>
        <p class="rank">🎖️ Rank: ${player.rank}</p>
        <p class="level">🧬 Level: ${player.level}</p>
        <ul class="stats">
          <li>🏆 Wins: <strong>${player.wins}</strong></li>
          <li>⚔️ K/D Ratio: <strong>${player.kd}</strong></li>
          <li>🎯 Accuracy: <strong>${player.accuracy}</strong></li>
        </ul>
        <button onclick="challenge('${player.name}')">⚡ Challenge</button>
      </div>
    `;
  
    container.appendChild(card);
  });
  
  function challenge(name) {
    alert(`You have challenged ${name} to a match!`);
  }
  