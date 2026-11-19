# har/an — Platform Kerja Harian & Payment Gateway

**Harian** adalah platform web yang mempertemukan pencari kerja harian (*daily worker*) dengan instansi pemberi kerja secara transparan, cepat, dan aman.

---

## Ruang Lingkup Fitur (Sprint 1 – Sprint 3)

### 1. Sprint 1 — Autentikasi & Eksplorasi Lowongan
* **Sign Up & Login (`US-01`, `US-02`)**: Pendaftaran dan masuk akun terpisah untuk peran **Pekerja Harian** dan **Perusahaan / HRD** dengan validasi kredensial.
* **Buat Lowongan Pekerjaan (`US-03`)**: Instansi mempublikasikan lowongan baru lengkap dengan posisi, upah harian, lokasi, jadwal *shift*, kuota, deskripsi, dan kontak PIC.
* **Pencarian, Filter & Detail Lowongan (`US-04`, `US-05`, `US-06`)**: Pencarian kata kunci, filter lokasi/kategori/shift/upah minimum, serta pratinjau detail lengkap lowongan sebelum melamar.
* **Ajukan Lamaran (`US-09`)**: Mengajukan lamaran pada lowongan aktif dengan pencegahan lamaran ganda dan pengecekan kuota.

### 2. Sprint 2 — Seleksi MFEP, Status Real-Time & Verifikasi Pembayaran
* **Penilaian Berkas Otomatis MFEP (`US-13`)**: Perhitungan otomatis skor kelayakan berkas kandidat dan pengurutan dari skor tertinggi.
* **Aksi Terima / Tolak & Pelacakan Status (`US-14`, `US-15`, `US-16`)**: Pembaruan status lamaran (`Pending`, `Diterima`, `Ditolak`) secara *real-time* serta pembatalan mandiri untuk lamaran `Pending`.
* **Verifikasi Pembayaran Payment Gateway (`US-18`)**: Respon verifikasi transaksi `Sukses` (status `Lunas`) maupun `Gagal/Expired` (status `Batal/Gagal` dengan opsi bayar ulang).
* **Unduh Laporan Rekrutmen CSV (`US-21`)**: Ekspor laporan kandidat yang diterima dalam format `.csv` dengan validasi laporan kosong.

### 3. Sprint 3 — Profil Dasar, Manajemen Lowongan, Berkas & Pemroses Pembayaran
* **Pembaruan Profil Dasar (`US-07`)**: Pembaruan profil dasar (nama, kontak aktif, domisili/industri, deskripsi singkat) untuk Pekerja dan Instansi dengan validasi kolom wajib.
* **Edit, Tutup & Hapus Lowongan (`US-08`)**: Manajemen siklus lowongan; lowongan yang ditutup atau dihapus otomatis hilang dari pencarian aktif pelamar.
* **Unggah Berkas Persyaratan Lamaran (`US-10`)**: Unggah berkas **CV**, **KTP**, dan **Surat Pendukung** (`PDF, JPG, PNG, DOC, DOCX`, maks. `5 MB`) yang langsung terhubung ke dashboard HRD.
* **Kelola Pelamar (`US-12`)**: Menu CRUD penuh (lihat, tambah, ubah, hapus pelamar) lengkap dengan tautan pratinjau dan unduh berkas persyaratan.
* **Tagihan Pembayaran & Payment Gateway (`US-17`)**: Kalkulasi otomatis tagihan (`jumlah pekerja × upah`), pemilihan kanal pembayaran (*Virtual Account*, *QRIS*, *E-Wallet*), serta bukti nota transaksi resmi.
