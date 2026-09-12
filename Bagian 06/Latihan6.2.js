// BAGIAN 6.2
// Linear Search produk berdasarkan ID

function linearSearchProduct(products, targetId) {

    for (let i = 0; i < products.length; i++) {

        if (products[i].id === targetId) {
            return products[i];
        }
    }

    return undefined;
}


// Contoh penggunaan
const foundProduct =
    linearSearchProduct(products, 3);

console.log("===== LATIHAN 6.2 =====");
console.log("Produk dengan ID 3:");
console.log(foundProduct);