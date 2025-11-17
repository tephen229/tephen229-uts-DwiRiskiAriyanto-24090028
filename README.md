# 🛒 uts-DwiRiskiAriyanto-24090028: Aplikasi Web Mini (Front-End)

Proyek simulasi manajemen toko material ini dikembangkan menggunakan **HTML, CSS, dan JavaScript** murni, berfokus pada desain modern dan interaksi dinamis *client-side*.

---

## 👤 Informasi Pengembang

| Keterangan | Detail |
| :--- | :--- |
| **Nama** | Dwi Riski Ariyanto |
| **NIM** | 24090028 |

---

## 🔗 Link Akses Proyek

| Keterangan | Link |
| :--- | :--- |
| **GitHub Repository** | `https://github.com/tephen229/tephen229-uts-DwiRiskiAriyanto-24090028.git` |
| **GitHub Pages (Demo)** | `https://tephen229.github.io/tephen229-uts-DwiRiskiAriyanto-24090028/` |

---

## 📝 Deskripsi Fungsionalitas Setiap Halaman

### 1. 🔑 Halaman Login (`index.html`)

Halaman otentikasi dengan validasi dan navigasi:

* **Input:** Email (`username`) dan Password (`NIM: 24090028`).
* **Fitur:** **Toggle Password** (ikon mata) dan validasi *field* kosong.
* **Logika:** Membandingkan input dengan data *hardcoded* (`dwiriski2209@gmail.com` / `24090028`) dan me-*redirect* ke Dashboard jika berhasil.

### 2. 📊 Halaman Dashboard (`dashboard.html`)

Halaman ringkasan data dan navigasi:

* **Layout:** Menggunakan **Sidebar** tetap dan konten utama (*Main Content*).
* **Card Summary:** Menampilkan tiga kartu ringkasan (**Total Produk, Total Penjualan, Total Revenue**) yang diambil dari *object* `summary` di JavaScript.
* **Aksi:** Tombol **"Lihat Data Produk"** mengarahkan ke `products.html`.

### 3. 📦 Halaman List Data Produk (`products.html`)

Halaman manajemen data dengan manipulasi DOM dinamis:

* **Tabel:** Menampilkan data produk (No, Name, Price, Stock)
* **Aksi Edit (✏️):** Menampilkan notifikasi **alert** sederhana yang menyebutkan nama produk ("Produk 'Nama' telah diedit.").
* **Aksi Delete (🗑️):** Meminta konfirmasi, lalu menghapus data dari *array* (`products.splice`).
