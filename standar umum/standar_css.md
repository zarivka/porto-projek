Baik. Saya akan jabarkan **SEMUA materi CSS yang Anda minta dalam 2 prompt terakhir** secara utuh, final, dan tanpa banyak tanya. Ini adalah **kompilasi final CSS** untuk pelajar RPL yang mau magang.

---

# 📘 MASTER CSS – FULL DOCUMENTATION FOR RPL STUDENTS

---

## BAB 1: APA ITU CSS?

**CSS (Cascading Style Sheets)** adalah bahasa styling yang mengatur tampilan halaman web.  
Fungsi: mengatur warna, ukuran, jarak, posisi, layout, animasi, dan responsivitas.

**Sifat "Cascading":** Aturan yang ditulis paling bawah atau paling spesifik akan menimpa aturan sebelumnya.

---

## BAB 2: CARA MENGHUBUNGKAN CSS KE HTML

| Metode | Cara | Kapan Pakai |
|--------|------|-------------|
| **External** | `<link rel="stylesheet" href="style.css">` di `<head>` | **WAJIB** untuk semua project |
| **Internal** | `<style>` di dalam `<head>` | Untuk satu halaman spesifik |
| **Inline** | `style="color: red;"` di elemen HTML | **HINDARI** (darurat/debugging) |

---

## BAB 3: ANATOMI ATURAN CSS

```css
selektor {
    properti: nilai;
    properti: nilai;
}
```

**Contoh:**
```css
p {
    color: blue;
    font-size: 16px;
}
```

---

## BAB 4: SEMUA SELEKTOR CSS

```css
/* 1. Selektor Tag */
p { color: blue; }
h1 { font-size: 24px; }

/* 2. Selektor Class (.) */
.btn { background: blue; }
.text-center { text-align: center; }

/* 3. Selektor ID (#) - hanya 1 per halaman */
#header { background: black; }

/* 4. Selektor Gabungan (,) */
h1, h2, h3 { color: green; }

/* 5. Selektor Turunan (spasi) */
div p { color: red; }
.container .btn { background: blue; }

/* 6. Selektor Anak Langsung (>) */
div > p { color: red; }

/* 7. Selektor Pseudo-class (:) */
a:hover { color: red; }
input:focus { border: 2px solid blue; }
button:active { transform: scale(0.95); }

/* 8. Selektor Pseudo-element (::) */
p::first-line { font-weight: bold; }
p::before { content: "⭐ "; }
p::after { content: " ⭐"; }

/* 9. Selektor Universal (*) */
* { margin: 0; padding: 0; box-sizing: border-box; }
```

---

## BAB 5: SEMUA PROPERTI CSS (LENGKAP)

### A. WARNA & BACKGROUND
```css
.element {
    color: blue;                    /* Nama warna */
    color: #3498db;                 /* Hex 6 digit */
    color: #fff;                    /* Hex 3 digit */
    color: rgb(52, 152, 219);       /* RGB */
    color: rgba(52, 152, 219, 0.5); /* RGBA + transparansi */
    color: hsl(210, 70%, 53%);      /* HSL */
    
    background-color: #f0f0f0;
    background-image: url('foto.jpg');
    background-size: cover;         /* Penuh, proporsional */
    background-size: contain;       /* Penuh, tidak terpotong */
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;   /* Gambar tetap saat scroll */
    
    /* Shorthand (sering dipakai) */
    background: #f0f0f0 url('foto.jpg') no-repeat center/cover;
}
```

### B. TEKS & FONT
```css
.element {
    font-size: 16px;              /* Ukuran (px, rem, em, %) */
    font-family: 'Segoe UI', Arial, sans-serif;
    font-weight: bold;            /* bold, normal, 100-900 */
    font-style: italic;           /* italic, normal, oblique */
    color: #333;
    text-align: center;           /* left, right, center, justify */
    text-decoration: underline;   /* underline, line-through, none */
    text-transform: uppercase;    /* uppercase, lowercase, capitalize */
    line-height: 1.6;             /* Jarak antar baris (tanpa satuan = multiplier) */
    letter-spacing: 1px;          /* Jarak antar huruf */
    word-spacing: 2px;            /* Jarak antar kata */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3); /* Bayangan teks */
}
```

