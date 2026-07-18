## 🧠 **MATERI STRUKTUR LOGIKA PROGRAMMER HTML**

---

## 📚 **PENDAHULUAN**

Sebagai programmer, menulis HTML bukan hanya tentang **tag** dan **elemen**, tapi tentang **logika** dan **struktur berpikir**. Ini adalah fondasi yang akan membantumu membangun website yang **rapi, terstruktur, dan mudah dikelola**.

---

## 🎯 **1. LOGIKA DASAR HTML**

### **A. HTML sebagai Kerangka (Framework)**

Bayangkan HTML seperti **kerangka bangunan**:

```
🏗️ KERANGKA BANGUNAN = HTML
🎨 CAT/DECORASI = CSS
⚡ LISTRIK/AIR = JavaScript
```

**Logika:**
- HTML adalah **struktur** (bukan tampilan)
- Semua elemen punya **fungsi** masing-masing
- Jangan pakai HTML untuk styling (itu tugas CSS)

---

### **B. Hierarki / Pohon Dokumen (DOM)**

Setiap elemen HTML adalah **node** dalam pohon (tree).

```html
<!DOCTYPE html>
<html>                    <!-- AKAR (root) -->
    <head>                │
        <title>...</title>│── CABANG
    </head>               │
    <body>                │
        <header>          │   │
            <nav>...</nav>│   │── CABANG
        </header>         │   │
        <main>            │   │
            <section>     │   │   │
                <h2>      │   │   │── DAUN
                <p>       │   │   │── DAUN
            </section>    │   │   │
        </main>           │   │
        <footer>...</footer> │── CABANG
    </body>               │
</html>
```

**Logika:**
1. **Parent** → elemen yang membungkus
2. **Child** → elemen di dalam
3. **Sibling** → elemen yang satu level
4. **Ancestor** → semua elemen di atas
5. **Descendant** → semua elemen di bawah

**Contoh dalam kode:**
```html
<div class="container">        <!-- PARENT -->
    <h1>Judul</h1>            <!-- CHILD (sibling dengan p) -->
    <p>Paragraf</p>           <!-- CHILD (sibling dengan h1) -->
    <div class="box">         <!-- CHILD -->
        <p>Dalam box</p>      <!-- DESCENDANT (child dari .box) -->
    </div>
</div>
```

---

## 🧩 **2. LOGIKA STRUCTURAL / SEMANTIC HTML**

### **A. Menggunakan Elemen yang Tepat**

| ❌ Salah (Non-Sematik) | ✅ Benar (Semantik) | Fungsi |
|------------------------|---------------------|--------|
| `<div id="header">` | `<header>` | Area kepala halaman |
| `<div id="nav">` | `<nav>` | Navigasi |
| `<div id="main">` | `<main>` | Konten utama |
| `<div id="section">` | `<section>` | Bagian konten |
| `<div id="article">` | `<article>` | Artikel mandiri |
| `<div id="aside">` | `<aside>` | Konten samping |
| `<div id="footer">` | `<footer>` | Kaki halaman |

**Logika:**
- **Semantik** → memberi makna pada struktur
- **Non-sematik** (`<div>`) → tidak memberi makna
- Gunakan semantik untuk **SEO** dan **aksesibilitas**

**Contoh:**
```html
<!-- ❌ Buruk -->
<div id="header">
    <div id="nav">...</div>
</div>

<!-- ✅ Baik -->
<header>
    <nav>...</nav>
</header>
```

---

### **B. Hierarki Heading yang Logis**

| Tag | Tingkat | Fungsi |
|-----|---------|--------|
| `<h1>` | 1 | Judul utama (hanya 1 per halaman) |
| `<h2>` | 2 | Sub judul / bagian besar |
| `<h3>` | 3 | Sub dari h2 |
| `<h4>` | 4 | Sub dari h3 |

**Logika:**
- Jangan lompat heading: h1 → h3 (h2 terlewat)
- Satu halaman = satu `<h1>`
- Heading menentukan **struktur konten**

