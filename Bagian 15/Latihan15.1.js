// Fungsi rekursif untuk menampilkan kategori bertingkat dengan indentasi
function printCategories(categories, depth = 0) {
    for (const category of categories) {
        console.log("  ".repeat(depth) + category.name);
        if (category.children && category.children.length > 0) {
            printCategories(category.children, depth + 1);
        }
    }
}

// Data Contoh Kategori Bertingkat
const storeCategories = [
    {
        name: "Electronics",
        children: [
            { name: "Laptop", children: [] },
            { name: "Phone", children: [] }
        ]
    },
    {
        name: "Clothing",
        children: [
            { name: "Men", children: [] },
            { name: "Women", children: [] }
        ]
    }
];

// Jalankan fungsi
printCategories(storeCategories);