// Implementasi Queue menggunakan Array
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Contoh Penggunaan Simulasi Antrean Request
const requestQueue = new Queue();
requestQueue.enqueue("Request Data Produk 1");
requestQueue.enqueue("Request Data Produk 2");

console.log(requestQueue.peek()); // Output: "Request Data Produk 1"
console.log(requestQueue.dequeue()); // Output: "Request Data Produk 1" (keluar pertama)