**Contoh:**
```html
<!-- ❌ Buruk -->
<h1>Web Portofolio</h1>
<h3>Tentang Saya</h3>  <!-- Langsung ke h3, h2 terlewat! -->

<!-- ✅ Baik -->
<h1>Web Portofolio</h1>
    <h2>Tentang Saya</h2>
        <h3>Biodata</h3>
        <h3>Keahlian</h3>
    <h2>Pendidikan</h2>
        <h3>SMK</h3>
        <h3>SMP</h3>
```

---

## 🔍 **3. LOGIKA PERENCANAAN (SEBELUM CODING)**

### **A. Wireframe → Sketsa Dulu**

```
┌──────────────────────────────────────────┐
│  [LOGO]    [MENU 1] [MENU 2] [MENU 3]   │  ← HEADER/NAVBAR
├──────────────────────────────────────────┤
│                                          │
│  [GAMBAR]    TEKS PERKENALAN            │  ← HERO/BERANDA
│              NAMA                        │
│              TOMBOL                      │
│                                          │
├──────────────────────────────────────────┤
│  TENTANG SAYA                            │  ← SECTION
│  ┌──────────┐ ┌──────────┐              │
│  │ BOX 1    │ │ BOX 2    │              │
│  └──────────┘ └──────────┘              │
│  ┌──────────┐ ┌──────────┐              │
│  │ BOX 3    │ │ BOX 4    │              │
│  └──────────┘ └──────────┘              │
│                                          │
├──────────────────────────────────────────┤
│  PENDIDIKAN                              │  ← SECTION
│  ┌──────────────────────────────────┐    │
│  │ SMK ...                         │    │
│  └──────────────────────────────────┘    │
│                                          │
├──────────────────────────────────────────┤
│  © 2026 Manazhir Dev                    │  ← FOOTER
└──────────────────────────────────────────┘
```

**Logika:**
1. Tentukan **struktur** di kertas dulu
2. Bagi menjadi **bagian-bagian** (section)
3. Tentukan **urutan** dari atas ke bawah
4. Identifikasi elemen yang **berulang** (card, box)

---

### **B. Identifikasi Komponen Berulang**

| Komponen | HTML | CSS | Digunakan di |
|----------|------|-----|--------------|
| **Card** | `<div class="card">` | Class | Tentang Saya, Portofolio |
| **Button** | `<button class="btn">` | Class | Beranda, Kontak |
| **Box Pendidikan** | `<div class="edu-box">` | Class | Pendidikan |
| **Nav Link** | `<a class="nav-link">` | Class | Navbar |

**Logika:**
- **Class** untuk elemen yang berulang
- **ID** untuk elemen yang unik (sekali pakai)
- DRY: **Don't Repeat Yourself**

---

## 📐 **4. LOGIKA NAMING CONVENTION**

### **A. BEM (Block Element Modifier)**

```
[Block]__[Element]--[Modifier]
```

| Komponen | Nama BEM | Contoh |
|----------|----------|--------|
| **Block** | Komponen utama | `.card`, `.navbar`, `.footer` |
| **Element** | Bagian dari block | `.card__title`, `.navbar__link` |
| **Modifier** | Variasi/state | `.card--large`, `.btn--primary` |

**Contoh:**
```html
<!-- Block: .beranda -->
<section class="beranda">
    
    <!-- Element: .beranda__img -->
    <div class="beranda__img">
        <img src="foto.jpg" alt="Foto">
    </div>
    
    <!-- Element: .beranda__text -->
    <div class="beranda__text">
        <p class="beranda__text--subtitle">Halo semuanya</p>
        <h1 class="beranda__text--title">Nama Saya</h1>
        <button class="beranda__text--button">Contact Me</button>
    </div>
    
</section>
```

**Logika:**
- **Konsistensi** memudahkan maintenance
- **Membaca** kode jadi lebih mudah
- **Hierarki** jelas dari nama class

---

### **B. CSS Naming yang Buruk vs Baik**

| ❌ Buruk | ✅ Baik | Alasan |
|----------|---------|--------|
| `.box` | `.tentang-saya--container` | Terlalu umum |
| `.c1` | `.box1` | Tidak bermakna |
| `.red` | `.text--primary` | Warna bukan fungsi |
| `.main` | `.content--utama` | Terlalu umum |

