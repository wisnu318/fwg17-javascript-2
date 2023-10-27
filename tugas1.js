// //soal 1
// 1. toUpperCase() : Mengonversi semua karakter dalam string menjadi huruf kapital.
var kata = "Hello World";
var kataUpper = kata.toUpperCase();
console.log(kataUpper); // Output: "HELLO WORLD"

// 2. toLowerCase() : Mengonversi semua karakter dalam string menjadi huruf kecil.
var kata = "Hello World";
var kataLower = kata.toLowerCase();
console.log(kataLower); // Output: "hello world"

// 3. concat() : Menggabungkan dua atau lebih string dan mengembalikan string baru.
var str1 = "Hello";
var str2 = "World";
var hasil = str1.concat(" ", str2);
console.log(hasil); // Output: "Hello World"

// 4. indexOf() : Mengembalikan indeks pertama dari kemunculan suatu nilai dalam string.
var kata = "Hello World";
var indeks = kata.indexOf("World");
console.log(indeks); // Output: 6

// 5. slice() : Memotong sebagian dari string dan mengembalikan potongan tersebut sebagai string baru.
var kata = "Hello World";
var potongan = kata.slice(0, 5);
console.log(potongan); // Output: "Hello"


// 6. Array.pop() : Menghapus elemen terakhir dari array dan mengembalikan elemen tersebut.
var arr = [1, 2, 3];
var lastElement = arr.pop();
console.log(lastElement); // Output: 3

// 7. Array.slice() : Memotong array dan mengembalikan potongan array sebagai array baru.
var arr = [1, 2, 3, 4, 5];
var slicedArray = arr.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]

// 8. Array.splice() : Menyisipkan atau menghapus elemen dalam array.
var arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 6, 7);
console.log(arr); // Output: [1, 2, 6, 7, 4, 5]

// 9. Array.indexOf() : Mengembalikan indeks pertama dari elemen yang ditemukan dalam array.
var arr = [1, 2, 3, 4, 5];
var index = arr.indexOf(3);
console.log(index); // Output: 2

// 10. Array.includes() : Memeriksa apakah suatu nilai ada dalam array.
var arr = [1, 2, 3, 4, 5];
var isPresent = arr.includes(3);
console.log(isPresent); // Output: true


// soal 2
function searchName (valueSearch, jumlahBatas, callback) {
    const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']
    function searchEnggine(value, index){
      const data = value.toLowerCase()
      return data.includes(valueSearch)
    }
    callback(name.filter(searchEnggine).slice(0, jumlahBatas));
  }
  
  function hasilSearch(name){
    console.log(name);
  }
  
  searchName('an', 3, hasilSearch);