// BAGIAN 7.2
// Binary Search berdasarkan price


// Mengurutkan produk berdasarkan harga
const sortedProducts = [...products].sort(
    (a, b) => a.price - b.price
);


function binarySearchByPrice(
    sortedProducts,
    targetPrice
) {

    let left = 0;
    let right = sortedProducts.length - 1;

    while (left <= right) {

        const mid =
            Math.floor((left + right) / 2);

        if (
            sortedProducts[mid].price ===
            targetPrice
        ) {
            return sortedProducts[mid];
        }

        if (
            sortedProducts[mid].price <
            targetPrice
        ) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return undefined;
}


// Menampilkan produk yang sudah terurut
console.log("===== LATIHAN 7.2 =====");

console.log("Produk berdasarkan harga:");

console.log(
    sortedProducts.map(product => ({
        title: product.title,
        price: product.price
    }))
);


// Mencari produk dengan harga tertentu
const productByPrice =
    binarySearchByPrice(
        sortedProducts,
        800
    );

console.log("\nProduk dengan harga 800:");
console.log(productByPrice);