---

## 🔄 **5. LOGIKA ALUR DOKUMEN (FLOW)**

### **A. Alur Normal (Normal Flow)**

```
1. Elemen BLOCK → turun ke bawah (vertikal)
   <div>, <p>, <h1>, <section>

2. Elemen INLINE → ke samping (horizontal)
   <span>, <a>, <img>, <strong>
```

**Logika:**
- Block = membuka baris baru
- Inline = berada dalam baris yang sama

**Contoh:**
```html
<h1>Judul</h1>      <!-- BLOCK: turun ke bawah -->
<p>Paragraf 1</p>   <!-- BLOCK: turun ke bawah -->
<p>Paragraf 2</p>   <!-- BLOCK: turun ke bawah -->
<span>Text A</span> <!-- INLINE: di samping -->
<span>Text B</span> <!-- INLINE: di samping -->
```

---

### **B. Alur Flexbox**

```
┌──────────────────────────────────────────┐
│  [BOX 1] [BOX 2] [BOX 3] [BOX 4]        │ ← ROW (kiri ke kanan)
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  [BOX 1]                                 │
│  [BOX 2]                                 │ ← COLUMN (atas ke bawah)
│  [BOX 3]                                 │
│  [BOX 4]                                 │
└──────────────────────────────────────────┘
```

**Logika:**
- `flex-direction: row` → horizontal
- `flex-direction: column` → vertikal
- `flex-wrap: wrap` → pindah baris jika penuh

---

## 🎯 **6. LOGIKA RESPONSIF (Mobile First)**

### **A. Mobile First vs Desktop First**

```
Mobile First (Disarankan)
─────────────────────────
1. Tulis CSS untuk HP dulu
2. Tambahkan media query untuk tablet
3. Tambahkan media query untuk desktop

Desktop First (Tidak Disarankan)
─────────────────────────────────
1. Tulis CSS untuk desktop dulu
2. Tambahkan media query untuk tablet
3. Tambahkan media query untuk HP
```

**Logika:**
- Mulai dari **layar kecil** → lebih mudah
- Tambahkan **fitur** seiring layar membesar
- Hindari `max-width`, gunakan `min-width`

**Contoh:**
```css
/* Mobile First ✅ */
.beranda {
    display: flex;
    flex-direction: column;  /* HP: vertikal */
}

@media (min-width: 768px) {
    .beranda {
        flex-direction: row;  /* Tablet/Desktop: horizontal */
    }
}
```

---

## 📋 **7. LOGIKA CHECKLIST (Sebelum Coding)**

### **Tanyakan pada diri sendiri:**

| Pertanyaan | Logika |
|------------|--------|
| **Apa tujuan halaman ini?** | Portofolio, toko, blog, dll |
| **Siapa target audiens?** | Rekruter, klien, teman |
| **Apa yang paling penting?** | Konten utama (prioritas) |
| **Bagaimana struktur dasarnya?** | Header, main, footer |
| **Elemen apa yang berulang?** | Card, button, list |
| **Bagaimana di HP?** | Responsif, mobile first |

---

## 🧠 **8. MINDSET PROGRAMMER HTML**

### **A. Jangan Hafal, Pahami Logika**

| ❌ Hafal | ✅ Pahami |
|----------|-----------|
| "Tag section itu untuk..." | "Saya butuh wadah untuk konten yang punya tema sama" |
| "H1 itu ukuran 32px" | "H1 itu heading paling penting dalam halaman" |
| "Div itu untuk..." | "Div adalah wadah netral tanpa makna" |

---

### **B. Kode yang Bersih = Kode yang Baik**

```html
<!-- ❌ Kode Berantakan -->
<div><p><span>Halo</span></p><div><span>Dunia</span></div></div>

<!-- ✅ Kode Rapi -->
<div>
    <p>
        <span>Halo</span>
    </p>
    <div>
        <span>Dunia</span>
    </div>
</div>
```

**Logika:**
- **Indentasi** (tab/spasi) → baca lebih mudah
- **Komentar** → jelas strukturnya
- **Spasi** antar elemen → tidak sesak

---

## 📝 **9. CONTOH PENERAPAN DI WEB-MU**

