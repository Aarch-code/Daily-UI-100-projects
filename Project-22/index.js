const mockData = [
    { city: 'Mumbai', genre: 'rock', date: '2025-05-01', name: 'Rocking Mumbai - Stadium Show' },
    { city: 'Delhi', genre: 'pop', date: '2025-05-03', name: 'Pop Mania Live' },
    { city: 'Bangalore', genre: 'edm', date: '2025-05-02', name: 'EDM Thunder' },
    { city: 'Mumbai', genre: 'jazz', date: '2025-05-01', name: 'Jazz Evening Vibes' },
    { city: 'Delhi', genre: 'classical', date: '2025-05-05', name: 'Classical Night Raga' }
  ];

  function searchConcerts() {
    const city = document.getElementById('city').value.toLowerCase();
    const date = document.getElementById('date').value;
    const genre = document.getElementById('genre').value;
    const resultsContainer = document.getElementById('results');

    const filtered = mockData.filter(item => {
      return (
        (!city || item.city.toLowerCase().includes(city)) &&
        (!date || item.date === date) &&
        (!genre || item.genre === genre)
      );
    });

    resultsContainer.innerHTML = '';

    if (filtered.length > 0) {
      filtered.forEach(concert => {
        const div = document.createElement('div');
        div.classList.add('result-item');
        div.innerHTML = `<strong>${concert.name}</strong><br>City: ${concert.city} | Date: ${concert.date} | Genre: ${concert.genre}`;
        resultsContainer.appendChild(div);
      });
    } else {
      resultsContainer.innerHTML = '<p>No concerts found. Try changing your filters.</p>';
    }
  }