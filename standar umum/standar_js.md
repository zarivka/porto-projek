Baik, karena Anda sudah meminta **HTML, CSS, dan sekarang JavaScript**, saya akan berikan **panduan standar penulisan kode JavaScript (JavaScript Coding Standards)** yang berlaku di industri. Ini adalah **aturan wajib** yang membedakan kode pelajar dengan kode profesional.

Saya akan jabarkan secara **lengkap, terstruktur, dan final**, tanpa banyak tanya.

---

# 📘 MASTER JAVASCRIPT – STANDAR INDUSTRI UNTUK RPL

---

## BAB 1: DASAR-DASAR WAJIB

### 1.1 Gunakan `const` dan `let`, JANGAN `var`

```javascript
// ❌ SALAH - var sudah usang
var nama = "Budi";

// ✅ BENAR
const nama = "Budi";  // Pakai const secara default
let umur = 17;        // Pakai let hanya jika nilainya berubah
```

**Aturan:**
- `const` = nilai tetap (default)
- `let` = nilai berubah (hanya jika diperlukan)
- `var` = **JANGAN PAKAI** (usang, masalah scope)

---

### 1.2 Penamaan Variabel dan Fungsi

| Jenis | Format | Contoh |
|-------|--------|--------|
| Variabel | `camelCase` | `userName`, `totalPrice` |
| Fungsi | `camelCase` | `getUserData`, `calculateTotal` |
| Class / Komponen | `PascalCase` | `UserProfile`, `ButtonComponent` |
| Konstanta (nilai tetap) | `UPPER_SNAKE_CASE` | `API_URL`, `MAX_RETRY` |
| File | `kebab-case.js` | `user-service.js` |

```javascript
// ✅ BENAR
const userName = "Budi";
const API_URL = "https://api.example.com";
function getUserData() { ... }
class UserProfile { ... }

// ❌ SALAH
const user_name = "Budi";  // Harus camelCase
const apiUrl = "https://..."; // Konstanta harus UPPER_SNAKE_CASE
function GetUserData() { ... } // Fungsi harus camelCase
```

---

### 1.3 Titik Koma (Semicolon)

**WAJIB** pakai titik koma `;` di akhir setiap pernyataan.

```javascript
// ✅ BENAR
const nama = "Budi";
console.log(nama);

// ❌ SALAH (tanpa titik koma)
const nama = "Budi"
console.log(nama)
```

**Kenapa wajib?** JavaScript kadang bisa jalan tanpa titik koma (automatic semicolon insertion), tapi ini berbahaya dan bisa menyebabkan bug aneh di production.

---

### 1.4 Spasi dan Indentasi

- Gunakan **2 spasi** (standar JavaScript)
- Buka kurung kurawal `{` di baris yang sama
- Tutup kurung kurawal `}` di baris baru

```javascript
// ✅ BENAR
function tambah(a, b) {
  const hasil = a + b;   // Indentasi 2 spasi
  return hasil;
}

// ❌ SALAH (4 spasi, kurung di baris baru)
function tambah(a, b) 
{
    const hasil = a + b;
    return hasil;
}
```

---

## BAB 2: STRING

### 2.1 Gunakan Template Literal

```javascript
// ✅ BENAR
const nama = "Budi";
const pesan = `Halo ${nama}, selamat datang!`;

// ❌ SALAH (concatenation)
const pesan = "Halo " + nama + ", selamat datang!";
```

---

### 2.2 Gunakan Kutip Tunggal atau Backtick

```javascript
// ✅ BENAR
const nama = 'Budi';        // Kutip tunggal (standar)
const html = `<div>Halo</div>`; // Backtick untuk template

// ❌ KURANG DISARANKAN
const nama = "Budi";  // Boleh, tapi konsisten pakai kutip tunggal
```

**Aturan:** Pilih satu (kutip tunggal atau ganda) dan konsisten.

---

## BAB 3: FUNCTION

### 3.1 Gunakan Arrow Function

```javascript
// ✅ BENAR
const tambah = (a, b) => a + b;
const kuadrat = x => x * x;  // Satu parameter, tanpa kurung

// ❌ KURANG MODERN
function tambah(a, b) {
  return a + b;
}
```

