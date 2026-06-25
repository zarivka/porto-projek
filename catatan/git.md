Baik, sekarang saya jelaskan **Git & GitHub secara utuh**, mulai dari konsep, sintaks perintah, hingga alur kerja yang benar untuk pelajar RPL.

---

## 🔥 1. APA ITU GIT & GITHUB?

| Istilah | Penjelasan |
|---------|------------|
| **Git** | Program di laptop/komputer untuk **melacak perubahan** kode (version control). Kerjanya offline, tanpa internet. |
| **GitHub** | Website tempat **menyimpan repository (repo) Git secara online**, untuk kolaborasi tim, backup, dan portofolio. |
| **Repository (Repo)** | Folder proyek yang dilacak oleh Git. Bisa ada di laptop (local) dan di GitHub (remote). |

**Analogi:** Git itu seperti "Save As" + "History" (riwayat perubahan), sedangkan GitHub adalah "Cloud Drive" tempat kamu menyimpan riwayat itu.

---

## 📌 2. 3 KONSEP WAJIB PAHAM

```
┌─────────────────────────────────────────────────────────────┐
│                      WORKING DIRECTORY                      │
│              (Folder proyek tempat kamu coding)              │
│                                                             │
│                        git add .                            │
│                             ↓                               │
│                    ┌─────────────────┐                      │
│                    │   STAGING AREA  │   ← "Kotak persiapan"│
│                    │  (siap di-save) │                      │
│                    └─────────────────┘                      │
│                        git commit -m "pesan"                │
│                             ↓                               │
│                    ┌─────────────────┐                      │
│                    │   LOCAL REPO    │   ← "Database versi" │
│                    │   (tersimpan)   │      di laptop       │
│                    └─────────────────┘                      │
│                        git push                             │
│                             ↓                               │
│                    ┌─────────────────┐                      │
│                    │  REMOTE REPO    │   ← GitHub           │
│                    │   (GitHub)      │      (online)        │
│                    └─────────────────┘                      │
└─────────────────────────────────────────────────────────────┘
```

**Penjelasan:**
1. **Working Directory** = folder tempat kamu menulis kode.
2. **Staging Area** = area sementara "kotak persiapan" sebelum benar-benar disimpan.
3. **Local Repository** = tempat riwayat commit tersimpan di laptop.
4. **Remote Repository** = salinan repo di GitHub (cloud).

---

## 📌 3. PERINTAH GIT WAJIB (11 PERINTAH)

| No | Perintah | Fungsi | Frekuensi |
|----|----------|--------|-----------|
| 1 | `git init` | Mengubah folder biasa menjadi repo Git | Sekali per proyek |
| 2 | `git status` | Cek status perubahan (apa yang berubah/ditambahkan) | Setiap kali mau commit |
| 3 | `git add .` | Menambahkan semua perubahan ke staging | Setiap selesai fitur kecil |
| 4 | `git add <file>` | Menambahkan satu file tertentu ke staging | Jarang, lebih sering `git add .` |
| 5 | `git commit -m "pesan"` | Menyimpan perubahan ke local repo | Minimal 5x/hari |
| 6 | `git log` | Lihat riwayat commit | Untuk cek history |
| 7 | `git branch` | Lihat daftar cabang (branch) | Untuk cek cabang aktif |
| 8 | `git checkout -b <nama>` | Membuat & pindah ke cabang baru | Saat mulai fitur baru |
| 9 | `git checkout <nama>` | Pindah ke cabang lain | Saat ganti cabang |
| 10 | `git push origin main` | Mengirim commit ke GitHub (remote) | Minimal 1x/akhir sesi |
| 11 | `git pull origin main` | Mengambil update dari GitHub | Setiap kali mulai kerja (jika kolaborasi) |

---

## 📌 4. SISTEMATIKA PENULISAN PERINTAH

```bash
# Format umum:
git <perintah> <opsi/target>

# Contoh:
git add .                 # add dengan target "."
git commit -m "pesan"     # commit dengan opsi -m dan pesan
git push origin main      # push ke remote "origin" cabang "main"
```

**Penjelasan:**
- `git` = panggil program Git.
- `<perintah>` = aksi yang mau dilakukan (`add`, `commit`, `push`, dll).
- `<opsi/target>` = detail tambahan (file, cabang, pesan, dll).

---

