Baik! Saya akan jelaskan **sintaks CSS paling penting** yang wajib kamu kuasai. CSS itu bahasanya **styling** (mengatur tampilan: warna, ukuran, letak, jarak, dll).

---

## 📌 STRUKTUR DASAR CSS

```css
/* Struktur: Selektor { properti: nilai; } */
p {
    color: blue;
    font-size: 16px;
}

/* Penjelasan:
   p           = selektor (target elemen apa)
   color       = properti (apa yang diubah)
   blue        = nilai (jadikan apa)
   font-size   = properti ukuran font
   16px        = nilai ukuran
*/
```

---

## 1. CARA MENGHUBUNGKAN CSS KE HTML

```html
<!-- Cara 1: Inline (langsung di elemen, jarang dipakai) -->
<p style="color: red; font-size: 20px;">Teks merah</p>

<!-- Cara 2: Internal (di dalam tag <style> di <head>, untuk satu halaman) -->
<head>
    <style>
        p { color: blue; }
    </style>
</head>

<!-- Cara 3: External (file terpisah, PALING DISARANKAN!) -->
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

---

## 2. SELEKTOR CSS (CARA MENUNJUK ELEMEN)

```css
/* 1. Selektor Tag - semua elemen dengan tag itu */
p { color: blue; }          /* Semua <p> jadi biru */
h1 { font-size: 24px; }     /* Semua <h1> ukuran 24px */

/* 2. Selektor Class - pakai titik (.) */
.btn { background: blue; }  /* Semua elemen dengan class="btn" */
.text-red { color: red; }   /* Semua elemen dengan class="text-red" */

/* 3. Selektor ID - pakai pagar (#) */
#header { background: black; }  /* Elemen dengan id="header" */

/* 4. Selektor Gabungan - beberapa elemen sekaligus */
h1, h2, h3 { color: green; }    /* h1, h2, h3 semuanya hijau */

/* 5. Selektor Turunan - elemen di dalam elemen lain */
div p { color: red; }           /* Semua <p> di dalam <div> jadi merah */
.container .btn { background: blue; } /* .btn di dalam .container */

/* 6. Selektor Anak Langsung (>) - hanya anak langsung */
div > p { color: red; }         /* <p> yang langsung di dalam <div> */

/* 7. Selektor Pseudo-class - kondisi khusus */
a:hover { color: red; }         /* Saat mouse di atas link */
input:focus { border: 2px solid blue; } /* Saat input aktif */
button:active { transform: scale(0.95); } /* Saat tombol ditekan */

/* 8. Selektor Pseudo-element - bagian dari elemen */
p::first-line { font-weight: bold; } /* Baris pertama paragraf */
p::before { content: "⭐ "; }         /* Tambah bintang sebelum paragraf */
```

---

## 3. WARNA & BACKGROUND (PALING SERING)

```css
/* Cara menentukan warna */
p {
    color: red;                 /* Nama warna */
    color: #FF0000;            /* HEX (6 digit) */
    color: #F00;               /* HEX singkat (3 digit) */
    color: rgb(255, 0, 0);     /* RGB (0-255) */
    color: rgba(255, 0, 0, 0.5); /* RGBA (dengan opacity 0-1) */
    color: hsl(0, 100%, 50%);  /* HSL (hue, saturasi, lightness) */
}

/* Background */
div {
    background-color: blue;      /* Warna latar */
    background-image: url('foto.jpg'); /* Gambar latar */
    background-size: cover;      /* Gambar penuh */
    background-position: center; /* Posisi gambar */
    background-repeat: no-repeat; /* Tidak diulang */
}

