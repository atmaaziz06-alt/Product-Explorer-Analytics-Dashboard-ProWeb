const dummyProducts = [
    {
        thumbnail: "daftarproduk_Laptop.jpg",
        title: "Laptop Pro",
        category: "laptop",
        price: 1200,
        rating: 4.8
    },
    {
        thumbnail: "https://via.placeholder.com/150",
        title: "Smartphone Premium",
        category: "phones",
        price: 800,
        rating: 4.5
    },
    {
        thumbnail: "https://via.placeholder.com/150",
        title: "Headphone Wireless",
        category: "audio",
        price: 150,
        rating: 4.2
    },
    {
        thumbnail: "https://via.placeholder.com/150",
        title: "Mouse Gaming LED",
        category: "accessories",
        price: 50,
        rating: 4.7
    },
    {
        thumbnail: "https://via.placeholder.com/150",
        title: "Keyboard Mekanikal RGB",
        category: "accessories",
        price: 120,
        rating: 4.6
    }
];

function renderProducts(products) {
    const container = document.querySelector("#product-list");
    if (!container) return;
    
    container.innerHTML = "";

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

renderProducts(dummyProducts);