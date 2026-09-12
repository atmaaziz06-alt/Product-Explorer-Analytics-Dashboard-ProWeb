// ========================================
// BAGIAN 12.1
// MAP - PRODUCT LOOKUP
// ========================================


// Function untuk membuat
// Map dari product ID ke product

function buildProductLookup(products) {

    const productMap = new Map();

    for (const product of products) {

        productMap.set(
            product.id,
            product
        );
    }

    return productMap;
}


// ========================================
// MEMBUAT PRODUCT LOOKUP
// ========================================

const productLookup =
    buildProductLookup(products);


// ========================================
// MENCARI PRODUK
// ========================================

const targetId = 3;

const foundProduct =
    productLookup.get(targetId);


// ========================================
// MENAMPILKAN HASIL
// ========================================

console.log("===== LATIHAN 12.1 =====");


console.log("Product Lookup:");
console.log(productLookup);


console.log("\nProduk dengan ID " + targetId + ":");
console.log(foundProduct);