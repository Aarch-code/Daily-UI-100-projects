let totalRaised = 4800;
  let goal = 10000;
  let contributors = 76;

  function updateCampaign() {
    document.getElementById('raised').innerText = `$${totalRaised.toLocaleString()}`;
    document.getElementById('contributors').innerText = `${contributors}`;
    let percent = (totalRaised / goal) * 100;
    document.getElementById('progress').style.width = percent + '%';
  }

  function donate() {
    const donation = Math.floor(Math.random() * 200) + 50; // random donation between $50 and $250
    totalRaised += donation;
    contributors += 1;
    updateCampaign();
    alert(`Thank you for donating $${donation}!`);
  }

  updateCampaign();