// Simulate star rating
const rating = 5; // out of 5
const starContainer = document.getElementById("starRating");

for (let i = 0; i < rating; i++) {
  starContainer.innerHTML += '<span>★</span>';
}
