// Bank soal pilihan ganda untuk Kelas 2 & Kelas 3 SD.
// Setiap soal: { materi, q, visual, options[4], answer (index benar), explain }
// "visual" boleh kosong; dipakai untuk gambar/diagram berbasis emoji & teks.

export const QUESTIONS = {
  2: [
    {
      materi: 'Penyajian Data',
      q: 'Cara menyajikan data dengan menggunakan gambar-gambar disebut diagram ...',
      visual: '',
      options: ['Diagram gambar', 'Diagram garis', 'Diagram lingkaran', 'Diagram batang'],
      answer: 0,
      explain: 'Data yang ditampilkan memakai gambar disebut diagram gambar (piktogram).'
    },
    {
      materi: 'Diagram Turus',
      q: 'Satu ikat turus terdiri dari 4 garis tegak dan 1 garis miring. Satu ikat turus bernilai ...',
      visual: '𝍫 = | | | | ╱',
      options: ['3', '4', '5', '6'],
      answer: 2,
      explain: 'Satu ikat turus = 4 garis tegak + 1 garis miring = 5.'
    },
    {
      materi: 'Membaca Diagram Turus',
      q: 'Perhatikan turus banyak buku terjual berikut. Berapa banyak buku yang terjual?',
      visual: '||||| |||  →  (||||| = 5,  ||| = 3)',
      options: ['5', '7', '8', '9'],
      answer: 2,
      explain: 'Hitung garisnya: 5 + 3 = 8 buku.'
    },
    {
      materi: 'Diagram Gambar',
      q: 'Setiap 🍎 mewakili 1 apel. Berapa banyak apel di bawah ini?',
      visual: '🍎 🍎 🍎 🍎 🍎 🍎',
      options: ['4', '5', '6', '7'],
      answer: 2,
      explain: 'Jumlahkan gambar apelnya: ada 6 buah 🍎.'
    },
    {
      materi: 'Membandingkan Data',
      q: 'Apel = 6 buah, Jeruk = 9 buah, Mangga = 4 buah. Buah yang paling banyak adalah ...',
      visual: '🍎 = 6   🍊 = 9   🥭 = 4',
      options: ['Apel', 'Jeruk', 'Mangga', 'Sama banyak'],
      answer: 1,
      explain: 'Jeruk = 9 adalah angka terbesar, jadi jeruk paling banyak.'
    },
    {
      materi: 'Nilai Tempat',
      q: 'Pada bilangan 235, angka 2 menempati nilai tempat ...',
      visual: '2 3 5',
      options: ['Satuan', 'Puluhan', 'Ratusan', 'Ribuan'],
      answer: 2,
      explain: 'Pada 235: 2 = ratusan (200), 3 = puluhan, 5 = satuan.'
    },
    {
      materi: 'Penjumlahan',
      q: 'Hasil dari 45 + 38 = ...',
      visual: '',
      options: ['73', '83', '85', '93'],
      answer: 1,
      explain: '45 + 38 = 83 (5+8=13 tulis 3 simpan 1, 4+3+1=8).'
    },
    {
      materi: 'Pengurangan',
      q: 'Hasil dari 72 − 27 = ...',
      visual: '',
      options: ['35', '45', '47', '55'],
      answer: 1,
      explain: '72 − 27 = 45.'
    },
    {
      materi: 'Bangun Datar',
      q: 'Permukaan uang logam berbentuk bangun datar ...',
      visual: '🪙',
      options: ['Persegi', 'Segitiga', 'Lingkaran', 'Persegi panjang'],
      answer: 2,
      explain: 'Permukaan uang logam bulat, jadi berbentuk lingkaran.'
    },
    {
      materi: 'Penguraian Bangun',
      q: 'Sebuah persegi panjang dipotong lurus pada garis diagonalnya. Bangun yang terbentuk adalah dua ...',
      visual: '▭ → ◣ ◥',
      options: ['Persegi', 'Lingkaran', 'Segitiga', 'Trapesium'],
      answer: 2,
      explain: 'Persegi panjang dipotong diagonal menjadi 2 segitiga.'
    },
    {
      materi: 'Ukuran Bangun',
      q: 'Urutkan bangun dari yang paling kecil ke paling besar.',
      visual: '🔴 kecil   🟠 sedang   🟡 besar',
      options: ['Besar, sedang, kecil', 'Kecil, sedang, besar', 'Sedang, kecil, besar', 'Kecil, besar, sedang'],
      answer: 1,
      explain: 'Dari terkecil ke terbesar: kecil → sedang → besar.'
    },
    {
      materi: 'Bangun Ruang',
      q: 'Benda di bawah ini yang berbentuk kubus adalah ...',
      visual: '🎲',
      options: ['Bola', 'Dadu', 'Kaleng', 'Topi ulang tahun'],
      answer: 1,
      explain: 'Dadu berbentuk kubus karena semua sisinya persegi sama besar.'
    },
    {
      materi: 'Sisi Lengkung',
      q: 'Bangun ruang yang permukaannya melengkung (bersisi lengkung) adalah ...',
      visual: '⚽',
      options: ['Kubus', 'Balok', 'Bola', 'Limas'],
      answer: 2,
      explain: 'Bola memiliki permukaan yang melengkung di semua sisinya.'
    },
    {
      materi: 'Posisi Benda',
      q: 'Buku diletakkan di atas meja. Posisi buku terhadap meja adalah ...',
      visual: '📕\n▬▬▬ (meja)',
      options: ['Di bawah meja', 'Di atas meja', 'Di samping meja', 'Di dalam meja'],
      answer: 1,
      explain: 'Buku berada di atas meja.'
    },
    {
      materi: 'Pecahan',
      q: 'Satu buah pizza dibagi menjadi 2 bagian sama besar. Setiap bagian bernilai ...',
      visual: '🍕 dibagi 2',
      options: ['Satu per empat (1/4)', 'Setengah (1/2)', 'Satu per tiga (1/3)', 'Satu utuh'],
      answer: 1,
      explain: 'Dibagi 2 sama besar, tiap bagian = setengah = 1/2.'
    },
    {
      materi: 'Waktu',
      q: 'Jarum pendek menunjuk angka 3 dan jarum panjang menunjuk angka 12. Jam menunjukkan pukul ...',
      visual: '🕒',
      options: ['Pukul 12.00', 'Pukul 03.00', 'Pukul 03.15', 'Pukul 06.00'],
      answer: 1,
      explain: 'Jarum panjang di 12 dan pendek di 3 berarti pukul 03.00.'
    },
    {
      materi: 'Perbandingan Tinggi',
      q: 'Pohon lebih tinggi dari rumah, rumah lebih tinggi dari pagar. Yang paling tinggi adalah ...',
      visual: '🌳 > 🏠 > 🚧',
      options: ['Pagar', 'Rumah', 'Pohon', 'Sama tinggi'],
      answer: 2,
      explain: 'Pohon paling tinggi karena lebih tinggi dari rumah maupun pagar.'
    },
    {
      materi: 'Menghitung Data',
      q: 'Banyak siswa suka warna biru ditulis turus: ||||| ||||| || . Berapa banyak siswa?',
      visual: '||||| ||||| ||  →  (5 + 5 + 2)',
      options: ['10', '11', '12', '13'],
      answer: 2,
      explain: '5 + 5 + 2 = 12 siswa.'
    },
    {
      materi: 'Diagram Minuman',
      q: 'Setiap 🥤 = 1 gelas. Berapa gelas jus yang terjual?',
      visual: 'Jus: 🥤 🥤 🥤 🥤',
      options: ['3', '4', '5', '6'],
      answer: 1,
      explain: 'Ada 4 gambar gelas, jadi 4 gelas jus.'
    },
    {
      materi: 'Membandingkan Data Minuman',
      q: 'Susu = 🥛🥛🥛🥛🥛 (5), Teh = 🍵🍵🍵 (3). Selisih banyak susu dan teh adalah ...',
      visual: 'Susu 🥛 = 5   Teh 🍵 = 3',
      options: ['1', '2', '3', '8'],
      answer: 1,
      explain: 'Selisih = 5 − 3 = 2 gelas.'
    }
  ],

  3: [
    {
      materi: 'Pecahan Sederhana',
      q: 'Pecahan 1/2 dibaca ...',
      visual: '½',
      options: ['Satu per empat', 'Setengah / satu per dua', 'Dua per satu', 'Satu per tiga'],
      answer: 1,
      explain: '1/2 dibaca "setengah" atau "satu per dua".'
    },
    {
      materi: 'Membaca Pecahan',
      q: 'Lambang pecahan untuk "tiga per empat" adalah ...',
      visual: '',
      options: ['4/3', '3/4', '1/4', '3/3'],
      answer: 1,
      explain: 'Tiga per empat berarti pembilang 3 dan penyebut 4, ditulis 3/4.'
    },
    {
      materi: 'Pecahan dari Gambar',
      q: 'Sebuah lingkaran dibagi menjadi 4 bagian sama besar, 1 bagian diarsir. Nilai pecahan daerah yang diarsir adalah ...',
      visual: '◔ (1 dari 4 bagian diarsir)',
      options: ['1/2', '1/3', '1/4', '3/4'],
      answer: 2,
      explain: '1 bagian diarsir dari 4 bagian = 1/4.'
    },
    {
      materi: 'Pecahan pada Garis Bilangan',
      q: 'Garis bilangan dari 0 sampai 1 dibagi 4 bagian sama. Titik kedua dari 0 menunjukkan pecahan ...',
      visual: '0 — • — • — • — 1\n         ↑ titik ke-2',
      options: ['1/4', '2/4', '3/4', '4/4'],
      answer: 1,
      explain: 'Titik ke-2 dari 0 berada di 2/4.'
    },
    {
      materi: 'Membandingkan Pecahan',
      q: 'Tanda yang tepat untuk 3/5 ... 2/5 adalah ...',
      visual: '3/5 ◻ 2/5',
      options: ['lebih kecil (<)', 'lebih besar (>)', 'sama dengan (=)', 'tidak bisa dibanding'],
      answer: 1,
      explain: 'Penyebut sama, pembilang lebih besar lebih besar nilainya: 3/5 > 2/5.'
    },
    {
      materi: 'Pecahan Senilai',
      q: 'Pecahan yang senilai dengan 1/2 adalah ...',
      visual: '1/2 = ?/4',
      options: ['1/4', '2/4', '3/4', '1/3'],
      answer: 1,
      explain: '1/2 = 2/4 karena pembilang dan penyebut sama-sama dikali 2.'
    },
    {
      materi: 'Mengenal Bangun Datar',
      q: 'Bangun datar yang memiliki 3 sisi dan 3 titik sudut adalah ...',
      visual: '🔺',
      options: ['Persegi', 'Segitiga', 'Lingkaran', 'Persegi panjang'],
      answer: 1,
      explain: 'Bangun dengan 3 sisi dan 3 sudut adalah segitiga.'
    },
    {
      materi: 'Sisi Bangun Datar',
      q: 'Banyak sisi pada bangun persegi adalah ...',
      visual: '⬜',
      options: ['3', '4', '5', '6'],
      answer: 1,
      explain: 'Persegi memiliki 4 sisi yang sama panjang.'
    },
    {
      materi: 'Titik Sudut',
      q: 'Banyak titik sudut pada bangun segitiga adalah ...',
      visual: '🔺',
      options: ['2', '3', '4', '5'],
      answer: 1,
      explain: 'Segitiga memiliki 3 titik sudut.'
    },
    {
      materi: 'Jenis Sudut',
      q: 'Sudut yang besarnya tepat 90° disebut sudut ...',
      visual: '∟',
      options: ['Lancip', 'Tumpul', 'Siku-siku', 'Lurus'],
      answer: 2,
      explain: 'Sudut 90° disebut sudut siku-siku.'
    },
    {
      materi: 'Simetri Lipat',
      q: 'Banyak simetri lipat pada bangun persegi adalah ...',
      visual: '⬜',
      options: ['1', '2', '3', '4'],
      answer: 3,
      explain: 'Persegi memiliki 4 simetri lipat.'
    },
    {
      materi: 'Ciri Bangun Datar',
      q: 'Bangun datar yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku adalah ...',
      visual: '⬜',
      options: ['Persegi panjang', 'Persegi', 'Jajar genjang', 'Belah ketupat'],
      answer: 1,
      explain: '4 sisi sama panjang + 4 sudut siku-siku adalah ciri persegi.'
    },
    {
      materi: 'Keliling Bangun Datar',
      q: 'Sebuah segitiga memiliki panjang sisi 4 cm, 5 cm, dan 6 cm. Kelilingnya adalah ...',
      visual: '🔺 4cm, 5cm, 6cm',
      options: ['14 cm', '15 cm', '16 cm', '20 cm'],
      answer: 1,
      explain: 'Keliling = jumlah semua sisi = 4 + 5 + 6 = 15 cm.'
    },
    {
      materi: 'Keliling Persegi',
      q: 'Sebuah persegi memiliki panjang sisi 6 cm. Kelilingnya adalah ...',
      visual: '⬜ sisi = 6 cm',
      options: ['12 cm', '18 cm', '24 cm', '36 cm'],
      answer: 2,
      explain: 'Keliling persegi = 4 × sisi = 4 × 6 = 24 cm.'
    },
    {
      materi: 'Keliling Persegi Panjang',
      q: 'Persegi panjang dengan panjang 8 cm dan lebar 5 cm. Kelilingnya adalah ...',
      visual: '▭ p = 8 cm, l = 5 cm',
      options: ['13 cm', '26 cm', '40 cm', '46 cm'],
      answer: 1,
      explain: 'Keliling = 2 × (p + l) = 2 × (8 + 5) = 2 × 13 = 26 cm.'
    },
    {
      materi: 'Luas Bangun Datar',
      q: 'Luas persegi panjang dengan panjang 8 cm dan lebar 5 cm adalah ...',
      visual: '▭ p = 8 cm, l = 5 cm',
      options: ['13 cm²', '26 cm²', '40 cm²', '45 cm²'],
      answer: 2,
      explain: 'Luas = panjang × lebar = 8 × 5 = 40 cm².'
    },
    {
      materi: 'Mengurutkan Data',
      q: 'Urutkan data nilai ulangan berikut dari yang terkecil: 7, 3, 9, 5.',
      visual: '7, 3, 9, 5',
      options: ['3, 5, 7, 9', '9, 7, 5, 3', '3, 7, 5, 9', '5, 3, 9, 7'],
      answer: 0,
      explain: 'Dari terkecil ke terbesar: 3, 5, 7, 9.'
    },
    {
      materi: 'Membandingkan Data',
      q: 'Data berat badan (kg): 25, 30, 22, 28. Selisih data terbesar dan terkecil adalah ...',
      visual: '25, 30, 22, 28',
      options: ['6 kg', '8 kg', '10 kg', '5 kg'],
      answer: 1,
      explain: 'Terbesar 30, terkecil 22. Selisih = 30 − 22 = 8 kg.'
    },
    {
      materi: 'Diagram Turus',
      q: 'Banyak siswa gemar membaca ditulis turus: ||||| ||||| ||||| | . Berapa banyak siswa?',
      visual: '||||| ||||| ||||| |  →  (5+5+5+1)',
      options: ['15', '16', '17', '20'],
      answer: 1,
      explain: '5 + 5 + 5 + 1 = 16 siswa.'
    },
    {
      materi: 'Penyajian Data Tabel',
      q: 'Perhatikan tabel buah favorit. Buah yang paling banyak disukai adalah ...',
      visual: 'Apel : 8\nJeruk : 12\nMangga: 6\nAnggur: 10',
      options: ['Apel', 'Jeruk', 'Mangga', 'Anggur'],
      answer: 1,
      explain: 'Angka terbesar pada tabel adalah Jeruk = 12.'
    }
  ]
};

export const POINTS_PER_CORRECT = 10; // 20 soal × 10 = maksimal 200 poin
