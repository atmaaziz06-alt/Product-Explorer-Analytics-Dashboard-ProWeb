// LATIHAN 16.2: Perbandingan Kompleksitas Nested Loop vs Map 

// 1. Buat dataset dummy (misal 1.000 produk)
function generateDataset(size) {
    const categories = ["electronics", "phones", "laptops", "audio", "accessories"];
    const dataset = [];
    for (let i = 1; i <= size; i++) {
        dataset.push({
            id: i,
            title: `Product ${i}`,
            category: categories[i % categories.length],
            price: Math.floor(Math.random() * 1000)
        });
    }
    return dataset;
}

const products = generateDataset(1000);

// APPROACH A: Menggunakan Nested Loop O(n^2)
console.time("Waktu Nested Loop O(n^2)");
const pairsNested = [];

for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
        // Mencari pasangan produk yang memiliki kategori sama
        if (products[i].category === products[j].category) {
            if (pairsNested.length < 5000) {
                pairsNested.push([products[i].id, products[j].id]);
            }
        }
    }
}
console.timeEnd("Waktu Nested Loop O(n^2)");


// APPROACH B: Menggunakan Map O(n)
console.time("Waktu Map-based Grouping O(n)");

// 1. Grouping data berdasarkan kategori menggunakan Map (atau objek) terlebih dahulu
const categoryMap = new Map();
for (const product of products) {
    if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, []);
    }
    categoryMap.get(product.category).push(product);
}

// 2. Mencari pasangan dari kelompok yang sudah terindeks
const pairsMap = [];
for (const [category, items] of categoryMap.entries()) {
    for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
            if (pairsMap.length < 5000) {
                pairsMap.push([items[i].id, items[j].id]);
            }
        }
    }
}
console.timeEnd("Waktu Map-based Grouping O(n)");