const subtotal = 100.00;
  const validCoupons = {
    'SAVE10': 10,
    'WELCOME20': 20,
    'VIP30': 30
  };

  function applyCoupon() {
    const input = document.getElementById('couponInput').value.trim().toUpperCase();
    const message = document.getElementById('message');
    message.className = 'error';

    if (validCoupons[input]) {
      const discountPercent = validCoupons[input];
      const discountAmount = (subtotal * discountPercent) / 100;
      const total = subtotal - discountAmount;

      document.getElementById('discount').textContent = `-$${discountAmount.toFixed(2)}`;
      document.getElementById('total').textContent = `$${total.toFixed(2)}`;

      message.textContent = `Coupon applied! You saved ${discountPercent}%`;
      message.className = 'success';
    } else {
      document.getElementById('discount').textContent = '-$0.00';
      document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
      message.textContent = 'Invalid coupon code.';
    }
  }