function updateQty(button, change) {
    const qtySpan = button.parentElement.querySelector("span");
    let qty = parseInt(qtySpan.textContent);
    qty = Math.max(1, qty + change);
    qtySpan.textContent = qty;
    updateTotal();
  }

  function updateTotal() {
    const items = document.querySelectorAll(".cart-item");
    let total = 0;
    items.forEach(item => {
      const price = parseFloat(item.dataset.price);
      const qty = parseInt(item.querySelector("span").textContent);
      total += price * qty;
    });
    document.getElementById("total").textContent = total.toFixed(2);
  }