**Aturan:**
- Gunakan arrow function untuk fungsi sederhana dan callback.
- Gunakan `function` declaration untuk fungsi utama/ekspor.

---

### 3.2 Parameter Default

```javascript
// ✅ BENAR
function sapa(nama = 'Tamu') {
  return `Halo ${nama}`;
}
console.log(sapa()); // Halo Tamu
console.log(sapa('Budi')); // Halo Budi

// ❌ SALAH (cek manual)
function sapa(nama) {
  if (nama === undefined) nama = 'Tamu';
  return `Halo ${nama}`;
}
```

---

### 3.3 Jangan Gunakan `arguments`

```javascript
// ❌ SALAH
function jumlah() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// ✅ BENAR (pakai rest parameter)
function jumlah(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}
```

---

## BAB 4: ARRAY

### 4.1 Gunakan Array Methods, Bukan For Loop

```javascript
const users = ['Budi', 'Ani', 'Cindy'];

// ✅ BENAR
const sapaan = users.map(nama => `Halo ${nama}`);
const filtered = users.filter(nama => nama !== 'Budi');
const found = users.find(nama => nama === 'Ani');

// ❌ SALAH (for loop manual)
const sapaan = [];
for (let i = 0; i < users.length; i++) {
  sapaan.push(`Halo ${users[i]}`);
}
```

---

### 4.2 Destructuring Array

```javascript
// ✅ BENAR
const [first, second] = ['Budi', 'Ani', 'Cindy'];
console.log(first); // Budi
console.log(second); // Ani

// ❌ SALAH
const arr = ['Budi', 'Ani', 'Cindy'];
const first = arr[0];
const second = arr[1];
```

---

### 4.3 Spread Operator untuk Copy Array

```javascript
// ✅ BENAR
const original = [1, 2, 3];
const copy = [...original];  // Copy tanpa referensi
const gabung = [...original, 4, 5, 6];

// ❌ SALAH (referensi)
const copy = original;  // Ini bukan copy, tapi referensi!
```

---

## BAB 5: OBJECT

### 5.1 Destructuring Object

```javascript
// ✅ BENAR
const user = { nama: 'Budi', umur: 17, kota: 'Jakarta' };
const { nama, umur } = user;
console.log(nama); // Budi

// ❌ SALAH
const nama = user.nama;
const umur = user.umur;
```

---

### 5.2 Shorthand Property

```javascript
// ✅ BENAR
const nama = 'Budi';
const umur = 17;
const user = { nama, umur };  // Sama dengan { nama: nama, umur: umur }

// ❌ SALAH
const user = { nama: nama, umur: umur };
```

---

### 5.3 Spread Operator untuk Copy Object

```javascript
// ✅ BENAR
const user = { nama: 'Budi', umur: 17 };
const userBaru = { ...user, kota: 'Jakarta' };
console.log(userBaru); // { nama: 'Budi', umur: 17, kota: 'Jakarta' }

// ❌ SALAH
const userBaru = Object.assign({}, user, { kota: 'Jakarta' });
```

---

### 5.4 Optional Chaining (`?.`)

```javascript
// ✅ BENAR
const user = { alamat: { kota: 'Jakarta' } };
const kota = user.alamat?.kota || 'Tidak diketahui';

// ❌ SALAH (error jika user.alamat undefined)
const kota = user.alamat.kota;
```

---

## BAB 6: ASYNC / AWAIT

### 6.1 Gunakan async/await, Bukan .then()

```javascript
// ✅ BENAR
async function getUserData() {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// ❌ SALAH (.then() .catch() - cara lama)
function getUserData() {
  fetch('/api/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
```

---

### 6.2 Selalu Gunakan try/catch

```javascript
// ✅ BENAR
async function ambilData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Gagal ambil data:', error.message);
    return null;  // Jangan biarkan error menggantung
  }
}

// ❌ SALAH (tanpa error handling)
async function ambilData() {
  const res = await fetch('/api/data');
  return await res.json();
}
```

---

### 6.3 Parallel vs Sequential

```javascript
// ❌ SALAH (sequential - lambat)
const data1 = await fetch('/api/1');
const data2 = await fetch('/api/2');

// ✅ BENAR (parallel - cepat)
const [data1, data2] = await Promise.all([
  fetch('/api/1'),
  fetch('/api/2')
]);
```

---

