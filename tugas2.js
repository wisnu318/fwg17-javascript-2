function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if(typeof nilaiAwal === 'number' && typeof nilaiAkhir === 'number' && typeof dataArray === 'object'){
        if(nilaiAwal < nilaiAkhir){
            if(dataArray.length > 5){
                     
            }else{
                return 'Jumlah angka dalam dataArray harus lebih dari 5';
            }
        } else{
            return 'Nilai akhir harus lebih besar dari nilai awal';
        }
    }else{
        return 'parameter harus number dan array';
    }
}


SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
// // Output: [8, 14, 17]
// SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
// // Output: “Nilai akhir harus lebih besar dari nilai awal”
// SeleksiNilai(4, 17 , [2, 25, 4])
// // Output: “Jumlah angka dalam dataArray harus lebih dari 5”
// SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
// // Output: “Nilai tidak ditemukan”
