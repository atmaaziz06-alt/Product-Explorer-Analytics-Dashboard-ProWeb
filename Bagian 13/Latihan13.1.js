// ========================================
// BAGIAN 13.1
// STACK
// ========================================


// Membuat class Stack

class Stack {

    constructor() {
        this.items = [];
    }


    // Menambahkan item
    push(item) {
        this.items.push(item);
    }


    // Menghapus item terakhir
    pop() {
        return this.items.pop();
    }


    // Melihat item paling atas
    peek() {
        return this.items[
            this.items.length - 1
        ];
    }


    // Mengecek apakah Stack kosong
    isEmpty() {
        return this.items.length === 0;
    }
}


// ========================================
// CONTOH PENGGUNAAN STACK
// ========================================

const searchStack = new Stack();


// Menambahkan search history
searchStack.push("laptop");
searchStack.push("phone");
searchStack.push("tablet");


console.log("===== LATIHAN 13.1 =====");


console.log("Isi Stack:");
console.log(searchStack.items);


// Melihat item paling atas
console.log("\nItem paling atas:");
console.log(searchStack.peek());


// Menghapus item terakhir
console.log("\nItem yang di-pop:");
console.log(searchStack.pop());


// Melihat isi Stack setelah pop
console.log("\nIsi Stack setelah pop:");
console.log(searchStack.items);


// Mengecek apakah kosong
console.log("\nApakah Stack kosong?");
console.log(searchStack.isEmpty());