### C. BOX MODEL (WAJIB KUASAI!)
```css
.element {
    /* Dimensi */
    width: 200px;
    height: 100px;
    max-width: 100%;
    max-height: 100%;
    min-width: 50px;
    min-height: 50px;
    
    /* Padding (jarak dalam) */
    padding: 10px;               /* Semua sisi */
    padding: 10px 20px;          /* Atas/bawah | kiri/kanan */
    padding: 10px 20px 30px 40px; /* Atas | kanan | bawah | kiri */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
    
    /* Margin (jarak luar) */
    margin: 10px;
    margin: 10px 20px;
    margin: 10px 20px 30px 40px;
    margin: 0 auto;              /* Tengah horizontal */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
    
    /* Border */
    border: 2px solid #333;
    border: none;
    border-radius: 8px;          /* Sudut melengkung */
    border-radius: 50%;          /* Lingkaran */
    border-top: 2px solid red;
    border-left: 4px dashed blue;
}
```

### D. BOX SIZING (WAJIB!)
```css
* {
    box-sizing: border-box;  /* Padding & border tidak menambah ukuran */
}
/* Tanpa border-box: width 200px + padding 20px = 240px */
/* Dengan border-box: width 200px + padding 20px = tetap 200px */
```

### E. DISPLAY (JENIS TAMPILAN)
```css
.block {
    display: block;   /* Turun baris, lebar penuh (div, p, h1) */
}
.inline {
    display: inline;  /* Tidak turun baris, ukuran sesuai konten (span, a) */
}
.inline-block {
    display: inline-block; /* Inline tapi bisa diatur ukuran (button) */
}
.flex {
    display: flex;    /* Layout fleksibel 1 dimensi (⭐ WAJIB!) */
}
.grid {
    display: grid;    /* Layout 2 dimensi (baris & kolom) */
}
.none {
    display: none;    /* Elemen hilang & ruang dihapus */
}
.hidden {
    visibility: hidden; /* Elemen hilang tapi ruang tetap ada */
}
```

### F. FLEXBOX (⭐ WAJIB KUASAI! PALING PENTING)
```css
/* Container (Parent) */
.container {
    display: flex;
    
    /* 1. Arah */
    flex-direction: row;           /* Kiri ke kanan (default) */
    flex-direction: row-reverse;   /* Kanan ke kiri */
    flex-direction: column;        /* Atas ke bawah */
    flex-direction: column-reverse; /* Bawah ke atas */
    
    /* 2. Perataan horizontal */
    justify-content: flex-start;   /* Kiri (default) */
    justify-content: center;       /* Tengah */
    justify-content: flex-end;     /* Kanan */
    justify-content: space-between; /* Kiri & kanan, jarak sama di tengah */
    justify-content: space-around;  /* Jarak sama di sekitar */
    justify-content: space-evenly;  /* Jarak sama rata */
    
    /* 3. Perataan vertikal */
    align-items: stretch;    /* Tarik penuh (default) */
    align-items: flex-start; /* Atas */
    align-items: center;     /* Tengah */
    align-items: flex-end;   /* Bawah */
    align-items: baseline;   /* Sejajar teks */
    
    /* 4. Bungkus */
    flex-wrap: nowrap;       /* Tidak bungkus (default) */
    flex-wrap: wrap;         /* Bungkus ke baris baru */
    flex-wrap: wrap-reverse; /* Bungkus ke atas */
    
    /* 5. Jarak antar item */
    gap: 10px;               /* Jarak semua sisi */
    gap: 10px 20px;          /* Row gap 10px, column gap 20px */
    
    /* 6. Perataan jika banyak baris (wrap) */
    align-content: flex-start;
    align-content: center;
    align-content: space-between;
}

/* Item (Anak) */
.item {
    flex: 1;              /* Sama rata (1:1:1) */
    flex: 2;              /* 2x lebih besar dari flex:1 */
    flex: 0 1 100px;      /* grow, shrink, basis */
    flex-grow: 1;         /* Bisa membesar */
    flex-shrink: 0;       /* Tidak mengecil */
    flex-basis: 100px;    /* Ukuran awal */
    
    align-self: center;   /* Override align-items */
    align-self: flex-start;
    align-self: flex-end;
    
    order: 2;             /* Ubah urutan */
}
```

