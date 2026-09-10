const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

// Latihan 2.3: Mengubah Data Tanpa Mutasi (Immutability)
function updateStock(products, id, newStock) {
  return products.map(p => 
    p.id === id ? { ...p, stock: newStock } : p
  );
}

console.log("--- LATIHAN 2.3 ---");
const updatedProducts = updateStock(products, 1, 20);
console.log("Data Baru (Stok Laptop jadi 20):", updatedProducts);
console.log("Data Asli (Tetap aman):", products);