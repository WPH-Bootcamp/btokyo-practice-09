// Conditional Statement :
// Macam-macam Conditional Statement :

// 1. if Statement : Sebuah statement dengan 1 kondisi parameter
/*
    Struktur if Statemet : 
    if (parameter_kondisi){
        # Code eksekusi
    }
*/
let nama = "Cindy";

if (nama == "Dicky") {
  console.log("Halo Dickyyyyyy.......");
}
// 2. if/else Statement : Sebuah statement dengan 1 kondisi parameter dan 1 kondisi alternatif lain
/*
    Struktur if Statemet : 
    if (parameter_kondisi){
        # Code eksekusi
    }else{
        # Code eksekusi
    }
*/
if (nama == "Dicky") {
  console.log("Halo Dickyyyyyy.......");
} else {
  console.log(`Halooo, ${nama}`);
}
// 3. if/else if/else Statement : Sebuah statement dengan 2 atau lebih kondisi parameter serta 1 kondisi alternatif lain
/*
    Struktur if Statemet : 
    if (parameter_kondisi){
        # Code eksekusi
    }else if(parameter_kondisi){
        # Code eksekusi
    }else{
        # Code eksekusi
    }
*/

if (nama == "Dicky") {
  console.log("Halooo Dickyy......");
} else if (nama == "Cindy") {
  console.log("Halooo Cindyyy......");
} else {
  console.log("Halooo Siapapun namamuuu......");
}

// Mini project conditional statement
let umur = 20;

if (umur >= 17) {
  console.log("Boleh membuat sim");
} else {
  console.log("Anda terlalu muda");
}

// 4. Operator Ternary (?)
/*
    Struktur Operator Ternary :
    
    kondisi ? ekspresi_benar : ekspresi_salah

*/
const age = 17;
const msg = age >= 18 ? "Adult" : "Minor";
console.log(`Jika Umur = ${age} berarti adalah ${msg}`);

// CONTOH PROJECT SYSTEM LOGIN
let email = "dicky@gmail.com";
let password = "1234";

if (email == "dicky@gmail.com" && password == "123") {
  console.log("Selamat datang, di dashboard");
} else {
  console.log("Salah memasukkan email/password");
}

let openTab = true;
if (openTab == true) {
  console.log("Tab Terbuka");
} else {
  console.log("Tab Tertutup");
}