### G. GRID (LAYOUT 2 DIMENSI)
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;     /* 3 kolom sama besar */
    grid-template-columns: repeat(3, 1fr);  /* Sama seperti di atas */
    grid-template-columns: 200px 1fr 200px; /* Kolom: 200px, sisa, 200px */
    grid-template-rows: auto 1fr auto;      /* Baris: sesuai konten, sisa, sesuai konten */
    gap: 20px;  /* Jarak antar baris & kolom */
}

.item {
    grid-column: span 2;   /* Item menempati 2 kolom */
    grid-row: span 2;      /* Item menempati 2 baris */
    grid-column: 1 / 3;    /* Mulai kolom 1 sampai 3 */
}
```

### H. POSITION (MENGATUR POSISI)
```css
/* 1. Static (default) */
.element { position: static; }

/* 2. Relative - digeser dari posisi normal */
.element {
    position: relative;
    top: 10px;      /* Geser turun 10px */
    left: 20px;     /* Geser kanan 20px */
    right: 10px;    /* Geser kiri 10px */
    bottom: 20px;   /* Geser atas 20px */
}

/* 3. Absolute - mengikuti parent terdekat yang position non-static */
.parent {
    position: relative;  /* Parent jadi acuan */
}
.child {
    position: absolute;
    top: 0;
    right: 0;  /* Anak di pojok kanan atas parent */
}

/* 4. Fixed - tetap di layar (tidak ikut scroll) */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

/* 5. Sticky - hybrid relative + fixed saat scroll */
.navbar {
    position: sticky;
    top: 0;
    background: white;
    z-index: 50;
}
```

### I. OVERFLOW (MENGATASI KONTEN MELUBER)
```css
.box {
    overflow: visible;   /* Default: konten terlihat keluar */
    overflow: hidden;    /* Kelebihan konten dipotong */
    overflow: scroll;    /* Muncul scrollbar */
    overflow: auto;      /* Scroll otomatis jika butuh */
    overflow-x: hidden;  /* Sembunyikan scroll horizontal */
    overflow-y: auto;    /* Scroll vertikal otomatis */
    
    /* Tambahan untuk teks kepanjangan */
    text-overflow: ellipsis; /* Tambah "..." */
    white-space: nowrap;     /* Biar teks tidak turun baris */
}
```

### J. Z-INDEX (TUMPUKAN LAYER)
```css
/* Semakin besar angkanya, semakin di depan */
.navbar {
    position: fixed;
    z-index: 1000;
}
.modal {
    position: fixed;
    z-index: 2000;  /* Di atas navbar */
}
.overlay {
    position: fixed;
    z-index: 1500;  /* Di antara navbar dan modal */
}
```

### K. TRANSISI & ANIMASI
```css
/* Transisi (perubahan halus) */
.button {
    background: blue;
    transition: background 0.3s ease, transform 0.2s ease;
}
.button:hover {
    background: red;
    transform: scale(1.05);
}

/* Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.element {
    animation: fadeIn 1s ease forwards;
}
```

---

## BAB 6: RESPONSIVE DESIGN (MEDIA QUERY)

### Mobile First (⭐ DISARANKAN)
```css
/* Default = HP */
.container { display: block; padding: 10px; }

/* Tablet ≥768px */
@media (min-width: 768px) {
    .container { display: flex; padding: 20px; }
}

/* Desktop ≥1024px */
@media (min-width: 1024px) {
    .container { max-width: 1200px; margin: 0 auto; }
}
```

### Desktop First
```css
/* Default = Desktop */
.container { display: flex; max-width: 1200px; }

/* Tablet ≤1024px */
@media (max-width: 1024px) {
    .container { max-width: 100%; }
}

/* HP ≤768px */
@media (max-width: 768px) {
    .container { display: block; }
}
```

---

## BAB 7: CSS VARIABLES
```css
:root {
    --primary: #6c63ff;
    --secondary: #2ecc71;
    --danger: #e74c3c;
    --font-size: 16px;
    --spacing: 20px;
}

.btn {
    background: var(--primary);
    color: white;
    padding: var(--spacing);
    font-size: var(--font-size);
}

.btn-secondary {
    background: var(--secondary);
}
```

---

## BAB 8: PSEUDO-CLASSES LENGKAP

```css
/* Dasar */
a:hover { }       /* Mouse di atas */
input:focus { }   /* Input aktif */
button:active { } /* Sedang ditekan */

