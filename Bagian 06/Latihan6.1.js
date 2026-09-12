// BAGIAN 6.1
// Linear Search

function linearSearch(array, target) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}


// Contoh penggunaan
const numbers = [10, 20, 30, 40, 50];

console.log("===== LATIHAN 6.1 =====");

console.log(
    "Index angka 30:",
    linearSearch(numbers, 30)
);

console.log(
    "Index angka 100:",
    linearSearch(numbers, 100)
);