/* Singkatan background (sering dipakai) */
div {
    background: blue url('foto.jpg') no-repeat center/cover;
}
```

---

## 4. TEKS & FONT

```css
p {
    color: blue;                    /* Warna teks */
    font-size: 16px;                /* Ukuran font */
    font-family: Arial, sans-serif; /* Jenis font (kalau Arial ga ada, pakai sans-serif) */
    font-weight: bold;              /* Tebal (bold / normal / 100-900) */
    font-style: italic;             /* Miring */
    text-align: center;             /* Rata tengah (left, right, justify) */
    text-decoration: underline;     /* Garis bawah (underline, overline, line-through, none) */
    text-transform: uppercase;      /* Huruf kapital (uppercase, lowercase, capitalize) */
    line-height: 1.5;               /* Jarak antar baris */
    letter-spacing: 2px;            /* Jarak antar huruf */
}
```

---

## 5. BOX MODEL (WAJIB KUASAI!)

```css
div {
    /* Dimensi */
    width: 200px;           /* Lebar */
    height: 100px;          /* Tinggi */
    max-width: 100%;        /* Lebar maksimal */
    
    /* Padding (jarak dalam, antara konten dan border) */
    padding: 10px;          /* Semua sisi 10px */
    padding: 10px 20px;     /* Atas/bawah 10px, kiri/kanan 20px */
    padding: 10px 20px 30px 40px; /* Atas, kanan, bawah, kiri (searah jarum jam) */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
    
    /* Margin (jarak luar, antar elemen) */
    margin: 10px;           /* Semua sisi 10px */
    margin: 10px 20px;      /* Atas/bawah 10px, kiri/kanan 20px */
    margin: 10px 20px 30px 40px; /* Atas, kanan, bawah, kiri */
    margin: 0 auto;         /* Tengah horizontal (untuk block) */
    
    /* Border (garis tepi) */
    border: 2px solid black; /* Tebal, jenis, warna */
    border: none;           /* Tanpa border */
    border-radius: 10px;    /* Sudut melengkung */
    border-radius: 50%;     /* Jadi lingkaran */
    
    /* Background */
    background: white;
}
```

### Visual Box Model:
```
┌─────────────────────────┐
│         MARGIN           │  ← Jarak luar (transparan)
│  ┌───────────────────┐  │
│  │      BORDER         │  │  ← Garis tepi
│  │  ┌───────────────┐  │  │
│  │  │    PADDING     │  │  │  ← Jarak dalam
│  │  │  ┌───────────┐ │  │  │
│  │  │  │  KONTEN   │ │  │  │  ← Isi (teks/gambar)
│  │  │  └───────────┘ │  │  │
│  │  └───────────────┘  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

## 6. DISPLAY & LAYOUT (PALING KRUSIAL!)

```css
/* display: block - turun baris, lebar penuh */
div {
    display: block;         /* Default div, p, h1-h6 */
    width: 100%;
}

/* display: inline - tidak turun baris, ukuran sesuai konten */
span {
    display: inline;        /* Default span, a, img */
    width: 100px;           /* Tidak berpengaruh! */
}

/* display: inline-block - inline tapi bisa diatur ukuran */
button {
    display: inline-block;
    width: 100px;
    height: 40px;
}

/* display: none - hilang (tidak tampil) */
.hidden {
    display: none;          /* Elemen hilang, ruang kosong dihapus */
}

/* visibility: hidden - hilang tapi ruang tetap ada */
.invisible {
    visibility: hidden;     /* Elemen hilang, tapi ruangnya tetap */
}
```

---

## 7. FLEXBOX (⭐ WAJIB KUASAI! PALING PENTING)

```css
/* Aktifkan flex pada container */
.container {
    display: flex;
    
    /* 1. Arah flex (baris atau kolom) */
    flex-direction: row;        /* Default: kiri ke kanan */
    flex-direction: row-reverse; /* Kanan ke kiri */
    flex-direction: column;     /* Atas ke bawah */
    flex-direction: column-reverse; /* Bawah ke atas */
    
    /* 2. Perataan horizontal (main axis) */
    justify-content: flex-start; /* Kiri (default) */
    justify-content: center;     /* Tengah */
    justify-content: flex-end;   /* Kanan */
    justify-content: space-between; /* Rata kiri & kanan, jarak sama di tengah */
    justify-content: space-around; /* Jarak sama di sekitar */
    justify-content: space-evenly; /* Jarak sama rata */
    
    /* 3. Perataan vertikal (cross axis) */
    align-items: stretch;    /* Tarik penuh (default) */
    align-items: flex-start; /* Atas */
    align-items: center;     /* Tengah */
    align-items: flex-end;   /* Bawah */
    align-items: baseline;   /* Sejajar dengan teks */
    
    /* 4. Bungkus atau tidak */
    flex-wrap: nowrap;       /* Tidak bungkus (default) */
    flex-wrap: wrap;         /* Bungkus ke baris baru */
    flex-wrap: wrap-reverse; /* Bungkus ke atas */
    
    /* 5. Jarak antar item */
    gap: 10px;              /* Jarak antar elemen 10px */
    gap: 10px 20px;         /* Row gap 10px, column gap 20px */
}

/* Pengaturan item anak */
.item {
    /* 1. Ukuran flex (prioritas) */
    flex: 1;              /* Sama rata (1:1:1) */
    flex: 2;              /* 2x lebih besar dari flex:1 */
    flex: 0 1 100px;      /* flex-grow, flex-shrink, flex-basis */
    
    /* 2. Perataan diri sendiri (override align-items) */
    align-self: center;
    align-self: flex-start;
    align-self: flex-end;
}
```

### Contoh Flexbox (CARD LAYOUT):
```html
<div class="container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
</div>
```
```css
.container {
    display: flex;
    justify-content: center;
    gap: 20px;
}
.card {
    width: 200px;
    padding: 20px;
    background: #f0f0f0;
    border-radius: 10px;
}
```

---

## 8. POSITION (MENGATUR POSISI ELEMEN)

