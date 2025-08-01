// Operator : Operator adalah simbol atau kata kunci yang digunakan untuk melakukan operasi pada satu atau lebih operand (nilai atau variabel).

// Operand => nilai atau variabel
let angka1 = 10;

// Operator berdasarkan jumlah operand nya:
// 1. Unary => operasi yang hanya pada 1 operand (nilai atau variabel)
let x = 10;
x = -x;
console.log(x);

// 2. Binary => operasi yang membutuhkan 2 operand (nilai atau variabel)
let a = 4;
let b = 2;
let c = a + b;
console.log(c);

// Operator Aritmatika :
// Macam-macam Operator Aritmatika :
let y = 10;
let z = 5;

// 1. Penjumlahan (+)
console.log("Penjumlahan y + z: ", y + z);
// 2. Pengurangan (-)
console.log("Pengurangan y - z: ", y - z);
// 3. Perkalian (*)
console.log("Perkalian y * z: ", y * z);
// 4. Pembagian (/)
console.log("Pembagian y / z: ", y / z);
// 5. Perpangkatan (**)
console.log("Perpangkatan y ** z: ", y ** z);
// 6. Sisa Bagi / Modulus (%)
console.log("Sisa Bagi y % z: ", y % z);

// Operator Assignment (Penugasan)
// Macam-macam Operator Assignment (Penugasan) :

// 1. Penugasan (=)
let d = 10;
console.log(d);
// 2. Penugasan dan Penjumlahan (+=)
d += 2;
console.log(d);
// 3. Penugasan dan Pengurangan (-=)
d -= 4;
console.log(d);
// 4. Penugasan dan Perkalian (*=)
d *= 5;
console.log(d);
// 5. Penugasan dan Pembagian (/=)
d /= 2;
console.log(d);
// 6. Penugasan dan Perpangkatan (**=)
d **= 2;
console.log(d);
// 7. Penugasan dan Sisa Bagi (%=)
d %= 100;
console.log(d);

// Operator Increment (++) dan Decrement (--)
// 1. Postfix : counter++ atau counter--
// 2. Prefix : ++counter atau --counter

let counter = 10;
console.log("Increment", counter++);
console.log("Increment", counter);

console.log("Increment", ++counter);
console.log("Increment", counter);

// Konversi Tipe Dengan Operator
let teks = "123";
let teksNumber = +teks;
console.log(teksNumber);

// NaN => Not a Number
