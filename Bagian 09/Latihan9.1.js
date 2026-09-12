// ========================================
// BAGIAN 9.2
// RINGKASAN JUMLAH PRODUK PER CATEGORY
// ========================================


function groupByCategory(products) {

    return products.reduce((groups, product) => {

        const key = product.category;

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(product);

        return groups;

    }, {});
}


// Grouping produk
const groupedProducts = groupByCategory(products);


// Membuat tabel ringkasan
const categorySummary = Object.entries(groupedProducts)
    .map(([category, products]) => {

        return {
            category: category,
            totalProducts: products.length
        };

    });


// Menampilkan hasil
console.log("===== LATIHAN 9.2 =====");

console.table(categorySummary);