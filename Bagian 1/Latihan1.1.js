function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

// Contoh pengujian:
console.log(calculateDiscountedPrice(100, 20));