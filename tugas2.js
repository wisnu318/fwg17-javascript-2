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