//LATIHAN 16.1: Menghitung Langkah Linear Search vs Binary Search

//Membuat array terurut berisi 10.000 elemen
function generateSortedArray(size) {
    const arr = [];
    for (let i = 1; i <= size; i++) {
        arr.push(i);
    }
    return arr;
}

const largeArray = generateSortedArray(10000);

// Kita pilih target yang berada di posisi agak akhir agar terlihat bedanya pada linear search
const target = 8765; 

//1. Implementasi Linear Search (O(n)) dengan Penghitung Langkah
function linearSearchWithSteps(arr, target) {
    let steps = 0;
    for (let i = 0; i < arr.length; i++) {
        steps++;
        if (arr[i] === target) {
            return { foundIndex: i, steps: steps };
        }
    }
    return { foundIndex: -1, steps: steps };
}

//2. Implementasi Binary Search (O(log n)) dengan Penghitung Langkah
function binarySearchWithSteps(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let steps = 0;

    while (left <= right) {
        steps++;
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return { foundIndex: mid, steps: steps };
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return { foundIndex: -1, steps: steps };
}

// Eksekusi dan Tampilkan Hasil
const linearResult = linearSearchWithSteps(largeArray, target);
const binaryResult = binarySearchWithSteps(largeArray, target);

console.log("=== HASIL PERBANDINGAN PENCARIAN (Target: " + target + ") ===");
console.log(`Linear Search -> Index ditemukan: ${linearResult.foundIndex} | Jumlah Langkah: ${linearResult.steps} kali`);
console.log(`Binary Search -> Index ditemukan: ${binaryResult.foundIndex} | Jumlah Langkah: ${binaryResult.steps} kali`);
