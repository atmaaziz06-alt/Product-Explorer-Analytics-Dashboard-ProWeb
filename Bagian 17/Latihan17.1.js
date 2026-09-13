// Data Dummy untuk Latihan 17.1
const dummyProducts = [
    {
        thumbnail: "https://via.placeholder.com/150",
        title: "Laptop Pro",
        category: "laptops",
        price: 1200,
        rating: 4.8
    },
    {
        thumbnail: "https://via.placeholder.com/150",
        title: "Smartphone X",
        category: "phones",
        price: 800,
        rating: 4.5
    },
    {
        thumbnail: "https://via.placeholder.com/150",
        title: "Wireless Headphones",
        category: "audio",
        price: 150,
        rating: 4.2
    },
    {
        thumbnail: "https://via.placeholder.com/150",
        title: "Gaming Mouse",
        category: "accessories",
        price: 50,
        rating: 4.7
    },
    {
        thumbnail: "https://via.placeholder.com/150",
        title: "Mechanical Keyboard",
        category: "accessories",
        price: 120,
        rating: 4.6
    }
];

// Fungsi untuk merender produk ke DOM
function renderProducts(products) {
    const container = document.querySelector("#product-list");
    container.innerHTML = ""; // Bersihkan kontainer sebelum merender ulang

    for (const product of products) {
        const card = document.createElement("div");
        card.classList.add("product-card");
        
        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Kategori: ${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ⭐${product.rating}</p>
        `;
        
        container.append(card);
    }
}

// Panggil fungsi render
renderProducts(dummyProducts);