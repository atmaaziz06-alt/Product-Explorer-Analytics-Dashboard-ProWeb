//BAGIAN 20: ES6+

export const filterAndSortProducts = (products, { search, category, sortBy }) => {
    // 1. Filter berdasarkan Search (Case-insensitive) & Category
    const filtered = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "all" || product.category === category;
        return matchesSearch && matchesCategory;
    });

    // 2. Sorting menggunakan Custom Comparator
    return filtered.sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "title") return a.title.localeCompare(b.title);
        return 0; // default
    });
};

// Refactor getStatistics menggunakan Destructuring & Optional Chaining
export const getStatistics = (products) => {
    const totalProducts = products.length;
    if (totalProducts === 0) return { totalProducts: 0, averagePrice: 0, highestPrice: 0, lowestPrice: 0 };

    const prices = products.map(p => p.price);
    const totalStock = products.reduce((sum, p) => sum + (p.stock ?? 0), 0);
    const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);

    return {
        totalProducts,
        averagePrice: averagePrice.toFixed(2),
        highestPrice,
        lowestPrice,
        totalStock
    };
};