// Sample data — customize based on app type
  const statistics = [
    { label: "Total Users", value: 12034 },
    { label: "Active Sessions", value: 874 },
    { label: "Revenue ($)", value: 195340 },
    { label: "Win Rate (%)", value: 76 },
    { label: "Projects Completed", value: 112 },
    { label: "Avg. Load Time (ms)", value: 382 },
  ];

  const statsContainer = document.getElementById('stats');

  // Format number with commas
  function formatNumber(num) {
    return num.toLocaleString();
  }

  // Render stat cards
  statistics.forEach(stat => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `
      <div class="stat-number">${formatNumber(stat.value)}</div>
      <div class="stat-label">${stat.label}</div>
    `;
    statsContainer.appendChild(card);
  });