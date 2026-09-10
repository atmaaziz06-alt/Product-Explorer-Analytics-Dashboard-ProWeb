// Contoh dasar flat()
const tags = [
  ["computer", "office"],
  ["electronics"],
  ["gaming", "computer"]
];

const flattenedTags = tags.flat();
console.log("Flattened Tags (flat):", flattenedTags);
// Output: ["computer", "office", "electronics", "gaming", "computer"]

// Contoh penggunaan flatMap() pada data produk
const productList = [
  { title: "Laptop", tags: ["computer", "office"] },
  { title: "Phone", tags: ["mobile"] }
];

const allExtractedTags = productList.flatMap(p => p.tags);
console.log("Extracted Tags (flatMap):", allExtractedTags);
// Output: ["computer", "office", "mobile"]


// --- LATIHAN BAGIAN 4 ---

// Latihan 4.1: Ambil seluruh tags dari semua produk (menggunakan data 'products' di Bagian 3) menjadi satu array datar
const Latihan4_1 = products.flatMap(p => p.tags);
console.log("Latihan 4.1 - Semua Tags (Datar):", Latihan4_1);

// Latihan 4.2: Ambil seluruh comment dari semua review di semua produk menjadi satu array of strings
const Latihan4_2 = products.flatMap(p => p.reviews.map(r => r.comment));
console.log("Latihan 4.2 - Semua Komentar Review:", Latihan4_2);