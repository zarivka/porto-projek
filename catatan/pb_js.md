## 🧠 **MATERI PROBLEM SOLVING PROGRAMMER JS**

---

## 📋 **APA ITU PROBLEM SOLVING DALAM PEMROGRAMAN?**

**Problem solving** adalah kemampuan untuk memecahkan masalah menggunakan logika dan kode. Ini adalah **skill paling penting** bagi seorang programmer.

> "Programmer bukan orang yang hafal kode, tapi orang yang bisa menyelesaikan masalah dengan kode."

---

## 🔄 **6 LANGKAH PROBLEM SOLVING (FRAMEWORK)**

```
┌─────────────────────────────────────────────────────────┐
│  1. PAHAMI MASALAH (Understand)                         │
│     ↓                                                   │
│  2. RENCANAKAN SOLUSI (Plan)                            │
│     ↓                                                   │
│  3. URAIKAN LANGKAH (Break Down)                        │
│     ↓                                                   │
│  4. TULIS KODE (Code)                                   │
│     ↓                                                   │
│  5. UJI COBA (Test)                                     │
│     ↓                                                   │
│  6. REFAKTOR (Refactor)                                 │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 **1. PAHAMI MASALAH (Understand)**

### **Pertanyaan yang Harus Kamu Jawab:**

| Pertanyaan | Contoh |
|------------|--------|
| Apa inputnya? | Angka, teks, array, object? |
| Apa outputnya? | Angka, boolean, array baru? |
| Apa batasannya? | Maksimal data, tipe data? |
| Apa edge case-nya? | Input kosong, angka negatif? |

### **Contoh Implementasi:**

```javascript
/**
 * MASALAH: Menghitung total harga belanja
 * 
 * INPUT: Array berisi harga barang [10000, 20000, 15000]
 * OUTPUT: Total harga (number)
 * BATASAN: Harga harus positif, minimal 1 item
 * EDGE CASE: Array kosong → return 0
 */
function hitungTotal(hargaBarang) {
    // Kode akan ditulis di sini
}
```

---

## 📝 **2. RENCANAKAN SOLUSI (Plan)**

### **Strategi Perencanaan:**

| Strategi | Deskripsi | Kapan Dipakai |
|----------|-----------|---------------|
| **Brute Force** | Coba semua kemungkinan | Data kecil |
| **Divide & Conquer** | Pecah masalah kecil | Data besar |
| **Dynamic Programming** | Simpan hasil perhitungan | Perhitungan berulang |
| **Greedy** | Ambil keputusan terbaik saat itu | Masalah optimasi |

### **Contoh Implementasi:**

```javascript
/**
 * RENCANA SOLUSI:
 * 1. Buat variabel total = 0
 * 2. Looping setiap item di array
 * 3. Tambahkan harga ke total
 * 4. Kembalikan total
 */
function hitungTotal(hargaBarang) {
    // 1. Buat variabel total = 0
    let total = 0;
    
    // 2. Looping setiap item di array
    for (let i = 0; i < hargaBarang.length; i++) {
        // 3. Tambahkan harga ke total
        total += hargaBarang[i];
    }
    
    // 4. Kembalikan total
    return total;
}
```

---

## 📝 **3. URAIKAN LANGKAH (Break Down)**

### **Teknik Memecah Masalah:**

```
MASALAH BESAR: Membuat Aplikasi Todo List
    │
    ├── 1. Tampilkan daftar tugas
    │       ├── 1.1 Ambil data dari localStorage
    │       └── 1.2 Render ke HTML
    │
    ├── 2. Tambah tugas baru
    │       ├── 2.1 Ambil input dari form
    │       └── 2.2 Simpan ke localStorage
    │
    ├── 3. Hapus tugas
    │       ├── 3.1 Ambil ID tugas
    │       └── 3.2 Hapus dari localStorage
    │
    └── 4. Tandai selesai
            ├── 4.1 Ambil ID tugas
            └── 4.2 Ubah status di localStorage
```

### **Contoh Implementasi:**

```javascript
/**
 * MASALAH: Cari angka terbesar dalam array
 * 
 * LANGKAH-LANGKAH:
 * 1. Anggap angka pertama adalah terbesar
 * 2. Bandingkan dengan angka berikutnya
 * 3. Jika lebih besar, update angka terbesar
 * 4. Ulangi sampai semua angka dibandingkan
 * 5. Kembalikan angka terbesar
 */
function cariTerbesar(arr) {
    // 1. Anggap angka pertama adalah terbesar
    let terbesar = arr[0];
    
    // 2. Bandingkan dengan angka berikutnya
    for (let i = 1; i < arr.length; i++) {
        // 3. Jika lebih besar, update angka terbesar
        if (arr[i] > terbesar) {
            terbesar = arr[i];
        }
    }
    
    // 5. Kembalikan angka terbesar
    return terbesar;
}

// Contoh pemakaian
console.log(cariTerbesar([5, 10, 3, 8, 15])); // Output: 15
```

---

## 📝 **4. TULIS KODE (Code)**

### **Struktur Kode yang Baik:**

```javascript
// ==========================================
// STRUKTUR KODE YANG BAIK
// ==========================================

