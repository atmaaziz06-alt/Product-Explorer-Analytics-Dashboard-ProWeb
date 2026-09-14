export const filterAndSortProducts = (products, { search, category, sortBy }) => {
    const filtered = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "all" || product.category === category;
        return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "title") return a.title.localeCompare(b.title);
        return 0;
    });
};