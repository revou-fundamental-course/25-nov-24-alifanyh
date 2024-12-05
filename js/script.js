// Ini File Javascript

function validateForm() {
    let inputBeratBadan = document.getElementById('berat-badan-input').value;
    let inputUsia = document.getElementById('usia-input').value;
    let inputTinggiBadan = document.getElementById('tinggi-badan-input').value;

    console.log ('BB:' + inputBeratBadan);
    console.log ('Usia:' + inputUsia);
    console.log ('Tinggi:' + inputTinggiBadan);
    if (inputBeratBadan != '' && inputUsia != '' && inputTinggiBadan != '') {
        let calculate = parseInt(inputBeratBadan) + parseInt(inputTinggiBadan);
        updateResult(calculate);
    } else {
        alert('Inputan yang Anda Masukkan Kosong! Silakan Cek Kembali');
    }
}

function updateResult(value) {
    document.getElementById('result-calculation').innerHTML = value;
}