// 1. Nama fungsi JELAS (camelCase)
function hitungDiskon(harga, persenDiskon) {
    
    // 2. Validasi input (error handling)
    if (typeof harga !== 'number' || harga < 0) {
        return 'Error: Harga harus angka positif!';
    }
    
    if (typeof persenDiskon !== 'number' || persenDiskon < 0 || persenDiskon > 100) {
        return 'Error: Diskon harus 0-100!';
    }
    
    // 3. Logika utama (clean code)
    const diskon = harga * (persenDiskon / 100);
    const hargaSetelahDiskon = harga - diskon;
    
    // 4. Kembalikan hasil (return)
    return hargaSetelahDiskon;
}

// 5. Contoh pemakaian
console.log(hitungDiskon(100000, 20)); // Output: 80000
```

---

## 📝 **5. UJI COBA (Test)**

### **Jenis Testing:**

| Jenis | Deskripsi | Contoh |
|-------|-----------|--------|
| **Unit Test** | Test fungsi kecil | `hitungTotal([1,2,3]) === 6` |
| **Integration Test** | Test gabungan fungsi | Login → Dashboard |
| **Edge Case** | Test kasus ekstrim | Array kosong, angka negatif |

### **Contoh Implementasi:**

```javascript
// ==========================================
// TESTING FUNGSI
// ==========================================

function hitungTotal(hargaBarang) {
    if (!Array.isArray(hargaBarang)) {
        return 'Error: Input harus array!';
    }
    
    let total = 0;
    for (let i = 0; i < hargaBarang.length; i++) {
        if (typeof hargaBarang[i] !== 'number' || hargaBarang[i] < 0) {
            return 'Error: Harga harus angka positif!';
        }
        total += hargaBarang[i];
    }
    return total;
}

// ==========================================
// TEST CASES
// ==========================================

console.log('=== TESTING FUNGSI HITUNG TOTAL ===');

// Test 1: Normal
console.log('Test 1 (Normal):', hitungTotal([10000, 20000, 15000]) === 45000 ? '✅ PASS' : '❌ FAIL');

// Test 2: Array kosong
console.log('Test 2 (Kosong):', hitungTotal([]) === 0 ? '✅ PASS' : '❌ FAIL');

// Test 3: Satu item
console.log('Test 3 (1 item):', hitungTotal([5000]) === 5000 ? '✅ PASS' : '❌ FAIL');

// Test 4: Input bukan array
console.log('Test 4 (Bukan array):', hitungTotal('bukan array') === 'Error: Input harus array!' ? '✅ PASS' : '❌ FAIL');

// Test 5: Angka negatif
console.log('Test 5 (Negatif):', hitungTotal([1000, -500]) === 'Error: Harga harus angka positif!' ? '✅ PASS' : '❌ FAIL');
```

---

## 📝 **6. REFAKTOR (Refactor)**

### **Prinsip Refaktor:**

| Prinsip | Penjelasan | Contoh |
|---------|------------|--------|
| **DRY** | Don't Repeat Yourself | Buat fungsi reusable |
| **KISS** | Keep It Simple, Stupid | Kode sesederhana mungkin |
| **Single Responsibility** | 1 fungsi = 1 tugas | Pisahkan logika |

### **Contoh Sebelum Refaktor (Kode Buruk):**

```javascript
// ❌ KODE BURUK (Tidak DRY, Terlalu Panjang)
function prosesData(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i].harga;
    }
    
    let diskon = total * 0.1;
    let pajak = total * 0.05;
    let totalAkhir = total - diskon + pajak;
    
    let pesan = 'Total: Rp' + total + '\n';
    pesan += 'Diskon: Rp' + diskon + '\n';
    pesan += 'Pajak: Rp' + pajak + '\n';
    pesan += 'Total Akhir: Rp' + totalAkhir;
    
    return pesan;
}
```

### **Contoh Setelah Refaktor (Kode Baik):**

```javascript
// ✅ KODE BAIK (DRY, Single Responsibility)
function hitungTotal(data) {
    return data.reduce((sum, item) => sum + item.harga, 0);
}

function hitungDiskon(total) {
    return total * 0.1;
}

function hitungPajak(total) {
    return total * 0.05;
}

function formatRupiah(angka) {
    return 'Rp' + angka.toLocaleString('id-ID');
}

function prosesData(data) {
    const total = hitungTotal(data);
    const diskon = hitungDiskon(total);
    const pajak = hitungPajak(total);
    const totalAkhir = total - diskon + pajak;
    
    return `
Total: ${formatRupiah(total)}
Diskon: ${formatRupiah(diskon)}
Pajak: ${formatRupiah(pajak)}
Total Akhir: ${formatRupiah(totalAkhir)}
    `;
}
```

---

## 📝 **STUDI KASUS LENGKAP**

### **MASALAH: Filter dan Urutkan Data**

```javascript
// ==========================================
// MASALAH: Filter dan Urutkan Data Mahasiswa
// ==========================================

