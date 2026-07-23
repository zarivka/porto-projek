## 🧠 **MATERI STRUKTUR LOGIKA PROGRAMMER CSS**

---

## 📋 **1. APA ITU LOGIKA CSS?**

CSS bukan hanya tentang "membuat tampilan cantik". Sebagai programmer, kamu harus berpikir **terstruktur, efisien, dan scalable**.

### **Prinsip Dasar Logika CSS:**

| Prinsip | Penjelasan |
|---------|------------|
| **Konsistensi** | Gunakan sistem yang sama di seluruh halaman |
| **Reusability** | Buat komponen yang bisa dipakai berulang kali |
| **Maintainability** | Kode mudah diubah dan dikelola |
| **Scalability** | Bisa berkembang tanpa merusak yang sudah ada |
| **Performance** | Kode ringan dan cepat dimuat |

---

## 📐 **2. STRUKTUR CSS YANG BAIK (KERANGKA LOGIKA)**

## 📍 **LETAK CLASS DALAM STRUKTUR CSS**

---

## 🎯 **JAWABAN SINGKAT:**

**Class diletakkan di bagian 2, 3, dan 4** tergantung fungsinya:

| Fungsi | Letak | Contoh |
|--------|-------|--------|
| **Class elemen dasar** | Bagian 2 | `.btn`, `.card`, `.container` |
| **Class layout/struktur** | Bagian 3 | `.navbar`, `.footer`, `.sidebar` |
| **Class komponen** | Bagian 4 | `.hero`, `.about-box`, `.skill-card` |
| **Class utility** | Bagian 5 | `.text-center`, `.flex-center` |

---

## 📋 **STRUKTUR LENGKAP DENGAN CLASS:**

