export function renderProducts(products) {
    const container = document.querySelector("#product-list");
    if (!container) return;
    
    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<p style='color: #64748b; grid-column: 1/-1;'>Tidak ada produk yang ditemukan.</p>";
        return;
    }

    for (const product of products) {
        const card = document.createElement("div");
        card.classList.add("product-card");
        
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.thumbnail}" alt="${product.title}">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.title}</h3>
                <div class="product-details">
                    <span class="product-price">$${product.price}</span>
                    <span class="product-rating">⭐ ${product.rating}</span>
                </div>
            </div>
        `;
        
        container.append(card);
    }
}