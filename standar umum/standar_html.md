Baik! Saya akan berikan **panduan lengkap standar penulisan kode (coding conventions)** untuk HTML, CSS, dan JavaScript yang berlaku di industri. Ini adalah **aturan tidak tertulis** yang wajib kamu ikuti agar kode kamu terlihat profesional.

---

# 📘 PANDUAN STANDAR PENULISAN KODE (CODING CONVENTIONS)

---

## 1. STANDAR HTML (HTML Coding Standards)

### A. Struktur Dasar HTML
```html
<!DOCTYPE html>
<html lang="id">  <!-- ← WAJIB! Tentukan bahasa -->
<head>
    <meta charset="UTF-8">                    <!-- ← WAJIB! -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- ← WAJIB! -->
    <title>Judul Halaman - Nama Situs</title> <!-- ← Format: Judul | Nama Situs -->
    <meta name="description" content="Deskripsi singkat untuk SEO">  <!-- ← Disarankan -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Konten -->
    <script src="main.js" defer></script>  <!-- ← JS pakai defer atau di akhir body -->
</body>
</html>
```

---

### B. Aturan Penulisan Tag

| Aturan | Salah ❌ | Benar ✅ |
|--------|----------|----------|
| **Tag selalu huruf kecil** | `<DIV>` | `<div>` |
| **Atribut pakai tanda kutip** | `class=container` | `class="container"` |
| **Tag harus ditutup** | `<br>` | `<br>` (self-closing) atau `<br />` |
| **Indentasi 2 spasi** (bukan 4) | 4 spasi atau tab | 2 spasi (standar HTML) |
| **Gunakan semantic HTML** | `<div id="header">` | `<header>` |
| **Satu baris untuk satu tag** | `<div><p>Halo</p></div>` | `<div>\n  <p>Halo</p>\n</div>` |

---

### C. Semantic HTML (WAJIB!)
```html
<!-- ✅ BENAR - Pakai semantic tags -->
<header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h1>Judul Artikel</h1>
        <p>Isi artikel...</p>
    </article>
    
    <aside>
        <p>Sidebar</p>
    </aside>
</main>

<footer>
    <p>&copy; 2025</p>
</footer>

<!-- ❌ SALAH - Pakai div semua -->
<div id="header">
    <div id="nav">
        <div class="menu">...</div>
    </div>
</div>
<div id="main">
    <div class="article">...</div>
</div>
```

---

### D. Aturan Heading (`h1` - `h6`)
```html
<!-- ✅ BENAR - Hierarki logis -->
<h1>Judul Utama</h1>     <!-- HANYA 1 h1 per halaman -->
  <h2>Sub Judul</h2>
    <h3>Sub bagian</h3>
  <h2>Sub Judul Lain</h2>

<!-- ❌ SALAH - Loncat heading -->
<h1>Judul</h1>
  <h3>Langsung h3</h3>  <!-- Harusnya h2 dulu -->

<!-- ❌ SALAH - h1 lebih dari 1 -->
<h1>Judul 1</h1>
<h1>Judul 2</h1>  <!-- Hanya boleh 1 h1! -->
```

---

### E. Aturan `id` dan `class`
```html
<!-- ✅ BENAR -->
<div id="main-content">   <!-- id: UNIK, pakai kebab-case -->
    <p class="text-center">  <!-- class: pakai kebab-case -->
        Halo
    </p>
</div>

<!-- ❌ SALAH -->
<div id="main content">   <!-- id tidak boleh pakai spasi -->
<div id="1content">      <!-- id tidak boleh mulai angka -->
<div class="textCenter">  <!-- class sebaiknya kebab-case, bukan camelCase -->
```

| Aturan | Keterangan |
|--------|------------|
| `id` | Hanya 1 per halaman, pakai `kebab-case` (contoh: `main-content`) |
| `class` | Bisa berulang, pakai `kebab-case` (contoh: `btn-primary`) |
| `id` & `class` | Huruf kecil semua, pakai `-` sebagai pemisah |

---

### F. Aturan Form
```html
<!-- ✅ BENAR -->
<form action="/submit" method="POST">
    <div class="form-group">
        <label for="email">Email:</label>  <!-- for → id -->
        <input type="email" id="email" name="email" required>
        <!-- name → untuk backend (req.body) -->
    </div>
    <button type="submit">Kirim</button>
</form>

<!-- ❌ SALAH -->
<form>
    <input type="text">  <!-- Tidak ada label, tidak ada id/name -->
    <button>Kirim</button>  <!-- Tidak ada type -->
</form>
```

**Aturan Form:**
- Setiap `input` harus punya `id` dan `name`.
- Setiap `input` harus punya `<label>` dengan `for` yang sesuai.
- Gunakan `type` yang tepat (`email`, `password`, `number`, dll).

