// Variabel = wadah yang menyimpan sebuah nilai, value, data

/*
    Struktur Variabel :

    deklarasi_variabel nama_variabel = nilai_variabel
    
*/

// Deklarasi Variabel :
/*
    Not Recommeded :
    1. var : Global Variabel (tidak ada scope) namun fleksibel diubah (bisa redeclare) serta hoisted (hoisting)
    
    Recommeded :
    2. let : Block Scope dan fleksibel diubah (mutable namun tidak dapat redeclare) 
    3. const : Block Scope namun tidak fleksibel nilainya konstan (immutable)

    Note :
    1. declare -> redeclare 
    2. defined -> redefined
*/

// Contoh penggunaan variabel

// - VAR
var nama = "Dicky";
var nama = "Ucup";
console.log(nama);
{
  var uangFatar = 100;
}
console.log(uangFatar);

// - LET
let umur = 29;
umur = 40;
console.log("umur : ", umur);
{
  let uangFatar2 = 200;
  console.log(uangFatar2);
  console.log(umur);
}
// console.log(uangFatar2);
let unknown;
console.log(unknown);

// - CONST
const phi = 3.1423445;

{
  const uangFatar3 = 300;
  console.log(uangFatar3);
}

// Hoisting : fenomena Javascript mengangkat deklarasi variabel ke atas, tapi nilainya undefined

// Sebelum deklarasi

console.log(alamat);

// Setelah deklarasi
var alamat = "Jl Ketapang";
console.log(alamat);