## BAB 7: MODULE (IMPORT / EXPORT)

### 7.1 Gunakan ES Module, Bukan CommonJS

```javascript
// ✅ BENAR (ES Module)
// file: utils.js
export const PI = 3.14;
export function tambah(a, b) { return a + b; }
export default function kali(a, b) { return a * b; }

// file: main.js
import kali, { PI, tambah } from './utils.js';

// ❌ SALAH (CommonJS - untuk Node.js lama)
// file: utils.js
module.exports = { PI: 3.14, tambah: (a, b) => a + b };
```

---

### 7.2 Named Export vs Default Export

```javascript
// ✅ BENAR
// export default untuk satu hal utama
export default function App() { ... }

// named export untuk hal tambahan
export const API_URL = '...';
export function helper() { ... }

// ❌ SALAH
export default const API_URL = '...'; // default tidak bisa untuk const
```

---

## BAB 8: CONDITIONAL

### 8.1 Gunakan Ternary untuk Kondisi Sederhana

```javascript
// ✅ BENAR
const status = umur >= 18 ? 'Dewasa' : 'Remaja';

// ❌ SALAH
let status;
if (umur >= 18) {
  status = 'Dewasa';
} else {
  status = 'Remaja';
}
```

---

### 8.2 Gunakan `&&` untuk Short-Circuit

```javascript
// ✅ BENAR
user.isAdmin && console.log('Admin detected');

// ❌ SALAH
if (user.isAdmin) {
  console.log('Admin detected');
}
```

---

### 8.3 Gunakan Optional Chaining + Nullish Coalescing

```javascript
// ✅ BENAR
const kota = user.alamat?.kota ?? 'Tidak diketahui';

// ❌ SALAH
const kota = (user.alamat && user.alamat.kota) || 'Tidak diketahui';
```

---

## BAB 9: LOOPING

### 9.1 Gunakan for...of untuk Array

```javascript
// ✅ BENAR
const users = ['Budi', 'Ani', 'Cindy'];
for (const user of users) {
  console.log(user);
}

// ❌ KURANG DISARANKAN
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
```

---

### 9.2 Gunakan forEach untuk Array

```javascript
// ✅ BENAR
users.forEach(user => console.log(user));

// ❌ SALAH (menggunakan forEach untuk mengubah array)
users.forEach((user, i) => {
  users[i] = user.toUpperCase();  // JANGAN! Pakai map()
});

// ✅ BENAR (untuk transformasi)
const upper = users.map(user => user.toUpperCase());
```

---

## BAB 10: COMMENT (KOMENTAR)

### 10.1 Gunakan // untuk Komentar Satu Baris

```javascript
// ✅ BENAR
// Ambil data user dari API
async function getUsers() { ... }

// ❌ SALAH
/* Ambil data user dari API */
```

---

### 10.2 Gunakan JSDoc untuk Dokumentasi Fungsi

```javascript
// ✅ BENAR
/**
 * Menghitung total harga setelah diskon
 * @param {number} price - Harga asli
 * @param {number} discount - Diskon dalam persen (0-100)
 * @returns {number} Harga setelah diskon
 */
function calculatePrice(price, discount) {
  return price * (1 - discount / 100);
}

// ❌ SALAH (tanpa dokumentasi)
function calc(price, disc) {
  return price * (1 - disc / 100);
}
```

---

### 10.3 Hapus Komentar Kode (Jangan Biarkan Mati)

```javascript
// ❌ SALAH - Kode mati
// const oldCode = something();
// const oldFunction = () => { ... };

// ✅ BENAR - Hapus saja, ambil dari Git history jika perlu
```

---

## BAB 11: ERROR HANDLING

### 11.1 Gunakan `throw new Error()`

```javascript
// ✅ BENAR
function cekUmur(umur) {
  if (umur < 0) {
    throw new Error('Umur tidak boleh negatif!');
  }
  return umur;
}

// ❌ SALAH
function cekUmur(umur) {
  if (umur < 0) {
    return 'Error: Umur tidak boleh negatif!';  // Bukan error sebenarnya
  }
}
```

---

### 11.2 Jangan Kosongkan Catch

