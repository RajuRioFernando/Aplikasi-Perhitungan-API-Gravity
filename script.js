// Fungsi untuk menghitung API Gravity berdasarkan Specific Gravity
function calculateAPIGravity(sg) {
    if (sg <= 0) {
        return 'Nilai berat jenis tidak valid';
    }
    return (141.5 / sg) - 131.5;
}

// Fungsi untuk mengklasifikasikan minyak berdasarkan nilai API Gravity
function classifyOil(api) {
    if (api > 30) {
        return { classification: 'Minyak Ringan', class: 'light' };
    } else if (api >= 20) {
        return { classification: 'Minyak Sedang', class: 'medium' };
    } else {
        return { classification: 'Minyak Berat', class: 'heavy' };
    }
}

// Event listener untuk form submit
document.getElementById('api-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghindari refresh halaman
    
    // Mengambil nilai input dari form
    const sg = parseFloat(document.getElementById('sg').value);
    
    // Melakukan perhitungan API Gravity
    const apiGravity = calculateAPIGravity(sg);

    // Mengklasifikasikan minyak berdasarkan API Gravity
    const classification = classifyOil(apiGravity);

    // Menampilkan hasil perhitungan dan klasifikasi
    const resultElement = document.getElementById('api-value');
    const classificationElement = document.getElementById('classification');

    resultElement.textContent = `API Gravity: ${isNaN(apiGravity) ? 'Masukkan nilai yang valid.' : apiGravity.toFixed(2)}`;
    classificationElement.textContent = `Klasifikasi Minyak: ${classification.classification}`;
    
    // Menambahkan kelas untuk klasifikasi
    classificationElement.classList.remove('light', 'medium', 'heavy');
    classificationElement.classList.add(classification.class);
});
