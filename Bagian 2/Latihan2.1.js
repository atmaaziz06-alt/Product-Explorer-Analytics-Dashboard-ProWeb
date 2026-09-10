const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

// Latihan 2.1: Mencari Produk menggunakan find()
function findProductById(products, id) {
  return products.find(p => p.id === id);
}

console.log("--- LATIHAN 2.1 ---");
console.log(findProductById(products, 2));