// Bank soal Kelas 2 & 3 SD.
//
// ATURAN: setiap NOMOR soal terikat pada satu INDIKATOR (sesuai kisi-kisi di
// README.md). Tiap indikator punya beberapa "variants" (variasi soal). Saat
// ujian dimulai, satu variasi dipilih acak per indikator — jadi nomor &
// indikatornya tetap, hanya isi soalnya yang berganti tiap kali main.
//
// Struktur: KISI[grade] = [ { materi, variants:[ {q,visual,options,answer,explain}, ... ] }, ... ]

export const POINTS_PER_CORRECT = 10; // 20 soal × 10 = maksimal 200 poin

export const KISI = {
  2: [
    { materi: 'Penyajian Data', variants: [
      { q: 'Cara menyajikan data dengan menggunakan gambar-gambar disebut diagram ...', visual: '', options: ['Diagram gambar', 'Diagram garis', 'Diagram lingkaran', 'Diagram batang'], answer: 0, explain: 'Data yang ditampilkan memakai gambar disebut diagram gambar (piktogram).' },
      { q: 'Data dicatat menggunakan garis-garis kecil seperti coretan. Cara penyajian data itu disebut ...', visual: '', options: ['Tabel', 'Turus', 'Gambar', 'Cerita'], answer: 1, explain: 'Coretan garis-garis kecil untuk mencatat data disebut turus.' },
      { q: 'Berikut ini termasuk cara menyajikan data, KECUALI ...', visual: '', options: ['Diagram gambar', 'Turus', 'Tabel', 'Bernyanyi'], answer: 3, explain: 'Bernyanyi bukan cara menyajikan data. Data disajikan dengan gambar, turus, atau tabel.' }
    ]},
    { materi: 'Diagram Turus', variants: [
      { q: 'Satu ikat turus terdiri dari 4 garis tegak dan 1 garis miring. Satu ikat turus bernilai ...', visual: '| | | | ╱', options: ['3', '4', '5', '6'], answer: 2, explain: 'Satu ikat turus = 4 garis tegak + 1 garis miring = 5.' },
      { q: 'Bilangan 5 jika ditulis dalam turus berbentuk ...', visual: '', options: ['5 garis lurus terpisah', '4 garis tegak dan 1 garis miring', '1 lingkaran', '5 titik'], answer: 1, explain: 'Turus 5 ditulis 4 garis tegak yang dicoret 1 garis miring.' },
      { q: 'Bilangan 3 ditulis dalam bentuk turus menjadi ...', visual: '', options: ['|||', '||', '||||', '|||||'], answer: 0, explain: 'Turus untuk 3 adalah tiga garis tegak: |||.' }
    ]},
    { materi: 'Membaca Diagram Turus', variants: [
      { q: 'Banyak buku terjual ditulis turus berikut. Berapa banyak buku?', visual: '||||| |||  →  (5 + 3)', options: ['5', '7', '8', '9'], answer: 2, explain: 'Hitung garisnya: 5 + 3 = 8 buku.' },
      { q: 'Banyak pensil ditulis turus berikut. Berapa banyak pensil?', visual: '||||| |||||  →  (5 + 5)', options: ['5', '9', '10', '11'], answer: 2, explain: '5 + 5 = 10 pensil.' },
      { q: 'Banyak apel ditulis turus berikut. Berapa banyak apel?', visual: '||||| |  →  (5 + 1)', options: ['5', '6', '7', '11'], answer: 1, explain: '5 + 1 = 6 apel.' }
    ]},
    { materi: 'Diagram Gambar', variants: [
      { q: 'Setiap 🍎 mewakili 1 apel. Berapa banyak apel di bawah ini?', visual: '🍎 🍎 🍎 🍎 🍎 🍎', options: ['4', '5', '6', '7'], answer: 2, explain: 'Jumlahkan gambar apelnya: ada 6 buah.' },
      { q: 'Setiap ⭐ mewakili 1 bintang. Berapa banyak bintang di bawah ini?', visual: '⭐ ⭐ ⭐ ⭐', options: ['3', '4', '5', '6'], answer: 1, explain: 'Ada 4 gambar bintang, jadi 4 bintang.' },
      { q: 'Setiap 🐟 mewakili 1 ikan. Berapa banyak ikan di bawah ini?', visual: '🐟 🐟 🐟 🐟 🐟 🐟 🐟', options: ['5', '6', '7', '8'], answer: 2, explain: 'Ada 7 gambar ikan, jadi 7 ikan.' }
    ]},
    { materi: 'Membandingkan Data', variants: [
      { q: 'Apel = 6, Jeruk = 9, Mangga = 4. Buah yang paling banyak adalah ...', visual: '🍎 = 6   🍊 = 9   🥭 = 4', options: ['Apel', 'Jeruk', 'Mangga', 'Sama banyak'], answer: 1, explain: 'Jeruk = 9 adalah angka terbesar, jadi paling banyak.' },
      { q: 'Kucing = 3, Kelinci = 7, Hamster = 5. Hewan yang paling sedikit adalah ...', visual: '🐱 = 3   🐰 = 7   🐹 = 5', options: ['Kucing', 'Kelinci', 'Hamster', 'Sama banyak'], answer: 0, explain: 'Kucing = 3 adalah angka terkecil, jadi paling sedikit.' },
      { q: 'Balon merah = 8, balon biru = 5. Selisih banyak balon merah dan biru adalah ...', visual: '🔴 = 8   🔵 = 5', options: ['2', '3', '4', '13'], answer: 1, explain: 'Selisih = 8 − 5 = 3 balon.' }
    ]},
    { materi: 'Nilai Tempat', variants: [
      { q: 'Pada bilangan 235, angka 2 menempati nilai tempat ...', visual: '2 3 5', options: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'], answer: 2, explain: 'Pada 235: 2 = ratusan, 3 = puluhan, 5 = satuan.' },
      { q: 'Pada bilangan 487, angka 8 bernilai ...', visual: '4 8 7', options: ['8', '80', '800', '18'], answer: 1, explain: 'Angka 8 berada di tempat puluhan, jadi bernilai 80.' },
      { q: 'Bilangan 156 terdiri dari ... ratusan, ... puluhan, ... satuan.', visual: '1 5 6', options: ['1, 5, 6', '6, 5, 1', '5, 1, 6', '1, 6, 5'], answer: 0, explain: '156 = 1 ratusan + 5 puluhan + 6 satuan.' }
    ]},
    { materi: 'Penjumlahan', variants: [
      { q: 'Hasil dari 45 + 38 = ...', visual: '', options: ['73', '83', '85', '93'], answer: 1, explain: '45 + 38 = 83 (5+8=13 tulis 3 simpan 1, 4+3+1=8).' },
      { q: 'Hasil dari 64 + 29 = ...', visual: '', options: ['83', '92', '93', '103'], answer: 2, explain: '64 + 29 = 93.' },
      { q: 'Hasil dari 125 + 60 = ...', visual: '', options: ['165', '175', '185', '195'], answer: 2, explain: '125 + 60 = 185.' }
    ]},
    { materi: 'Pengurangan', variants: [
      { q: 'Hasil dari 72 − 27 = ...', visual: '', options: ['35', '45', '47', '55'], answer: 1, explain: '72 − 27 = 45.' },
      { q: 'Hasil dari 90 − 36 = ...', visual: '', options: ['54', '56', '64', '66'], answer: 0, explain: '90 − 36 = 54.' },
      { q: 'Hasil dari 153 − 40 = ...', visual: '', options: ['103', '113', '123', '143'], answer: 1, explain: '153 − 40 = 113.' }
    ]},
    { materi: 'Bangun Datar', variants: [
      { q: 'Permukaan uang logam berbentuk bangun datar ...', visual: '🪙', options: ['Persegi', 'Segitiga', 'Lingkaran', 'Persegi panjang'], answer: 2, explain: 'Permukaan uang logam bulat, jadi berbentuk lingkaran.' },
      { q: 'Permukaan sebuah buku berbentuk bangun datar ...', visual: '📕', options: ['Lingkaran', 'Persegi panjang', 'Segitiga', 'Bola'], answer: 1, explain: 'Permukaan buku biasanya berbentuk persegi panjang.' },
      { q: 'Permukaan jam dinding yang bulat berbentuk bangun datar ...', visual: '🕐', options: ['Persegi', 'Lingkaran', 'Segitiga', 'Trapesium'], answer: 1, explain: 'Permukaan jam bulat berbentuk lingkaran.' }
    ]},
    { materi: 'Penguraian Bangun', variants: [
      { q: 'Sebuah persegi panjang dipotong lurus pada garis diagonalnya. Terbentuk dua bangun ...', visual: '▭ → ◣ ◥', options: ['Persegi', 'Lingkaran', 'Segitiga', 'Trapesium'], answer: 2, explain: 'Persegi panjang dipotong diagonal menjadi 2 segitiga.' },
      { q: 'Dua segitiga siku-siku yang sama digabungkan dapat membentuk bangun ...', visual: '◣ + ◥', options: ['Lingkaran', 'Persegi panjang', 'Bola', 'Kerucut'], answer: 1, explain: 'Dua segitiga siku-siku sama bisa disusun menjadi persegi panjang.' },
      { q: 'Sebuah persegi dipotong lurus melalui tengahnya menjadi dua bangun ...', visual: '⬜ → ▭ ▭', options: ['Segitiga', 'Persegi panjang', 'Lingkaran', 'Layang-layang'], answer: 1, explain: 'Persegi dipotong di tengah menjadi 2 persegi panjang.' }
    ]},
    { materi: 'Ukuran Bangun', variants: [
      { q: 'Urutkan bangun dari yang paling KECIL ke paling BESAR.', visual: '🔴 kecil   🟠 sedang   🟡 besar', options: ['Besar, sedang, kecil', 'Kecil, sedang, besar', 'Sedang, kecil, besar', 'Kecil, besar, sedang'], answer: 1, explain: 'Dari terkecil ke terbesar: kecil → sedang → besar.' },
      { q: 'Urutkan bangun dari yang paling BESAR ke paling KECIL.', visual: '🟡 besar   🟠 sedang   🔴 kecil', options: ['Kecil, sedang, besar', 'Besar, sedang, kecil', 'Sedang, besar, kecil', 'Besar, kecil, sedang'], answer: 1, explain: 'Dari terbesar ke terkecil: besar → sedang → kecil.' },
      { q: 'Lingkaran A kecil, B sedang, C besar. Urutan dari yang terkecil adalah ...', visual: '🔴A  🟠B  🟡C', options: ['A, B, C', 'C, B, A', 'B, A, C', 'A, C, B'], answer: 0, explain: 'Dari terkecil: A (kecil), B (sedang), C (besar).' }
    ]},
    { materi: 'Bangun Ruang', variants: [
      { q: 'Benda di bawah ini yang berbentuk kubus adalah ...', visual: '🎲', options: ['Bola', 'Dadu', 'Kaleng', 'Topi ulang tahun'], answer: 1, explain: 'Dadu berbentuk kubus karena semua sisinya persegi sama besar.' },
      { q: 'Rubik termasuk bangun ruang berbentuk ...', visual: '🧩', options: ['Bola', 'Tabung', 'Kubus', 'Kerucut'], answer: 2, explain: 'Rubik berbentuk kubus.' },
      { q: 'Banyak sisi pada bangun kubus ada ...', visual: '🎲', options: ['4', '5', '6', '8'], answer: 2, explain: 'Kubus memiliki 6 sisi berbentuk persegi.' }
    ]},
    { materi: 'Sisi Lengkung', variants: [
      { q: 'Bangun ruang yang permukaannya melengkung (bersisi lengkung) adalah ...', visual: '⚽', options: ['Kubus', 'Balok', 'Bola', 'Limas'], answer: 2, explain: 'Bola memiliki permukaan melengkung di semua sisinya.' },
      { q: 'Kaleng susu berbentuk bangun ruang bersisi lengkung, yaitu ...', visual: '🥫', options: ['Kubus', 'Tabung', 'Balok', 'Limas'], answer: 1, explain: 'Kaleng berbentuk tabung yang sisi sampingnya melengkung.' },
      { q: 'Topi ulang tahun berbentuk kerucut. Sisi sampingnya berupa ...', visual: '🎉', options: ['Datar semua', 'Lengkung', 'Tidak punya sisi', 'Kotak'], answer: 1, explain: 'Kerucut memiliki sisi samping yang melengkung.' }
    ]},
    { materi: 'Posisi Benda', variants: [
      { q: 'Buku diletakkan di atas meja. Posisi buku terhadap meja adalah ...', visual: '📕\n▬▬▬ (meja)', options: ['Di bawah meja', 'Di atas meja', 'Di samping meja', 'Di dalam meja'], answer: 1, explain: 'Buku berada di atas meja.' },
      { q: 'Seekor kucing duduk di bawah kursi. Posisi kucing terhadap kursi adalah ...', visual: '🪑\n🐱', options: ['Di atas', 'Di bawah', 'Di depan', 'Di belakang'], answer: 1, explain: 'Kucing berada di bawah kursi.' },
      { q: 'Bola berada di dalam kotak. Posisi bola terhadap kotak adalah ...', visual: '📦⚽', options: ['Di luar', 'Di atas', 'Di dalam', 'Di samping'], answer: 2, explain: 'Bola berada di dalam kotak.' }
    ]},
    { materi: 'Pecahan', variants: [
      { q: 'Satu buah pizza dibagi menjadi 2 bagian sama besar. Setiap bagian bernilai ...', visual: '🍕 dibagi 2', options: ['Satu per empat (1/4)', 'Setengah (1/2)', 'Satu per tiga (1/3)', 'Satu utuh'], answer: 1, explain: 'Dibagi 2 sama besar, tiap bagian = setengah = 1/2.' },
      { q: 'Sebuah kue dibagi menjadi 4 bagian sama besar. Satu potong bernilai ...', visual: '🎂 dibagi 4', options: ['Satu per dua (1/2)', 'Satu per tiga (1/3)', 'Satu per empat (1/4)', 'Dua per empat (2/4)'], answer: 2, explain: 'Dibagi 4 sama besar, 1 potong = 1/4.' },
      { q: 'Pecahan "setengah" ditulis dengan lambang ...', visual: '', options: ['1/2', '1/3', '2/1', '1/4'], answer: 0, explain: 'Setengah ditulis 1/2.' }
    ]},
    { materi: 'Waktu', variants: [
      { q: 'Jarum pendek menunjuk angka 3 dan jarum panjang menunjuk angka 12. Jam menunjukkan pukul ...', visual: '🕒', options: ['Pukul 12.00', 'Pukul 03.00', 'Pukul 03.15', 'Pukul 06.00'], answer: 1, explain: 'Jarum panjang di 12 dan pendek di 3 berarti pukul 03.00.' },
      { q: 'Jarum pendek menunjuk angka 6 dan jarum panjang menunjuk angka 12. Jam menunjukkan pukul ...', visual: '🕕', options: ['Pukul 12.00', 'Pukul 06.00', 'Pukul 06.30', 'Pukul 06.06'], answer: 1, explain: 'Jarum panjang di 12 dan pendek di 6 berarti pukul 06.00.' },
      { q: 'Pukul 7 malam jika ditulis dalam bentuk digital (24 jam) menjadi ...', visual: '🌙', options: ['07.00', '17.00', '19.00', '21.00'], answer: 2, explain: 'Jam 7 malam = 12 + 7 = pukul 19.00.' }
    ]},
    { materi: 'Perbandingan Tinggi', variants: [
      { q: 'Pohon lebih tinggi dari rumah, rumah lebih tinggi dari pagar. Yang paling tinggi adalah ...', visual: '🌳 > 🏠 > 🚧', options: ['Pagar', 'Rumah', 'Pohon', 'Sama tinggi'], answer: 2, explain: 'Pohon paling tinggi karena lebih tinggi dari rumah maupun pagar.' },
      { q: 'Tinggi Ani 120 cm, Budi 135 cm, Citra 128 cm. Yang paling pendek adalah ...', visual: '👧 Ani 120  Budi 135  Citra 128', options: ['Ani', 'Budi', 'Citra', 'Sama tinggi'], answer: 0, explain: 'Ani 120 cm adalah yang terkecil, jadi paling pendek.' },
      { q: 'Sebuah gelas lebih pendek daripada botol. Yang lebih tinggi adalah ...', visual: '🥛  🍶', options: ['Gelas', 'Botol', 'Sama tinggi', 'Tidak tahu'], answer: 1, explain: 'Karena gelas lebih pendek, maka botol lebih tinggi.' }
    ]},
    { materi: 'Menghitung Data', variants: [
      { q: 'Banyak siswa suka warna biru ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||  →  (5 + 5 + 2)', options: ['10', '11', '12', '13'], answer: 2, explain: '5 + 5 + 2 = 12 siswa.' },
      { q: 'Banyak siswa suka warna hijau ditulis turus berikut. Berapa banyak siswa?', visual: '||||| |||  →  (5 + 3)', options: ['6', '7', '8', '9'], answer: 2, explain: '5 + 3 = 8 siswa.' },
      { q: 'Banyak siswa suka warna merah ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| |||||  →  (5 + 5 + 5)', options: ['10', '13', '15', '20'], answer: 2, explain: '5 + 5 + 5 = 15 siswa.' }
    ]},
    { materi: 'Diagram Minuman', variants: [
      { q: 'Setiap 🥤 mewakili 1 gelas. Berapa gelas jus yang terjual?', visual: 'Jus: 🥤 🥤 🥤 🥤', options: ['3', '4', '5', '6'], answer: 1, explain: 'Ada 4 gambar gelas, jadi 4 gelas jus.' },
      { q: 'Setiap 🧃 mewakili 1 kotak susu. Berapa kotak susu di bawah ini?', visual: '🧃 🧃 🧃 🧃 🧃', options: ['4', '5', '6', '7'], answer: 1, explain: 'Ada 5 gambar kotak, jadi 5 kotak susu.' },
      { q: 'Setiap ☕ mewakili 1 cangkir. Berapa cangkir teh di bawah ini?', visual: '☕ ☕ ☕', options: ['2', '3', '4', '5'], answer: 1, explain: 'Ada 3 gambar cangkir, jadi 3 cangkir teh.' }
    ]},
    { materi: 'Membandingkan Data Minuman', variants: [
      { q: 'Susu = 5 gelas, Teh = 3 gelas. Selisih banyaknya adalah ...', visual: '🥛 = 5   🍵 = 3', options: ['1', '2', '3', '8'], answer: 1, explain: 'Selisih = 5 − 3 = 2 gelas.' },
      { q: 'Jus = 7 gelas, Soda = 4 gelas. Minuman yang lebih banyak adalah ...', visual: '🥤 = 7   🥤 = 4', options: ['Jus', 'Soda', 'Sama banyak', 'Tidak tahu'], answer: 0, explain: 'Jus = 7 lebih banyak dari Soda = 4.' },
      { q: 'Air = 6 gelas, Susu = 6 gelas. Perbandingan banyaknya adalah ...', visual: '💧 = 6   🥛 = 6', options: ['Air lebih banyak', 'Susu lebih banyak', 'Sama banyak', 'Tidak tahu'], answer: 2, explain: 'Keduanya 6 gelas, jadi sama banyak.' }
    ]}
  ],

  3: [
    { materi: 'Pecahan Sederhana', variants: [
      { q: 'Pecahan 1/2 dibaca ...', visual: '½', options: ['Satu per empat', 'Setengah / satu per dua', 'Dua per satu', 'Satu per tiga'], answer: 1, explain: '1/2 dibaca "setengah" atau "satu per dua".' },
      { q: 'Pada pecahan 3/4, angka 4 (bagian bawah) disebut ...', visual: '3/4', options: ['Pembilang', 'Penyebut', 'Hasil', 'Sisa'], answer: 1, explain: 'Angka bawah pecahan disebut penyebut, angka atas disebut pembilang.' },
      { q: 'Pada pecahan 2/5, pembilangnya adalah ...', visual: '2/5', options: ['2', '5', '7', '10'], answer: 0, explain: 'Pembilang adalah angka di atas, yaitu 2.' }
    ]},
    { materi: 'Membaca Pecahan', variants: [
      { q: 'Lambang pecahan untuk "tiga per empat" adalah ...', visual: '', options: ['4/3', '3/4', '1/4', '3/3'], answer: 1, explain: 'Tiga per empat ditulis 3/4 (pembilang 3, penyebut 4).' },
      { q: 'Lambang pecahan untuk "dua per lima" adalah ...', visual: '', options: ['5/2', '2/5', '2/2', '5/5'], answer: 1, explain: 'Dua per lima ditulis 2/5.' },
      { q: 'Pecahan 1/3 dibaca ...', visual: '1/3', options: ['Tiga per satu', 'Satu per tiga', 'Satu per dua', 'Tiga'], answer: 1, explain: '1/3 dibaca "satu per tiga".' }
    ]},
    { materi: 'Pecahan dari Gambar', variants: [
      { q: 'Sebuah lingkaran dibagi 4 bagian sama besar, 1 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '◔ (1 dari 4 diarsir)', options: ['1/2', '1/3', '1/4', '3/4'], answer: 2, explain: '1 bagian diarsir dari 4 bagian = 1/4.' },
      { q: 'Sebuah persegi dibagi 4 bagian sama besar, 3 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '▦ (3 dari 4 diarsir)', options: ['1/4', '2/4', '3/4', '4/4'], answer: 2, explain: '3 bagian diarsir dari 4 bagian = 3/4.' },
      { q: 'Sebuah bangun dibagi 2 bagian sama besar, 1 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...', visual: '◐ (1 dari 2 diarsir)', options: ['1/2', '1/3', '1/4', '2/2'], answer: 0, explain: '1 bagian diarsir dari 2 bagian = 1/2.' }
    ]},
    { materi: 'Pecahan pada Garis Bilangan', variants: [
      { q: 'Garis bilangan 0 sampai 1 dibagi 4 bagian sama. Titik KEDUA dari 0 menunjukkan pecahan ...', visual: '0 — • — • — • — 1\n         ↑ titik ke-2', options: ['1/4', '2/4', '3/4', '4/4'], answer: 1, explain: 'Titik ke-2 dari 0 berada di 2/4.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 4 bagian sama. Titik KETIGA dari 0 menunjukkan pecahan ...', visual: '0 — • — • — • — 1\n             ↑ titik ke-3', options: ['1/4', '2/4', '3/4', '4/4'], answer: 2, explain: 'Titik ke-3 dari 0 berada di 3/4.' },
      { q: 'Garis bilangan 0 sampai 1 dibagi 2 bagian sama. Titik tepat di tengah menunjukkan pecahan ...', visual: '0 — • — 1\n     ↑ tengah', options: ['1/4', '1/2', '3/4', '1'], answer: 1, explain: 'Titik tengah antara 0 dan 1 adalah 1/2.' }
    ]},
    { materi: 'Membandingkan Pecahan', variants: [
      { q: 'Tanda yang tepat untuk 3/5 ... 2/5 adalah ...', visual: '3/5 ◻ 2/5', options: ['lebih kecil (<)', 'lebih besar (>)', 'sama dengan (=)', 'tidak bisa dibanding'], answer: 1, explain: 'Penyebut sama, pembilang lebih besar nilainya lebih besar: 3/5 > 2/5.' },
      { q: 'Tanda yang tepat untuk 1/4 ... 3/4 adalah ...', visual: '1/4 ◻ 3/4', options: ['lebih kecil (<)', 'lebih besar (>)', 'sama dengan (=)', 'tidak bisa dibanding'], answer: 0, explain: 'Penyebut sama, pembilang lebih kecil nilainya lebih kecil: 1/4 < 3/4.' },
      { q: 'Pecahan terbesar di antara 2/7, 5/7, dan 3/7 adalah ...', visual: '2/7   5/7   3/7', options: ['2/7', '5/7', '3/7', 'sama besar'], answer: 1, explain: 'Penyebut sama, pembilang terbesar = 5, jadi 5/7 terbesar.' }
    ]},
    { materi: 'Pecahan Senilai', variants: [
      { q: 'Pecahan yang senilai dengan 1/2 adalah ...', visual: '1/2 = ?/4', options: ['1/4', '2/4', '3/4', '1/3'], answer: 1, explain: '1/2 = 2/4 karena pembilang & penyebut sama-sama dikali 2.' },
      { q: 'Pecahan yang senilai dengan 1/3 adalah ...', visual: '1/3 = ?/6', options: ['1/6', '2/6', '3/6', '4/6'], answer: 1, explain: '1/3 = 2/6 karena dikali 2 di atas dan bawah.' },
      { q: 'Pecahan 2/4 jika disederhanakan menjadi ...', visual: '2/4 = ?', options: ['1/2', '1/4', '2/2', '1/3'], answer: 0, explain: '2/4 dibagi 2 di atas dan bawah menjadi 1/2.' }
    ]},
    { materi: 'Mengenal Bangun Datar', variants: [
      { q: 'Bangun datar yang memiliki 3 sisi dan 3 titik sudut adalah ...', visual: '🔺', options: ['Persegi', 'Segitiga', 'Lingkaran', 'Persegi panjang'], answer: 1, explain: 'Bangun dengan 3 sisi dan 3 sudut adalah segitiga.' },
      { q: 'Bangun datar yang tidak memiliki sudut (berbentuk bulat) adalah ...', visual: '⭕', options: ['Segitiga', 'Persegi', 'Lingkaran', 'Trapesium'], answer: 2, explain: 'Lingkaran tidak memiliki sudut.' },
      { q: 'Bangun datar dengan 4 sisi, sisi berhadapan sama panjang, dan punya sudut siku-siku adalah ...', visual: '▭', options: ['Segitiga', 'Persegi panjang', 'Lingkaran', 'Layang-layang'], answer: 1, explain: 'Ciri itu dimiliki persegi panjang.' }
    ]},
    { materi: 'Sisi Bangun Datar', variants: [
      { q: 'Banyak sisi pada bangun persegi adalah ...', visual: '⬜', options: ['3', '4', '5', '6'], answer: 1, explain: 'Persegi memiliki 4 sisi sama panjang.' },
      { q: 'Banyak sisi pada bangun segitiga adalah ...', visual: '🔺', options: ['2', '3', '4', '5'], answer: 1, explain: 'Segitiga memiliki 3 sisi.' },
      { q: 'Bangun datar yang memiliki 5 sisi disebut ...', visual: '⬠', options: ['Segitiga', 'Segiempat', 'Segilima', 'Segienam'], answer: 2, explain: 'Bangun dengan 5 sisi disebut segilima.' }
    ]},
    { materi: 'Titik Sudut', variants: [
      { q: 'Banyak titik sudut pada bangun segitiga adalah ...', visual: '🔺', options: ['2', '3', '4', '5'], answer: 1, explain: 'Segitiga memiliki 3 titik sudut.' },
      { q: 'Banyak titik sudut pada bangun persegi panjang adalah ...', visual: '▭', options: ['2', '3', '4', '6'], answer: 2, explain: 'Persegi panjang memiliki 4 titik sudut.' },
      { q: 'Bangun datar yang TIDAK memiliki titik sudut adalah ...', visual: '⭕', options: ['Segitiga', 'Persegi', 'Lingkaran', 'Trapesium'], answer: 2, explain: 'Lingkaran tidak punya titik sudut.' }
    ]},
    { materi: 'Jenis Sudut', variants: [
      { q: 'Sudut yang besarnya tepat 90° disebut sudut ...', visual: '∟', options: ['Lancip', 'Tumpul', 'Siku-siku', 'Lurus'], answer: 2, explain: 'Sudut 90° disebut sudut siku-siku.' },
      { q: 'Sudut yang besarnya kurang dari 90° disebut sudut ...', visual: '∠', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], answer: 0, explain: 'Sudut kurang dari 90° disebut sudut lancip.' },
      { q: 'Sudut yang besarnya lebih dari 90° (tetapi kurang dari 180°) disebut sudut ...', visual: '∡', options: ['Lancip', 'Siku-siku', 'Tumpul', 'Lurus'], answer: 2, explain: 'Sudut lebih dari 90° disebut sudut tumpul.' }
    ]},
    { materi: 'Simetri Lipat', variants: [
      { q: 'Banyak simetri lipat pada bangun persegi adalah ...', visual: '⬜', options: ['1', '2', '3', '4'], answer: 3, explain: 'Persegi memiliki 4 simetri lipat.' },
      { q: 'Banyak simetri lipat pada bangun persegi panjang adalah ...', visual: '▭', options: ['1', '2', '3', '4'], answer: 1, explain: 'Persegi panjang memiliki 2 simetri lipat.' },
      { q: 'Banyak simetri lipat pada segitiga sama sisi adalah ...', visual: '🔺', options: ['1', '2', '3', '4'], answer: 2, explain: 'Segitiga sama sisi memiliki 3 simetri lipat.' }
    ]},
    { materi: 'Ciri Bangun Datar', variants: [
      { q: 'Bangun datar yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku adalah ...', visual: '⬜', options: ['Persegi panjang', 'Persegi', 'Jajar genjang', 'Belah ketupat'], answer: 1, explain: '4 sisi sama panjang + 4 sudut siku-siku adalah ciri persegi.' },
      { q: 'Bangun dengan sisi berhadapan sama panjang, 4 sudut siku-siku, tetapi tidak semua sisi sama panjang adalah ...', visual: '▭', options: ['Persegi', 'Persegi panjang', 'Segitiga', 'Lingkaran'], answer: 1, explain: 'Ciri itu dimiliki persegi panjang.' },
      { q: 'Bangun datar dengan 3 sisi sama panjang disebut ...', visual: '🔺', options: ['Segitiga sama sisi', 'Persegi', 'Lingkaran', 'Trapesium'], answer: 0, explain: 'Segitiga dengan 3 sisi sama panjang disebut segitiga sama sisi.' }
    ]},
    { materi: 'Keliling Bangun Datar', variants: [
      { q: 'Sebuah segitiga memiliki sisi 4 cm, 5 cm, dan 6 cm. Kelilingnya adalah ...', visual: '🔺 4cm, 5cm, 6cm', options: ['14 cm', '15 cm', '16 cm', '20 cm'], answer: 1, explain: 'Keliling = jumlah semua sisi = 4 + 5 + 6 = 15 cm.' },
      { q: 'Sebuah segitiga sama sisi memiliki panjang sisi 7 cm. Kelilingnya adalah ...', visual: '🔺 sisi = 7 cm', options: ['14 cm', '21 cm', '28 cm', '7 cm'], answer: 1, explain: 'Keliling = 3 × 7 = 21 cm.' },
      { q: 'Sebuah segitiga memiliki sisi 8 cm, 8 cm, dan 5 cm. Kelilingnya adalah ...', visual: '🔺 8cm, 8cm, 5cm', options: ['16 cm', '18 cm', '21 cm', '13 cm'], answer: 2, explain: 'Keliling = 8 + 8 + 5 = 21 cm.' }
    ]},
    { materi: 'Keliling Persegi', variants: [
      { q: 'Sebuah persegi memiliki panjang sisi 6 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 6 cm', options: ['12 cm', '18 cm', '24 cm', '36 cm'], answer: 2, explain: 'Keliling persegi = 4 × sisi = 4 × 6 = 24 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 9 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 9 cm', options: ['18 cm', '27 cm', '36 cm', '81 cm'], answer: 2, explain: 'Keliling persegi = 4 × 9 = 36 cm.' },
      { q: 'Sebuah persegi memiliki panjang sisi 10 cm. Kelilingnya adalah ...', visual: '⬜ sisi = 10 cm', options: ['20 cm', '30 cm', '40 cm', '100 cm'], answer: 2, explain: 'Keliling persegi = 4 × 10 = 40 cm.' }
    ]},
    { materi: 'Keliling Persegi Panjang', variants: [
      { q: 'Persegi panjang dengan panjang 8 cm dan lebar 5 cm. Kelilingnya adalah ...', visual: '▭ p = 8 cm, l = 5 cm', options: ['13 cm', '26 cm', '40 cm', '46 cm'], answer: 1, explain: 'Keliling = 2 × (p + l) = 2 × (8 + 5) = 26 cm.' },
      { q: 'Persegi panjang dengan panjang 10 cm dan lebar 4 cm. Kelilingnya adalah ...', visual: '▭ p = 10 cm, l = 4 cm', options: ['14 cm', '28 cm', '40 cm', '24 cm'], answer: 1, explain: 'Keliling = 2 × (10 + 4) = 28 cm.' },
      { q: 'Persegi panjang dengan panjang 12 cm dan lebar 6 cm. Kelilingnya adalah ...', visual: '▭ p = 12 cm, l = 6 cm', options: ['18 cm', '36 cm', '72 cm', '30 cm'], answer: 1, explain: 'Keliling = 2 × (12 + 6) = 36 cm.' }
    ]},
    { materi: 'Luas Bangun Datar', variants: [
      { q: 'Luas persegi panjang dengan panjang 8 cm dan lebar 5 cm adalah ...', visual: '▭ p = 8 cm, l = 5 cm', options: ['13 cm²', '26 cm²', '40 cm²', '45 cm²'], answer: 2, explain: 'Luas = panjang × lebar = 8 × 5 = 40 cm².' },
      { q: 'Luas persegi dengan panjang sisi 6 cm adalah ...', visual: '⬜ sisi = 6 cm', options: ['12 cm²', '24 cm²', '36 cm²', '30 cm²'], answer: 2, explain: 'Luas persegi = sisi × sisi = 6 × 6 = 36 cm².' },
      { q: 'Luas persegi panjang dengan panjang 9 cm dan lebar 4 cm adalah ...', visual: '▭ p = 9 cm, l = 4 cm', options: ['13 cm²', '26 cm²', '36 cm²', '40 cm²'], answer: 2, explain: 'Luas = 9 × 4 = 36 cm².' }
    ]},
    { materi: 'Mengurutkan Data', variants: [
      { q: 'Urutkan data nilai berikut dari yang TERKECIL: 7, 3, 9, 5.', visual: '7, 3, 9, 5', options: ['3, 5, 7, 9', '9, 7, 5, 3', '3, 7, 5, 9', '5, 3, 9, 7'], answer: 0, explain: 'Dari terkecil ke terbesar: 3, 5, 7, 9.' },
      { q: 'Urutkan data berikut dari yang TERBESAR: 4, 8, 2, 6.', visual: '4, 8, 2, 6', options: ['2, 4, 6, 8', '8, 6, 4, 2', '8, 4, 6, 2', '2, 6, 4, 8'], answer: 1, explain: 'Dari terbesar ke terkecil: 8, 6, 4, 2.' },
      { q: 'Urutkan data berikut dari yang TERKECIL: 12, 5, 20, 8.', visual: '12, 5, 20, 8', options: ['5, 8, 12, 20', '20, 12, 8, 5', '5, 12, 8, 20', '8, 5, 12, 20'], answer: 0, explain: 'Dari terkecil ke terbesar: 5, 8, 12, 20.' }
    ]},
    { materi: 'Membandingkan Data', variants: [
      { q: 'Data berat badan (kg): 25, 30, 22, 28. Selisih data terbesar dan terkecil adalah ...', visual: '25, 30, 22, 28', options: ['6 kg', '8 kg', '10 kg', '5 kg'], answer: 1, explain: 'Terbesar 30, terkecil 22. Selisih = 30 − 22 = 8 kg.' },
      { q: 'Data nilai ulangan: 70, 90, 60, 80. Selisih nilai tertinggi dan terendah adalah ...', visual: '70, 90, 60, 80', options: ['20', '30', '10', '40'], answer: 1, explain: 'Tertinggi 90, terendah 60. Selisih = 90 − 60 = 30.' },
      { q: 'Data tinggi (cm): 130, 145, 138. Data yang terbesar adalah ...', visual: '130, 145, 138', options: ['130', '145', '138', 'Sama'], answer: 1, explain: 'Data terbesar adalah 145 cm.' }
    ]},
    { materi: 'Diagram Turus', variants: [
      { q: 'Banyak siswa gemar membaca ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||| |  →  (5+5+5+1)', options: ['15', '16', '17', '20'], answer: 1, explain: '5 + 5 + 5 + 1 = 16 siswa.' },
      { q: 'Banyak siswa gemar olahraga ditulis turus berikut. Berapa banyak siswa?', visual: '||||| |||||  →  (5+5)', options: ['5', '9', '10', '11'], answer: 2, explain: '5 + 5 = 10 siswa.' },
      { q: 'Banyak siswa gemar musik ditulis turus berikut. Berapa banyak siswa?', visual: '||||| ||||| ||||| |||  →  (5+5+5+3)', options: ['15', '18', '13', '20'], answer: 1, explain: '5 + 5 + 5 + 3 = 18 siswa.' }
    ]},
    { materi: 'Penyajian Data Tabel', variants: [
      { q: 'Perhatikan tabel buah favorit. Buah yang paling banyak disukai adalah ...', visual: 'Apel : 8\nJeruk : 12\nMangga: 6\nAnggur: 10', options: ['Apel', 'Jeruk', 'Mangga', 'Anggur'], answer: 1, explain: 'Angka terbesar pada tabel adalah Jeruk = 12.' },
      { q: 'Perhatikan tabel warna favorit. Warna yang paling sedikit dipilih adalah ...', visual: 'Merah : 5\nBiru  : 9\nHijau : 7', options: ['Merah', 'Biru', 'Hijau', 'Sama'], answer: 0, explain: 'Angka terkecil pada tabel adalah Merah = 5.' },
      { q: 'Perhatikan tabel buku terjual per hari. Jumlah seluruh buku terjual adalah ...', visual: 'Senin : 4\nSelasa: 6\nRabu  : 6\nKamis : 3', options: ['17', '18', '19', '20'], answer: 2, explain: '4 + 6 + 6 + 3 = 19 buku.' }
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
