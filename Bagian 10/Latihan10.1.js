// ========================================
// BAGIAN 10.1
// FREQUENCY COUNTING
// ========================================


// Function untuk menghitung
// frekuensi setiap item

function countFrequency(array) {

    return array.reduce((counts, item) => {

        counts[item] = (counts[item] || 0) + 1;

        return counts;

    }, {});
}


// Contoh data
const words = [
    "laptop",
    "phone",
    "laptop",
    "tablet",
    "phone",
    "laptop"
];


// Menjalankan function
const frequency = countFrequency(words);


// Menampilkan hasil
console.log("===== LATIHAN 10.1 =====");

console.log("Data:");
console.log(words);

console.log("Frequency:");
console.log(frequency);