# har/an — Platform Kerja Harian & Escrow Payment Gateway

**Harian** adalah platform web yang mempertemukan pencari kerja harian (*daily worker*) dengan instansi pemberi kerja secara transparan, cepat, dan aman.

---

## Fungsi Utama Aplikasi (Termasuk Pembaruan Sprint 3)

### 1. Portal Pekerja Harian
* **Pembaruan Profil Digital (`US-07` & `US-11`)**: Mengisi dan memperbarui profil dasar (nama lengkap, kontak aktif, domisili, deskripsi singkat keahlian) serta portofolio pengalaman kerja & nomor rekening pencairan gaji H+2 dengan validasi kolom wajib.
* **Pencarian & Filter Lowongan Aktif**: Menyaring pekerjaan harian aktif berdasarkan kata kunci, lokasi, kategori (*Logistics & Warehouse*, *Event Staff*, *Hospitality*), jadwal *shift*, dan batas upah minimum.
* **Unggah Dokumen Persyaratan Lamaran (`US-10`)**: Mengunggah berkas persyaratan (**CV**, **KTP**, dan **Surat Pendukung**) sesuai format (`PDF, JPG, PNG, DOC, DOCX`) dan batas ukuran maksimal `5 MB` yang langsung terhubung ke dashboard pemeriksaan HRD.
* **Pelacakan Status Real-Time & Pratinjau Berkas**: Memantau status lamaran (`Pending`, `Diterima`, `Ditolak`, hingga `Gaji Cair H+2`), memeriksa berkas terkirim, serta membatalkan lamaran selama masih berstatus `Pending`.

### 2. Portal Instansi & HRD
* **Pembaruan Profil Instansi (`US-07`)**: Memperbarui nama instansi, kontak PIC HRD, bidang industri, dan deskripsi singkat perusahaan secara akurat.
* **Manajemen Siklus Lowongan (`US-08`)**: Mempublikasikan lowongan baru, **mengedit** detail lowongan, **menutup** (atau membuka kembali) lowongan, serta **menghapus** lowongan. Lowongan yang ditutup atau dihapus otomatis disembunyikan dari pencarian aktif pelamar dan menyesuaikan saldo Escrow secara akurat.
* **Kelola Data Pelamar & Pemeriksaan Berkas (`US-12`)**: Menu **Kelola Pelamar** mendukung operasi **CRUD** penuh (melihat, menambah, mengubah, dan menghapus kandidat) lengkap dengan pratinjau serta pengunduhan berkas persyaratan (**CV**, **KTP**, **Surat Pendukung**).
* **Seleksi Kandidat Otomatis (MFEP)**: Menghitung dan mengurutkan skor kelayakan pelamar secara objektif berdasarkan bobot **Pengalaman**, **Ketersediaan Shift**, **Jarak Domisili**, dan **Kelengkapan Berkas**.
* **Pemroses Pembayaran HarianPay & Escrow H+2 (`US-17`)**: Checkout pengisian saldo & penguncian dana Escrow melalui *Virtual Account* (BCA, Mandiri, BNI), **QRIS Korporat Instan**, atau *E-Wallet*, dilengkapi pencatatan mutasi *invoice*, bukti nota resmi, pencairan upah H+2, dan ekspor laporan `.csv`.