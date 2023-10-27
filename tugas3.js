
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {

    if (typeof nilaiAwal === 'number' && typeof nilaiAkhir === 'number' && typeof dataArray === 'object') {
        if (nilaiAwal < nilaiAkhir) {
            if (dataArray.length > 5) {
                const rentangNilai = dataArray.filter(function (nilai) {
                    return nilai >= nilaiAwal && nilai <= nilaiAkhir;
                })
                if (rentangNilai.length > 0) {

                    function compareNumbers(a, b) {
                        return a - b;
                    }

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

const hasil = seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// // Output: [8, 14, 17]
// const hasil = seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
// // Output: “Nilai akhir harus lebih besar dari nilai awal”
// const hasil = seleksiNilai(4, 17 , [2, 25, 4])
// // Output: “Jumlah angka dalam dataArray harus lebih dari 5”
// const hasil = seseleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
// // Output: “Nilai tidak ditemukan”


console.log(hasil);