/*
INPUT:
[
    { nama: 'Budi', nilai: 80, kelas: 'A' },
    { nama: 'Ani', nilai: 90, kelas: 'B' },
    { nama: 'Cici', nilai: 70, kelas: 'A' },
    { nama: 'Dedi', nilai: 85, kelas: 'B' }
]

OUTPUT: Mahasiswa kelas A, diurutkan dari nilai tertinggi
[
    { nama: 'Budi', nilai: 80, kelas: 'A' },
    { nama: 'Cici', nilai: 70, kelas: 'A' }
]
*/

// ==========================================
// LANGKAH 1: Pahami Masalah
// ==========================================
// - Input: Array of objects (mahasiswa)
// - Output: Array of objects (filtered + sorted)
// - Filter: Hanya kelas A
// - Sort: Nilai tertinggi ke terendah

// ==========================================
// LANGKAH 2: Rencanakan Solusi
// ==========================================
// 1. Filter data → ambil yang kelas A
// 2. Sort hasil filter → dari nilai tertinggi

// ==========================================
// LANGKAH 3: Uraikan Langkah
// ==========================================
function filterDanUrutkan(mahasiswa) {
    // 1. Filter kelas A
    // 2. Urutkan berdasarkan nilai (descending)
    // 3. Kembalikan hasil
}

// ==========================================
// LANGKAH 4: Tulis Kode
// ==========================================
function filterDanUrutkan(mahasiswa, kelas) {
    // Validasi input
    if (!Array.isArray(mahasiswa)) {
        return 'Error: Input harus array!';
    }
    
    if (!kelas || typeof kelas !== 'string') {
        return 'Error: Kelas harus diisi!';
    }
    
    // 1. Filter berdasarkan kelas
    const hasilFilter = mahasiswa.filter(item => item.kelas === kelas);
    
    // 2. Urutkan dari nilai tertinggi
    const hasilSort = hasilFilter.sort((a, b) => b.nilai - a.nilai);
    
    // 3. Kembalikan hasil
    return hasilSort;
}

// ==========================================
// LANGKAH 5: Uji Coba
// ==========================================
const dataMahasiswa = [
    { nama: 'Budi', nilai: 80, kelas: 'A' },
    { nama: 'Ani', nilai: 90, kelas: 'B' },
    { nama: 'Cici', nilai: 70, kelas: 'A' },
    { nama: 'Dedi', nilai: 85, kelas: 'B' }
];

console.log('=== HASIL FILTER KELAS A ===');
console.log(filterDanUrutkan(dataMahasiswa, 'A'));

// Output:
// [
//   { nama: 'Budi', nilai: 80, kelas: 'A' },
//   { nama: 'Cici', nilai: 70, kelas: 'A' }
// ]

// ==========================================
// LANGKAH 6: Refaktor
// ==========================================
// Versi lebih ringkas dengan chaining
function filterDanUrutkanV2(mahasiswa, kelas) {
    if (!Array.isArray(mahasiswa) || !kelas) {
        return 'Error: Input tidak valid!';
    }
    
    return mahasiswa
        .filter(item => item.kelas === kelas)
        .sort((a, b) => b.nilai - a.nilai);
}
```

---

## 📋 **TEMPLATE PROBLEM SOLVING**

```javascript
// ==========================================
// TEMPLATE PROBLEM SOLVING
// ==========================================

/**
 * MASALAH: [Tulis masalah di sini]
 * 
 * INPUT: [Tipe dan contoh input]
 * OUTPUT: [Tipe dan contoh output]
 * BATASAN: [Batasan yang ada]
 * EDGE CASE: [Kasus ekstrim]
 */

// ==========================================
// RENCANA SOLUSI
// ==========================================
// 1. [Langkah 1]
// 2. [Langkah 2]
// 3. [Langkah 3]

// ==========================================
// IMPLEMENTASI
// ==========================================
function namaFungsi(param1, param2) {
    // Validasi input
    if (!param1) {
        return 'Error: Parameter tidak valid!';
    }
    
    // Logika utama
    let hasil = /* proses */;
    
    // Kembalikan hasil
    return hasil;
}

// ==========================================
// TEST CASES
// ==========================================
console.log('Test 1:', namaFungsi(input1) === expected1 ? '✅ PASS' : '❌ FAIL');
console.log('Test 2:', namaFungsi(input2) === expected2 ? '✅ PASS' : '❌ FAIL');
console.log('Test 3:', namaFungsi(input3) === expected3 ? '✅ PASS' : '❌ FAIL');
```

---

## 🎯 **TIPS PROBLEM SOLVING:**

| Tips | Penjelasan |
|------|------------|
| **Baca 2x** | Baca masalah dua kali sebelum mulai coding |
| **Tulis di kertas** | Gambar diagram/logika di kertas dulu |
| **Pseudocode** | Tulis logika dalam bahasa Indonesia dulu |
| **Console.log** | Gunakan console.log untuk debugging |
| **Google** | Cari solusi, tapi pahami, bukan copas |
| **Berkala** | Commit setiap kali fungsi berhasil |

---

**Ini adalah fondasi problem solving yang harus kamu kuasai!** 😊