## 📌 5. ALUR KERJA GIT YANG BENAR (1 ORANG / SENDIRI)

```
Mulai coding
    ↓
git status                 # Cek perubahan
    ↓
git add .                  # Tambah semua ke staging
    ↓
git commit -m "pesan"      # Simpan ke local repo
    ↓
(Ulangi terus: coding → add → commit)
    ↓
git push origin main       # Kirim ke GitHub (akhir sesi)
```

---

## 📌 6. PESAN COMMIT YANG BENAR

**Format standar industri:**
```
<tipe>: <pesan singkat (max 50 karakter)>

<penjelasan detail (opsional)>
```

| Tipe | Kapan Pakai | Contoh |
|------|-------------|--------|
| `feat` | Fitur baru | `feat: tambah endpoint login` |
| `fix` | Perbaiki bug | `fix: perbaiki error validasi email` |
| `docs` | Update dokumentasi | `docs: update README` |
| `style` | Perbaiki format (spasi, indentasi) | `style: rapikan kode` |
| `refactor` | Perbaiki struktur tanpa ubah fungsi | `refactor: pisahkan fungsi validasi` |
| `test` | Tambah/update test | `test: tambah unit test login` |
| `chore` | Tugas teknis (update dependency, dll) | `chore: update package.json` |

**Contoh commit yang benar:**
```bash
git commit -m "feat: tambah fitur filter tugas"
git commit -m "fix: perbaiki bug di form login"
git commit -m "docs: update instruksi instalasi"
```

**Contoh commit yang SALAH:**
```bash
git commit -m "update"       # Tidak jelas
git commit -m "fix fix fix"  # Tidak informatif
git commit -m "asdf"         # Buang-buang waktu
```

---

## 📌 7. FILE .gitignore (WAJIB!)

`.gitignore` adalah file yang memberi tahu Git: **file/folder apa yang TIDAK boleh di-commit**.

```gitignore
# Isi .gitignore untuk project Node.js
node_modules/
.env
.DS_Store
dist/
build/
*.log

# File rahasia
*.env
*.pem
*.key

# File hasil build
out/
.next/
```

**Kenapa penting?**
- `node_modules` terlalu besar (ratusan MB).
- `.env` berisi password/rahasia (jangan pernah di-commit!).
- File sementara seperti `.DS_Store` tidak perlu.

**Cara membuat:**
```bash
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
```

---

## 📌 8. ALUR KERJA DARI NOL (LANGKAH DEMI LANGKAH)

### STEP 1: Buat Repository di GitHub (Online)
1. Buka github.com
2. Klik tombol **"New"** atau **"+"** → **"New repository"**
3. Isi nama repo: `belajar-fullstack`
4. **Jangan centang** "Add a README file" (biar kosong)
5. Klik **"Create repository"**

### STEP 2: Hubungkan GitHub ke Laptop
```bash
# 1. Inisialisasi Git di folder proyek
cd folder-proyek-anda
git init

# 2. Set nama & email (hanya 1 kali, berlaku global)
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"

# 3. Set remote (hubungkan ke GitHub)
git remote add origin https://github.com/username/belajar-fullstack.git

# 4. Buat branch utama (main)
git branch -M main

# 5. Buat file pertama
echo "# Belajar Fullstack" > README.md

# 6. Tambahkan & commit
git add .
git commit -m "docs: tambah README"

# 7. Kirim ke GitHub
git push -u origin main
```

### STEP 3: Kerja Sehari-hari
```bash
# 1. Coding fitur baru
# ... (tulis kode di file)

# 2. Cek perubahan
git status

# 3. Tambahkan ke staging
git add .

# 4. Commit
git commit -m "feat: tambah endpoint GET users"

# 5. (Ulangi langkah 1-4 sampai selesai sesi)

# 6. Kirim ke GitHub
git push origin main
```

---

## 📌 9. BRANCH (CABANG) UNTUK KERJA TIM

Branch = "jalur" pengembangan terpisah. Biasanya:
- `main` = cabang utama (stable, siap deploy).
- `feature/login` = cabang untuk mengerjakan fitur login.
- `fix/bug-123` = cabang untuk memperbaiki bug.

```bash
# 1. Buat cabang baru & pindah ke sana
git checkout -b feature/login

# 2. Kerjakan fitur di cabang ini
# ... (coding)
git add .
git commit -m "feat: tambah form login"

# 3. Kembali ke main
git checkout main

# 4. Gabungkan cabang fitur ke main
git merge feature/login

# 5. Hapus cabang fitur (sudah tidak dipakai)
git branch -d feature/login

# 6. Push ke GitHub
git push origin main
```

