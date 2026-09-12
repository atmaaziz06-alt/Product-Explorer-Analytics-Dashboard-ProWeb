// Dataset contoh dengan nested data
const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];

// 1. Ambil semua tag dari seluruh produk menjadi satu array (masih berbentuk array di dalam array)
const allTagsNested = products.map(p => p.tags);
console.log("1. Tags Nested:", allTagsNested);

// 2. Function untuk mencari produk berdasarkan tag tertentu
function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}
console.log("2. Produk dengan tag 'computer':", findProductsByTag(products, "computer"));

// 3. Hitung jumlah review pada setiap produk, menghasilkan { id, title, totalReviews }
const reviewCounts = products.map(p => ({
  id: p.id,
  title: p.title,
  totalReviews: p.reviews.length
}));
console.log("3. Total Reviews per Produk:", reviewCounts);

// 4. Dari seluruh produk, kumpulkan review yang ratingnya 5
const fiveStarReviews = products.flatMap(p => p.reviews).filter(r => r.rating === 5);
console.log("4. Review dengan rating 5:", fiveStarReviews);

// 5. Hitung rata-rata rating dari array reviews pada setiap produk secara manual
const averageReviewRatings = products.map(p => {
  const total = p.reviews.reduce((sum, r) => sum + r.rating, 0);
  const avg = p.reviews.length > 0 ? total / p.reviews.length : 0;
  return { id: p.id, title: p.title, averageRating: avg };
});
console.log("5. Rata-rata Rating Review:", averageReviewRatings);

// 6. Temukan produk dengan jumlah review terbanyak
const productWithMostReviews = products.reduce((prev, current) => 
  current.reviews.length > prev.reviews.length ? current : prev
);
console.log("6. Produk dengan Review Terbanyak:", productWithMostReviews.title);

// 7. Kumpulkan seluruh nilai rating dari semua review di semua produk menjadi satu array datar
const allRatings = products.flatMap(p => p.reviews.map(r => r.rating));
console.log("7. Semua Rating Review:", allRatings);