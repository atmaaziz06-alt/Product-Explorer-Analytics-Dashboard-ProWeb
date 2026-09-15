//BAGIAN 22: Promise Dasar

// 1. Membuat Promise Simulasi Pengambilan Data Produk
const fetchProductData = new Promise((resolve, reject) => {
    console.log("Sedang mengambil data produk...");
    
    // Simulasi proses async menggunakan setTimeout (misal delay 2 detik)
    setTimeout(() => {
        const success = true; // Coba ubah ke false untuk mensimulasikan error

        if (success) {
            const products = [
                { id: 1, title: "Laptop Pro", price: 1200 },
                { id: 2, title: "Smartphone X", price: 800 }
            ];
            resolve(products); // Jika berhasil, kirim data via resolve
        } else {
            reject("Gagal mengambil data dari server!"); // Jika gagal, kirim pesan error via reject
        }
    }, 2000);
});

// 2. Menjalankan Promise menggunakan .then(), .catch(), dan .finally()
fetchProductData
    .then((result) => {
        console.log("Berhasil mendapatkan data:", result);
    })
    .catch((error) => {
        console.error("Terjadi kesalahan:", error);
    })
    .finally(() => {
        console.log("Proses Promise selesai (baik berhasil maupun gagal).");
    });