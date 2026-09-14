import { state } from "./state.js";
import { renderProducts } from "./ui.js";
import { filterAndSortProducts } from "./algorithms.js";

export function render() {
    const processedProducts = filterAndSortProducts(state.products, state);
    renderProducts(processedProducts);
}

document.addEventListener("DOMContentLoaded", () => {
    render();

    const searchInput = document.querySelector("#search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            state.search = e.target.value;
            render();
        });
    }

    const categorySelect = document.querySelector("#category-select");
    if (categorySelect) {
        categorySelect.addEventListener("change", (e) => {
            state.category = e.target.value;
            render();
        });
    }

    const sortSelect = document.querySelector("#sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            state.sortBy = e.target.value;
            render();
        });
    }
});