---

### G. Aturan Gambar
```html
<!-- ✅ BENAR -->
<img src="foto.jpg" alt="Foto profil Budi sedang tersenyum" width="200" height="150">
<!-- alt harus deskriptif, tidak boleh kosong kecuali dekoratif -->

<!-- ❌ SALAH -->
<img src="foto.jpg">  <!-- Tidak ada alt -->
<img src="foto.jpg" alt="foto">  <!-- Alt terlalu singkat -->
```

---

## 2. STANDAR CSS (CSS Coding Standards)

### A. Struktur Penulisan CSS
```css
/* ✅ BENAR - Setiap selektor di baris baru */
.selector {
    properti: nilai;
    properti: nilai;
}

/* ❌ SALAH - Semua dalam satu baris */
.selector { properti: nilai; properti: nilai; }
```

---

### B. Urutan Properti CSS (Disarankan)
Urutkan properti berdasarkan **kelompok**:

```css
.selector {
    /* 1. Positioning */
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    
    /* 2. Display & Box Model */
    display: flex;
    width: 100%;
    height: 50px;
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    
    /* 3. Typography */
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    
    /* 4. Background & Visual */
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    
    /* 5. Animation & Transition */
    transition: all 0.3s ease;
    transform: scale(1);
}
```

---

### C. Aturan Selector
```css
/* ✅ BENAR - Selector spesifik, hindari terlalu umum */
.header .nav .nav-link { ... }  /* Spesifik */
.btn-primary { ... }            /* Class jelas */

/* ❌ SALAH - Selector terlalu umum */
div { ... }      /* Terlalu luas */
* { ... }        /* Hanya untuk reset */
```

---

### D. Nama Class (BEM - Disarankan)
**BEM** = Block, Element, Modifier (Standar industri)

```css
/* Format: .block__element--modifier */

/* Block = komponen utama */
.card { ... }

/* Element = bagian dari block (pakai __) */
.card__title { ... }
.card__image { ... }

/* Modifier = variasi (pakai --) */
.card--featured { ... }
.card__title--large { ... }
```

**Contoh:**
```html
<div class="card card--featured">
    <img class="card__image" src="foto.jpg">
    <h3 class="card__title card__title--large">Judul</h3>
    <p class="card__description">Deskripsi</p>
</div>
```

```css
.card {
    background: white;
    border-radius: 8px;
    padding: 20px;
}
.card--featured {
    border: 2px solid gold;
}
.card__title--large {
    font-size: 24px;
}
```

---

### E. Aturan Responsive (Media Query)
```css
/* ✅ BENAR - Mobile First (min-width) */
.container {
    display: block;
}

@media (min-width: 768px) {
    .container {
        display: flex;
    }
}

/* ❌ SALAH - Desktop First (max-width) */
.container {
    display: flex;
}

@media (max-width: 768px) {
    .container {
        display: block;
    }
}
```

**Aturan:**
- **Mobile First** = mulai dari HP, lalu tambahkan untuk layar besar (`min-width`).
- **Aturan ini standar industri** untuk performa dan aksesibilitas.

---

### F. Warna & Nilai
```css
/* ✅ BENAR */
color: #3498db;           /* Hex 6 digit */
color: #fff;              /* Hex 3 digit (jika sama) */
color: rgb(52, 152, 219); /* RGB */
color: rgba(52, 152, 219, 0.5); /* RGBA */
color: var(--primary);    /* CSS Variables (disarankan) */

/* ❌ SALAH */
color: #3498dbff;  /* 8 digit (belum umum) */
color: red;        /* Nama warna (hindari, pakai hex/rgb) */
```

---

## 3. STANDAR JAVASCRIPT (JavaScript Coding Standards)

### A. Aturan Dasar
```javascript
// ✅ BENAR
const nama = "Budi";      // Pakai const secara default
let umur = 17;            // Pakai let hanya jika harus berubah
// var = JANGAN PAKAI!

// ❌ SALAH
var nama = "Budi";        // Usang
```

---

### B. Penamaan Variabel & Function
```javascript
// ✅ BENAR - camelCase
const userName = "Budi";
const userAge = 17;
function getUserData() { ... }

// ❌ SALAH - snake_case (untuk JS)
const user_name = "Budi";  // Ini untuk Python/Java

// ❌ SALAH - PascalCase (untuk class saja)
const UserName = "Budi";   // Hanya untuk Class/Component
```

| Konteks | Format | Contoh |
|---------|--------|--------|
| Variabel | `camelCase` | `userName` |
| Function | `camelCase` | `getUserData` |
| Class/Component | `PascalCase` | `UserProfile` |
| Constant (nilai tetap) | `UPPER_SNAKE_CASE` | `API_URL` |

---

