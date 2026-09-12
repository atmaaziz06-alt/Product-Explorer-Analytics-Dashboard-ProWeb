// Fungsi hitung diskon dari Latihan 1.1
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

// Data keranjang untuk Latihan 1.2
const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 }
];

// Fungsi untuk memproses semua item di cart
function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);
    
    result.push({
      title: item.title,
      originalPrice: item.price,
      discountPercent: item.discountPercent,
      finalPrice: finalPrice
    });
  }
  return result;
}

// Jalankan dan tampilkan hasil
console.log("Hasil Diskon Keranjang:");
console.log(applyDiscounts(cart));