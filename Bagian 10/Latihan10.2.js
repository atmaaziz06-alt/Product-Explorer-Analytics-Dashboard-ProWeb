// ========================================
// BAGIAN 10.2
// FREQUENCY COUNTING PADA DATA PRODUK
// ========================================


// Function frequency counting

function countFrequency(array) {

    return array.reduce((counts, item) => {

        counts[item] = (counts[item] || 0) + 1;

        return counts;

    }, {});
}


// ========================================
// FREQUENCY CATEGORY
// ========================================

const categories = products.map(
    product => product.category
);

const categoryFrequency =
    countFrequency(categories);


// ========================================
// FREQUENCY TAGS
// ========================================

const allTags = products.flatMap(
    product => product.tags || []
);

const tagFrequency =
    countFrequency(allTags);


// ========================================
// FREQUENCY RATING
// ========================================

const ratings = products.map(
    product => Math.round(product.rating)
);

const ratingFrequency =
    countFrequency(ratings);


// ========================================
// FREQUENCY BRAND
// ========================================

// Hanya mengambil brand jika tersedia
const brands = products
    .filter(product => product.brand)
    .map(product => product.brand);

const brandFrequency =
    countFrequency(brands);


// ========================================
// MENAMPILKAN HASIL
// ========================================

console.log("===== LATIHAN 10.2 =====");


console.log("\nFrequency Category:");
console.log(categoryFrequency);


console.log("\nFrequency Tags:");
console.log(tagFrequency);


console.log("\nFrequency Rating:");
console.log(ratingFrequency);


console.log("\nFrequency Brand:");
console.log(brandFrequency);