```css
/* =============================================
   1. RESET & VARIABEL GLOBAL
   ============================================= */

/* 1A. Reset CSS */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* 1B. Variabel Global */
:root {
    --bg-primary: #0a0a0a;
    --text-primary: #ffffff;
    --accent: #00d4ff;
    --font-family: 'Arial', sans-serif;
}


/* =============================================
   2. ELEMEN DASAR (TAG HTML) + CLASS DASAR
   ============================================= */

/* Tag HTML */
html { scroll-behavior: smooth; }
body { 
    font-family: var(--font-family);
    background: var(--bg-primary);
    color: var(--text-primary);
}
h1, h2, h3 { color: var(--accent); }
a { text-decoration: none; color: var(--text-primary); }

/* Class Dasar (dipakai banyak tempat) */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background: var(--accent);
    color: white;
}

.btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}

.card {
    background: #2a2a2a;
    padding: 20px;
    border-radius: 16px;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}


/* =============================================
   3. LAYOUT & STRUKTUR (header, nav, main, footer)
   ============================================= */

/* Header & Navbar */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
}

.header__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 30px;
}

.nav__logo {
    font-size: 24px;
    font-weight: bold;
    color: white;
}

.nav__logo span { color: var(--accent); }

.nav__list {
    display: flex;
    gap: 30px;
    list-style: none;
}

.nav__link {
    color: white;
    font-size: 15px;
    transition: color 0.3s ease;
}

.nav__link:hover { color: var(--accent); }

/* Main */
.main {
    margin-top: 100px;
}

/* Footer */
.footer {
    background: #1a1a2e;
    padding: 50px 30px;
    color: white;
    margin-top: 50px;
}

.footer__container {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
}

.footer__title {
    font-size: 30px;
    font-weight: bold;
}

.footer__list {
    list-style: none;
}

.footer__link {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer__link:hover { color: black; }


/* =============================================
   4. KOMPONEN (SECTION)
   ============================================= */

/* Hero / Beranda */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 0 30px;
    min-height: 80vh;
}

.hero__text { font-size: 30px; }

.hero__name {
    font-size: 40px;
    font-weight: bold;
    background: linear-gradient(to right, #00d4ff, #0088cc);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero__image {
    width: 500px;
    height: 500px;
    border-radius: 5%;
}

.hero__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5%;
}

/* Tentang Saya */
.about { margin: 150px 30px; }

.about__container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.about__box {
    flex: 0 0 45%;
    background: #2a2a2a;
    padding: 20px;
    border-radius: 20px;
    transition: all 0.3s ease;
}

.about__box:hover {
    transform: scale(1.01);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.about__box h3 {
    color: #00d4ff;
    font-size: 20px;
    margin-bottom: 10px;
}

.about__box p {
    color: white;
    font-size: 14px;
}

/* Pendidikan */
.education { margin: 150px 30px; }

.education__container { margin: 20px 0; }

.education__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #2a2a2a;
    padding: 10px 20px;
    border-radius: 20px;
    margin: 10px 0;
    transition: all 0.3s ease;
}

.education__item:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.education__content { color: white; }

.education__content h3 { font-size: 20px; }
.education__content p { font-size: 16px; }

.education__skill {
    font-size: 20px;
    list-style: none;
}

.education__image {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
}

/* Pengalaman */
.experience { margin: 150px 30px; }

.experience__container {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.experience__item {
    background: #2a2a2a;
    padding: 25px 30px;
    border-radius: 20px;
    border-left: 5px solid #00d4ff;
    transition: all 0.3s ease;
}

.experience__item:hover {
    transform: translateX(10px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.experience__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.experience__header h3 { color: #00d4ff; }

.experience__badge {
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: bold;
    background: #0a37ff;
}

.experience__badge--school { background: #ff6b00; }
.experience__badge--personal { background: #00b894; }

.experience__place {
    color: #aaa;
    font-size: 15px;
    margin: 5px 0 15px 0;
}

.experience__skill {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
}

.experience__skill span {
    background: #0a37ff;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 13px;
}

/* Portofolio */
.portfolio { margin: 150px 30px; }

.portfolio__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.portfolio__item {
    background: #2a2a2a;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.portfolio__item:hover {
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.portfolio__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.portfolio__content { padding: 20px; }

.portfolio__content h3 {
    color: #00d4ff;
    font-size: 20px;
    margin-bottom: 10px;
}

.portfolio__content p {
    font-size: 14px;
    margin-bottom: 15px;
}

.portfolio__tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
}

.portfolio__tech span {
    background: #0a37ff;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
}

.portfolio__link {
    color: #00d4ff;
    font-weight: bold;
    transition: all 0.3s ease;
}

.portfolio__link:hover {
    color: white;
    transform: translateX(5px);
}

/* Kontak */
.contact {
    background: #1a1a2e;
    padding: 50px 30px;
}

.contact__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.contact__card {
    flex: 1 1 160px;
    max-width: 200px;
    min-width: 140px;
    background: rgba(255, 255, 255, 0.05);
    padding: 30px 25px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    text-decoration: none;
    color: white;
}

.contact__card:hover {
    transform: translateY(-10px);
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 30px rgba(0, 212, 255, 0.2);
}

.contact__icon {
    font-size: 50px;
    color: #00d4ff;
    transition: all 0.3s ease;
}

.contact__card:hover .contact__icon {
    transform: scale(1.2) rotate(5deg);
    color: white;
}

.contact__title { font-size: 16px; margin: 10px 0 5px 0; }
.contact__text { color: #aaa; font-size: 12px; }


/* =============================================
   5. UTILITY (Fungsi Bantuan)
   ============================================= */

/* Teks */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* Flexbox */
.flex { display: flex; }
.flex-center { display: flex; align-items: center; justify-content: center; }
.flex-between { display: flex; align-items: center; justify-content: space-between; }
.flex-wrap { display: flex; flex-wrap: wrap; }
.flex-column { display: flex; flex-direction: column; }

/* Grid */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

/* Spacing */
.m-10 { margin: 10px; }
.m-20 { margin: 20px; }
.m-30 { margin: 30px; }
.p-10 { padding: 10px; }
.p-20 { padding: 20px; }
.p-30 { padding: 30px; }

/* Text Colors */
.text-white { color: white; }
.text-accent { color: #00d4ff; }
.text-muted { color: #888; }

/* Background */
.bg-dark { background: #0a0a0a; }
.bg-card { background: #2a2a2a; }
.bg-section { background: #1a1a2e; }

/* Border */
.rounded { border-radius: 20px; }
.rounded-sm { border-radius: 10px; }
.rounded-full { border-radius: 9999px; }


/* =============================================
   6. RESPONSIF (MEDIA QUERY)
   ============================================= */

/* Tablet (max-width: 768px) */
@media (max-width: 768px) {

    /* Navbar */
    .nav__list { gap: 15px; }
    .nav__link { font-size: 13px; }

    /* Hero */
    .hero { flex-direction: column; text-align: center; }
    .hero__text { font-size: 24px; }
    .hero__name { font-size: 30px; }
    .hero__image { width: 300px; height: 300px; }

    /* About */
    .about__box { flex: 0 0 100%; }

    /* Education */
    .education__item { flex-direction: column; text-align: center; }
    .education__image { width: 150px; height: 150px; }

    /* Grid */
    .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
}

/* HP (max-width: 480px) */
@media (max-width: 480px) {

    /* Navbar */
    .nav__list { display: none; } /* Sembunyi untuk hamburger menu */

    /* Hero */
    .hero__image { width: 200px; height: 200px; }
    .hero__text { font-size: 20px; }
    .hero__name { font-size: 24px; }

    /* Footer */
    .footer__container { flex-direction: column; text-align: center; gap: 20px; }

    /* Contact */
    .contact__card { flex: 1 1 100%; max-width: 100%; }
}
```