/* Lanjutan (sering dipakai) */
tr:nth-child(even) { background: #f2f2f2; }  /* Baris genap */
tr:nth-child(odd) { background: #fff; }      /* Baris ganjil */
li:first-child { }   /* Anak pertama */
li:last-child { }    /* Anak terakhir */
li:nth-child(3) { }  /* Anak ke-3 */
li:nth-child(2n) { } /* Anak genap */
li:not(:last-child) { margin-right: 10px; } /* Semua kecuali terakhir */
input:required { border-color: red; }
input:disabled { opacity: 0.5; }
input:checked { }  /* Checkbox/radio yang dicentang */
```

---

## BAB 9: PSEUDO-ELEMENTS LENGKAP

```css
p::first-line { font-weight: bold; }    /* Baris pertama */
p::first-letter { font-size: 200%; }    /* Huruf pertama */
p::before { content: "⭐ "; }            /* Sebelum konten */
p::after { content: " ⭐"; }             /* Setelah konten */
input::placeholder { color: gray; }      /* Teks placeholder */
::selection { background: yellow; color: black; } /* Saat di-highlight */
```

---

## BAB 10: CSS UNITS (SATUAN) LENGKAP

| Satuan | Penjelasan | Kapan Pakai | Contoh |
|--------|------------|-------------|--------|
| `px` | Pixels (absolut) | Border, shadow, ukuran presisi | `border: 1px` |
| `rem` | Root EM (relatif ke font-size root) | **WAJIB** untuk font-size | `font-size: 1rem` (=16px) |
| `em` | EM (relatif ke font-size elemen) | Padding/margin di komponen | `padding: 1em` |
| `%` | Persen (relatif ke parent) | Lebar, tinggi, layout | `width: 100%` |
| `vh` | Viewport Height (1% tinggi layar) | Full screen sections | `height: 100vh` |
| `vw` | Viewport Width (1% lebar layar) | Full width | `width: 100vw` |
| `ch` | Character (lebar huruf '0') | Text container | `width: 40ch` |
| `auto` | Otomatis | Margin, width | `margin: 0 auto` |

---

## BAB 11: CSS SPECIFICITY (PRIORITAS)

**Urutan kekuatan (dari terlemah ke terkuat):**
```
Inline Style (1000) > ID (100) > Class / Pseudo-class (10) > Tag (1) > Universal (*) (0)
```

**Contoh:**
```css
/* Tag (1) - kalah */
p { color: red; }

/* Class (10) - menang */
.text { color: blue; }

/* ID (100) - menang telak */
#main p { color: green; }

/* Inline (1000) - menang mutlak */
<p style="color: yellow;">Teks</p>
```

**HINDARI `!important`!** Ini merusak struktur dan susah di-debug.

---

## BAB 12: TIPS & TRIK PROFESIONAL

### 1. CSS Reset Standar
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### 2. Hindari Inline Style
```css
/* ❌ SALAH */
<p style="color: red;">Teks</p>

/* ✅ BENAR */
.text-red { color: red; }
<p class="text-red">Teks</p>
```

### 3. Nama Class Jelas (BEM Disarankan)
```css
/* BEM: Block__Element--Modifier */
.card { }
.card__title { }
.card__title--large { }
.card--featured { }
```

### 4. Mobile First
Mulai dari HP, lalu tambahkan untuk layar besar.

### 5. Gunakan CSS Variables
```css
:root { --primary: #6c63ff; }
.btn { background: var(--primary); }
```

---

## BAB 13: CONTOH PORTOFOLIO LENGKAP (FINAL)

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio - Budi</title>
    <style>
        /* ===== RESET ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #2d3436;
            background: #f8f9fa;
        }
        
        /* ===== VARIABLES ===== */
        :root {
            --primary: #6c63ff;
            --dark: #2d3436;
            --light: #f8f9fa;
            --spacing: 20px;
            --radius: 12px;
            --shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        /* ===== HEADER ===== */
        header {
            background: var(--dark);
            color: white;
            padding: var(--spacing);
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: var(--primary);
        }
        
        /* ===== HERO ===== */
        .hero {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 var(--spacing);
            display: flex;
            align-items: center;
            gap: 50px;
            min-height: 70vh;
            flex-wrap: wrap;
        }
        
        .hero-content {
            flex: 1;
        }
        
        .hero-content h1 {
            font-size: 48px;
            margin-bottom: 10px;
        }
        
        .hero-content .highlight {
            color: var(--primary);
        }
        
        .hero-image {
            flex: 1;
            text-align: center;
        }
        
        .hero-image img {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid var(--primary);
        }
        
        /* ===== BUTTON ===== */
        .btn {
            display: inline-block;
            background: var(--primary);
            color: white;
            padding: 12px 32px;
            border: none;
            border-radius: 30px;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            text-decoration: none;
        }
        
        .btn:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(108, 99, 255, 0.3);
        }
        
        /* ===== SECTION ===== */
        section {
            max-width: 1200px;
            margin: 60px auto;
            padding: 0 var(--spacing);
        }
        
        .section-title {
            font-size: 32px;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .section-title span {
            color: var(--primary);
        }
        
        /* ===== CARDS ===== */
        .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }
        
        .card {
            background: white;
            padding: 30px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        
        /* ===== FOOTER ===== */
        footer {
            background: var(--dark);
            color: white;
            text-align: center;
            padding: var(--spacing);
            margin-top: 60px;
        }
        
        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
            .hero {
                flex-direction: column-reverse;
                text-align: center;
            }
            
            .hero-content h1 {
                font-size: 32px;
            }
            
            .hero-image img {
                width: 200px;
                height: 200px;
            }
            
            .nav-links {
                gap: 15px;
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <h2>Portofolio</h2>
            <ul class="nav-links">
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Tentang</a></li>
                <li><a href="#">Proyek</a></li>
                <li><a href="#">Kontak</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <div class="hero-content">
                <p>Halo, Saya</p>
                <h1><span class="highlight">Budi</span> Santoso</h1>
                <p>Fullstack Developer | RPL Student</p>
                <a href="#" class="btn">Hubungi Saya</a>
            </div>
            <div class="hero-image">
                <img src="https://via.placeholder.com/300" alt="Foto Budi">
            </div>
        </section>
        
        <section>
            <h2 class="section-title">Proyek <span>Saya</span></h2>
            <div class="card-container">
                <div class="card">
                    <h3>Proyek 1</h3>
                    <p>Deskripsi singkat proyek 1</p>
                </div>
                <div class="card">
                    <h3>Proyek 2</h3>
                    <p>Deskripsi singkat proyek 2</p>
                </div>
                <div class="card">
                    <h3>Proyek 3</h3>
                    <p>Deskripsi singkat proyek 3</p>
                </div>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 - Budi Santoso. Dibuat dengan ❤️</p>
    </footer>
</body>
</html>
```

---

## 📋 CHECKLIST FINAL (APA YANG SUDAH KAMU PELAJARI)

| Materi | Status |
|--------|--------|
| Cara menghubungkan CSS | ✅ |
| Selektor (Tag, Class, ID, Turunan, Pseudo) | ✅ |
| Warna & Background | ✅ |
| Teks & Font | ✅ |
| Box Model (Margin, Padding, Border) | ✅ |
| Box Sizing (border-box) | ✅ |
| Display (block, inline, flex, grid) | ✅ |
| **Flexbox (LENGKAP)** | ✅ |
| Grid (Dasar) | ✅ |
| Position (relative, absolute, fixed, sticky) | ✅ |
| Overflow (hidden, scroll, auto) | ✅ |
| Z-Index | ✅ |
| Transisi & Animasi | ✅ |
| Responsive (Media Query) | ✅ |
| CSS Variables | ✅ |
| CSS Units (px, rem, em, %, vh, vw) | ✅ |
| Specificity (Prioritas) | ✅ |
| Pseudo-classes Lanjutan (nth-child, not, dll) | ✅ |
| Pseudo-elements (before, after, placeholder) | ✅ |
| Tips Profesional (Reset, Nama Class, dll) | ✅ |

---

## 💡 KESIMPULAN AKHIR

**Semua materi di atas adalah 100% kebutuhan CSS untuk pelajar RPL yang mau magang.**

1. **Fokus utama:** Flexbox + Box Model + Responsive (ini 80% pekerjaan CSS).
2. **Pelajari tambahan:** Specificity, Units, Overflow, Z-Index (ini 20% sisanya).
3. **Jangan buang waktu:** Pakai Tailwind CSS untuk project nyata agar lebih cepat.
4. **Latihan:** Buat layout dengan Flexbox sampai kamu bisa tanpa lihat dokumentasi.

> Dengan menguasai semua di atas, kamu sudah setara dengan junior frontend developer yang siap magang! 💪🚀