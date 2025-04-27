// Initialize map
const map = L.map('map').setView([12.9716, 77.5946], 13); // Centered on Bangalore

// Set tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample delivery hotspots
const hotspots = [
  { name: "Swiggy Kitchen - Indiranagar", lat: 12.971891, lon: 77.641151 },
  { name: "Zomato Hub - Koramangala", lat: 12.9352, lon: 77.6146 },
  { name: "EatSure Center - MG Road", lat: 12.9756, lon: 77.6055 },
];

hotspots.forEach(spot => {
  L.marker([spot.lat, spot.lon])
    .addTo(map)
    .bindPopup(`<b>${spot.name}</b><br>Click to order now! 🍕🥡`);
});