---

## 📊 **RINGKASAN LETAK CLASS:**

| Jenis Class | Letak | Contoh |
|-------------|-------|--------|
| **Class Dasar** (dipakai banyak) | Bagian 2 | `.container`, `.btn`, `.card` |
| **Class Layout** (header, footer) | Bagian 3 | `.header`, `.footer`, `.sidebar` |
| **Class Komponen** (section) | Bagian 4 | `.hero`, `.about`, `.education` |
| **Class Utility** (bantuan kecil) | Bagian 5 | `.text-center`, `.flex-center` |

---

## 🎯 **KENAPA HARUS DIURUTKAN SEPERTI INI?**

| Alasan | Penjelasan |
|--------|------------|
| **Cascading** | CSS dibaca dari atas ke bawah, style terakhir lebih prioritas |
| **Organisasi** | Mudah dicari dan diubah |
| **Maintenance** | Developer lain bisa paham strukturnya |
| **Konsistensi** | Semua file CSS bisa pakai pola yang sama |

---

**Sudah paham, Manazhir? Semua class punya tempatnya masing-masing!** 😊

## 🎯 **3. LOGIKA SELECTOR (CARA MEMILIH ELEMEN)**

### **Hierarki Selector:**

```
Selector
├── 1. Tag (paling lemah)
│   └── div, h1, p, a
├── 2. Class (cukup kuat)
│   └── .box, .container, .btn
├── 3. ID (paling kuat)
│   └── #header, #beranda
└── 4. Kombinasi (spesifik)
    └── .container .box h3
```

### **Logika Memilih Selector:**

| Situasi | Pakai | Contoh |
|---------|-------|--------|
| Semua elemen sama | Tag | `p { color: red; }` |
| Kelompok elemen | Class | `.card { ... }` |
| Elemen unik | ID | `#header { ... }` |
| Elemen di dalam elemen | Kombinasi | `.container .card { ... }` |
| Elemen tertentu | Attribute | `input[type="text"] { ... }` |

---

## 🧩 **4. LOGIKA FLEXBOX (CARA BERPIKIR)**

### **Konsep Dasar Flexbox:**

```
Flex Container (Bapak)
├── display: flex
├── flex-direction: row | column
├── flex-wrap: wrap | nowrap
├── justify-content: (horizontal)
│   ├── flex-start (kiri)
│   ├── center (tengah)
│   ├── flex-end (kanan)
│   └── space-between (rata kiri-kanan)
└── align-items: (vertical)
    ├── flex-start (atas)
    ├── center (tengah)
    └── flex-end (bawah)

Flex Item (Anak)
├── flex: grow shrink basis
├── order: 1, 2, 3
└── align-self: ...
```

### **Logika Berpikir Flexbox:**

> **"Saya punya bapak (container) yang mengatur anak-anaknya (items) agar rapi dan responsif."**

**Contoh Berpikir:**
```
Saya mau 4 box dalam 2 baris.
→ Bapak pakai display: flex + flex-wrap: wrap
→ Setiap anak pakai flex: 0 0 45%
```

---

## 🧩 **5. LOGIKA GRID (CARA BERPIKIR)**

### **Konsep Dasar Grid:**

```
Grid Container
├── display: grid
├── grid-template-columns: 1fr 1fr 1fr (3 kolom)
├── grid-template-rows: auto
├── gap: 20px
└── grid-template-areas: ...

Grid Item
├── grid-column: 1 / 3 (gabung kolom 1-2)
├── grid-row: 1 / 2
└── grid-area: ...
```

### **Logika Berpikir Grid:**

> **"Saya punya tabel (grid) dengan jumlah kolom dan baris yang sudah ditentukan, lalu saya taruh item di sel-selnya."**

**Contoh Berpikir:**
```
Saya mau portofolio 3 kolom.
→ Pakai display: grid
→ grid-template-columns: repeat(3, 1fr)
→ Secara otomatis item masuk ke sel-sel
```

---

## 📱 **6. LOGIKA RESPONSIF (CARA BERPIKIR)**

### **Konsep Dasar:**

