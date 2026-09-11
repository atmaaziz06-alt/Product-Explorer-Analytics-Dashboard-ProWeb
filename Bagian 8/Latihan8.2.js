// BAGIAN 8.2
// Sorting Products


function sortProducts(products, sortBy) {

    // Membuat salinan array
    // supaya products asli tidak berubah
    const result = [...products];


    switch (sortBy) {

        // Harga termurah ke termahal
        case "price-asc":

            return result.sort(
                (a, b) => a.price - b.price
            );


        // Harga termahal ke termurah
        case "price-desc":

            return result.sort(
                (a, b) => b.price - a.price
            );


        // Rating tertinggi ke terendah
        case "rating":

            return result.sort(
                (a, b) => b.rating - a.rating
            );


        // Berdasarkan nama produk
        case "title":

            return result.sort(
                (a, b) =>
                    a.title.localeCompare(b.title)
            );


        // Jika pilihan tidak sesuai
        default:

            return result;
    }
}


// ========================================
// TEST SORTING
// ========================================

console.log("===== LATIHAN 8.2 =====");


// Harga termurah
const priceAscending =
    sortProducts(
        products,
        "price-asc"
    );

console.log("\nHarga termurah:");
console.log(
    priceAscending.map(product => ({
        title: product.title,
        price: product.price
    }))
);


// Harga termahal
const priceDescending =
    sortProducts(
        products,
        "price-desc"
    );

console.log("\nHarga termahal:");
console.log(
    priceDescending.map(product => ({
        title: product.title,
        price: product.price
    }))
);


// Rating tertinggi
const highestRating =
    sortProducts(
        products,
        "rating"
    );

console.log("\nRating tertinggi:");
console.log(
    highestRating.map(product => ({
        title: product.title,
        rating: product.rating
    }))
);


// Berdasarkan nama
const alphabetical =
    sortProducts(
        products,
        "title"
    );

console.log("\nBerdasarkan nama:");
console.log(
    alphabetical.map(product => ({
        title: product.title
    }))
);