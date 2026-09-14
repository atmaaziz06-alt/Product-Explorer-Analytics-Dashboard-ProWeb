// BAGIAN 17 & 19: UI & Rendering
export function renderProducts(products) {
    const container = document.querySelector("#product-list");
    if (!container) return;
    
    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<p>Tidak ada produk yang ditemukan.</p>";
        return;
    }

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