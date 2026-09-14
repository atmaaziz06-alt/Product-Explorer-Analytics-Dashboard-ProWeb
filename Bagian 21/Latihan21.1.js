//BAGIAN 21: ES Modules (Orkestrasi Aplikasi)
import { state } from "./state.js";
import { renderProducts } from "./ui.js";
import { filterAndSortProducts } from "./algorithms.js";

// Fungsi utama untuk memperbarui tampilan berdasarkan state terkini
export function render() {
    const processedProducts = filterAndSortProducts(state.products, state);
    renderProducts(processedProducts);
}

// Hubungkan Event Listener (Bagian 19)
document.addEventListener("DOMContentLoaded", () => {
    // Render awal
    render();

    // Event input pencarian
    const searchInput = document.querySelector("#search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            state.search = e.target.value;
            render();
        });
    }

    // Event select kategori
    const categorySelect = document.querySelector("#category-select");
    if (categorySelect) {
        categorySelect.addEventListener("change", (e) => {
            state.category = e.target.value;
            render();
        });
    }

    // Event select sorting
    const sortSelect = document.querySelector("#sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            state.sortBy = e.target.value;
            render();
        });
    }
});