//BAGIAN 18: State Management Sederhana
export const state = {
    products: [
        { id: 1, title: "Laptop Pro", category: "laptops", price: 1200, rating: 4.8, thumbnail: "https://via.placeholder.com/150" },
        { id: 2, title: "Smartphone X", category: "phones", price: 800, rating: 4.5, thumbnail: "https://via.placeholder.com/150" },
        { id: 3, title: "Wireless Headphones", category: "audio", price: 150, rating: 4.2, thumbnail: "https://via.placeholder.com/150" },
        { id: 4, title: "Gaming Mouse", category: "accessories", price: 50, rating: 4.7, thumbnail: "https://via.placeholder.com/150" }
    ],
    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "success" // idle, loading, success, error, empty
};