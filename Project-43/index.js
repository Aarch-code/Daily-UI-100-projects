let cart = {};

function addToCart(item, price) {
  if (!cart[item]) {
    cart[item] = { quantity: 1, price };
  } else {
    cart[item].quantity++;
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = cartCount;
}

function toggleCart() {
  const modal = document.getElementById("cartModal");
  const cartItems = document.getElementById("cartItems");
  const totalAmount = document.getElementById("totalAmount");

  if (modal.style.display === "flex") {
    modal.style.display = "none";
    return;
  }

  // Populate Cart
  cartItems.innerHTML = "";
  let total = 0;
  for (const item in cart) {
    const { quantity, price } = cart[item];
    const li = document.createElement("li");
    li.textContent = `${item} x ${quantity} - $${(quantity * price).toFixed(2)}`;
    cartItems.appendChild(li);
    total += quantity * price;
  }
  totalAmount.textContent = total.toFixed(2);

  modal.style.display = "flex";
}

function checkout() {
  alert("Thank you! Your order has been placed.");
  cart = {};
  toggleCart();
  updateCartDisplay();
}