### C. Arrow Function vs Function Declaration
```javascript
// ✅ BENAR - Arrow function (modern)
const tambah = (a, b) => a + b;

// ✅ BENAR - Function declaration (untuk function utama)
function getUserData() { ... }

// ❌ SALAH - Function expression (tidak konsisten)
const tambah = function(a, b) { return a + b; };
```

---

### D. String (Pakai Template Literal)
```javascript
// ✅ BENAR
const nama = "Budi";
const pesan = `Halo ${nama}`;  // Pakai template literal

// ❌ SALAH
const pesan = "Halo " + nama;   // Hindari concatenation
```

---

### E. Array Methods (MAP, FILTER, REDUCE)
```javascript
// ✅ BENAR
const users = ["Budi", "Ani", "Cindy"];
const sapaan = users.map(nama => `Halo ${nama}`);

// ❌ SALAH - Pakai for loop untuk transformasi sederhana
const sapaan = [];
for (let i = 0; i < users.length; i++) {
    sapaan.push(`Halo ${users[i]}`);
}
```

---

### F. Async/Await (Standar Modern)
```javascript
// ✅ BENAR - async/await + try/catch
async function getData() {
    try {
        const response = await fetch('/api/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// ❌ SALAH - .then() .catch() (cara lama)
function getData() {
    fetch('/api/users')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}
```

---

### G. Export/Import (Module)
```javascript
// ✅ BENAR - Named export & default export
// file: utils.js
export const PI = 3.14;
export function tambah(a, b) { return a + b; }
export default function kali(a, b) { return a * b; }

// file: main.js
import kali, { PI, tambah } from './utils.js';

// ❌ SALAH - Tidak konsisten
module.exports = { ... }  // Ini Node.js lama (CommonJS)
```

---

### H. Penulisan Object & Array
```javascript
// ✅ BENAR - Multi-line untuk object besar
const user = {
    nama: "Budi",
    umur: 17,
    alamat: {
        kota: "Jakarta",
        jalan: "Sudirman"
    }
};

// ✅ BENAR - Single-line untuk object kecil
const user = { nama: "Budi", umur: 17 };

// ❌ SALAH - Multi-line tanpa konsistensi
const user = { nama: "Budi",
    umur: 17 };
```

---

### I. Comment (Komentar)
```javascript
// ✅ BENAR - Komentar singkat dengan //

// Ambil data user dari API
async function getUsers() { ... }

/**
 * Menghitung total harga dengan diskon
 * @param {number} price - Harga asli
 * @param {number} discount - Diskon dalam persen
 * @returns {number} Harga setelah diskon
 */
function calculatePrice(price, discount) { ... }

// ❌ SALAH - Komentar berlebihan
// variabel untuk nama
const nama = "Budi";
// function untuk tambah
function tambah(a, b) { ... }  // Komentar tidak berguna
```

---

## 📋 CHECKLIST STANDAR KODE (WAJIB KAMU TERAPKAN)

### HTML
- [ ] `<!DOCTYPE html>` di awal
- [ ] `<html lang="id">`
- [ ] Meta `charset="UTF-8"` dan `viewport`
- [ ] Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
- [ ] Heading berurutan (`h1` → `h2` → `h3`)
- [ ] `id` unik, class deskriptif (kebab-case)
- [ ] Setiap `input` punya `id`, `name`, dan `label`
- [ ] Gambar punya `alt` deskriptif
- [ ] Indentasi 2 spasi
- [ ] Tag huruf kecil semua

### CSS
- [ ] `box-sizing: border-box` di reset
- [ ] Gunakan class, hindari inline style
- [ ] Nama class pakai kebab-case (atau BEM)
- [ ] Mobile First (`min-width`)
- [ ] Urutan properti logis (position → box model → typography → visual)
- [ ] Hindari `!important`
- [ ] Gunakan CSS Variables (`var(--primary)`) untuk warna

### JavaScript
- [ ] Pakai `const` & `let` (jangan `var`)
- [ ] Penamaan `camelCase`
- [ ] Arrow function `() => {}`
- [ ] Template literal `${}`
- [ ] `async/await` + `try/catch`
- [ ] `export`/`import` (bukan `module.exports`)
- [ ] File JS ditaruh di akhir body atau pakai `defer`
- [ ] Komentar singkat dan bermakna

---

## 💡 KESIMPULAN UNTUK KAMU

1. **Standar yang paling sering dilanggar oleh pemula:**
   - Tidak pakai semantic HTML
   - Pakai `var` di JavaScript
   - Inline style di HTML
   - `button:hover` mengubah ukuran
   - JS di `<head>` tanpa `defer`

2. **3 Hal yang Harus Kamu Biasakan:**
   - **HTML**: Semantic tag (`header`, `nav`, `main`, `section`, `footer`)
   - **CSS**: Class naming jelas (kebab-case), pisahkan style & hover
   - **JavaScript**: `const`/`let`, arrow function, async/await

