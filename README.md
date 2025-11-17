# uts-DwiRiskiAriyanto-24090028
# 🛒 Proyek Aplikasi Web Mini (Front-End)

## Informasi Mahasiswa

## 👤 Informasi Pengembang

| Keterangan | Detail |
| :--- | :--- |
| **Nama** | [Dwi Riski Ariyanto] |
| **NIM** | [24090028] |

---

## 🔗 Link Akses Proyek

| Keterangan | Link |
| :--- | :--- |
| **GitHub Repository** | `[https://github.com/tephen229/tephen229-uts-DwiRiskiAriyanto-24090028.git]` |
| **GitHub Pages** (Demo Langsung) | `[https://tephen229.github.io/tephen229-uts-DwiRiskiAriyanto-24090028/]` |

---

## 📝 Deskripsi & Fungsionalitas Setiap Halaman

### 1. 🔑 Halaman Login (`index.html`)

Halaman otentikasi yang dirancang untuk menerima input pengguna dan melakukan validasi *client-side* sebelum navigasi.

| Fitur / Spesifikasi | Implementasi & Fungsi |
| :--- | :--- |
| **Input Form** | Berisi *field* **Email** (sebagai *username*) dan **Password** (diisi dengan **NIM**). |
| **Toggle Password** | Ikon mata (`fa-eye`) memungkinkan pengguna untuk mengganti tampilan *password* antara mode `text` dan `password`. |
| **Validasi Input** | Saat tombol Login diklik, validasi mencegah input Email/Password kosong dengan menampilkan pesan *error* spesifik di bawah *field*. |
| **Logika Login** | Jika input terisi, sistem membandingkannya dengan data *hardcoded* (Email: `dwiriski2209@gmail.com`, NIM: `24090028`). |
| **Navigasi** | Jika login berhasil, pengguna akan diarahkan ke `dashboard.html`. |

### 2. 📊 Halaman Dashboard (`dashboard.html`)

Halaman ringkasan yang menyajikan data utama bisnis dengan tampilan yang terstruktur dan modern.

| Fitur / Spesifikasi | Implementasi & Fungsi |
| :--- | :--- |
| **Struktur Layout** | Menggunakan **Sidebar** navigasi tetap di kiri dan area **Main Content** di kanan. |
| **Card Summary** | Tiga kartu ringkasan ditampilkan menggunakan **Flexbox** CSS untuk tata letak yang rapi: **Total Produk**, **Total Penjualan**, dan **Total Revenue**. |
| **Sumber Data** | Data ringkasan (contoh: `totalProducts: 120`) diambil dari *object* `summary` di `script.js` dan di-*render* secara dinamis. |
| **Aksi Navigasi** | Tombol **"Lihat Data Produk"** memiliki *event listener* yang mengarahkan pengguna ke `products.html`. |

### 3. 📦 Halaman List Data Produk (`products.html`)

Halaman utama untuk manajemen data barang dengan fokus pada manipulasi DOM dinamis.

| Kolom Tabel | Fungsionalitas |
| :--- | :--- |
| **Data Produk** | Data (No, Product Name, Price, Stock) diambil dari *array* `products` di `script.js` menggunakan metode **`.map()`** untuk *rendering* tabel dinamis. |
| **Kolom No** | Nomor urut (`index + 1`) dihitung ulang secara otomatis setiap kali tabel di-*render*, memastikan urutan selalu benar setelah operasi Hapus. |
| **Aksi: Edit (✏️)** | Ketika ikon Edit diklik, kode JavaScript akan menampilkan notifikasi `alert()` yang menyebutkan nama produk, misalnya: **"Produk 'Kopi Gayo' telah diedit."** |
| **Aksi: Delete (🗑️)** | Ketika ikon Delete diklik, pengguna diminta konfirmasi (`if (confirm(...))`). Jika disetujui, produk dihapus dari *array* JavaScript (`products.splice`), dan tabel di-*render* ulang (`renderProductTable()`), sehingga baris produk hilang secara dinamis. |
