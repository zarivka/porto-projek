  // ======================================================
        // 1. MENAMPILKAN PESAN DI CONSOLE (F12 -> Console)
        // ======================================================
        console.log("🔥 JavaScript berjalan!");
        console.log("Belajar HTML + CSS + JS secara bersamaan");

        // ======================================================
        // 2. VARIABEL & TIPE DATA
        // ======================================================
        const namaDasar = "Budi";
        let umurDasar = 17;
        const kotaDasar = "Jakarta";

        console.log("Nama:", namaDasar);
        console.log("Umur:", umurDasar);
        console.log("Kota:", kotaDasar);

        // ======================================================
        // 3. FUNCTION & ARRAY METHODS
        // ======================================================
        const daftarNama = ["Andi", "Budi", "Cindy", "Dewi"];

        // map() - mengubah semua isi array
        const sapaanArray = daftarNama.map(nama => `Halo ${nama}!`);
        console.log("Hasil map():", sapaanArray);

        // filter() - menyaring
        const namaDenganA = daftarNama.filter(nama => nama.startsWith("A"));
        console.log("Nama yang mulai dengan A:", namaDenganA);

        // find() - mencari satu
        const cariBudi = daftarNama.find(nama => nama === "Budi");
        console.log("Find Budi:", cariBudi);

        // ======================================================
        // 4. MANIPULASI DOM (Interaksi dengan HTML)
        // ======================================================

        // ----- 4a. Mengambil element dari HTML -----
        const btnSubmit = document.getElementById("btnSubmit");
        const btnSapa = document.getElementById("btnSapa");
        const btnUbahWarna = document.getElementById("btnUbahWarna");
        const btnReset = document.getElementById("btnReset");
        const btnToggleHighlight = document.getElementById("btnToggleHighlight");

        const namaInput = document.getElementById("namaInput");
        const umurInput = document.getElementById("umurInput");
        const kotaSelect = document.getElementById("kotaSelect");
        const outputText = document.getElementById("outputText");
        const teksSapaan = document.getElementById("teksSapaan");

        // ----- 4b. Event Listener: Tombol "Kirim Data" -----
        btnSubmit.addEventListener("click", function() {
            // Ambil nilai dari input
            const nama = namaInput.value;
            const umur = umurInput.value;
            const kota = kotaSelect.value;

            // Validasi sederhana
            if (nama === "" || umur === "") {
                outputText.textContent = "⚠️ Nama dan Umur harus diisi!";
                outputText.style.color = "#e53e3e";
                return;
            }

            // Tampilkan di output
            outputText.textContent = `✅ Halo ${nama}! Umur ${umur} tahun dari ${kota}.`;
            outputText.style.color = "#2b6cb0";

            // Tampilkan juga di console
            console.log(`Form dikirim: ${nama}, ${umur}, ${kota}`);
        });

        // ----- 4c. Event Listener: Tombol "Sapa Saya" -----
        btnSapa.addEventListener("click", function() {
            // Ubah isi teks di HTML
            teksSapaan.textContent = `👋 Halo ${namaDasar}! Selamat belajar Fullstack JS!`;
            teksSapaan.style.color = "#2b6cb0";
            teksSapaan.style.fontWeight = "bold";
            
            console.log("Tombol Sapa diklik!");
        });

        // ----- 4d. Event Listener: "Ubah Warna Card" -----
        let warnaBergantian = false;
        btnUbahWarna.addEventListener("click", function() {
            // Ambil semua element dengan class "card"
            const cards = document.querySelectorAll(".card");
            
            warnaBergantian = !warnaBergantian;
            
            cards.forEach((card, index) => {
                if (warnaBergantian) {
                    card.style.background = "#bee3f8";
                    card.style.borderLeftColor = "#e53e3e";
                } else {
                    card.style.background = "#edf2f7";
                    card.style.borderLeftColor = "#2b6cb0";
                }
            });
            
            console.log("Warna card diubah!");
        });

        // ----- 4e. Event Listener: "Toggle Highlight" -----
        let highlightActive = false;
        btnToggleHighlight.addEventListener("click", function() {
            // Menggunakan classList.toggle untuk menambah/menghapus class
            const cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                card.classList.toggle("highlight");
            });
            
            highlightActive = !highlightActive;
            console.log(`Highlight: ${highlightActive ? "ON" : "OFF"}`);
        });

        // ----- 4f. Event Listener: "Reset" -----
        btnReset.addEventListener("click", function() {
            // Reset input
            namaInput.value = "";
            umurInput.value = "";
            kotaSelect.value = "Jakarta";
            
            // Reset output
            outputText.textContent = "Belum ada data";
            outputText.style.color = "#1a202c";
            
            // Reset teks sapaan
            teksSapaan.textContent = "Klik tombol di bawah untuk ubah teks ini!";
            teksSapaan.style.color = "#1a202c";
            teksSapaan.style.fontWeight = "normal";
            
            // Reset warna card
            const cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                card.style.background = "#edf2f7";
                card.style.borderLeftColor = "#2b6cb0";
                card.classList.remove("highlight");
            });
            
            console.log("Semua di-reset!");
        });

        // ----- 4g. Event listener: Enter di input -----
        namaInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                btnSubmit.click(); // Trigger tombol submit
            }
        });

        umurInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                btnSubmit.click();
            }
        });

        // ======================================================
        // 5. LOCALSTORAGE (Simpan data di browser)
        // ======================================================
        // Simpan data saat tombol submit
        btnSubmit.addEventListener("click", function() {
            const nama = namaInput.value;
            if (nama !== "") {
                localStorage.setItem("namaTerakhir", nama);
                console.log("Nama disimpan ke LocalStorage:", nama);
            }
        });

        // Saat halaman dimuat, ambil data dari LocalStorage
        const namaTersimpan = localStorage.getItem("namaTerakhir");
        if (namaTersimpan) {
            namaInput.value = namaTersimpan;
            console.log("Mengambil nama dari LocalStorage:", namaTersimpan);
        }

        // ======================================================
        // 6. ASYNC / AWAIT (Contoh simulasi fetch)
        // ======================================================
        async function ambilDataDummy() {
            console.log("🔄 Simulasi fetch data...");
            
            // Simulasi delay 1 detik
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const dataDummy = {
                user: "Budi",
                status: "aktif",
                pesan: "Data berhasil diambil!"
            };
            
            console.log("📦 Data dummy:", dataDummy);
            return dataDummy;
        }

        // Panggil fungsi async (coba lihat di console)
        ambilDataDummy();

        // ======================================================
        // 7. ERROR HANDLING (Try-Catch)
        // ======================================================
        try {
            // Simulasi error (misal parsing JSON yang salah)
            const jsonSalah = '{nama: "Budi"}'; // Kurang kutip di key
            const data = JSON.parse(jsonSalah);
            console.log(data);
        } catch (error) {
            console.log("❌ Error terjadi:", error.message);
            console.log("✅ JSON yang benar: '{\"nama\": \"Budi\"}'");
        }


                // ======================================================
        // 8. REDUCE() - Menggabungkan array jadi satu nilai
        // ======================================================
        const nilaiSiswa = [90, 85, 78, 92, 88];
        const totalNilai = nilaiSiswa.reduce((jumlah, nilai) => jumlah + nilai, 0);
        const rataRata = totalNilai / nilaiSiswa.length;
        console.log("Total nilai (reduce):", totalNilai);
        console.log("Rata-rata:", rataRata);

        // ======================================================
        // 9. DESTRUCTURING OBJECT
        // ======================================================
        const userProfile = {
            nama: "Budi",
            umur: 17,
            kelas: "12 RPL"
        };

        // Ambil properti jadi variabel terpisah
        const { nama, umur, kelas } = userProfile;
        console.log(`Destructuring: ${nama}, ${umur}, ${kelas}`);

        // ======================================================
        // 10. SPREAD OPERATOR (...)
        // ======================================================
        const arrAngka1 = [1, 2, 3];
        const arrAngka2 = [4, 5, 6];
        const gabungArray = [...arrAngka1, ...arrAngka2];
        console.log("Spread array:", gabungArray); // [1,2,3,4,5,6]

        // Spread untuk copy object
        const userBaru = { ...userProfile, status: "aktif" };
        console.log("Spread object:", userBaru);

        // ======================================================
        // 11. SETTIMEOUT (Delay)
        // ======================================================
        setTimeout(() => {
            console.log("⏰ Ini muncul setelah 2 detik (setTimeout)!");
        }, 2000);

        // ======================================================
        // 12. SOME() & EVERY()
        // ======================================================
        const angka = [10, 20, 30, 40];
        const adaYangLebihDari25 = angka.some(value => value > 25);
        const semuaLebihDari5 = angka.every(value => value > 5);
        console.log("some (>25):", adaYangLebihDari25); // true
        console.log("every (>5):", semuaLebihDari5);   // true

        // ======================================================
        // 13. JSON.stringify & JSON.parse
        // ======================================================
        const dataObj = { nama: "Budi", nilai: 90 };
        const jsonString = JSON.stringify(dataObj);
        console.log("JSON string:", jsonString); // '{"nama":"Budi","nilai":90}'

        const parseObj = JSON.parse(jsonString);
        console.log("JSON parse:", parseObj.nama); // Budi

        // ======================================================
        // PESAN AKHIR DI CONSOLE
        // ======================================================
        console.log("✅ Semua JavaScript selesai dijalankan!");
        console.log("💡 Coba klik tombol-tombol di halaman dan lihat perubahan!");