```javascript
// ❌ SALAH
try {
  // ...
} catch (error) {
  // Kosong! Error disembunyikan
}

// ✅ BENAR
try {
  // ...
} catch (error) {
  console.error('Error:', error.message);
  // Atau throw ulang jika perlu
}
```

---

## BAB 12: KONSISTENSI

### 12.1 Konsisten dalam Gaya Penulisan

**Pilih satu gaya dan konsisten:**

```javascript
// GAYA 1: Tanpa koma di akhir object (disarankan)
const user = {
  nama: 'Budi',
  umur: 17
};

// GAYA 2: Dengan koma di akhir (trailing comma)
const user = {
  nama: 'Budi',
  umur: 17,
};
```

**Saya sarankan Gaya 1 (tanpa trailing comma) untuk pemula.**

---

### 12.2 Gunakan ESLint / Prettier

**WAJIB** untuk project profesional. Ini alat yang otomatis membereskan format kode.

```bash
# Install
npm install --save-dev eslint prettier

# Jalankan
npx eslint src/**/*.js
```

---

## 📋 CHECKLIST FINAL (CEK KODE KAMU)

| Aturan | Status |
|--------|--------|
| Pakai `const` dan `let` (bukan `var`) | ✅ |
| Penamaan `camelCase` untuk variabel & fungsi | ✅ |
| Penamaan `PascalCase` untuk class | ✅ |
| Penamaan `UPPER_SNAKE_CASE` untuk konstanta | ✅ |
| Pakai titik koma `;` di akhir pernyataan | ✅ |
| Indentasi 2 spasi | ✅ |
| Pakai template literal `` `${}` `` | ✅ |
| Pakai arrow function `() => {}` | ✅ |
| Pakai destructuring `{ nama }` | ✅ |
| Pakai spread operator `...` | ✅ |
| Pakai `async/await` + `try/catch` | ✅ |
| Pakai `export`/`import` (ES Module) | ✅ |
| Pakai optional chaining `?.` | ✅ |
| Pakai nullish coalescing `??` | ✅ |
| Pakai ternary `? :` untuk kondisi sederhana | ✅ |
| Komentar JSDoc untuk fungsi kompleks | ✅ |
| Hapus kode mati (jangan dikomentari) | ✅ |

---

## 🔥 CONTOH KODE LENGKAP (STANDAR INDUSTRI)

```javascript
// ============================================================
// FILE: user-service.js
// ============================================================

// Konstanta global (UPPER_SNAKE_CASE)
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY = 3;

/**
 * Mendapatkan data user dari API
 * @param {number} userId - ID user yang ingin diambil
 * @returns {Promise<Object>} Data user
 */
async function getUserById(userId) {
  // Validasi input
  if (typeof userId !== 'number' || userId <= 0) {
    throw new Error('userId harus angka positif');
  }

  let retry = 0;
  while (retry < MAX_RETRY) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      retry++;
      console.warn(`Attempt ${retry} failed:`, error.message);
      
      if (retry === MAX_RETRY) {
        throw new Error(`Gagal mengambil data setelah ${MAX_RETRY} percobaan`);
      }
    }
  }
}

/**
 * Membuat user baru
 * @param {Object} userData - Data user (nama, email, password)
 * @returns {Promise<Object>} User yang baru dibuat
 */
async function createUser(userData) {
  const { nama, email } = userData;
  
  // Destructuring + default value
  const payload = {
    nama: nama || 'Anonymous',
    email: email ?? 'no-email@example.com',
    createdAt: new Date().toISOString()
  };

  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Create user failed:', error.message);
    throw error; // Re-throw agar diproses di level atas
  }
}

// Export (ES Module)
export { getUserById, createUser };
export default { getUserById, createUser };
```

---

## 💡 PESAN UNTUK KAMU

1. **Konsistensi > Kebenaran.** Pilih satu gaya dan terapkan di semua file.
2. **Jangan buang waktu.** Gunakan ESLint + Prettier untuk otomatis membereskan format.
3. **Fokus ke 5 aturan paling sering dilanggar:**
   - Pakai `const`/`let` (bukan `var`)
   - Pakai template literal (bukan concatenation)
   - Pakai arrow function
   - Pakai `async/await` (bukan `.then()`)
   - Pakai destructuring

> Dengan mengikuti standar di atas, kode JavaScript-mu akan terlihat profesional dan siap untuk magang! 💪🚀