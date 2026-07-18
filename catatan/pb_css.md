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

### **Urutan Penulisan CSS yang Disarankan:**

```css
/* =============================================
   1. RESET & VARIABEL GLOBAL
   ============================================= */

/* 1A. Reset CSS */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* 1B. Variabel Global */
:root { --warna-utama: #00d4ff; }

/* =============================================
   2. ELEMEN DASAR (TAG HTML)
   ============================================= */

html { scroll-behavior: smooth; }
body { font-family: 'Arial', sans-serif; }
h1, h2, h3 { ... }
a { ... }
button { ... }

/* =============================================
   3. LAYOUT & STRUKTUR
   ============================================= */

header { ... }
nav { ... }
main { ... }
footer { ... }

/* =============================================
   4. KOMPONEN (SECTION)
   ============================================= */

#beranda { ... }
#tentang-saya { ... }
#pendidikan { ... }

/* =============================================
   5. UTILITY (Fungsi Bantuan)
   ============================================= */

.text-center { text-align: center; }
.flex-center { display: flex; align-items: center; justify-content: center; }

/* =============================================
   6. RESPONSIF (MEDIA QUERY)
   ============================================= */

@media (max-width: 768px) { ... }
@media (max-width: 480px) { ... }
```

---

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