> **Untuk kamu (belajar sendiri):** Branch tidak wajib, cukup pakai `main` saja. Branch berguna saat sudah kerja tim.

---

## 📌 10. TROUBLESHOOTING (ERROR YANG SERING TERJADI)

| Error | Penyebab | Solusi |
|-------|----------|--------|
| `fatal: not a git repository` | Belum `git init` | Jalankan `git init` dulu |
| `error: failed to push` | Belum `git pull` / ada konflik | `git pull origin main` lalu push ulang |
| `fatal: origin does not appear to be a git repository` | Belum set remote | `git remote add origin <url-repo>` |
| `Your branch is ahead of origin/main` | Ada commit yang belum di-push | `git push origin main` |
| `fatal: refusing to merge unrelated histories` | Repo lokal & remote beda history | `git pull origin main --allow-unrelated-histories` |

---

## 📌 11. RINGKASAN PERINTAH WAJIB HAFAL

```bash
# INISIALISASI & SETUP
git init                                      # Buat repo baru
git config --global user.name "Nama"          # Set nama global
git config --global user.email "email"        # Set email global
git remote add origin <url>                   # Hubungkan ke GitHub

# KERJA SEHARI-HARI
git status                                    # Cek status
git add .                                     # Tambah semua ke staging
git commit -m "pesan"                         # Simpan ke local repo
git push origin main                          # Kirim ke GitHub
git pull origin main                          # Ambil update dari GitHub

# BRANCH
git branch                                    # Lihat daftar branch
git checkout -b <nama>                        # Buat & pindah branch
git checkout <nama>                           # Pindah branch
git merge <nama>                              # Gabungkan branch
git branch -d <nama>                          # Hapus branch

# HISTORY
git log                                       # Lihat riwayat commit
git log --oneline                             # Riwayat singkat (1 baris per commit)
git diff                                      # Lihat perubahan yang belum di-add
```

---

## 📌 12. TARGET HARIAN (WAJIB!)

| Aktivitas | Target |
|-----------|--------|
| Jumlah commit per hari | **Minimal 5 commit** |
| Pesan commit | Jelas, pakai format `tipe: pesan` |
| Push ke GitHub | **Minimal 1x per hari** (akhir sesi) |
| Commit per proyek akhir | Minimal 50+ commit total |

---

## 🔥 CONTOH SCRIPT LENGKAP (HARI PERTAMA)

```bash
# 1. Buat folder proyek
mkdir portofolio-app
cd portofolio-app

# 2. Init Git
git init

# 3. Setup nama & email (jika belum)
git config --global user.name "Budi RPL"
git config --global user.email "budi@rpl.com"

# 4. Buat file .gitignore
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore

# 5. Buat file index.html
echo "<h1>Portofolio Saya</h1>" > index.html

# 6. Tambahkan & commit
git add .
git commit -m "feat: tambah halaman portofolio dasar"

# 7. Hubungkan ke GitHub (buat repo dulu di github.com)
git remote add origin https://github.com/username/portofolio-app.git
git branch -M main

# 8. Push ke GitHub
git push -u origin main
```

---

## 💡 TIPS UNTUK PELAJAR RPL

1. **Commit Sering, Bukan Besar-besaran**
   - ❌ 1 commit per hari untuk 10 file
   - ✅ 5-10 commit per hari (setelah selesai 1 fitur kecil)

2. **Biasakan `git status` Sebelum Commit**
   - Selalu cek perubahan apa yang akan di-commit.

3. **Jangan Pernah Commit `.env` dan `node_modules`**
   - Isi `.gitignore` sejak awal.

4. **Kalau Error, Baca Pesan Errornya!**
   - 90% error sudah ada solusinya di pesan error.

5. **GitHub adalah Portofolio Hidupmu**
   - HRD magang akan lihat aktivitas GitHub-mu. Semakin banyak commit hijau, semakin baik!

---

> **Kesimpulan:** Git & GitHub bukan fitur opsional. Ini adalah **bagian dari workflow profesional** yang harus kamu pakai setiap hari. Biasakan mulai dari sekarang, karena di dunia kerja, ini adalah alat utama. 💪