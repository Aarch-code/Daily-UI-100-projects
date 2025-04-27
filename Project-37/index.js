const cities = [
    {name: "New York", temp: "25°C", desc: "Sunny", icon: "☀️"},
    {name: "London", temp: "15°C", desc: "Cloudy", icon: "☁️"},
    {name: "Tokyo", temp: "18°C", desc: "Rainy", icon: "🌧️"},
    {name: "Sydney", temp: "22°C", desc: "Partly Cloudy", icon: "🌤️"}
  ];

  function updateWeather() {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    document.getElementById('city').innerText = randomCity.name;
    document.getElementById('temperature').innerText = randomCity.temp;
    document.getElementById('description').innerText = randomCity.desc;
    document.querySelector('.weather-icon').innerText = randomCity.icon;
  }