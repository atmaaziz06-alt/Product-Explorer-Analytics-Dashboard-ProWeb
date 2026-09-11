// BAGIAN 5.1
// Menghitung rata-rata harga produk kategori laptop

const laptopPrices = products
    .filter(product => product.category === "laptop")
    .map(product => product.price);

const totalLaptopPrice = laptopPrices.reduce(
    (sum, price) => sum + price,
    0
);

const averageLaptopPrice =
    totalLaptopPrice / laptopPrices.length;

console.log("Harga laptop:");
console.log(laptopPrices);

console.log("Rata-rata harga laptop:");
console.log(averageLaptopPrice);