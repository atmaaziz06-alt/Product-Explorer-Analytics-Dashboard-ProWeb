// BAGIAN 7.1
// Binary Search

function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        const mid =
            Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


// Contoh penggunaan
const sortedNumbers = [
    10,
    20,
    30,
    40,
    50,
    60,
    70
];

console.log("===== LATIHAN 7.1 =====");

console.log(
    "Index angka 50:",
    binarySearch(sortedNumbers, 50)
);

console.log(
    "Index angka 100:",
    binarySearch(sortedNumbers, 100)
);