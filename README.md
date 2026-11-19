# har/an — Platform Kerja Harian & Escrow Payment Gateway

**Harian** adalah platform web yang mempertemukan pencari kerja harian (*daily worker*) dengan instansi pemberi kerja secara transparan, cepat, dan aman.

---

## Fungsi Utama Aplikasi

### 1. Portal Pekerja Harian
* **Pencarian & Filter Lowongan**: Menyaring pekerjaan harian berdasarkan kata kunci, lokasi, kategori (*Logistics & Warehouse*, *Event Staff*, *Hospitality*), jadwal *shift*, dan batas upah minimum.
* **Detail Lowongan & Simulasi Upah**: Menampilkan rincian tugas, jadwal kerja, kuota pelamar, *dresscode*, kontak PIC, serta perhitungan otomatis upah bersih (90%) setelah potongan *service charge* 10%.
* **Pelacakan Status Real-Time**: Memantau status lamaran (`Pending`, `Diterima`, `Ditolak`, hingga `Gaji Cair H+2`) serta membatalkan lamaran secara mandiri selama status masih `Pending`.

### 2. Portal Instansi & HRD
* **Publikasi Lowongan & Penguncian Escrow**: Membuat lowongan kerja harian sekaligus menahan anggaran upah ($\text{Kuota} \times \text{Upah Harian}$) di awal melalui saldo korporat *HarianPay* untuk menjamin pembayaran pekerja.
* **Seleksi Kandidat Otomatis (MFEP)**: Menghitung dan mengurutkan skor kelayakan pelamar secara objektif menggunakan metode *Multi-Factor Evaluation Process* berdasarkan bobot **Pengalaman**, **Ketersediaan Shift**, **Jarak Domisili**, dan **Kelengkapan Berkas**.
* **Pencairan Upah H+2 & Laporan CSV**: Mengonfirmasi pekerjaan selesai agar upah otomatis cair ke rekening pekerja maksimal H+2 serta mengunduh laporan rekrutmen dalam format `.csv`.