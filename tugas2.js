// soal 2
// menggunakan manual for loop dan if else
// karena di output ada nama 'Angela' yg diambil dari nilai 'an', 
//maka perlu adanya perubahan huruf dari besar ke kecil
function upToLowerCase(str){
  const mapingStr = {
    A : 'a',
    B : 'b',
    C : 'c',
    D : 'd',
    E : 'e',
    F : 'f',
    G : 'g',
    H : 'h',
    I : 'i',
    J : 'j',
    K : 'k',
    L : 'l',
    M : 'm',
    N : 'n',
    O : 'o',
    P : 'p',
    Q : 'q',
    R : 'r',
    S : 's',
    T : 't',
    U : 'u',
    V : 'v',
    W : 'w',
    X : 'x',
    Y : 'y',
    Z : 'z'
  }

  let hasil = ''
  for(let x = 0; x < str.length; x++){
  // jika ketemu huruf kapital langsung berubah jadi kecil
    if(str[x] >= 'A' && str[x] <='Z'){
      hasil += mapingStr[str[x]]
    } else{
      hasil += str[x]
    }
  }
  return hasil
}



const searchName = (valueSearch, jumlahBatas, callback) => {
  const search = upToLowerCase(valueSearch)
  const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']
  let result = []
  for(let data = 0 ; data < name.length; data++){
    const lowerCase = upToLowerCase(name[data])
    for(let i = 0; i < lowerCase.length; i++){
      let hasil = ''
      for(let j = i; j < search.length + i; j++){
        if(lowerCase[j]){
          hasil += lowerCase[j]
        }
      }
      if(search === hasil){
        result = [...result, name[data]]
      }
    }
  }
  let batas = []
  for(let x = 0; x < jumlahBatas; x++){
    if(result[x]){
      batas = [...batas, result[x]]
    }
  }
  callback(batas)
}
  
function hasilSearch(name){
  console.log(name);
}

searchName('an', 3, hasilSearch);

// // Menggunakan method fungsi
// function searchName (valueSearch, jumlahBatas, callback) {
//     const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']
//     function searchEnggine(value, index){
//       const data = value.toLowerCase()
//       return data.includes(valueSearch)
//     }
//     callback(name.filter(searchEnggine).slice(0, jumlahBatas));
//   }
  
//   function hasilSearch(name){
//     console.log(name);
//   }
  
  // searchName('an', 3, hasilSearch);