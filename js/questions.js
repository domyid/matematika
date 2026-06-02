// Bank soal Kelas 2 & 3 SD.
//
// ATURAN: setiap NOMOR soal terikat pada satu INDIKATOR (sesuai kisi-kisi di
// README.md). Tiap indikator punya beberapa "variants" (variasi soal). Saat
// ujian dimulai, satu variasi dipilih acak per indikator — jadi nomor &
// indikatornya tetap, hanya isi soalnya yang berganti tiap kali main.
//
// Struktur: KISI[grade] = [ { materi, variants:[ {q,visual,options,answer,explain}, ... ] }, ... ]

export const POINTS_PER_CORRECT = 10; // 20 soal × 10 = maksimal 200 poin
export const EXAM_DURATION_SEC = 20 * 60; // durasi ujian: 20 menit

export const KISI = {
  2: [
    { materi: 'Penyajian Data', variants: [
      { q: 'Cara menyajikan data dengan menggunakan gambar-gambar disebut diagram ...', visual: '', options: ['Diagram gambar', 'Diagram garis', 'Diagram lingkaran', 'Diagram batang'], answer: 0, explain: 'Data yang ditampilkan memakai gambar disebut diagram gambar (piktogram).' },
      { q: 'Data dicatat menggunakan garis-garis kecil seperti coretan. Cara penyajian data itu disebut ...', visual: '', options: ['Tabel', 'Turus', 'Gambar', 'Cerita'], answer: 1, explain: 'Coretan garis-garis kecil untuk mencatat data disebut turus.' },
      { q: 'Berikut ini termasuk cara menyajikan data, KECUALI ...', visual: '', options: ['Diagram gambar', 'Turus', 'Tabel', 'Bernyanyi'], answer: 3, explain: 'Bernyanyi bukan cara menyajikan data. Data disajikan dengan gambar, turus, atau tabel.' },
      { q: 'Diagram yang menggunakan batang (persegi panjang) untuk menyajikan data disebut diagram ...', visual: '', options: ['Batang', 'Gambar', 'Garis', 'Lingkaran'], answer: 0, explain: 'Diagram yang memakai batang disebut diagram batang.' },
      { q: 'Daftar yang berisi baris dan kolom untuk menyajikan data disebut ...', visual: '', options: ['Turus', 'Tabel', 'Gambar', 'Grafik'], answer: 1, explain: 'Daftar berbaris dan berkolom disebut tabel.' },
      { q: 'Gambar yang menunjukkan naik-turunnya data dengan garis disebut diagram ...', visual: '', options: ['Garis', 'Gambar', 'Batang', 'Lingkaran'], answer: 0, explain: 'Diagram yang memakai garis disebut diagram garis.' },
      { q: 'Untuk menyajikan banyak buah dengan gambar buah, kita memakai diagram ...', visual: '', options: ['Batang', 'Gambar', 'Garis', 'Tabel'], answer: 1, explain: 'Menyajikan data dengan gambar disebut diagram gambar.' },
      { q: 'Penyajian data yang memakai potongan lingkaran (seperti potongan kue) disebut diagram ...', visual: '', options: ['Batang', 'Garis', 'Lingkaran', 'Gambar'], answer: 2, explain: 'Diagram berbentuk potongan lingkaran disebut diagram lingkaran.' },
      { q: 'Manakah yang BUKAN cara menyajikan data?', visual: '', options: ['Tabel', 'Diagram batang', 'Turus', 'Mewarnai'], answer: 3, explain: 'Mewarnai bukan cara menyajikan data.' },
      { q: 'Sebelum dibuat diagram, data biasanya dikumpulkan lalu dicatat dalam bentuk ...', visual: '', options: ['Lagu', 'Tabel atau daftar', 'Gambar lucu', 'Cerita panjang'], answer: 1, explain: 'Data dicatat dulu dalam tabel/daftar sebelum dibuat diagram.' }
    ]},
    { materi: 'Diagram Turus', variants: [
      { q: 'Satu ikat turus terdiri dari 4 garis tegak dan 1 garis miring. Satu ikat turus bernilai ...', visual: '| | | | ╱', options: ['3', '4', '5', '6'], answer: 2, explain: 'Satu ikat turus = 4 garis tegak + 1 garis miring = 5.' },
      { q: 'Bilangan 5 jika ditulis dalam turus berbentuk ...', visual: '', options: ['5 garis lurus terpisah', '4 garis tegak dan 1 garis miring', '1 lingkaran', '5 titik'], answer: 1, explain: 'Turus 5 ditulis 4 garis tegak yang dicoret 1 garis miring.' },
      { q: 'Bilangan 3 ditulis dalam bentuk turus menjadi ...', visual: '', options: ['|||', '||', '||||', '|||||'], answer: 0, explain: 'Turus untuk 3 adalah tiga garis tegak: |||.' },
      { q: 'Bilangan 4 ditulis dalam bentuk turus menjadi ...', visual: '', options: ['||||', '|||', '|||||', '||'], answer: 0, explain: 'Turus untuk 4 adalah empat garis tegak: ||||.' },
      { q: 'Dua ikat turus (masing-masing bernilai 5) seluruhnya bernilai ...', visual: '||||| |||||', options: ['5', '10', '15', '2'], answer: 1, explain: 'Dua ikat turus = 5 + 5 = 10.' },
      { q: 'Bilangan 2 ditulis dalam bentuk turus menjadi ...', visual: '', options: ['||', '|', '|||', '||||'], answer: 0, explain: 'Turus untuk 2 adalah dua garis tegak: ||.' },
      { q: 'Bilangan 7 ditulis dalam bentuk turus menjadi ...', visual: '', options: ['||||| ||', '||||| |||', '|||||', '|||||||'], answer: 0, explain: 'Turus 7 = satu ikat (5) ditambah 2 garis = ||||| ||.' },
      { q: 'Bilangan 6 ditulis dalam bentuk turus menjadi ...', visual: '', options: ['||||| |', '||||| ||', '||||', '||||||'], answer: 0, explain: 'Turus 6 = satu ikat (5) ditambah 1 garis = ||||| |.' },
      { q: 'Tiga ikat turus (masing-masing bernilai 5) seluruhnya bernilai ...', visual: '||||| ||||| |||||', options: ['10', '15', '20', '3'], answer: 1, explain: 'Tiga ikat turus = 5 + 5 + 5 = 15.' },
      { q: 'Garis miring pada satu ikat turus menandakan hitungan sudah mencapai ...', visual: '||||╱', options: ['3', '4', '5', '10'], answer: 2, explain: 'Garis miring dibuat saat hitungan mencapai 5 (satu ikat).' }
    ]},
    { materi: 'Membaca Diagram Turus', variants: [
      { q: 'Banyak buku terjual ditulis turus berikut. Berapa banyak buku?', visual: '||||| |||  →  (5 + 3)', options: ['5', '7', '8', '9'], answer: 2, explain: 'Hitung garisnya: 5 + 3 = 8 buku.' },
      { q: 'Banyak pensil ditulis turus berikut. Berapa banyak pensil?', visual: '||||| |||||  →  (5 + 5)', options: ['5', '9', '10', '11'], answer: 2, explain: '5 + 5 = 10 pensil.' },
      { q: 'Banyak apel ditulis turus berikut. Berapa banyak apel?', visual: '||||| |  →  (5 + 1)', options: ['5', '6', '7', '11'], answer: 1, explain: '5 + 1 = 6 apel.' },
      { q: 'Banyak permen ditulis turus berikut. Berapa banyak permen?', visual: '||||| ||||| |||  →  (5 + 5 + 3)', options: ['10', '11', '12', '13'], answer: 3, explain: '5 + 5 + 3 = 13 permen.' },
      { q: 'Banyak bunga ditulis turus berikut. Berapa banyak bunga?', visual: '||||  →  (4)', options: ['3', '4', '5', '6'], answer: 1, explain: 'Ada 4 garis, jadi 4 bunga.' },
      { q: 'Banyak topi ditulis turus berikut. Berapa banyak topi?', visual: '||||| |||||  →  (5 + 5)', options: ['9', '10', '11', '12'], answer: 1, explain: '5 + 5 = 10 topi.' },
      { q: 'Banyak bola ditulis turus berikut. Berapa banyak bola?', visual: '||||| ||||| |  →  (5 + 5 + 1)', options: ['10', '11', '12', '13'], answer: 1, explain: '5 + 5 + 1 = 11 bola.' },
      { q: 'Banyak donat ditulis turus berikut. Berapa banyak donat?', visual: '||  →  (2)', options: ['1', '2', '3', '4'], answer: 1, explain: 'Ada 2 garis, jadi 2 donat.' },
      { q: 'Banyak layang-layang ditulis turus berikut. Berapa banyaknya?', visual: '||||| ||||| |||||  →  (5 + 5 + 5)', options: ['10', '15', '20', '13'], answer: 1, explain: '5 + 5 + 5 = 15 layang-layang.' },
      { q: 'Banyak boneka ditulis turus berikut. Berapa banyak boneka?', visual: '||||| ||||  →  (5 + 4)', options: ['8', '9', '10', '5'], answer: 1, explain: '5 + 4 = 9 boneka.' }
    ]},
    { materi: 'Diagram Gambar', variants: [
      { q: 'Setiap 🍎 mewakili 1 apel. Berapa banyak apel di bawah ini?', visual: '🍎 🍎 🍎 🍎 🍎 🍎', options: ['4', '5', '6', '7'], answer: 2, explain: 'Jumlahkan gambar apelnya: ada 6 buah.' },
      { q: 'Setiap ⭐ mewakili 1 bintang. Berapa banyak bintang di bawah ini?', visual: '⭐ ⭐ ⭐ ⭐', options: ['3', '4', '5', '6'], answer: 1, explain: 'Ada 4 gambar bintang, jadi 4 bintang.' },
      { q: 'Setiap 🐟 mewakili 1 ikan. Berapa banyak ikan di bawah ini?', visual: '🐟 🐟 🐟 🐟 🐟 🐟 🐟', options: ['5', '6', '7', '8'], answer: 2, explain: 'Ada 7 gambar ikan, jadi 7 ikan.' },
      { q: 'Setiap 🍌 mewakili 1 pisang. Berapa banyak pisang di bawah ini?', visual: '🍌 🍌 🍌 🍌 🍌 🍌 🍌 🍌', options: ['6', '7', '8', '9'], answer: 2, explain: 'Ada 8 gambar pisang, jadi 8 pisang.' },
      { q: 'Setiap 🎈 mewakili 1 balon. Berapa banyak balon di bawah ini?', visual: '🎈 🎈 🎈 🎈 🎈', options: ['4', '5', '6', '7'], answer: 1, explain: 'Ada 5 gambar balon, jadi 5 balon.' },
      { q: 'Setiap 🍪 mewakili 1 kue. Berapa banyak kue di bawah ini?', visual: '🍪 🍪 🍪', options: ['2', '3', '4', '5'], answer: 1, explain: 'Ada 3 gambar kue, jadi 3 kue.' },
      { q: 'Setiap 🚗 mewakili 1 mobil. Berapa banyak mobil di bawah ini?', visual: '🚗 🚗 🚗 🚗 🚗 🚗 🚗', options: ['6', '7', '8', '9'], answer: 1, explain: 'Ada 7 gambar mobil, jadi 7 mobil.' },
      { q: 'Setiap 🐝 mewakili 1 lebah. Berapa banyak lebah di bawah ini?', visual: '🐝 🐝 🐝 🐝 🐝 🐝 🐝 🐝 🐝', options: ['8', '9', '10', '7'], answer: 1, explain: 'Ada 9 gambar lebah, jadi 9 lebah.' },
      { q: 'Setiap ✏️ mewakili 1 pensil. Berapa banyak pensil di bawah ini?', visual: '✏️ ✏️ ✏️ ✏️ ✏️', options: ['3', '4', '5', '6'], answer: 2, explain: 'Ada 5 gambar pensil, jadi 5 pensil.' },
      { q: 'Setiap 🍓 mewakili 1 stroberi. Berapa banyak stroberi di bawah ini?', visual: '🍓 🍓 🍓 🍓 🍓 🍓 🍓 🍓 🍓 🍓', options: ['8', '9', '10', '11'], answer: 2, explain: 'Ada 10 gambar stroberi, jadi 10 stroberi.' }
    ]},
    { materi: 'Membandingkan Data', variants: [
      { q: 'Apel = 6, Jeruk = 9, Mangga = 4. Buah yang paling banyak adalah ...', visual: '🍎 = 6   🍊 = 9   🥭 = 4', options: ['Apel', 'Jeruk', 'Mangga', 'Sama banyak'], answer: 1, explain: 'Jeruk = 9 adalah angka terbesar, jadi paling banyak.' },
      { q: 'Kucing = 3, Kelinci = 7, Hamster = 5. Hewan yang paling sedikit adalah ...', visual: '🐱 = 3   🐰 = 7   🐹 = 5', options: ['Kucing', 'Kelinci', 'Hamster', 'Sama banyak'], answer: 0, explain: 'Kucing = 3 adalah angka terkecil, jadi paling sedikit.' },
      { q: 'Balon merah = 8, balon biru = 5. Selisih banyak balon merah dan biru adalah ...', visual: '🔴 = 8   🔵 = 5', options: ['2', '3', '4', '13'], answer: 1, explain: 'Selisih = 8 − 5 = 3 balon.' },
      { q: 'Pensil = 4, Pulpen = 4, Spidol = 6. Alat tulis yang paling banyak adalah ...', visual: '✏️ = 4   🖊️ = 4   🖍️ = 6', options: ['Pensil', 'Pulpen', 'Spidol', 'Sama banyak'], answer: 2, explain: 'Spidol = 6 adalah angka terbesar, jadi paling banyak.' },
      { q: 'Bebek = 9, Ayam = 6. Selisih banyak bebek dan ayam adalah ...', visual: '🦆 = 9   🐔 = 6', options: ['2', '3', '4', '15'], answer: 1, explain: 'Selisih = 9 − 6 = 3 ekor.' },
      { q: 'Bunga merah = 10, bunga kuning = 7. Selisih banyaknya adalah ...', visual: '🌹 = 10   🌼 = 7', options: ['2', '3', '4', '17'], answer: 1, explain: 'Selisih = 10 − 7 = 3 bunga.' },
      { q: 'Permen A = 6, B = 9, C = 9. Permen yang paling sedikit adalah ...', visual: '🍬 A=6  B=9  C=9', options: ['A', 'B', 'C', 'Sama banyak'], answer: 0, explain: 'A = 6 adalah angka terkecil, jadi paling sedikit.' },
      { q: 'Buku Andi = 12, buku Budi = 8. Yang memiliki buku lebih banyak adalah ...', visual: '📚 Andi=12  Budi=8', options: ['Andi', 'Budi', 'Sama banyak', 'Tidak tahu'], answer: 0, explain: 'Andi = 12 lebih banyak dari Budi = 8.' },
      { q: 'Apel = 4, pisang = 10, jeruk = 6. Buah yang paling banyak adalah ...', visual: '🍎=4  🍌=10  🍊=6', options: ['Apel', 'Pisang', 'Jeruk', 'Sama banyak'], answer: 1, explain: 'Pisang = 10 adalah angka terbesar, jadi paling banyak.' },
      { q: 'Kelereng biru = 7, kelereng merah = 7. Perbandingan banyaknya adalah ...', visual: '🔵 = 7   🔴 = 7', options: ['Biru lebih banyak', 'Merah lebih banyak', 'Sama banyak', 'Tidak tahu'], answer: 2, explain: 'Keduanya 7, jadi sama banyak.' }
    ]},
    { materi: 'Nilai Tempat', variants: [
      { q: 'Pada bilangan 235, angka 2 menempati nilai tempat ...', visual: '2 3 5', options: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'], answer: 2, explain: 'Pada 235: 2 = ratusan, 3 = puluhan, 5 = satuan.' },
      { q: 'Pada bilangan 487, angka 8 bernilai ...', visual: '4 8 7', options: ['8', '80', '800', '18'], answer: 1, explain: 'Angka 8 berada di tempat puluhan, jadi bernilai 80.' },
      { q: 'Bilangan 156 terdiri dari ... ratusan, ... puluhan, ... satuan.', visual: '1 5 6', options: ['1, 5, 6', '6, 5, 1', '5, 1, 6', '1, 6, 5'], answer: 0, explain: '156 = 1 ratusan + 5 puluhan + 6 satuan.' },
      { q: 'Pada bilangan 309, angka 3 menempati nilai tempat ...', visual: '3 0 9', options: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'], answer: 2, explain: 'Pada 309: 3 = ratusan, 0 = puluhan, 9 = satuan.' },
      { q: 'Nilai angka 4 pada bilangan 248 adalah ...', visual: '2 4 8', options: ['4', '40', '400', '24'], answer: 1, explain: 'Angka 4 berada di tempat puluhan, jadi bernilai 40.' },
      { q: 'Nilai angka 6 pada bilangan 562 adalah ...', visual: '5 6 2', options: ['6', '60', '600', '56'], answer: 1, explain: 'Angka 6 berada di tempat puluhan, jadi bernilai 60.' },
      { q: 'Pada bilangan 718, angka 7 menempati nilai tempat ...', visual: '7 1 8', options: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'], answer: 2, explain: 'Pada 718: 7 = ratusan, 1 = puluhan, 8 = satuan.' },
      { q: 'Pada bilangan 350, angka 5 menempati nilai tempat ...', visual: '3 5 0', options: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'], answer: 1, explain: 'Pada 350: 3 = ratusan, 5 = puluhan, 0 = satuan.' },
      { q: 'Bilangan 204 terdiri dari ... ratusan, ... puluhan, ... satuan.', visual: '2 0 4', options: ['2, 0, 4', '4, 0, 2', '2, 4, 0', '0, 2, 4'], answer: 0, explain: '204 = 2 ratusan + 0 puluhan + 4 satuan.' },
      { q: 'Nilai angka 9 pada bilangan 90 adalah ...', visual: '9 0', options: ['9', '90', '900', '19'], answer: 1, explain: 'Angka 9 berada di tempat puluhan, jadi bernilai 90.' }
    ]},
    { materi: 'Penjumlahan', variants: [
      { q: 'Hasil dari 45 + 38 = ...', visual: '', options: ['73', '83', '85', '93'], answer: 1, explain: '45 + 38 = 83 (5+8=13 tulis 3 simpan 1, 4+3+1=8).' },
      { q: 'Hasil dari 64 + 29 = ...', visual: '', options: ['83', '92', '93', '103'], answer: 2, explain: '64 + 29 = 93.' },
      { q: 'Hasil dari 125 + 60 = ...', visual: '', options: ['165', '175', '185', '195'], answer: 2, explain: '125 + 60 = 185.' },
      { q: 'Hasil dari 53 + 47 = ...', visual: '', options: ['90', '100', '110', '96'], answer: 1, explain: '53 + 47 = 100.' },
      { q: 'Hasil dari 76 + 18 = ...', visual: '', options: ['84', '94', '96', '104'], answer: 1, explain: '76 + 18 = 94.' },
      { q: 'Hasil dari 38 + 26 = ...', visual: '', options: ['54', '64', '66', '74'], answer: 1, explain: '38 + 26 = 64.' },
      { q: 'Hasil dari 57 + 35 = ...', visual: '', options: ['82', '90', '92', '102'], answer: 2, explain: '57 + 35 = 92.' },
      { q: 'Hasil dari 120 + 75 = ...', visual: '', options: ['185', '195', '205', '175'], answer: 1, explain: '120 + 75 = 195.' },
      { q: 'Hasil dari 49 + 49 = ...', visual: '', options: ['88', '98', '99', '108'], answer: 1, explain: '49 + 49 = 98.' },
      { q: 'Hasil dari 63 + 27 = ...', visual: '', options: ['80', '90', '91', '100'], answer: 1, explain: '63 + 27 = 90.' }
    ]},
    { materi: 'Pengurangan', variants: [
      { q: 'Hasil dari 72 − 27 = ...', visual: '', options: ['35', '45', '47', '55'], answer: 1, explain: '72 − 27 = 45.' },
      { q: 'Hasil dari 90 − 36 = ...', visual: '', options: ['54', '56', '64', '66'], answer: 0, explain: '90 − 36 = 54.' },
      { q: 'Hasil dari 153 − 40 = ...', visual: '', options: ['103', '113', '123', '143'], answer: 1, explain: '153 − 40 = 113.' },
      { q: 'Hasil dari 100 − 45 = ...', visual: '', options: ['45', '55', '65', '75'], answer: 1, explain: '100 − 45 = 55.' },
      { q: 'Hasil dari 84 − 19 = ...', visual: '', options: ['55', '63', '65', '75'], answer: 2, explain: '84 − 19 = 65.' },
      { q: 'Hasil dari 65 − 28 = ...', visual: '', options: ['37', '43', '47', '57'], answer: 0, explain: '65 − 28 = 37.' },
      { q: 'Hasil dari 150 − 70 = ...', visual: '', options: ['70', '80', '90', '60'], answer: 1, explain: '150 − 70 = 80.' },
      { q: 'Hasil dari 93 − 47 = ...', visual: '', options: ['44', '46', '56', '54'], answer: 1, explain: '93 − 47 = 46.' },
      { q: 'Hasil dari 200 − 125 = ...', visual: '', options: ['65', '75', '85', '95'], answer: 1, explain: '200 − 125 = 75.' },
      { q: 'Hasil dari 81 − 16 = ...', visual: '', options: ['55', '65', '67', '75'], answer: 1, explain: '81 − 16 = 65.' }
    ]},
    { materi: 'Bangun Datar', variants: [
      { q: 'Permukaan uang logam berbentuk bangun datar ...', visual: '🪙', options: ['Persegi', 'Segitiga', 'Lingkaran', 'Persegi panjang'], answer: 2, explain: 'Permukaan uang logam bulat, jadi berbentuk lingkaran.' },
      { q: 'Permukaan sebuah buku berbentuk bangun datar ...', visual: '📕', options: ['Lingkaran', 'Persegi panjang', 'Segitiga', 'Bola'], answer: 1, explain: 'Permukaan buku biasanya berbentuk persegi panjang.' },
      { q: 'Permukaan jam dinding yang bulat berbentuk bangun datar ...', visual: '🕐', options: ['Persegi', 'Lingkaran', 'Segitiga', 'Trapesium'], answer: 1, explain: 'Permukaan jam bulat berbentuk lingkaran.' },
      { q: 'Permukaan papan tulis berbentuk bangun datar ...', visual: '🟫', options: ['Lingkaran', 'Persegi panjang', 'Segitiga', 'Bola'], answer: 1, explain: 'Permukaan papan tulis berbentuk persegi panjang.' },
      { q: 'Permukaan rambu lalu lintas yang berbentuk seperti tanda peringatan ⚠️ adalah ...', visual: '⚠️', options: ['Lingkaran', 'Persegi', 'Segitiga', 'Trapesium'], answer: 2, explain: 'Rambu peringatan biasanya berbentuk segitiga.' },
      { q: 'Permukaan ubin lantai biasanya berbentuk bangun datar ...', visual: '🟧', options: ['Lingkaran', 'Persegi', 'Segitiga', 'Bola'], answer: 1, explain: 'Ubin lantai umumnya berbentuk persegi.' },
      { q: 'Permukaan layar televisi berbentuk bangun datar ...', visual: '📺', options: ['Lingkaran', 'Persegi panjang', 'Segitiga', 'Trapesium'], answer: 1, explain: 'Layar TV berbentuk persegi panjang.' },
      { q: 'Permukaan tutup botol yang bulat berbentuk bangun datar ...', visual: '🧴', options: ['Persegi', 'Lingkaran', 'Segitiga', 'Persegi panjang'], answer: 1, explain: 'Tutup botol bulat berbentuk lingkaran.' },
      { q: 'Permukaan penggaris segitiga berbentuk bangun datar ...', visual: '📐', options: ['Lingkaran', 'Persegi', 'Segitiga', 'Trapesium'], answer: 2, explain: 'Penggaris segitiga berbentuk segitiga.' },
      { q: 'Permukaan sapu tangan berbentuk bangun datar ...', visual: '🧻', options: ['Lingkaran', 'Persegi', 'Segitiga', 'Bola'], answer: 1, explain: 'Sapu tangan umumnya berbentuk persegi.' }
    ]},
    { materi: 'Penguraian Bangun', variants: [
      { q: 'Sebuah persegi panjang dipotong lurus pada garis diagonalnya. Terbentuk dua bangun ...', visual: '▭ → ◣ ◥', options: ['Persegi', 'Lingkaran', 'Segitiga', 'Trapesium'], answer: 2, explain: 'Persegi panjang dipotong diagonal menjadi 2 segitiga.' },
      { q: 'Dua segitiga siku-siku yang sama digabungkan dapat membentuk bangun ...', visual: '◣ + ◥', options: ['Lingkaran', 'Persegi panjang', 'Bola', 'Kerucut'], answer: 1, explain: 'Dua segitiga siku-siku sama bisa disusun menjadi persegi panjang.' },
      { q: 'Sebuah persegi dipotong lurus melalui tengahnya menjadi dua bangun ...', visual: '⬜ → ▭ ▭', options: ['Segitiga', 'Persegi panjang', 'Lingkaran', 'Layang-layang'], answer: 1, explain: 'Persegi dipotong di tengah menjadi 2 persegi panjang.' },
      { q: 'Sebuah lingkaran dipotong tepat di tengah menjadi dua bangun ...', visual: '⬤ → ◗ ◖', options: ['Setengah lingkaran', 'Segitiga', 'Persegi', 'Trapesium'], answer: 0, explain: 'Lingkaran dipotong di tengah menjadi 2 setengah lingkaran.' },
      { q: 'Sebuah persegi besar dapat disusun dari beberapa bangun ... kecil yang sama.', visual: '⬜ = ▫️▫️▫️▫️', options: ['Persegi', 'Lingkaran', 'Bola', 'Kerucut'], answer: 0, explain: 'Persegi besar dapat disusun dari persegi-persegi kecil.' },
      { q: 'Dua persegi sama besar digabung menyamping akan membentuk bangun ...', visual: '⬜⬜ → ▭', options: ['Segitiga', 'Persegi panjang', 'Lingkaran', 'Kerucut'], answer: 1, explain: 'Dua persegi disusun menyamping membentuk persegi panjang.' },
      { q: 'Sebuah segitiga besar dapat disusun dari beberapa segitiga ... yang sama.', visual: '🔺 = 🔺🔺🔺🔺', options: ['Kecil', 'Besar', 'Bulat', 'Kotak'], answer: 0, explain: 'Segitiga besar dapat disusun dari segitiga-segitiga kecil.' },
      { q: 'Dua bangun setengah lingkaran jika digabung akan membentuk ...', visual: '◖ + ◗ → ⬤', options: ['Segitiga', 'Lingkaran', 'Persegi', 'Trapesium'], answer: 1, explain: 'Dua setengah lingkaran digabung membentuk satu lingkaran.' },
      { q: 'Empat persegi kecil yang sama dapat disusun menjadi sebuah ...', visual: '▫️▫️ / ▫️▫️ → ⬜', options: ['Persegi besar', 'Lingkaran', 'Segitiga', 'Bola'], answer: 0, explain: 'Empat persegi kecil disusun menjadi satu persegi besar.' },
      { q: 'Sebuah persegi panjang dipotong lurus di tengah menjadi dua bangun yang lebih kecil berbentuk ...', visual: '▭ → ▭ ▭', options: ['Persegi panjang', 'Lingkaran', 'Bola', 'Kerucut'], answer: 0, explain: 'Persegi panjang dipotong di tengah menjadi dua persegi panjang lebih kecil.' }
    ]},
    { materi: 'Ukuran Bangun', variants: [
      { q: 'Urutkan bangun dari yang paling KECIL ke paling BESAR.', visual: '🔴 kecil   🟠 sedang   🟡 besar', options: ['Besar, sedang, kecil', 'Kecil, sedang, besar', 'Sedang, kecil, besar', 'Kecil, besar, sedang'], answer: 1, explain: 'Dari terkecil ke terbesar: kecil → sedang → besar.' },
      { q: 'Urutkan bangun dari yang paling BESAR ke paling KECIL.', visual: '🟡 besar   🟠 sedang   🔴 kecil', options: ['Kecil, sedang, besar', 'Besar, sedang, kecil', 'Sedang, besar, kecil', 'Besar, kecil, sedang'], answer: 1, explain: 'Dari terbesar ke terkecil: besar → sedang → kecil.' },
      { q: 'Lingkaran A kecil, B sedang, C besar. Urutan dari yang terkecil adalah ...', visual: '🔴A  🟠B  🟡C', options: ['A, B, C', 'C, B, A', 'B, A, C', 'A, C, B'], answer: 0, explain: 'Dari terkecil: A (kecil), B (sedang), C (besar).' },
      { q: 'Tiga buku berbeda tebalnya. Urutkan dari yang paling TIPIS.', visual: '📕 tipis  📗 sedang  📘 tebal', options: ['Tipis, sedang, tebal', 'Tebal, sedang, tipis', 'Sedang, tipis, tebal', 'Tipis, tebal, sedang'], answer: 0, explain: 'Dari yang paling tipis: tipis → sedang → tebal.' },
      { q: 'Bola A besar, bola B kecil, bola C sedang. Urutan dari yang TERKECIL adalah ...', visual: '⚪B  🔵C  🟣A', options: ['B, C, A', 'A, C, B', 'C, B, A', 'B, A, C'], answer: 0, explain: 'Dari terkecil: B (kecil), C (sedang), A (besar).' },
      { q: 'Tiga pensil: pendek, sedang, panjang. Urutkan dari yang TERPANJANG.', visual: '✏️ pendek  ✏️ sedang  ✏️ panjang', options: ['Pendek, sedang, panjang', 'Panjang, sedang, pendek', 'Sedang, panjang, pendek', 'Panjang, pendek, sedang'], answer: 1, explain: 'Dari terpanjang: panjang → sedang → pendek.' },
      { q: 'Tali A = 10 cm, B = 5 cm, C = 8 cm. Urutkan dari yang TERPENDEK.', visual: 'A=10  B=5  C=8', options: ['B, C, A', 'A, C, B', 'C, B, A', 'B, A, C'], answer: 0, explain: 'Dari terpendek: B (5), C (8), A (10).' },
      { q: 'Tiga kotak: kecil, sedang, besar. Yang dapat memuat paling banyak biasanya kotak ...', visual: '📦 kecil  📦 sedang  📦 besar', options: ['Kecil', 'Sedang', 'Besar', 'Sama saja'], answer: 2, explain: 'Kotak yang paling besar memuat paling banyak.' },
      { q: 'Pita merah lebih panjang dari biru, biru lebih panjang dari hijau. Pita TERPENDEK adalah ...', visual: '🟥 > 🟦 > 🟩', options: ['Merah', 'Biru', 'Hijau', 'Sama'], answer: 2, explain: 'Hijau paling pendek karena lebih pendek dari biru maupun merah.' },
      { q: 'Lingkaran besar, sedang, kecil. Urutkan dari yang TERBESAR.', visual: '🟡 besar  🟠 sedang  🔴 kecil', options: ['Kecil, sedang, besar', 'Besar, sedang, kecil', 'Sedang, besar, kecil', 'Besar, kecil, sedang'], answer: 1, explain: 'Dari terbesar: besar → sedang → kecil.' }
    ]},
    { materi: 'Bangun Ruang', variants: [
      { q: 'Benda di bawah ini yang berbentuk kubus adalah ...', visual: '🎲', options: ['Bola', 'Dadu', 'Kaleng', 'Topi ulang tahun'], answer: 1, explain: 'Dadu berbentuk kubus karena semua sisinya persegi sama besar.' },
      { q: 'Rubik termasuk bangun ruang berbentuk ...', visual: '🧩', options: ['Bola', 'Tabung', 'Kubus', 'Kerucut'], answer: 2, explain: 'Rubik berbentuk kubus.' },
      { q: 'Banyak sisi pada bangun kubus ada ...', visual: '🎲', options: ['4', '5', '6', '8'], answer: 2, explain: 'Kubus memiliki 6 sisi berbentuk persegi.' },
      { q: 'Setiap sisi (permukaan) kubus berbentuk ...', visual: '🎁', options: ['Lingkaran', 'Segitiga', 'Persegi', 'Trapesium'], answer: 2, explain: 'Semua sisi kubus berbentuk persegi.' },
      { q: 'Benda berikut berbentuk kubus, KECUALI ...', visual: '', options: ['Dadu', 'Rubik', 'Kotak kado berbentuk kubus', 'Bola'], answer: 3, explain: 'Bola bukan kubus; bola berbentuk bulat.' },
      { q: 'Banyak titik sudut pada bangun kubus ada ...', visual: '🎲', options: ['6', '8', '12', '4'], answer: 1, explain: 'Kubus memiliki 8 titik sudut.' },
      { q: 'Banyak rusuk (garis tepi) pada bangun kubus ada ...', visual: '🎲', options: ['6', '8', '12', '4'], answer: 2, explain: 'Kubus memiliki 12 rusuk.' },
      { q: 'Sebuah kubus memiliki panjang, lebar, dan tinggi yang ...', visual: '🎁', options: ['Berbeda', 'Sama', 'Nol', 'Melengkung'], answer: 1, explain: 'Kubus memiliki panjang, lebar, dan tinggi yang sama.' },
      { q: 'Mainan balok susun berbentuk kubus jika semua sisinya ...', visual: '🧱', options: ['Persegi sama besar', 'Lingkaran', 'Segitiga', 'Berbeda'], answer: 0, explain: 'Kubus memiliki semua sisi persegi yang sama besar.' },
      { q: 'Kotak kado yang semua sisinya persegi sama besar berbentuk ...', visual: '🎁', options: ['Balok', 'Kubus', 'Tabung', 'Bola'], answer: 1, explain: 'Kotak dengan semua sisi persegi sama besar berbentuk kubus.' }
    ]},
    { materi: 'Sisi Lengkung', variants: [
      { q: 'Bangun ruang yang permukaannya melengkung (bersisi lengkung) adalah ...', visual: '⚽', options: ['Kubus', 'Balok', 'Bola', 'Limas'], answer: 2, explain: 'Bola memiliki permukaan melengkung di semua sisinya.' },
      { q: 'Kaleng susu berbentuk bangun ruang bersisi lengkung, yaitu ...', visual: '🥫', options: ['Kubus', 'Tabung', 'Balok', 'Limas'], answer: 1, explain: 'Kaleng berbentuk tabung yang sisi sampingnya melengkung.' },
      { q: 'Topi ulang tahun berbentuk kerucut. Sisi sampingnya berupa ...', visual: '🎉', options: ['Datar semua', 'Lengkung', 'Tidak punya sisi', 'Kotak'], answer: 1, explain: 'Kerucut memiliki sisi samping yang melengkung.' },
      { q: 'Permukaan sebuah bola berbentuk ...', visual: '🏀', options: ['Datar', 'Lengkung', 'Kotak', 'Lurus'], answer: 1, explain: 'Permukaan bola melengkung di semua bagian.' },
      { q: 'Benda di bawah ini yang berbentuk tabung adalah ...', visual: '🥫', options: ['Dadu', 'Kaleng', 'Buku', 'Piramida'], answer: 1, explain: 'Kaleng berbentuk tabung.' },
      { q: 'Bangun ruang berikut yang TIDAK memiliki sisi lengkung adalah ...', visual: '', options: ['Bola', 'Tabung', 'Kubus', 'Kerucut'], answer: 2, explain: 'Kubus semua sisinya datar, tidak ada yang lengkung.' },
      { q: 'Kelereng berbentuk bola, semua permukaannya ...', visual: '🔮', options: ['Datar', 'Lengkung', 'Kotak', 'Lurus'], answer: 1, explain: 'Permukaan bola melengkung di semua bagian.' },
      { q: 'Gelas dan kaleng biasanya berbentuk ... yang punya sisi lengkung.', visual: '🥤', options: ['Kubus', 'Tabung', 'Balok', 'Limas'], answer: 1, explain: 'Gelas dan kaleng berbentuk tabung yang sisinya melengkung.' },
      { q: 'Es krim cone berbentuk ... yang sisi sampingnya lengkung.', visual: '🍦', options: ['Kubus', 'Kerucut', 'Balok', 'Bola'], answer: 1, explain: 'Cone es krim berbentuk kerucut dengan sisi samping lengkung.' },
      { q: 'Bangun ruang yang SELURUH permukaannya lengkung adalah ...', visual: '🏀', options: ['Tabung', 'Kerucut', 'Bola', 'Kubus'], answer: 2, explain: 'Bola seluruh permukaannya melengkung.' }
    ]},
    { materi: 'Posisi Benda', variants: [
      { q: 'Buku diletakkan di atas meja. Posisi buku terhadap meja adalah ...', visual: '📕\n▬▬▬ (meja)', options: ['Di bawah meja', 'Di atas meja', 'Di samping meja', 'Di dalam meja'], answer: 1, explain: 'Buku berada di atas meja.' },
      { q: 'Seekor kucing duduk di bawah kursi. Posisi kucing terhadap kursi adalah ...', visual: '🪑\n🐱', options: ['Di atas', 'Di bawah', 'Di depan', 'Di belakang'], answer: 1, explain: 'Kucing berada di bawah kursi.' },
      { q: 'Bola berada di dalam kotak. Posisi bola terhadap kotak adalah ...', visual: '📦⚽', options: ['Di luar', 'Di atas', 'Di dalam', 'Di samping'], answer: 2, explain: 'Bola berada di dalam kotak.' },
      { q: 'Lampu menggantung di atas meja. Posisi lampu terhadap meja adalah ...', visual: '💡\n▬▬▬', options: ['Di bawah meja', 'Di atas meja', 'Di dalam meja', 'Di samping meja'], answer: 1, explain: 'Lampu berada di atas meja.' },
      { q: 'Sepatu diletakkan di bawah tempat tidur. Posisi sepatu terhadap tempat tidur adalah ...', visual: '🛏️\n👟', options: ['Di atas', 'Di bawah', 'Di dalam', 'Di depan'], answer: 1, explain: 'Sepatu berada di bawah tempat tidur.' },
      { q: 'Seekor burung terbang di atas pohon. Posisi burung terhadap pohon adalah ...', visual: '🐦\n🌳', options: ['Di bawah', 'Di atas', 'Di dalam', 'Di samping'], answer: 1, explain: 'Burung berada di atas pohon.' },
      { q: 'Ikan berenang di dalam akuarium. Posisi ikan terhadap akuarium adalah ...', visual: '🐠 di 🪣', options: ['Di luar', 'Di atas', 'Di dalam', 'Di belakang'], answer: 2, explain: 'Ikan berada di dalam akuarium.' },
      { q: 'Tas tergantung di samping pintu. Posisi tas terhadap pintu adalah ...', visual: '🚪🎒', options: ['Di atas', 'Di samping', 'Di dalam', 'Di bawah'], answer: 1, explain: 'Tas berada di samping pintu.' },
      { q: 'Bola berada di depan gawang. Posisi bola terhadap gawang adalah ...', visual: '⚽ 🥅', options: ['Di belakang', 'Di depan', 'Di dalam', 'Di atas'], answer: 1, explain: 'Bola berada di depan gawang.' },
      { q: 'Kucing tidur di belakang sofa. Posisi kucing terhadap sofa adalah ...', visual: '🛋️\n🐱', options: ['Di depan', 'Di belakang', 'Di atas', 'Di dalam'], answer: 1, explain: 'Kucing berada di belakang sofa.' }
    ]},
    { materi: 'Pecahan', variants: [
      { q: 'Satu buah pizza dibagi menjadi 2 bagian sama besar. Setiap bagian bernilai ...', visual: '🍕 dibagi 2', options: ['Satu per empat (1/4)', 'Setengah (1/2)', 'Satu per tiga (1/3)', 'Satu utuh'], answer: 1, explain: 'Dibagi 2 sama besar, tiap bagian = setengah = 1/2.' },
      { q: 'Sebuah kue dibagi menjadi 4 bagian sama besar. Satu potong bernilai ...', visual: '🎂 dibagi 4', options: ['Satu per dua (1/2)', 'Satu per tiga (1/3)', 'Satu per empat (1/4)', 'Dua per empat (2/4)'], answer: 2, explain: 'Dibagi 4 sama besar, 1 potong = 1/4.' },
      { q: 'Pecahan "setengah" ditulis dengan lambang ...', visual: '', options: ['1/2', '1/3', '2/1', '1/4'], answer: 0, explain: 'Setengah ditulis 1/2.' },
      { q: 'Sebuah apel dibagi menjadi 3 bagian sama besar. Satu bagian bernilai ...', visual: '🍎 dibagi 3', options: ['Satu per dua (1/2)', 'Satu per tiga (1/3)', 'Satu per empat (1/4)', 'Tiga per tiga (3/3)'], answer: 1, explain: 'Dibagi 3 sama besar, 1 bagian = 1/3.' },
      { q: 'Sebuah lingkaran dibagi 2 sama besar, 1 bagian diwarnai. Bagian yang diwarnai bernilai ...', visual: '◐', options: ['Satu per empat (1/4)', 'Satu per tiga (1/3)', 'Setengah (1/2)', 'Satu utuh'], answer: 2, explain: '1 dari 2 bagian = setengah = 1/2.' },
      { q: 'Sebuah semangka dibagi 4 bagian sama besar, diambil 2 bagian. Nilainya adalah ...', visual: '🍉 dibagi 4, ambil 2', options: ['1/4', '2/4', '3/4', '4/4'], answer: 1, explain: '2 dari 4 bagian = 2/4.' },
      { q: 'Pecahan "satu per tiga" ditulis dengan lambang ...', visual: '', options: ['1/3', '3/1', '1/2', '1/4'], answer: 0, explain: 'Satu per tiga ditulis 1/3.' },
      { q: 'Cokelat dibagi 2 bagian sama besar, 1 bagian untuk adik. Bagian adik bernilai ...', visual: '🍫 dibagi 2', options: ['1/2', '1/3', '1/4', '2/2'], answer: 0, explain: '1 dari 2 bagian = 1/2.' },
      { q: 'Pecahan "satu per empat" ditulis dengan lambang ...', visual: '', options: ['4/1', '1/4', '1/2', '2/4'], answer: 1, explain: 'Satu per empat ditulis 1/4.' },
      { q: 'Sebuah roti dibagi 3 bagian sama besar. Satu potong bernilai ...', visual: '🍞 dibagi 3', options: ['1/2', '1/3', '1/4', '3/3'], answer: 1, explain: '1 dari 3 bagian = 1/3.' }
    ]},
    { materi: 'Waktu', variants: [
      { q: 'Jarum pendek menunjuk angka 3 dan jarum panjang menunjuk angka 12. Jam menunjukkan pukul ...', visual: '🕒', options: ['Pukul 12.00', 'Pukul 03.00', 'Pukul 03.15', 'Pukul 06.00'], answer: 1, explain: 'Jarum panjang di 12 dan pendek di 3 berarti pukul 03.00.' },
      { q: 'Jarum pendek menunjuk angka 6 dan jarum panjang menunjuk angka 12. Jam menunjukkan pukul ...', visual: '🕕', options: ['Pukul 12.00', 'Pukul 06.00', 'Pukul 06.30', 'Pukul 06.06'], answer: 1, explain: 'Jarum panjang di 12 dan pendek di 6 berarti pukul 06.00.' },
      { q: 'Pukul 7 malam jika ditulis dalam bentuk digital (24 jam) menjadi ...', visual: '🌙', options: ['07.00', '17.00', '19.00', '21.00'], answer: 2, explain: 'Jam 7 malam = 12 + 7 = pukul 19.00.' },
      { q: 'Jarum pendek menunjuk angka 9 dan jarum panjang menunjuk angka 12. Jam menunjukkan pukul ...', visual: '🕘', options: ['Pukul 09.00', 'Pukul 12.00', 'Pukul 09.45', 'Pukul 03.00'], answer: 0, explain: 'Jarum panjang di 12 dan pendek di 9 berarti pukul 09.00.' },
      { q: 'Setengah jam sama dengan ... menit.', visual: '⏰', options: ['15', '30', '45', '60'], answer: 1, explain: '1 jam = 60 menit, jadi setengah jam = 30 menit.' },
      { q: 'Jarum pendek dan jarum panjang sama-sama menunjuk angka 12. Jam menunjukkan pukul ...', visual: '🕛', options: ['Pukul 12.00', 'Pukul 06.00', 'Pukul 01.00', 'Pukul 11.00'], answer: 0, explain: 'Keduanya di 12 berarti pukul 12.00.' },
      { q: 'Satu jam sama dengan ... menit.', visual: '🕐', options: ['30', '45', '60', '100'], answer: 2, explain: '1 jam = 60 menit.' },
      { q: 'Jarum pendek menunjuk angka 2 dan jarum panjang menunjuk angka 12. Jam menunjukkan pukul ...', visual: '🕑', options: ['Pukul 12.00', 'Pukul 02.00', 'Pukul 02.30', 'Pukul 10.00'], answer: 1, explain: 'Jarum panjang di 12 dan pendek di 2 berarti pukul 02.00.' },
      { q: 'Pukul 10 pagi jika ditulis dalam bentuk digital menjadi ...', visual: '☀️', options: ['10.00', '22.00', '12.00', '08.00'], answer: 0, explain: 'Pukul 10 pagi ditulis 10.00.' },
      { q: 'Seperempat jam sama dengan ... menit.', visual: '⏰', options: ['10', '15', '20', '30'], answer: 1, explain: 'Seperempat jam = 60 : 4 = 15 menit.' }
    ]},
    { materi: 'Perbandingan Tinggi', variants: [
      { q: 'Pohon lebih tinggi dari rumah, rumah lebih tinggi dari pagar. Yang paling tinggi adalah ...', visual: '🌳 > 🏠 > 🚧', options: ['Pagar', 'Rumah', 'Pohon', 'Sama tinggi'], answer: 2, explain: 'Pohon paling tinggi karena lebih tinggi dari rumah maupun pagar.' },
      { q: 'Tinggi Ani 120 cm, Budi 135 cm, Citra 128 cm. Yang paling pendek adalah ...', visual: '👧 Ani 120  Budi 135  Citra 128', options: ['Ani', 'Budi', 'Citra', 'Sama tinggi'], answer: 0, explain: 'Ani 120 cm adalah yang terkecil, jadi paling pendek.' },
      { q: 'Sebuah gelas lebih pendek daripada botol. Yang lebih tinggi adalah ...', visual: '🥛  🍶', options: ['Gelas', 'Botol', 'Sama tinggi', 'Tidak tahu'], answer: 1, explain: 'Karena gelas lebih pendek, maka botol lebih tinggi.' },
      { q: 'Gedung lebih tinggi dari pohon, pohon lebih tinggi dari mobil. Yang paling rendah adalah ...', visual: '🏢 > 🌳 > 🚗', options: ['Gedung', 'Pohon', 'Mobil', 'Sama tinggi'], answer: 2, explain: 'Mobil paling rendah karena lebih pendek dari pohon maupun gedung.' },
      { q: 'Tinggi badan: Doni 140 cm, Eka 132 cm, Fani 145 cm. Yang paling tinggi adalah ...', visual: '👦 Doni 140  Eka 132  Fani 145', options: ['Doni', 'Eka', 'Fani', 'Sama tinggi'], answer: 2, explain: 'Fani 145 cm adalah yang tertinggi.' },
      { q: 'Menara lebih tinggi dari rumah. Bangunan yang lebih pendek adalah ...', visual: '🗼  🏠', options: ['Menara', 'Rumah', 'Sama tinggi', 'Tidak tahu'], answer: 1, explain: 'Karena menara lebih tinggi, maka rumah lebih pendek.' },
      { q: 'Tinggi hewan: Gajah > Kuda > Kucing. Hewan yang paling tinggi adalah ...', visual: '🐘 > 🐴 > 🐱', options: ['Gajah', 'Kuda', 'Kucing', 'Sama tinggi'], answer: 0, explain: 'Gajah paling tinggi karena lebih tinggi dari kuda maupun kucing.' },
      { q: 'Botol 25 cm, gelas 12 cm, termos 30 cm. Yang paling tinggi adalah ...', visual: '🍶 25  🥛 12  🧴 30', options: ['Botol', 'Gelas', 'Termos', 'Sama tinggi'], answer: 2, explain: 'Termos 30 cm adalah yang tertinggi.' },
      { q: 'Pohon kelapa lebih tinggi dari pohon mangga. Yang lebih tinggi adalah ...', visual: '🌴  🥭', options: ['Kelapa', 'Mangga', 'Sama tinggi', 'Tidak tahu'], answer: 0, explain: 'Pohon kelapa lebih tinggi dari pohon mangga.' },
      { q: 'Tinggi anak: Sasa 118 cm, Tata 125 cm, Lala 120 cm. Yang paling pendek adalah ...', visual: '👧 Sasa 118  Tata 125  Lala 120', options: ['Sasa', 'Tata', 'Lala', 'Sama tinggi'], answer: 0, explain: 'Sasa 118 cm adalah yang terkecil, jadi paling pendek.' }
    ]},
    { materi: 'Menghitung Data', variants: [
      { q: 'Banyak siswa suka warna biru ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||  →  (5 + 5 + 2)', options: ['10', '11', '12', '13'], answer: 2, explain: '5 + 5 + 2 = 12 siswa.' },
      { q: 'Banyak siswa suka warna hijau ditulis turus berikut. Berapa banyak siswa?', visual: '||||| |||  →  (5 + 3)', options: ['6', '7', '8', '9'], answer: 2, explain: '5 + 3 = 8 siswa.' },
      { q: 'Banyak siswa suka warna merah ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| |||||  →  (5 + 5 + 5)', options: ['10', '13', '15', '20'], answer: 2, explain: '5 + 5 + 5 = 15 siswa.' },
      { q: 'Banyak siswa suka kucing ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||| |||||  →  (5+5+5+5)', options: ['15', '18', '20', '25'], answer: 2, explain: '5 + 5 + 5 + 5 = 20 siswa.' },
      { q: 'Banyak siswa suka ikan ditulis turus berikut. Berapa banyak siswa?', visual: '|||  →  (3)', options: ['2', '3', '4', '5'], answer: 1, explain: 'Ada 3 garis, jadi 3 siswa.' },
      { q: 'Banyak siswa suka apel ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||| ||  →  (5+5+5+2)', options: ['15', '17', '20', '12'], answer: 1, explain: '5 + 5 + 5 + 2 = 17 siswa.' },
      { q: 'Banyak siswa suka mangga ditulis turus berikut. Berapa banyak siswa?', visual: '||||| |  →  (5+1)', options: ['5', '6', '7', '11'], answer: 1, explain: '5 + 1 = 6 siswa.' },
      { q: 'Banyak siswa suka jeruk ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||  →  (5+5+4)', options: ['13', '14', '15', '10'], answer: 1, explain: '5 + 5 + 4 = 14 siswa.' },
      { q: 'Banyak siswa suka pisang ditulis turus berikut. Berapa banyak siswa?', visual: '||||  →  (4)', options: ['3', '4', '5', '6'], answer: 1, explain: 'Ada 4 garis, jadi 4 siswa.' },
      { q: 'Banyak siswa suka anggur ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||| ||||| ||  →  (5+5+5+5+2)', options: ['20', '22', '25', '18'], answer: 1, explain: '5 + 5 + 5 + 5 + 2 = 22 siswa.' }
    ]},
    { materi: 'Diagram Minuman', variants: [
      { q: 'Setiap 🥤 mewakili 1 gelas. Berapa gelas jus yang terjual?', visual: 'Jus: 🥤 🥤 🥤 🥤', options: ['3', '4', '5', '6'], answer: 1, explain: 'Ada 4 gambar gelas, jadi 4 gelas jus.' },
      { q: 'Setiap 🧃 mewakili 1 kotak susu. Berapa kotak susu di bawah ini?', visual: '🧃 🧃 🧃 🧃 🧃', options: ['4', '5', '6', '7'], answer: 1, explain: 'Ada 5 gambar kotak, jadi 5 kotak susu.' },
      { q: 'Setiap ☕ mewakili 1 cangkir. Berapa cangkir teh di bawah ini?', visual: '☕ ☕ ☕', options: ['2', '3', '4', '5'], answer: 1, explain: 'Ada 3 gambar cangkir, jadi 3 cangkir teh.' },
      { q: 'Setiap 🍶 mewakili 1 botol. Berapa botol sirup di bawah ini?', visual: '🍶 🍶 🍶 🍶 🍶 🍶', options: ['5', '6', '7', '8'], answer: 1, explain: 'Ada 6 gambar botol, jadi 6 botol sirup.' },
      { q: 'Setiap 🥛 mewakili 1 gelas. Berapa gelas susu di bawah ini?', visual: '🥛 🥛', options: ['1', '2', '3', '4'], answer: 1, explain: 'Ada 2 gambar gelas, jadi 2 gelas susu.' },
      { q: 'Setiap 🍵 mewakili 1 cangkir. Berapa cangkir teh di bawah ini?', visual: '🍵 🍵 🍵 🍵 🍵 🍵 🍵', options: ['6', '7', '8', '5'], answer: 1, explain: 'Ada 7 gambar cangkir, jadi 7 cangkir teh.' },
      { q: 'Setiap 🥤 mewakili 1 gelas. Berapa gelas soda di bawah ini?', visual: '🥤 🥤 🥤 🥤 🥤 🥤 🥤 🥤', options: ['7', '8', '9', '6'], answer: 1, explain: 'Ada 8 gambar gelas, jadi 8 gelas soda.' },
      { q: 'Setiap 🧃 mewakili 1 kotak. Berapa kotak jus di bawah ini?', visual: '🧃', options: ['1', '2', '3', '0'], answer: 0, explain: 'Ada 1 gambar kotak, jadi 1 kotak jus.' },
      { q: 'Setiap ☕ mewakili 1 cangkir. Berapa cangkir kopi di bawah ini?', visual: '☕ ☕ ☕ ☕', options: ['3', '4', '5', '6'], answer: 1, explain: 'Ada 4 gambar cangkir, jadi 4 cangkir kopi.' },
      { q: 'Setiap 🍶 mewakili 1 botol. Berapa botol sirup di bawah ini?', visual: '🍶 🍶 🍶 🍶 🍶 🍶 🍶 🍶 🍶', options: ['8', '9', '10', '7'], answer: 1, explain: 'Ada 9 gambar botol, jadi 9 botol sirup.' }
    ]},
    { materi: 'Membandingkan Data Minuman', variants: [
      { q: 'Susu = 5 gelas, Teh = 3 gelas. Selisih banyaknya adalah ...', visual: '🥛 = 5   🍵 = 3', options: ['1', '2', '3', '8'], answer: 1, explain: 'Selisih = 5 − 3 = 2 gelas.' },
      { q: 'Jus = 7 gelas, Soda = 4 gelas. Minuman yang lebih banyak adalah ...', visual: '🥤 = 7   🥤 = 4', options: ['Jus', 'Soda', 'Sama banyak', 'Tidak tahu'], answer: 0, explain: 'Jus = 7 lebih banyak dari Soda = 4.' },
      { q: 'Air = 6 gelas, Susu = 6 gelas. Perbandingan banyaknya adalah ...', visual: '💧 = 6   🥛 = 6', options: ['Air lebih banyak', 'Susu lebih banyak', 'Sama banyak', 'Tidak tahu'], answer: 2, explain: 'Keduanya 6 gelas, jadi sama banyak.' },
      { q: 'Kopi = 8 gelas, Teh = 5 gelas. Selisih banyaknya adalah ...', visual: '☕ = 8   🍵 = 5', options: ['2', '3', '4', '13'], answer: 1, explain: 'Selisih = 8 − 5 = 3 gelas.' },
      { q: 'Jus = 4 gelas, Susu = 9 gelas. Minuman yang lebih sedikit adalah ...', visual: '🥤 = 4   🥛 = 9', options: ['Jus', 'Susu', 'Sama banyak', 'Tidak tahu'], answer: 0, explain: 'Jus = 4 lebih sedikit dari Susu = 9.' },
      { q: 'Teh = 10 gelas, Kopi = 6 gelas. Selisih banyaknya adalah ...', visual: '🍵 = 10   ☕ = 6', options: ['3', '4', '5', '16'], answer: 1, explain: 'Selisih = 10 − 6 = 4 gelas.' },
      { q: 'Jus = 5, Susu = 5, Soda = 8. Minuman yang paling banyak adalah ...', visual: '🥤=5  🥛=5  🧋=8', options: ['Jus', 'Susu', 'Soda', 'Sama banyak'], answer: 2, explain: 'Soda = 8 adalah angka terbesar, jadi paling banyak.' },
      { q: 'Air = 12 gelas, Sirup = 7 gelas. Minuman yang lebih banyak adalah ...', visual: '💧 = 12   🥤 = 7', options: ['Air', 'Sirup', 'Sama banyak', 'Tidak tahu'], answer: 0, explain: 'Air = 12 lebih banyak dari Sirup = 7.' },
      { q: 'Susu cokelat = 3 gelas, susu putih = 9 gelas. Selisih banyaknya adalah ...', visual: '🥛 cokelat=3  putih=9', options: ['5', '6', '7', '12'], answer: 1, explain: 'Selisih = 9 − 3 = 6 gelas.' },
      { q: 'Es teh = 8 gelas, es jeruk = 8 gelas. Perbandingan banyaknya adalah ...', visual: '🧋 = 8   🍊 = 8', options: ['Es teh lebih banyak', 'Es jeruk lebih banyak', 'Sama banyak', 'Tidak tahu'], answer: 2, explain: 'Keduanya 8 gelas, jadi sama banyak.' }
    ]}
  ],

  3: [
    { materi: 'Pecahan Sederhana', variants: [
      { q: 'Pecahan 1/2 dibaca ...', visual: '½', options: ['Satu per empat', 'Setengah / satu per dua', 'Dua per satu', 'Satu per tiga'], answer: 1, explain: '1/2 dibaca "setengah" atau "satu per dua".' },
      { q: 'Pada pecahan 3/4, angka 4 (bagian bawah) disebut ...', visual: '3/4', options: ['Pembilang', 'Penyebut', 'Hasil', 'Sisa'], answer: 1, explain: 'Angka bawah pecahan disebut penyebut, angka atas disebut pembilang.' },
      { q: 'Pada pecahan 2/5, pembilangnya adalah ...', visual: '2/5', options: ['2', '5', '7', '10'], answer: 0, explain: 'Pembilang adalah angka di atas, yaitu 2.' },
      { q: 'Pada pecahan 4/7, angka 4 (bagian atas) disebut ...', visual: '4/7', options: ['Penyebut', 'Pembilang', 'Hasil', 'Sisa'], answer: 1, explain: 'Angka atas pecahan disebut pembilang.' },
      { q: 'Pecahan 1/4 dibaca ...', visual: '¼', options: ['Empat per satu', 'Satu per empat', 'Satu per dua', 'Empat'], answer: 1, explain: '1/4 dibaca "satu per empat".' },
      { q: 'Pada pecahan 5/8, penyebutnya adalah ...', visual: '5/8', options: ['5', '8', '13', '3'], answer: 1, explain: 'Penyebut adalah angka di bawah, yaitu 8.' },
      { q: 'Pecahan 2/3 dibaca ...', visual: '2/3', options: ['Tiga per dua', 'Dua per tiga', 'Dua', 'Tiga'], answer: 1, explain: '2/3 dibaca "dua per tiga".' },
      { q: 'Bagian atas sebuah pecahan disebut ...', visual: '▢/▢', options: ['Penyebut', 'Pembilang', 'Hasil', 'Sisa'], answer: 1, explain: 'Bagian atas pecahan disebut pembilang.' },
      { q: 'Pada pecahan 3/5, penyebutnya adalah ...', visual: '3/5', options: ['3', '5', '8', '2'], answer: 1, explain: 'Penyebut adalah angka di bawah, yaitu 5.' },
      { q: 'Pecahan 4/9 dibaca ...', visual: '4/9', options: ['Sembilan per empat', 'Empat per sembilan', 'Empat', 'Sembilan'], answer: 1, explain: '4/9 dibaca "empat per sembilan".' }
    ]},
    { materi: 'Membaca Pecahan', variants: [
      { q: 'Lambang pecahan untuk "tiga per empat" adalah ...', visual: '', options: ['4/3', '3/4', '1/4', '3/3'], answer: 1, explain: 'Tiga per empat ditulis 3/4 (pembilang 3, penyebut 4).' },
      { q: 'Lambang pecahan untuk "dua per lima" adalah ...', visual: '', options: ['5/2', '2/5', '2/2', '5/5'], answer: 1, explain: 'Dua per lima ditulis 2/5.' },
      { q: 'Pecahan 1/3 dibaca ...', visual: '1/3', options: ['Tiga per satu', 'Satu per tiga', 'Satu per dua', 'Tiga'], answer: 1, explain: '1/3 dibaca "satu per tiga".' },
      { q: 'Lambang pecahan untuk "lima per delapan" adalah ...', visual: '', options: ['8/5', '5/8', '5/5', '8/8'], answer: 1, explain: 'Lima per delapan ditulis 5/8.' },
      { q: 'Lambang pecahan untuk "satu per enam" adalah ...', visual: '', options: ['6/1', '1/6', '1/3', '6/6'], answer: 1, explain: 'Satu per enam ditulis 1/6.' },
      { q: 'Lambang pecahan untuk "tiga per tujuh" adalah ...', visual: '', options: ['7/3', '3/7', '3/3', '7/7'], answer: 1, explain: 'Tiga per tujuh ditulis 3/7.' },
      { q: 'Lambang pecahan untuk "enam per sepuluh" adalah ...', visual: '', options: ['10/6', '6/10', '6/6', '10/10'], answer: 1, explain: 'Enam per sepuluh ditulis 6/10.' },
      { q: 'Pecahan 2/9 dibaca ...', visual: '2/9', options: ['Sembilan per dua', 'Dua per sembilan', 'Dua', 'Sembilan'], answer: 1, explain: '2/9 dibaca "dua per sembilan".' },
      { q: 'Lambang pecahan untuk "empat per lima" adalah ...', visual: '', options: ['5/4', '4/5', '4/4', '5/5'], answer: 1, explain: 'Empat per lima ditulis 4/5.' },
      { q: 'Pecahan 7/8 dibaca ...', visual: '7/8', options: ['Delapan per tujuh', 'Tujuh per delapan', 'Tujuh', 'Delapan'], answer: 1, explain: '7/8 dibaca "tujuh per delapan".' }
    ]},
    { materi: 'Pecahan dari Gambar', variants: [
      { q: 'Sebuah lingkaran dibagi 4 bagian sama besar, 1 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '◔ (1 dari 4 diarsir)', options: ['1/2', '1/3', '1/4', '3/4'], answer: 2, explain: '1 bagian diarsir dari 4 bagian = 1/4.' },
      { q: 'Sebuah persegi dibagi 4 bagian sama besar, 3 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '▦ (3 dari 4 diarsir)', options: ['1/4', '2/4', '3/4', '4/4'], answer: 2, explain: '3 bagian diarsir dari 4 bagian = 3/4.' },
      { q: 'Sebuah bangun dibagi 2 bagian sama besar, 1 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '◐ (1 dari 2 diarsir)', options: ['1/2', '1/3', '1/4', '2/2'], answer: 0, explain: '1 bagian diarsir dari 2 bagian = 1/2.' },
      { q: 'Sebuah persegi panjang dibagi 5 bagian sama besar, 2 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '▥ (2 dari 5 diarsir)', options: ['1/5', '2/5', '3/5', '2/3'], answer: 1, explain: '2 bagian diarsir dari 5 bagian = 2/5.' },
      { q: 'Sebuah lingkaran dibagi 3 bagian sama besar, 2 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '◕ (2 dari 3 diarsir)', options: ['1/3', '2/3', '3/3', '1/2'], answer: 1, explain: '2 bagian diarsir dari 3 bagian = 2/3.' },
      { q: 'Sebuah persegi dibagi 6 bagian sama besar, 1 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '▦ (1 dari 6 diarsir)', options: ['1/6', '2/6', '1/3', '5/6'], answer: 0, explain: '1 bagian diarsir dari 6 bagian = 1/6.' },
      { q: 'Sebuah lingkaran dibagi 4 bagian sama besar, 2 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '◑ (2 dari 4 diarsir)', options: ['1/4', '2/4', '3/4', '4/4'], answer: 1, explain: '2 bagian diarsir dari 4 bagian = 2/4.' },
      { q: 'Sebuah bangun dibagi 8 bagian sama besar, 3 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '▦ (3 dari 8 diarsir)', options: ['1/8', '2/8', '3/8', '5/8'], answer: 2, explain: '3 bagian diarsir dari 8 bagian = 3/8.' },
      { q: 'Sebuah persegi panjang dibagi 3 bagian sama besar, 1 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '▥ (1 dari 3 diarsir)', options: ['1/3', '2/3', '1/2', '3/3'], answer: 0, explain: '1 bagian diarsir dari 3 bagian = 1/3.' },
      { q: 'Sebuah lingkaran dibagi 5 bagian sama besar, 4 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '◕ (4 dari 5 diarsir)', options: ['1/5', '3/5', '4/5', '5/5'], answer: 2, explain: '4 bagian diarsir dari 5 bagian = 4/5.' }
    ]},
    { materi: 'Pecahan pada Garis Bilangan', variants: [
      { q: 'Garis bilangan 0 sampai 1 dibagi 4 bagian sama. Titik KEDUA dari 0 menunjukkan pecahan ...', visual: '0 — • — • — • — 1\n         ↑ titik ke-2', options: ['1/4', '2/4', '3/4', '4/4'], answer: 1, explain: 'Titik ke-2 dari 0 berada di 2/4.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 4 bagian sama. Titik KETIGA dari 0 menunjukkan pecahan ...', visual: '0 — • — • — • — 1\n             ↑ titik ke-3', options: ['1/4', '2/4', '3/4', '4/4'], answer: 2, explain: 'Titik ke-3 dari 0 berada di 3/4.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 2 bagian sama. Titik tepat di tengah menunjukkan pecahan ...', visual: '0 — • — 1\n     ↑ tengah', options: ['1/4', '1/2', '3/4', '1'], answer: 1, explain: 'Titik tengah antara 0 dan 1 adalah 1/2.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 5 bagian sama. Titik KETIGA dari 0 menunjukkan pecahan ...', visual: '0 — • — • — • — • — 1\n             ↑ titik ke-3', options: ['2/5', '3/5', '4/5', '1/5'], answer: 1, explain: 'Titik ke-3 dari 0 berada di 3/5.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 3 bagian sama. Titik PERTAMA dari 0 menunjukkan pecahan ...', visual: '0 — • — • — 1\n     ↑ titik ke-1', options: ['1/3', '2/3', '3/3', '1/2'], answer: 0, explain: 'Titik ke-1 dari 0 berada di 1/3.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 4 bagian sama. Titik PERTAMA dari 0 menunjukkan pecahan ...', visual: '0 — • — • — • — 1\n     ↑ titik ke-1', options: ['1/4', '2/4', '3/4', '4/4'], answer: 0, explain: 'Titik ke-1 dari 0 berada di 1/4.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 5 bagian sama. Titik KEEMPAT dari 0 menunjukkan pecahan ...', visual: '0 —•—•—•—•— 1\n           ↑ titik ke-4', options: ['2/5', '3/5', '4/5', '1/5'], answer: 2, explain: 'Titik ke-4 dari 0 berada di 4/5.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 6 bagian sama. Titik KETIGA dari 0 menunjukkan pecahan ...', visual: '0 —•—•—•—•—•— 1\n         ↑ titik ke-3', options: ['1/6', '2/6', '3/6', '4/6'], answer: 2, explain: 'Titik ke-3 dari 0 berada di 3/6.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 3 bagian sama. Titik KEDUA dari 0 menunjukkan pecahan ...', visual: '0 — • — • — 1\n         ↑ titik ke-2', options: ['1/3', '2/3', '3/3', '1/2'], answer: 1, explain: 'Titik ke-2 dari 0 berada di 2/3.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 8 bagian sama. Titik PERTAMA dari 0 menunjukkan pecahan ...', visual: '0 —•—•—•—•—•—•—•— 1\n     ↑ titik ke-1', options: ['1/8', '2/8', '3/8', '1/4'], answer: 0, explain: 'Titik ke-1 dari 0 berada di 1/8.' }
    ]},
    { materi: 'Membandingkan Pecahan', variants: [
      { q: 'Tanda yang tepat untuk 3/5 ... 2/5 adalah ...', visual: '3/5 ◻ 2/5', options: ['lebih kecil (<)', 'lebih besar (>)', 'sama dengan (=)', 'tidak bisa dibanding'], answer: 1, explain: 'Penyebut sama, pembilang lebih besar nilainya lebih besar: 3/5 > 2/5.' },
      { q: 'Tanda yang tepat untuk 1/4 ... 3/4 adalah ...', visual: '1/4 ◻ 3/4', options: ['lebih kecil (<)', 'lebih besar (>)', 'sama dengan (=)', 'tidak bisa dibanding'], answer: 0, explain: 'Penyebut sama, pembilang lebih kecil nilainya lebih kecil: 1/4 < 3/4.' },
      { q: 'Pecahan terbesar di antara 2/7, 5/7, dan 3/7 adalah ...', visual: '2/7   5/7   3/7', options: ['2/7', '5/7', '3/7', 'sama besar'], answer: 1, explain: 'Penyebut sama, pembilang terbesar = 5, jadi 5/7 terbesar.' },
      { q: 'Tanda yang tepat untuk 4/6 ... 5/6 adalah ...', visual: '4/6 ◻ 5/6', options: ['lebih kecil (<)', 'lebih besar (>)', 'sama dengan (=)', 'tidak bisa dibanding'], answer: 0, explain: 'Penyebut sama, 4 < 5 maka 4/6 < 5/6.' },
      { q: 'Pecahan terkecil di antara 6/9, 2/9, dan 4/9 adalah ...', visual: '6/9   2/9   4/9', options: ['6/9', '2/9', '4/9', 'sama besar'], answer: 1, explain: 'Penyebut sama, pembilang terkecil = 2, jadi 2/9 terkecil.' },
      { q: 'Tanda yang tepat untuk 2/8 ... 6/8 adalah ...', visual: '2/8 ◻ 6/8', options: ['lebih kecil (<)', 'lebih besar (>)', 'sama dengan (=)', 'tidak bisa dibanding'], answer: 0, explain: 'Penyebut sama, 2 < 6 maka 2/8 < 6/8.' },
      { q: 'Tanda yang tepat untuk 7/10 ... 4/10 adalah ...', visual: '7/10 ◻ 4/10', options: ['lebih kecil (<)', 'lebih besar (>)', 'sama dengan (=)', 'tidak bisa dibanding'], answer: 1, explain: 'Penyebut sama, 7 > 4 maka 7/10 > 4/10.' },
      { q: 'Pecahan terbesar di antara 1/6, 5/6, dan 3/6 adalah ...', visual: '1/6   5/6   3/6', options: ['1/6', '5/6', '3/6', 'sama besar'], answer: 1, explain: 'Penyebut sama, pembilang terbesar = 5, jadi 5/6 terbesar.' },
      { q: 'Tanda yang tepat untuk 5/9 ... 5/9 adalah ...', visual: '5/9 ◻ 5/9', options: ['lebih kecil (<)', 'lebih besar (>)', 'sama dengan (=)', 'tidak bisa dibanding'], answer: 2, explain: 'Pecahan yang sama persis bernilai sama: 5/9 = 5/9.' },
      { q: 'Pecahan terkecil di antara 4/7, 1/7, dan 6/7 adalah ...', visual: '4/7   1/7   6/7', options: ['4/7', '1/7', '6/7', 'sama besar'], answer: 1, explain: 'Penyebut sama, pembilang terkecil = 1, jadi 1/7 terkecil.' }
    ]},
    { materi: 'Pecahan Senilai', variants: [
      { q: 'Pecahan yang senilai dengan 1/2 adalah ...', visual: '1/2 = ?/4', options: ['1/4', '2/4', '3/4', '1/3'], answer: 1, explain: '1/2 = 2/4 karena pembilang & penyebut sama-sama dikali 2.' },
      { q: 'Pecahan yang senilai dengan 1/3 adalah ...', visual: '1/3 = ?/6', options: ['1/6', '2/6', '3/6', '4/6'], answer: 1, explain: '1/3 = 2/6 karena dikali 2 di atas dan bawah.' },
      { q: 'Pecahan 2/4 jika disederhanakan menjadi ...', visual: '2/4 = ?', options: ['1/2', '1/4', '2/2', '1/3'], answer: 0, explain: '2/4 dibagi 2 di atas dan bawah menjadi 1/2.' },
      { q: 'Pecahan yang senilai dengan 2/3 adalah ...', visual: '2/3 = ?/6', options: ['2/6', '4/6', '3/6', '1/3'], answer: 1, explain: '2/3 = 4/6 karena dikali 2 di atas dan bawah.' },
      { q: 'Pecahan 3/9 jika disederhanakan menjadi ...', visual: '3/9 = ?', options: ['1/2', '1/3', '3/3', '1/9'], answer: 1, explain: '3/9 dibagi 3 di atas dan bawah menjadi 1/3.' },
      { q: 'Pecahan yang senilai dengan 1/4 adalah ...', visual: '1/4 = ?/8', options: ['1/8', '2/8', '3/8', '4/8'], answer: 1, explain: '1/4 = 2/8 karena dikali 2 di atas dan bawah.' },
      { q: 'Pecahan yang senilai dengan 3/4 adalah ...', visual: '3/4 = ?/8', options: ['3/8', '4/8', '6/8', '8/8'], answer: 2, explain: '3/4 = 6/8 karena dikali 2 di atas dan bawah.' },
      { q: 'Pecahan 4/8 jika disederhanakan menjadi ...', visual: '4/8 = ?', options: ['1/2', '1/4', '2/4', '1/8'], answer: 0, explain: '4/8 dibagi 4 di atas dan bawah menjadi 1/2.' },
      { q: 'Pecahan yang senilai dengan 1/5 adalah ...', visual: '1/5 = ?/10', options: ['1/10', '2/10', '3/10', '5/10'], answer: 1, explain: '1/5 = 2/10 karena dikali 2 di atas dan bawah.' },
      { q: 'Pecahan 6/9 jika disederhanakan menjadi ...', visual: '6/9 = ?', options: ['1/3', '2/3', '3/3', '1/2'], answer: 1, explain: '6/9 dibagi 3 di atas dan bawah menjadi 2/3.' }
    ]},
    { materi: 'Mengenal Bangun Datar', variants: [
      { q: 'Bangun datar yang memiliki 3 sisi dan 3 titik sudut adalah ...', visual: '🔺', options: ['Persegi', 'Segitiga', 'Lingkaran', 'Persegi panjang'], answer: 1, explain: 'Bangun dengan 3 sisi dan 3 sudut adalah segitiga.' },
      { q: 'Bangun datar yang tidak memiliki sudut (berbentuk bulat) adalah ...', visual: '⭕', options: ['Segitiga', 'Persegi', 'Lingkaran', 'Trapesium'], answer: 2, explain: 'Lingkaran tidak memiliki sudut.' },
      { q: 'Bangun datar dengan 4 sisi, sisi berhadapan sama panjang, dan punya sudut siku-siku adalah ...', visual: '▭', options: ['Segitiga', 'Persegi panjang', 'Lingkaran', 'Layang-layang'], answer: 1, explain: 'Ciri itu dimiliki persegi panjang.' },
      { q: 'Bangun datar dengan 4 sisi sama panjang yang miring seperti ketupat adalah ...', visual: '🔷', options: ['Persegi', 'Belah ketupat', 'Lingkaran', 'Segitiga'], answer: 1, explain: 'Bangun bersisi 4 sama panjang yang miring disebut belah ketupat.' },
      { q: 'Bangun datar yang memiliki 6 sisi disebut ...', visual: '⬡', options: ['Segilima', 'Segienam', 'Segiempat', 'Segitiga'], answer: 1, explain: 'Bangun dengan 6 sisi disebut segienam.' },
      { q: 'Bangun datar dengan 4 sisi yang semuanya sama panjang dan bersudut siku-siku adalah ...', visual: '⬜', options: ['Persegi', 'Persegi panjang', 'Segitiga', 'Lingkaran'], answer: 0, explain: '4 sisi sama panjang + sudut siku-siku adalah persegi.' },
      { q: 'Bangun datar yang memiliki tepat 1 pasang sisi sejajar adalah ...', visual: '⏢', options: ['Persegi', 'Trapesium', 'Lingkaran', 'Segitiga'], answer: 1, explain: 'Trapesium punya tepat 1 pasang sisi sejajar.' },
      { q: 'Bangun datar yang bersisi lengkung dan tidak memiliki sudut adalah ...', visual: '⭕', options: ['Segitiga', 'Lingkaran', 'Persegi', 'Trapesium'], answer: 1, explain: 'Lingkaran bersisi lengkung dan tidak punya sudut.' },
      { q: 'Bangun datar yang memiliki 5 titik sudut disebut ...', visual: '⬠', options: ['Segitiga', 'Segiempat', 'Segilima', 'Segienam'], answer: 2, explain: 'Bangun dengan 5 titik sudut disebut segilima.' },
      { q: 'Bangun datar dengan 3 sisi yang sama panjang disebut ...', visual: '🔺', options: ['Segitiga sama sisi', 'Persegi', 'Lingkaran', 'Trapesium'], answer: 0, explain: 'Segitiga dengan 3 sisi sama panjang disebut segitiga sama sisi.' }
    ]},
    { materi: 'Sisi Bangun Datar', variants: [
      { q: 'Banyak sisi pada bangun persegi adalah ...', visual: '⬜', options: ['3', '4', '5', '6'], answer: 1, explain: 'Persegi memiliki 4 sisi sama panjang.' },
      { q: 'Banyak sisi pada bangun segitiga adalah ...', visual: '🔺', options: ['2', '3', '4', '5'], answer: 1, explain: 'Segitiga memiliki 3 sisi.' },
      { q: 'Bangun datar yang memiliki 5 sisi disebut ...', visual: '⬠', options: ['Segitiga', 'Segiempat', 'Segilima', 'Segienam'], answer: 2, explain: 'Bangun dengan 5 sisi disebut segilima.' },
      { q: 'Banyak sisi pada bangun persegi panjang adalah ...', visual: '▭', options: ['3', '4', '5', '6'], answer: 1, explain: 'Persegi panjang memiliki 4 sisi.' },
      { q: 'Banyak sisi pada bangun segienam adalah ...', visual: '⬡', options: ['4', '5', '6', '7'], answer: 2, explain: 'Segienam memiliki 6 sisi.' },
      { q: 'Banyak sisi lurus pada bangun lingkaran adalah ...', visual: '⭕', options: ['0 (tidak ada sisi lurus)', '1', '2', '4'], answer: 0, explain: 'Lingkaran tidak memiliki sisi lurus (sisinya melengkung).' },
      { q: 'Banyak sisi pada bangun segilima adalah ...', visual: '⬠', options: ['4', '5', '6', '3'], answer: 1, explain: 'Segilima memiliki 5 sisi.' },
      { q: 'Banyak sisi pada bangun belah ketupat adalah ...', visual: '🔷', options: ['3', '4', '5', '6'], answer: 1, explain: 'Belah ketupat memiliki 4 sisi.' },
      { q: 'Banyak sisi pada bangun trapesium adalah ...', visual: '⏢', options: ['3', '4', '5', '6'], answer: 1, explain: 'Trapesium memiliki 4 sisi.' },
      { q: 'Bangun datar yang memiliki 8 sisi disebut ...', visual: '⯃', options: ['Segienam', 'Segitujuh', 'Segidelapan', 'Segilima'], answer: 2, explain: 'Bangun dengan 8 sisi disebut segidelapan.' }
    ]},
    { materi: 'Titik Sudut', variants: [
      { q: 'Banyak titik sudut pada bangun segitiga adalah ...', visual: '🔺', options: ['2', '3', '4', '5'], answer: 1, explain: 'Segitiga memiliki 3 titik sudut.' },
      { q: 'Banyak titik sudut pada bangun persegi panjang adalah ...', visual: '▭', options: ['2', '3', '4', '6'], answer: 2, explain: 'Persegi panjang memiliki 4 titik sudut.' },
      { q: 'Bangun datar yang TIDAK memiliki titik sudut adalah ...', visual: '⭕', options: ['Segitiga', 'Persegi', 'Lingkaran', 'Trapesium'], answer: 2, explain: 'Lingkaran tidak punya titik sudut.' },
      { q: 'Banyak titik sudut pada bangun persegi adalah ...', visual: '⬜', options: ['2', '3', '4', '5'], answer: 2, explain: 'Persegi memiliki 4 titik sudut.' },
      { q: 'Banyak titik sudut pada bangun segilima adalah ...', visual: '⬠', options: ['3', '4', '5', '6'], answer: 2, explain: 'Segilima memiliki 5 titik sudut.' },
      { q: 'Banyak titik sudut pada bangun segienam adalah ...', visual: '⬡', options: ['4', '5', '6', '7'], answer: 2, explain: 'Segienam memiliki 6 titik sudut.' },
      { q: 'Banyak titik sudut pada bangun belah ketupat adalah ...', visual: '🔷', options: ['2', '3', '4', '5'], answer: 2, explain: 'Belah ketupat memiliki 4 titik sudut.' },
      { q: 'Banyak titik sudut pada bangun trapesium adalah ...', visual: '⏢', options: ['3', '4', '5', '6'], answer: 1, explain: 'Trapesium memiliki 4 titik sudut.' },
      { q: 'Bangun datar yang memiliki 3 titik sudut adalah ...', visual: '🔺', options: ['Persegi', 'Segitiga', 'Lingkaran', 'Persegi panjang'], answer: 1, explain: 'Segitiga memiliki 3 titik sudut.' },
      { q: 'Banyak titik sudut pada bangun jajar genjang adalah ...', visual: '▱', options: ['2', '3', '4', '6'], answer: 2, explain: 'Jajar genjang memiliki 4 titik sudut.' }
    ]},
    { materi: 'Jenis Sudut', variants: [
      { q: 'Sudut yang besarnya tepat 90° disebut sudut ...', visual: '∟', options: ['Lancip', 'Tumpul', 'Siku-siku', 'Lurus'], answer: 2, explain: 'Sudut 90° disebut sudut siku-siku.' },
      { q: 'Sudut yang besarnya kurang dari 90° disebut sudut ...', visual: '∠', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], answer: 0, explain: 'Sudut kurang dari 90° disebut sudut lancip.' },
      { q: 'Sudut yang besarnya lebih dari 90° (tetapi kurang dari 180°) disebut sudut ...', visual: '∡', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], answer: 2, explain: 'Sudut lebih dari 90° disebut sudut tumpul.' },
      { q: 'Sudut pada pojok buku atau pojok meja biasanya berupa sudut ...', visual: '📐', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], answer: 1, explain: 'Pojok buku membentuk sudut 90° = siku-siku.' },
      { q: 'Sudut yang besarnya tepat 180° (membentuk garis lurus) disebut sudut ...', visual: '———', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], answer: 3, explain: 'Sudut 180° disebut sudut lurus.' },
      { q: 'Sudut yang besarnya 45° termasuk jenis sudut ...', visual: '∠', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], answer: 0, explain: '45° kurang dari 90°, jadi termasuk sudut lancip.' },
      { q: 'Sudut yang besarnya 120° termasuk jenis sudut ...', visual: '∡', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], answer: 2, explain: '120° lebih dari 90° tetapi kurang dari 180°, jadi sudut tumpul.' },
      { q: 'Sudut 90° yang terbentuk pada huruf L termasuk jenis sudut ...', visual: 'L', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], answer: 1, explain: 'Sudut 90° pada huruf L adalah sudut siku-siku.' },
      { q: 'Sudut yang lebih kecil daripada sudut siku-siku adalah sudut ...', visual: '∠', options: ['Lancip', 'Tumpul', 'Lurus', 'Penuh'], answer: 0, explain: 'Sudut yang lebih kecil dari 90° (siku-siku) adalah sudut lancip.' },
      { q: 'Pada perpotongan yang membentuk huruf T, sudutnya termasuk jenis sudut ...', visual: 'T', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], answer: 1, explain: 'Perpotongan huruf T membentuk sudut 90° = siku-siku.' }
    ]},
    { materi: 'Simetri Lipat', variants: [
      { q: 'Banyak simetri lipat pada bangun persegi adalah ...', visual: '⬜', options: ['1', '2', '3', '4'], answer: 3, explain: 'Persegi memiliki 4 simetri lipat.' },
      { q: 'Banyak simetri lipat pada bangun persegi panjang adalah ...', visual: '▭', options: ['1', '2', '3', '4'], answer: 1, explain: 'Persegi panjang memiliki 2 simetri lipat.' },
      { q: 'Banyak simetri lipat pada segitiga sama sisi adalah ...', visual: '🔺', options: ['1', '2', '3', '4'], answer: 2, explain: 'Segitiga sama sisi memiliki 3 simetri lipat.' },
      { q: 'Banyak simetri lipat pada bangun lingkaran adalah ...', visual: '⭕', options: ['1', '2', '4', 'Sangat banyak (tak terhingga)'], answer: 3, explain: 'Lingkaran punya simetri lipat sangat banyak (tak terhingga).' },
      { q: 'Banyak simetri lipat pada segitiga sama kaki adalah ...', visual: '🔺', options: ['1', '2', '3', '4'], answer: 0, explain: 'Segitiga sama kaki memiliki 1 simetri lipat.' },
      { q: 'Banyak simetri lipat pada segienam beraturan adalah ...', visual: '⬡', options: ['3', '4', '5', '6'], answer: 3, explain: 'Segienam beraturan memiliki 6 simetri lipat.' },
      { q: 'Banyak simetri lipat pada bangun layang-layang adalah ...', visual: '🪁', options: ['1', '2', '3', '4'], answer: 0, explain: 'Layang-layang memiliki 1 simetri lipat.' },
      { q: 'Banyak simetri lipat pada huruf A adalah ...', visual: 'A', options: ['1', '2', '3', '0'], answer: 0, explain: 'Huruf A memiliki 1 simetri lipat (garis tegak di tengah).' },
      { q: 'Banyak simetri lipat pada bangun belah ketupat adalah ...', visual: '🔷', options: ['1', '2', '3', '4'], answer: 1, explain: 'Belah ketupat memiliki 2 simetri lipat.' },
      { q: 'Banyak simetri lipat pada segilima beraturan adalah ...', visual: '⬠', options: ['3', '4', '5', '6'], answer: 2, explain: 'Segilima beraturan memiliki 5 simetri lipat.' }
    ]},
    { materi: 'Ciri Bangun Datar', variants: [
      { q: 'Bangun datar yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku adalah ...', visual: '⬜', options: ['Persegi panjang', 'Persegi', 'Jajar genjang', 'Belah ketupat'], answer: 1, explain: '4 sisi sama panjang + 4 sudut siku-siku adalah ciri persegi.' },
      { q: 'Bangun dengan sisi berhadapan sama panjang, 4 sudut siku-siku, tetapi tidak semua sisi sama panjang adalah ...', visual: '▭', options: ['Persegi', 'Persegi panjang', 'Segitiga', 'Lingkaran'], answer: 1, explain: 'Ciri itu dimiliki persegi panjang.' },
      { q: 'Bangun datar dengan 3 sisi sama panjang disebut ...', visual: '🔺', options: ['Segitiga sama sisi', 'Persegi', 'Lingkaran', 'Trapesium'], answer: 0, explain: 'Segitiga dengan 3 sisi sama panjang disebut segitiga sama sisi.' },
      { q: 'Bangun dengan semua sisi sama panjang tetapi sudutnya tidak siku-siku (miring) adalah ...', visual: '🔷', options: ['Persegi', 'Belah ketupat', 'Persegi panjang', 'Lingkaran'], answer: 1, explain: 'Sisi sama panjang tapi miring adalah ciri belah ketupat.' },
      { q: 'Bangun datar yang memiliki tepat 1 pasang sisi sejajar adalah ...', visual: '⏢', options: ['Persegi', 'Trapesium', 'Lingkaran', 'Segitiga'], answer: 1, explain: 'Trapesium memiliki tepat 1 pasang sisi yang sejajar.' },
      { q: 'Bangun dengan 4 sisi, 2 pasang sisi sejajar, tetapi sudutnya tidak siku-siku adalah ...', visual: '▱', options: ['Persegi', 'Jajar genjang', 'Lingkaran', 'Segitiga'], answer: 1, explain: 'Ciri itu dimiliki jajar genjang.' },
      { q: 'Bangun dengan semua sisi dan semua sudut sama besar serta memiliki 3 sisi adalah ...', visual: '🔺', options: ['Segitiga sama sisi', 'Persegi', 'Lingkaran', 'Trapesium'], answer: 0, explain: 'Segitiga sama sisi punya 3 sisi dan 3 sudut yang sama.' },
      { q: 'Bangun datar yang bulat sempurna tanpa sisi lurus dan tanpa sudut adalah ...', visual: '⭕', options: ['Lingkaran', 'Persegi', 'Segitiga', 'Trapesium'], answer: 0, explain: 'Lingkaran bulat sempurna, tanpa sisi lurus dan tanpa sudut.' },
      { q: 'Bangun dengan 4 sisi sama panjang yang sudutnya miring (bukan siku-siku) adalah ...', visual: '🔷', options: ['Persegi', 'Belah ketupat', 'Persegi panjang', 'Lingkaran'], answer: 1, explain: 'Sisi sama panjang tetapi sudut miring adalah ciri belah ketupat.' },
      { q: 'Bangun segitiga dengan 2 sisi sama panjang (kaki) dan 1 sisi alas adalah ...', visual: '🔺', options: ['Segitiga sama kaki', 'Persegi', 'Lingkaran', 'Persegi panjang'], answer: 0, explain: 'Segitiga dengan 2 sisi sama panjang disebut segitiga sama kaki.' }
    ]},
    { materi: 'Keliling Bangun Datar', variants: [
      { q: 'Sebuah segitiga memiliki sisi 4 cm, 5 cm, dan 6 cm. Kelilingnya adalah ...', visual: '🔺 4cm, 5cm, 6cm', options: ['14 cm', '15 cm', '16 cm', '20 cm'], answer: 1, explain: 'Keliling = jumlah semua sisi = 4 + 5 + 6 = 15 cm.' },
      { q: 'Sebuah segitiga sama sisi memiliki panjang sisi 7 cm. Kelilingnya adalah ...', visual: '🔺 sisi = 7 cm', options: ['14 cm', '21 cm', '28 cm', '7 cm'], answer: 1, explain: 'Keliling = 3 × 7 = 21 cm.' },
      { q: 'Sebuah segitiga memiliki sisi 8 cm, 8 cm, dan 5 cm. Kelilingnya adalah ...', visual: '🔺 8cm, 8cm, 5cm', options: ['16 cm', '18 cm', '21 cm', '13 cm'], answer: 2, explain: 'Keliling = 8 + 8 + 5 = 21 cm.' },
      { q: 'Sebuah segitiga sama sisi memiliki panjang sisi 6 cm. Kelilingnya adalah ...', visual: '🔺 sisi = 6 cm', options: ['12 cm', '16 cm', '18 cm', '24 cm'], answer: 2, explain: 'Keliling = 3 × 6 = 18 cm.' },
      { q: 'Sebuah segiempat memiliki sisi 3 cm, 4 cm, 5 cm, dan 6 cm. Kelilingnya adalah ...', visual: '⬛ 3,4,5,6 cm', options: ['15 cm', '16 cm', '18 cm', '20 cm'], answer: 2, explain: 'Keliling = 3 + 4 + 5 + 6 = 18 cm.' },
      { q: 'Sebuah segitiga sama sisi memiliki panjang sisi 5 cm. Kelilingnya adalah ...', visual: '🔺 sisi = 5 cm', options: ['10 cm', '12 cm', '15 cm', '20 cm'], answer: 2, explain: 'Keliling = 3 × 5 = 15 cm.' },
      { q: 'Sebuah segitiga memiliki sisi 7 cm, 8 cm, dan 9 cm. Kelilingnya adalah ...', visual: '🔺 7,8,9 cm', options: ['22 cm', '24 cm', '25 cm', '23 cm'], answer: 1, explain: 'Keliling = 7 + 8 + 9 = 24 cm.' },
      { q: 'Sebuah segiempat memiliki sisi 2 cm, 3 cm, 4 cm, dan 5 cm. Kelilingnya adalah ...', visual: '⬛ 2,3,4,5 cm', options: ['12 cm', '13 cm', '14 cm', '15 cm'], answer: 2, explain: 'Keliling = 2 + 3 + 4 + 5 = 14 cm.' },
      { q: 'Sebuah segitiga memiliki sisi 10 cm, 10 cm, dan 6 cm. Kelilingnya adalah ...', visual: '🔺 10,10,6 cm', options: ['24 cm', '26 cm', '28 cm', '30 cm'], answer: 1, explain: 'Keliling = 10 + 10 + 6 = 26 cm.' },
      { q: 'Sebuah segitiga sama sisi memiliki panjang sisi 9 cm. Kelilingnya adalah ...', visual: '🔺 sisi = 9 cm', options: ['18 cm', '24 cm', '27 cm', '36 cm'], answer: 2, explain: 'Keliling = 3 × 9 = 27 cm.' }
    ]},
    { materi: 'Keliling Persegi', variants: [
      { q: 'Sebuah persegi memiliki panjang sisi 6 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 6 cm', options: ['12 cm', '18 cm', '24 cm', '36 cm'], answer: 2, explain: 'Keliling persegi = 4 × sisi = 4 × 6 = 24 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 9 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 9 cm', options: ['18 cm', '27 cm', '36 cm', '81 cm'], answer: 2, explain: 'Keliling persegi = 4 × 9 = 36 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 10 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 10 cm', options: ['20 cm', '30 cm', '40 cm', '100 cm'], answer: 2, explain: 'Keliling persegi = 4 × 10 = 40 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 5 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 5 cm', options: ['10 cm', '15 cm', '20 cm', '25 cm'], answer: 2, explain: 'Keliling persegi = 4 × 5 = 20 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 12 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 12 cm', options: ['24 cm', '36 cm', '48 cm', '144 cm'], answer: 2, explain: 'Keliling persegi = 4 × 12 = 48 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 4 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 4 cm', options: ['8 cm', '12 cm', '16 cm', '20 cm'], answer: 2, explain: 'Keliling persegi = 4 × 4 = 16 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 7 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 7 cm', options: ['21 cm', '24 cm', '28 cm', '49 cm'], answer: 2, explain: 'Keliling persegi = 4 × 7 = 28 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 8 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 8 cm', options: ['16 cm', '24 cm', '32 cm', '64 cm'], answer: 2, explain: 'Keliling persegi = 4 × 8 = 32 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 11 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 11 cm', options: ['22 cm', '33 cm', '44 cm', '121 cm'], answer: 2, explain: 'Keliling persegi = 4 × 11 = 44 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 15 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 15 cm', options: ['30 cm', '45 cm', '60 cm', '225 cm'], answer: 2, explain: 'Keliling persegi = 4 × 15 = 60 cm.' }
    ]},
    { materi: 'Keliling Persegi Panjang', variants: [
      { q: 'Persegi panjang dengan panjang 8 cm dan lebar 5 cm. Kelilingnya adalah ...', visual: '▭ p = 8 cm, l = 5 cm', options: ['13 cm', '26 cm', '40 cm', '46 cm'], answer: 1, explain: 'Keliling = 2 × (p + l) = 2 × (8 + 5) = 26 cm.' },
      { q: 'Persegi panjang dengan panjang 10 cm dan lebar 4 cm. Kelilingnya adalah ...', visual: '▭ p = 10 cm, l = 4 cm', options: ['14 cm', '28 cm', '40 cm', '24 cm'], answer: 1, explain: 'Keliling = 2 × (10 + 4) = 28 cm.' },
      { q: 'Persegi panjang dengan panjang 12 cm dan lebar 6 cm. Kelilingnya adalah ...', visual: '▭ p = 12 cm, l = 6 cm', options: ['18 cm', '36 cm', '72 cm', '30 cm'], answer: 1, explain: 'Keliling = 2 × (12 + 6) = 36 cm.' },
      { q: 'Persegi panjang dengan panjang 7 cm dan lebar 3 cm. Kelilingnya adalah ...', visual: '▭ p = 7 cm, l = 3 cm', options: ['10 cm', '20 cm', '21 cm', '17 cm'], answer: 1, explain: 'Keliling = 2 × (7 + 3) = 20 cm.' },
      { q: 'Persegi panjang dengan panjang 15 cm dan lebar 5 cm. Kelilingnya adalah ...', visual: '▭ p = 15 cm, l = 5 cm', options: ['20 cm', '30 cm', '40 cm', '75 cm'], answer: 2, explain: 'Keliling = 2 × (15 + 5) = 40 cm.' },
      { q: 'Persegi panjang dengan panjang 9 cm dan lebar 4 cm. Kelilingnya adalah ...', visual: '▭ p = 9 cm, l = 4 cm', options: ['13 cm', '22 cm', '26 cm', '36 cm'], answer: 2, explain: 'Keliling = 2 × (9 + 4) = 26 cm.' },
      { q: 'Persegi panjang dengan panjang 11 cm dan lebar 6 cm. Kelilingnya adalah ...', visual: '▭ p = 11 cm, l = 6 cm', options: ['17 cm', '28 cm', '34 cm', '66 cm'], answer: 2, explain: 'Keliling = 2 × (11 + 6) = 34 cm.' },
      { q: 'Persegi panjang dengan panjang 20 cm dan lebar 10 cm. Kelilingnya adalah ...', visual: '▭ p = 20 cm, l = 10 cm', options: ['30 cm', '40 cm', '60 cm', '200 cm'], answer: 2, explain: 'Keliling = 2 × (20 + 10) = 60 cm.' },
      { q: 'Persegi panjang dengan panjang 6 cm dan lebar 4 cm. Kelilingnya adalah ...', visual: '▭ p = 6 cm, l = 4 cm', options: ['10 cm', '20 cm', '24 cm', '12 cm'], answer: 1, explain: 'Keliling = 2 × (6 + 4) = 20 cm.' },
      { q: 'Persegi panjang dengan panjang 14 cm dan lebar 7 cm. Kelilingnya adalah ...', visual: '▭ p = 14 cm, l = 7 cm', options: ['21 cm', '28 cm', '42 cm', '98 cm'], answer: 2, explain: 'Keliling = 2 × (14 + 7) = 42 cm.' }
    ]},
    { materi: 'Luas Bangun Datar', variants: [
      { q: 'Luas persegi panjang dengan panjang 8 cm dan lebar 5 cm adalah ...', visual: '▭ p = 8 cm, l = 5 cm', options: ['13 cm²', '26 cm²', '40 cm²', '45 cm²'], answer: 2, explain: 'Luas = panjang × lebar = 8 × 5 = 40 cm².' },
      { q: 'Luas persegi dengan panjang sisi 6 cm adalah ...', visual: '⬜ sisi = 6 cm', options: ['12 cm²', '24 cm²', '36 cm²', '30 cm²'], answer: 2, explain: 'Luas persegi = sisi × sisi = 6 × 6 = 36 cm².' },
      { q: 'Luas persegi panjang dengan panjang 9 cm dan lebar 4 cm adalah ...', visual: '▭ p = 9 cm, l = 4 cm', options: ['13 cm²', '26 cm²', '36 cm²', '40 cm²'], answer: 2, explain: 'Luas = 9 × 4 = 36 cm².' },
      { q: 'Luas persegi dengan panjang sisi 7 cm adalah ...', visual: '⬜ sisi = 7 cm', options: ['14 cm²', '28 cm²', '49 cm²', '21 cm²'], answer: 2, explain: 'Luas persegi = 7 × 7 = 49 cm².' },
      { q: 'Luas persegi panjang dengan panjang 10 cm dan lebar 6 cm adalah ...', visual: '▭ p = 10 cm, l = 6 cm', options: ['16 cm²', '32 cm²', '60 cm²', '40 cm²'], answer: 2, explain: 'Luas = 10 × 6 = 60 cm².' },
      { q: 'Luas persegi dengan panjang sisi 5 cm adalah ...', visual: '⬜ sisi = 5 cm', options: ['10 cm²', '20 cm²', '25 cm²', '15 cm²'], answer: 2, explain: 'Luas persegi = 5 × 5 = 25 cm².' },
      { q: 'Luas persegi panjang dengan panjang 7 cm dan lebar 3 cm adalah ...', visual: '▭ p = 7 cm, l = 3 cm', options: ['10 cm²', '20 cm²', '21 cm²', '24 cm²'], answer: 2, explain: 'Luas = 7 × 3 = 21 cm².' },
      { q: 'Luas persegi dengan panjang sisi 9 cm adalah ...', visual: '⬜ sisi = 9 cm', options: ['18 cm²', '36 cm²', '81 cm²', '72 cm²'], answer: 2, explain: 'Luas persegi = 9 × 9 = 81 cm².' },
      { q: 'Luas persegi panjang dengan panjang 12 cm dan lebar 5 cm adalah ...', visual: '▭ p = 12 cm, l = 5 cm', options: ['34 cm²', '60 cm²', '17 cm²', '55 cm²'], answer: 1, explain: 'Luas = 12 × 5 = 60 cm².' },
      { q: 'Luas persegi dengan panjang sisi 8 cm adalah ...', visual: '⬜ sisi = 8 cm', options: ['16 cm²', '32 cm²', '64 cm²', '48 cm²'], answer: 2, explain: 'Luas persegi = 8 × 8 = 64 cm².' }
    ]},
    { materi: 'Mengurutkan Data', variants: [
      { q: 'Urutkan data nilai berikut dari yang TERKECIL: 7, 3, 9, 5.', visual: '7, 3, 9, 5', options: ['3, 5, 7, 9', '9, 7, 5, 3', '3, 7, 5, 9', '5, 3, 9, 7'], answer: 0, explain: 'Dari terkecil ke terbesar: 3, 5, 7, 9.' },
      { q: 'Urutkan data berikut dari yang TERBESAR: 4, 8, 2, 6.', visual: '4, 8, 2, 6', options: ['2, 4, 6, 8', '8, 6, 4, 2', '8, 4, 6, 2', '2, 6, 4, 8'], answer: 1, explain: 'Dari terbesar ke terkecil: 8, 6, 4, 2.' },
      { q: 'Urutkan data berikut dari yang TERKECIL: 12, 5, 20, 8.', visual: '12, 5, 20, 8', options: ['5, 8, 12, 20', '20, 12, 8, 5', '5, 12, 8, 20', '8, 5, 12, 20'], answer: 0, explain: 'Dari terkecil ke terbesar: 5, 8, 12, 20.' },
      { q: 'Urutkan data berikut dari yang TERKECIL: 15, 9, 21, 3.', visual: '15, 9, 21, 3', options: ['3, 9, 15, 21', '21, 15, 9, 3', '3, 15, 9, 21', '9, 3, 21, 15'], answer: 0, explain: 'Dari terkecil ke terbesar: 3, 9, 15, 21.' },
      { q: 'Urutkan data berikut dari yang TERBESAR: 10, 25, 5, 18.', visual: '10, 25, 5, 18', options: ['5, 10, 18, 25', '25, 18, 10, 5', '25, 10, 18, 5', '5, 18, 10, 25'], answer: 1, explain: 'Dari terbesar ke terkecil: 25, 18, 10, 5.' },
      { q: 'Urutkan data berikut dari yang TERKECIL: 6, 2, 11, 4.', visual: '6, 2, 11, 4', options: ['2, 4, 6, 11', '11, 6, 4, 2', '2, 6, 4, 11', '4, 2, 11, 6'], answer: 0, explain: 'Dari terkecil ke terbesar: 2, 4, 6, 11.' },
      { q: 'Urutkan data berikut dari yang TERBESAR: 14, 7, 21, 10.', visual: '14, 7, 21, 10', options: ['7, 10, 14, 21', '21, 14, 10, 7', '21, 10, 14, 7', '7, 14, 10, 21'], answer: 1, explain: 'Dari terbesar ke terkecil: 21, 14, 10, 7.' },
      { q: 'Urutkan data berikut dari yang TERKECIL: 30, 18, 25, 12.', visual: '30, 18, 25, 12', options: ['12, 18, 25, 30', '30, 25, 18, 12', '12, 25, 18, 30', '18, 12, 30, 25'], answer: 0, explain: 'Dari terkecil ke terbesar: 12, 18, 25, 30.' },
      { q: 'Urutkan data berikut dari yang TERBESAR: 9, 5, 13, 7.', visual: '9, 5, 13, 7', options: ['5, 7, 9, 13', '13, 9, 7, 5', '13, 7, 9, 5', '5, 9, 7, 13'], answer: 1, explain: 'Dari terbesar ke terkecil: 13, 9, 7, 5.' },
      { q: 'Urutkan data berikut dari yang TERKECIL: 8, 16, 4, 12.', visual: '8, 16, 4, 12', options: ['4, 8, 12, 16', '16, 12, 8, 4', '4, 12, 8, 16', '8, 4, 16, 12'], answer: 0, explain: 'Dari terkecil ke terbesar: 4, 8, 12, 16.' }
    ]},
    { materi: 'Membandingkan Data', variants: [
      { q: 'Data berat badan (kg): 25, 30, 22, 28. Selisih data terbesar dan terkecil adalah ...', visual: '25, 30, 22, 28', options: ['6 kg', '8 kg', '10 kg', '5 kg'], answer: 1, explain: 'Terbesar 30, terkecil 22. Selisih = 30 − 22 = 8 kg.' },
      { q: 'Data nilai ulangan: 70, 90, 60, 80. Selisih nilai tertinggi dan terendah adalah ...', visual: '70, 90, 60, 80', options: ['20', '30', '10', '40'], answer: 1, explain: 'Tertinggi 90, terendah 60. Selisih = 90 − 60 = 30.' },
      { q: 'Data tinggi (cm): 130, 145, 138. Data yang terbesar adalah ...', visual: '130, 145, 138', options: ['130', '145', '138', 'Sama'], answer: 1, explain: 'Data terbesar adalah 145 cm.' },
      { q: 'Data suhu: 40, 55, 35, 50. Selisih data terbesar dan terkecil adalah ...', visual: '40, 55, 35, 50', options: ['15', '20', '25', '10'], answer: 1, explain: 'Terbesar 55, terkecil 35. Selisih = 55 − 35 = 20.' },
      { q: 'Data jumlah buku: 12, 8, 15, 10. Data yang terkecil adalah ...', visual: '12, 8, 15, 10', options: ['8', '10', '12', '15'], answer: 0, explain: 'Data terkecil adalah 8.' },
      { q: 'Data: 60, 75, 55, 70. Selisih data terbesar dan terkecil adalah ...', visual: '60, 75, 55, 70', options: ['15', '20', '25', '10'], answer: 1, explain: 'Terbesar 75, terkecil 55. Selisih = 75 − 55 = 20.' },
      { q: 'Data nilai: 80, 95, 70, 85. Nilai yang tertinggi adalah ...', visual: '80, 95, 70, 85', options: ['80', '95', '70', '85'], answer: 1, explain: 'Nilai tertinggi adalah 95.' },
      { q: 'Data: 14, 9, 20, 11. Selisih data terbesar dan terkecil adalah ...', visual: '14, 9, 20, 11', options: ['9', '10', '11', '12'], answer: 2, explain: 'Terbesar 20, terkecil 9. Selisih = 20 − 9 = 11.' },
      { q: 'Data: 35, 50, 45, 40. Data yang terendah adalah ...', visual: '35, 50, 45, 40', options: ['35', '40', '45', '50'], answer: 0, explain: 'Data terendah adalah 35.' },
      { q: 'Data: 100, 120, 90, 110. Selisih data terbesar dan terkecil adalah ...', visual: '100, 120, 90, 110', options: ['20', '30', '40', '10'], answer: 1, explain: 'Terbesar 120, terkecil 90. Selisih = 120 − 90 = 30.' }
    ]},
    { materi: 'Diagram Turus', variants: [
      { q: 'Banyak siswa gemar membaca ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||| |  →  (5+5+5+1)', options: ['15', '16', '17', '20'], answer: 1, explain: '5 + 5 + 5 + 1 = 16 siswa.' },
      { q: 'Banyak siswa gemar olahraga ditulis turus berikut. Berapa banyak siswa?', visual: '||||| |||||  →  (5+5)', options: ['5', '9', '10', '11'], answer: 2, explain: '5 + 5 = 10 siswa.' },
      { q: 'Banyak siswa gemar musik ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||| |||  →  (5+5+5+3)', options: ['15', '18', '13', '20'], answer: 1, explain: '5 + 5 + 5 + 3 = 18 siswa.' },
      { q: 'Banyak siswa gemar menari ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||| ||||| |  →  (5+5+5+5+1)', options: ['20', '21', '25', '16'], answer: 1, explain: '5 + 5 + 5 + 5 + 1 = 21 siswa.' },
      { q: 'Banyak siswa gemar melukis ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||  →  (5+2)', options: ['5', '6', '7', '8'], answer: 2, explain: '5 + 2 = 7 siswa.' },
      { q: 'Banyak siswa gemar renang ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||  →  (5+5+2)', options: ['10', '11', '12', '13'], answer: 2, explain: '5 + 5 + 2 = 12 siswa.' },
      { q: 'Banyak siswa gemar lari ditulis turus berikut. Berapa banyak siswa?', visual: '|||||  →  (5)', options: ['4', '5', '6', '3'], answer: 1, explain: 'Satu ikat turus = 5 siswa.' },
      { q: 'Banyak siswa gemar sepeda ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||| ||||  →  (5+5+5+4)', options: ['18', '19', '20', '17'], answer: 1, explain: '5 + 5 + 5 + 4 = 19 siswa.' },
      { q: 'Banyak siswa gemar catur ditulis turus berikut. Berapa banyak siswa?', visual: '|||  →  (3)', options: ['2', '3', '4', '5'], answer: 1, explain: 'Ada 3 garis, jadi 3 siswa.' },
      { q: 'Banyak siswa gemar bulutangkis ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||| |||||  →  (5+5+5+5)', options: ['15', '18', '20', '25'], answer: 2, explain: '5 + 5 + 5 + 5 = 20 siswa.' }
    ]},
    { materi: 'Penyajian Data Tabel', variants: [
      { q: 'Perhatikan tabel buah favorit. Buah yang paling banyak disukai adalah ...', visual: 'Apel : 8\nJeruk : 12\nMangga: 6\nAnggur: 10', options: ['Apel', 'Jeruk', 'Mangga', 'Anggur'], answer: 1, explain: 'Angka terbesar pada tabel adalah Jeruk = 12.' },
      { q: 'Perhatikan tabel warna favorit. Warna yang paling sedikit dipilih adalah ...', visual: 'Merah : 5\nBiru  : 9\nHijau : 7', options: ['Merah', 'Biru', 'Hijau', 'Sama'], answer: 0, explain: 'Angka terkecil pada tabel adalah Merah = 5.' },
      { q: 'Perhatikan tabel buku terjual per hari. Jumlah seluruh buku terjual adalah ...', visual: 'Senin : 4\nSelasa: 6\nRabu  : 6\nKamis : 3', options: ['17', '18', '19', '20'], answer: 2, explain: '4 + 6 + 6 + 3 = 19 buku.' },
      { q: 'Perhatikan tabel hewan peliharaan. Hewan yang paling banyak adalah ...', visual: 'Sapi   : 7\nKambing: 11\nAyam   : 9', options: ['Sapi', 'Kambing', 'Ayam', 'Sama'], answer: 1, explain: 'Angka terbesar pada tabel adalah Kambing = 11.' },
      { q: 'Perhatikan tabel nilai kelompok. Jumlah seluruh siswa adalah ...', visual: 'Kel. A: 3\nKel. B: 5\nKel. C: 2\nKel. D: 4', options: ['12', '13', '14', '15'], answer: 2, explain: '3 + 5 + 2 + 4 = 14 siswa.' },
      { q: 'Perhatikan tabel alat tulis. Alat tulis yang paling banyak adalah ...', visual: 'Pensil: 6\nPulpen: 9\nSpidol: 4', options: ['Pensil', 'Pulpen', 'Spidol', 'Sama'], answer: 1, explain: 'Angka terbesar pada tabel adalah Pulpen = 9.' },
      { q: 'Perhatikan tabel kunjungan per hari. Hari dengan kunjungan paling sedikit adalah ...', visual: 'Senin : 5\nSelasa: 3\nRabu  : 7', options: ['Senin', 'Selasa', 'Rabu', 'Sama'], answer: 1, explain: 'Angka terkecil pada tabel adalah Selasa = 3.' },
      { q: 'Perhatikan tabel nilai kelompok. Jumlah seluruh nilai adalah ...', visual: 'Kel. A: 10\nKel. B: 10\nKel. C: 5', options: ['20', '25', '30', '15'], answer: 1, explain: '10 + 10 + 5 = 25.' },
      { q: 'Perhatikan tabel buah. Perbandingan banyak ketiga buah adalah ...', visual: 'Apel : 4\nJeruk : 4\nMangga: 4', options: ['Apel terbanyak', 'Jeruk terbanyak', 'Sama banyak', 'Mangga terbanyak'], answer: 2, explain: 'Ketiganya 4, jadi sama banyak.' },
      { q: 'Perhatikan tabel warna. Jumlah seluruh data adalah ...', visual: 'Merah : 8\nBiru  : 6\nHijau : 9\nKuning: 7', options: ['28', '29', '30', '31'], answer: 2, explain: '8 + 6 + 9 + 7 = 30.' }
    ]}
  ]
};

// Acak urutan opsi sambil menjaga jawaban benar tetap tepat.
function shuffleOptions(variant) {
  const idx = variant.options.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  const options = idx.map((i) => variant.options[i]);
  const answer = idx.indexOf(variant.answer);
  return { q: variant.q, visual: variant.visual, options, answer, explain: variant.explain };
}

// Bangun 1 paket ujian: 20 soal, satu variasi acak per indikator,
// nomor & indikator tetap sesuai urutan kisi-kisi.
export function buildQuiz(grade) {
  const indikator = KISI[grade];
  return indikator.map((ind, i) => {
    const variant = ind.variants[Math.floor(Math.random() * ind.variants.length)];
    return { no: i + 1, materi: ind.materi, ...shuffleOptions(variant) };
  });
}
