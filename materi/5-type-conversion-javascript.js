// Type Conversion
// 1. Konversi Eksplisit :
/*
    -. Number()
    -. String()
    -. Boolean()
*/
let str = "123";
let angkaStr = Number(str);
console.log(typeof str);
console.log(typeof angkaStr);

let number = 123;
let stringNumber = String(number);
console.log(typeof number);
console.log(typeof stringNumber);

let angka = 0;
let angkaBool = Boolean(angka);
console.log(angka);
console.log(angkaBool);

// 2. Konversi Implisit
const result1 = "1" + 1;
console.log(result1);

const result2 = "5" * 2;
console.log(result2);

const result3 = true + 1;
console.log(result3);

console.log(5 == "5"); // Hanya cek value saja
console.log(5 === "5"); // Cek value beserta tipe data (lebih strict)
