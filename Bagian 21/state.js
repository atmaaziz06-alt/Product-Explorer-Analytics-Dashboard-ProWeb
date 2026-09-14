export const state = {
    products: [
        { id: 1, title: "Laptop Pro", category: "laptops", price: 1200, rating: 4.8, thumbnail: "daftarproduk_Laptop.jpg" },
        { id: 2, title: "Smartphone Premium", category: "phones", price: 800, rating: 4.5, thumbnail: "daftarproduk_Handphone.jpg" },
        { id: 3, title: "Wireless Headphones", category: "audio", price: 150, rating: 4.2, thumbnail: "daftarproduk_Headphone.jpg" },
        { id: 4, title: "Gaming Mouse", category: "accessories", price: 50, rating: 4.7, thumbnail: "daftarproduk_Mouse Gaming.jpg" },
        { id: 5, title: "Mechanical Keyboard", category: "accessories", price: 120, rating: 4.6, thumbnail: "daftarproduk_Keyboard.jpg" }
    ],
    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "success"
};