```css
/* 1. Static (default) - mengikuti alur normal */
div {
    position: static;
}

/* 2. Relative - dari posisi normal (bisa digeser) */
div {
    position: relative;
    top: 10px;      /* Geser turun 10px dari posisi normal */
    left: 20px;     /* Geser kanan 20px dari posisi normal */
}

/* 3. Absolute - mengikuti parent terdekat yang position-nya non-static */
.parent {
    position: relative; /* Parent jadi acuan */
}
.child {
    position: absolute;
    top: 0;
    right: 0;
    /* Anak ada di pojok kanan atas parent */
}

/* 4. Fixed - tetap di layar (tidak ikut scroll) */
.fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 100; /* Di atas elemen lain */
}

/* 5. Sticky - kombinasi relative + fixed saat scroll */
.navbar {
    position: sticky;
    top: 0; /* Mulai sticky saat scroll ke top:0 */
    background: white;
    z-index: 50;
}
```

---

## 9. RESPONSIVE (MEDIA QUERY)

```css
/* Tablet (max-width: 768px) */
@media (max-width: 768px) {
    .container {
        flex-direction: column; /* Jadi kolom di HP */
    }
    h1 {
        font-size: 20px;
    }
}

/* HP (max-width: 480px) */
@media (max-width: 480px) {
    .card {
        width: 100%; /* Full lebar di HP */
    }
}

/* Desktop (min-width: 769px) */
@media (min-width: 769px) {
    .mobile-menu {
        display: none; /* Sembunyikan menu HP di desktop */
    }
}
```

---

## 10. TRANSISI & ANIMASI (DASAR)

```css
/* Transisi - perubahan halus */
.button {
    background: blue;
    transition: background 0.3s ease; /* 0.3 detik, halus */
}
.button:hover {
    background: red; /* Saat hover, berubah halus */
}

/* Transisi banyak properti */
.card {
    transition: all 0.3s ease;
}
.card:hover {
    transform: scale(1.05); /* Membesar sedikit */
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Animasi */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.element {
    animation: fadeIn 1s ease;
}
```

---

## 11. SHADOW & BORDER (UNTUK TAMPILAN MODERN)

```css
/* Box shadow (bayangan kotak) */
.card {
    box-shadow: 2px 4px 10px rgba(0,0,0,0.1);
    /* offset-x, offset-y, blur, warna */
}
.card:hover {
    box-shadow: 0 10px 30px rgba(0,0,0,0.2); /* Lebih besar saat hover */
}

/* Text shadow (bayangan teks) */
h1 {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Border radius (sudut melengkung) */
.card {
    border-radius: 10px;
}
.avatar {
    border-radius: 50%; /* Jadi lingkaran */
}
```

---

## 📌 RINGKASAN PROPERTI WAJIB HAFAL

| Kategori | Properti Wajib |
|----------|----------------|
| **Warna & Background** | `color`, `background`, `background-color` |
| **Teks & Font** | `font-size`, `font-family`, `font-weight`, `text-align` |
| **Box Model** | `width`, `height`, `padding`, `margin`, `border` |
| **Display** | `display` (block, inline, flex, none) |
| **Flexbox** | `display:flex`, `flex-direction`, `justify-content`, `align-items`, `gap`, `flex` |
| **Position** | `position` (relative, absolute, fixed), `top`, `left` |
| **Responsive** | `@media` (max-width, min-width) |
| **Lainnya** | `border-radius`, `box-shadow`, `transition`, `transform` |

---

## 🔥 CONTOH LENGKAP (CARD PRODUK)

```html
<div class="card">
    <img src="product.jpg" alt="Product">
    <h3>Nama Produk</h3>
    <p class="price">Rp 100.000</p>
    <button class="btn">Beli</button>
</div>
```
```css
.card {
    width: 250px;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}
.price {
    color: #e74c3c;
    font-size: 20px;
    font-weight: bold;
}
.btn {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
}
.btn:hover {
    background: #2980b9;
}
```

---

## 💡 TIPS UNTUK PELAJAR RPL

1. **Fokus ke FLEXBOX** — Ini yang paling sering dipakai, kuasai `justify-content`, `align-items`, dan `gap`.
2. **Gunakan Tailwind CSS** — Kamu nggak perlu hafal semua CSS. Tailwind sudah menyediakan class siap pakai.
3. **Pahami Box Model** — `margin`, `padding`, `border` adalah dasar semua layout.
4. **Responsive pakai media query** — Minimal bisa bedakan tampilan HP dan desktop.
5. **Jangan styling manual terlalu dalam** — Cukup tahu dasar, nanti pakai framework.

> **Ingat:** Kamu fullstack developer, bukan UI/UX designer. CSS cukup sampai bisa membuat tampilan rapi dan responsif. Fokus utamamu tetap JavaScript, React, dan backend! 💪