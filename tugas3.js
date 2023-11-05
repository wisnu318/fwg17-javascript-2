
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {

    if (typeof nilaiAwal === 'number' && typeof nilaiAkhir === 'number' && typeof dataArray === 'object') {
        if (nilaiAwal < nilaiAkhir) {
            if (dataArray.length > 5) {
                const rentangNilai = dataArray.filter(function (nilai) {
                    return nilai >= nilaiAwal && nilai <= nilaiAkhir;
                })
                if (rentangNilai.length > 0) {
                    //a urutan nilai index ke n, b urutan nilai n+1,
                    //di urutkan menggunakan nilai + didepan dan - dibelakang
                    //disini kan memerlukan nilai - karena urutan nya dikurangi atau dari kecil ke besar
                    // pengerjaannya (a-b) NaN dan undifined bisa merupakan 0
                    function compareNumbers(a, b) {
                        //a = first element = index ke 1
                        //b = second element = index ke 0
                        //jika di :
                        //console.log(a)
                        //console.log(b)
                        // menghasilkan :
                        // 17 (a)
                        // 14 (b)
                        // 8 (a)
                        // 17 (b)
                        return a - b;
                    }
                    //URUTAN BESAR KE KECIL
                    // function compareNumbers(a, b) {
                    //     return b - a;
                    // }
                    const result = rentangNilai.sort(compareNumbers);
                    return result;
                } else {
                    return 'Nilai tidak ditemukan'
                }
            } else {
                return 'Jumlah angka dalam dataArray harus lebih dari 5'
            }
        } else {
            return 'Nilai akhir harus lebih besar dari nilai awal'
        }
    } else {
        return 'parameter harus number dan array';
    }
}

const hasil1 = seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// // Output: [8, 14, 17]
const hasil2 = seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
// // Output: “Nilai akhir harus lebih besar dari nilai awal”
const hasil3 = seleksiNilai(4, 17 , [2, 25, 4])
// // Output: “Jumlah angka dalam dataArray harus lebih dari 5”
const hasil4 = seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
// // Output: “Nilai tidak ditemukan”


console.log(hasil1);
console.log(hasil2);
console.log(hasil3);
console.log(hasil4);

