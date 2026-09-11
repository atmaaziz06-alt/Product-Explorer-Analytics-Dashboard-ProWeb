// BAGIAN 8.1
// Bubble Sort

function bubbleSort(numbers) {

    // Membuat salinan array
    // agar array asli tidak berubah
    const arr = [...numbers];

    for (
        let i = 0;
        i < arr.length - 1;
        i++
    ) {

        for (
            let j = 0;
            j < arr.length - 1 - i;
            j++
        ) {

            if (arr[j] > arr[j + 1]) {

                [
                    arr[j],
                    arr[j + 1]
                ] = [
                    arr[j + 1],
                    arr[j]
                ];
            }
        }
    }

    return arr;
}


// Contoh penggunaan
const unsortedNumbers = [
    5,
    3,
    8,
    1,
    2
];

const sortedNumbersBubble =
    bubbleSort(unsortedNumbers);

console.log("===== LATIHAN 8.1 =====");

console.log(
    "Sebelum sorting:",
    unsortedNumbers
);

console.log(
    "Setelah Bubble Sort:",
    sortedNumbersBubble
);