### **HTML (dengan logika yang benar):**

```html
<!-- ==========================================
     WEB PORTOFOLIO - MANAZHIR.DEV
     Struktur: Header → Main → Footer
     ========================================== -->

<!-- HEADER: Navigasi -->
<header class="header">
    <nav class="header__nav">
        <div class="header__logo">MANAZHIR.DEV</div>
        <ul class="header__menu">
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#tentang">Tentang</a></li>
            <li><a href="#pendidikan">Pendidikan</a></li>
            <li><a href="#portofolio">Portofolio</a></li>
            <li><a href="#kontak">Kontak</a></li>
        </ul>
    </nav>
</header>

<!-- MAIN: Konten Utama -->
<main class="main">

    <!-- HERO / BERANDA -->
    <section id="beranda" class="hero">
        <div class="hero__text">
            <p class="hero__subtitle">Halo semuanya 👋</p>
            <h1 class="hero__title">Muhammad Manazhir Ahsan</h1>
            <p class="hero__desc">Saya adalah programmer pemula</p>
            <a href="#kontak" class="hero__button">Contact Me</a>
        </div>
        <div class="hero__image">
            <img src="nazir.png" alt="Foto Manazhir">
        </div>
    </section>

    <!-- TENTANG SAYA -->
    <section id="tentang" class="about">
        <h2 class="about__title">Tentang Saya</h2>
        <div class="about__grid">
            <div class="about__card">
                <h3>Sebagai Pelajar RPL</h3>
                <p>Halo! Saya Muhammad Manazhir Ahsan...</p>
            </div>
            <!-- 3 card lainnya -->
        </div>
    </section>

    <!-- PENDIDIKAN -->
    <section id="pendidikan" class="education">
        <h2>Pendidikan</h2>
        <div class="education__list">
            <div class="education__item">
                <div class="education__info">
                    <h3>SMKN 10 Semarang</h3>
                    <p>Jurusan RPL (2024-2026)</p>
                </div>
                <img src="smk10.png" alt="SMKN 10">
            </div>
            <!-- 2 item lainnya -->
        </div>
    </section>

    <!-- PORTOFOLIO -->
    <section id="portofolio" class="portfolio">
        <h2>Portofolio</h2>
        <div class="portfolio__grid">
            <div class="portfolio__card">
                <img src="project1.jpg" alt="Proyek 1">
                <h3>Website Portofolio</h3>
                <p>HTML, CSS, JavaScript</p>
            </div>
            <!-- 2 card lainnya -->
        </div>
    </section>

    <!-- KONTAK -->
    <section id="kontak" class="contact">
        <h2>Kontak</h2>
        <div class="contact__grid">
            <a href="mailto:..." class="contact__card">
                <i class="fas fa-envelope"></i>
                <h3>Email</h3>
                <span>email@domain.com</span>
            </a>
            <!-- 4 card lainnya -->
        </div>
    </section>

</main>

<!-- FOOTER: Credit -->
<footer class="footer">
    <div class="footer__content">
        <p>&copy; 2026 Manazhir Dev</p>
        <p>Dibuat oleh Muhammad Manazhir Ahsan</p>
        <div class="footer__social">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
        </div>
        <p class="footer__motto">"Terus Berkarya dan Inovatif"</p>
    </div>
</footer>
```

---

## 🎯 **RINGKASAN LOGIKA PROGRAMMER HTML:**

| Prinsip | Logika |
|---------|--------|
| **1. Struktur > Tampilan** | HTML = kerangka, CSS = dekorasi |
| **2. Semantik** | Pakai tag sesuai makna |
| **3. Hierarki** | Parent → Child → Descendant |
| **4. Konsistensi** | Nama class yang rapi (BEM) |
| **5. DRY** | Jangan ulang kode |
| **6. Mobile First** | Mulai dari HP, lalu desktop |
| **7. Modular** | Komponen yang reusable |

---

## 💡 **PESAN UNTUKMU:**

> **"Programmer hebat bukan yang hafal semua tag, tapi yang tahu logika di baliknya dan bisa menerapkannya dengan benar."**

Selamat belajar dan terus berkarya! 😊🚀