```css
/* Desktop First (mulai dari besar ke kecil) */
.container { width: 1200px; }
@media (max-width: 768px) { .container { width: 100%; } }

/* Mobile First (mulai dari kecil ke besar) */
.container { width: 100%; }
@media (min-width: 768px) { .container { width: 1200px; } }
```

### **Logika Berpikir Responsif:**

> **"Saya desain untuk HP dulu, lalu saya sesuaikan untuk layar yang lebih besar (Mobile First)."**

### **Breakpoint yang Harus Diketahui:**

| Perangkat | Lebar Layar | Breakpoint |
|-----------|-------------|------------|
| **HP** | < 576px | `max-width: 576px` |
| **Tablet** | 576px - 768px | `max-width: 768px` |
| **Laptop** | 768px - 992px | `max-width: 992px` |
| **Desktop** | > 992px | `min-width: 992px` |

---

## 🎨 **7. LOGIKA WARNA & TEMA**

### **Konsep Dasar:**

```css
/* Warna Utama (Primary) */
--primary: #00d4ff;
--primary-dark: #0088cc;

/* Warna Sekunder (Secondary) */
--secondary: #0a37ff;

/* Warna Netral (Neutral) */
--bg: #0a0a0a;
--text: #ffffff;
--text-muted: #888888;

/* Warna Status (State) */
--success: #00b894;
--warning: #fdcb6e;
--danger: #e17055;
```

### **Logika Berpikir Warna:**

> **"Saya punya sistem warna yang konsisten: 1 warna utama, 1 warna sekunder, dan warna netral. Semua elemen pakai dari sistem ini."**

---

## 🔧 **8. LOGIKA KODE EFEKTIF (DRY PRINCIPLE)**

### **DRY = Don't Repeat Yourself**

**❌ Jangan (Duplikasi):**
```css
.card-1 { background: #2a2a2a; padding: 20px; border-radius: 10px; }
.card-2 { background: #2a2a2a; padding: 20px; border-radius: 10px; }
.card-3 { background: #2a2a2a; padding: 20px; border-radius: 10px; }
```

**✅ Lakukan (Gunakan Class):**
```css
.card { background: #2a2a2a; padding: 20px; border-radius: 10px; }
```

```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
```

---

## 📝 **9. LOGIKA PENAMAAN (BEM METHODOLOGY)**

### **BEM = Block, Element, Modifier**

```
Block       : .nav, .card, .button
Element     : .nav__item, .card__title, .button__icon
Modifier    : .nav__item--active, .card--large, .button--primary
```

### **Contoh Penerapan:**

```html
<!-- Block -->
<ul class="nav">
    <!-- Element -->
    <li class="nav__item">
        <!-- Element dengan Modifier -->
        <a class="nav__link nav__link--active">Beranda</a>
    </li>
    <li class="nav__item">
        <a class="nav__link">Tentang</a>
    </li>
</ul>
```

```css
.nav { display: flex; gap: 20px; }
.nav__item { list-style: none; }
.nav__link { color: white; text-decoration: none; }
.nav__link--active { color: #00d4ff; }
```

---

## 🚀 **10. LOGIKA OPTIMASI KINERJA**

### **Cara Berpikir:**

| Prinsip | Penjelasan |
|---------|------------|
| **Spesifik Selector** | Hindari selector terlalu dalam (`.parent .child .grandchild .target`) |
| **Minimalkan Reflow** | Jangan ubah layout terlalu sering |
| **Gunakan CSS Variables** | Mudah diubah dan lebih ringan |
| **Compress File** | File CSS harus ringan untuk loading cepat |

### **Contoh Selector Efisien:**

**❌ Buruk:**
```css
#beranda .beranda--textsetting .beranda--textsetting--Textmain p a { ... }
```

**✅ Baik:**
```css
.beranda-text a { ... }
```

---

## 📊 **RINGKASAN LOGIKA PROGRAMMER CSS:**

| Aspek | Logika Berpikir |
|-------|-----------------|
| **Struktur** | Atur dari global → komponen → responsif |
| **Selector** | Class lebih baik dari ID untuk styling |
| **Flexbox** | Container mengatur anak, 1 dimensi (baris/kolom) |
| **Grid** | Tabel dengan baris & kolom, 2 dimensi |
| **Responsif** | Desain dari HP ke desktop (Mobile First) |
| **Warna** | Sistem warna konsisten di :root |
| **Reusability** | Buat class yang bisa dipakai di mana saja |
| **Penamaan** | Pakai BEM agar jelas (Block__Element--Modifier) |
| **Kinerja** | Selector sederhana, tidak terlalu dalam |

**Sudah paham logika CSS, Manazhir?** 😊