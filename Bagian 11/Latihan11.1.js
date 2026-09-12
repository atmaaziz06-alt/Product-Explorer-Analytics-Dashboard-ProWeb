// ========================================
// BAGIAN 11.1
// SET - UNIQUE DATA
// ========================================


// ========================================
// UNIQUE CATEGORY
// ========================================

const uniqueCategories = [
    ...new Set(
        products.map(product => product.category)
    )
];


// ========================================
// UNIQUE BRAND
// ========================================

const uniqueBrands = [
    ...new Set(
        products
            .filter(product => product.brand)
            .map(product => product.brand)
    )
];


// ========================================
// UNIQUE TAGS
// ========================================

const allTags = products.flatMap(
    product => product.tags || []
);

const uniqueTags = [
    ...new Set(allTags)
];


// ========================================
// MENAMPILKAN HASIL
// ========================================

console.log("===== LATIHAN 11.1 =====");


console.log("\nUnique Categories:");
console.log(uniqueCategories);


console.log("\nUnique Brands:");
console.log(uniqueBrands);


console.log("\nUnique Tags:");
console.log(uniqueTags);