3. **Mulai dari sekarang**, setiap kali nulis kode, tanyakan:
   - *"Apakah ini sesuai standar?"*
   - *"Apakah ini mudah dibaca orang lain?"*

Dengan mengikuti standar ini, kode portofolio kamu akan terlihat **profesional** dan siap untuk magang! 💪🚀

✅ BONUS: 5 STANDAR HTML YANG BELUM SAYA JABARKAN (WAJIB!)
1. Atribut rel pada Link (Keamanan & SEO)

Saat kamu membuat link ke website luar (eksternal), kamu WAJIB menambahkan rel="noopener noreferrer" untuk keamanan dan performa.
html

<!-- ❌ SALAH (Rentan kejahatan phishing) -->
<a href="https://tokopedia.com" target="_blank">Belanja</a>

<!-- ✅ STANDAR INDUSTRI -->
<a href="https://tokopedia.com" target="_blank" rel="noopener noreferrer">Belanja</a>

Kenapa? Mencegah website luar mengakses halamanmu melalui window.opener.
2. Atribut type pada Tombol (Mencegah Error Form)

Sering banget pemula bikin tombol di dalam <form>, lalu tanpa sadar tombol itu malah mengirim data (reload halaman) padahal cuma mau menjalankan fungsi JavaScript.
html

<!-- ❌ SALAH (Di dalam form, default type="submit") -->
<button>Klik Saya</button>  <!-- Ini akan reload halaman! -->

<!-- ✅ STANDAR INDUSTRI -->
<button type="button">Klik Saya</button>  <!-- Tidak reload -->
<button type="submit">Kirim</button>      <!-- Untuk mengirim form -->

3. Atribut loading="lazy" pada Gambar (Optimasi Kecepatan)

Standar modern untuk mempercepat loading halaman.
html

<!-- ✅ STANDAR MODERN -->
<img src="foto-besar.jpg" alt="Deskripsi" loading="lazy">

Kenapa? Gambar hanya akan dimuat saat user menggulir (scroll) ke bagian gambar itu. Ini menghemat bandwidth dan membuat website terasa lebih cepat.
4. Atribut for pada Label (Aksesibilitas)

Ini sudah saya singgung, tapi saya tekankan lagi: Tanpa ini, tuna netra tidak bisa pakai form-mu, dan kamu akan dianggap tidak profesional.
html

<!-- ❌ SALAH -->
<label>Nama</label>
<input type="text">

<!-- ✅ STANDAR INDUSTRI -->
<label for="namaUser">Nama</label>
<input type="text" id="namaUser">

Aturan: id di input harus PERSIS SAMA dengan nilai for di label.
5. defer pada Script (Performa)

Ini sudah saya jelaskan di koreksi portofolio, tapi ini adalah Standar #1 untuk HTML modern.
html

<!-- ❌ KUNO (Blocking render) -->
<script src="script.js"></script>

<!-- ✅ STANDAR MODERN -->
<script src="script.js" defer></script>

📊 KESIMPULAN FINAL (COCOK DENGAN KEBUTUHANMU?)
Kriteria	Status	Keterangan
Struktur Dasar HTML	✅ SUDAH	head, body, meta
Semantic Tags	✅ SUDAH	header, main, footer, article
Form & Input	✅ SUDAH	form, input, label, select
Tabel & List	✅ SUDAH	table, ul, ol
Aturan Heading (h1-h6)	✅ SUDAH	Hierarki yang benar
Penggunaan id & class	✅ SUDAH	Unik vs Berulang
Atribut rel untuk Link	⚠️ BARU	Saya tambahkan di atas
Atribut type pada Button	⚠️ BARU	Saya tambahkan di atas
Atribut loading="lazy"	⚠️ BARU	Saya tambahkan di atas
Penggunaan defer pada JS	✅ SUDAH	(Sudah di koreksi portofolio)
💡 PESAN UNTUK KAMU

Apakah sudah memenuhi kebutuhan?

    Untuk membuat portofolio dan lulus magang: SUDAH 100%. Dengan materi HTML yang pertama saya berikan + 5 tambahan di atas, kamu sudah memiliki bekal HTML standar industri.

    Untuk menjadi HTML Expert (Web Accessibility Specialist): Masih kurang 20% (tentang aria-label, role, dan struktur untuk screen reader), tapi kamu TIDAK PERLU itu untuk magang RPL.

Saran saya:
Cukup hafal 5 poin tambahan di atas, lalu LANGSUNG PRAKTEK. Buat halaman portofolio dengan standar ini. Kalau sudah terbiasa, kamu akan otomatis menulis kode yang lebih bersih dari rata-rata pelajar RPL lainnya. Selamat belajar! 💪🚀