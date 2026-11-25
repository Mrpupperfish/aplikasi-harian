# HARIAN — Platform Web Lowongan Kerja Harian

Prototipe aplikasi web untuk mata kuliah **Manajemen Proyek Tangkas (ES234316)** — **Kelompok 1**, Fakultas Teknologi Elektro dan Informatika Cerdas (FTEIC), Institut Teknologi Sepuluh Nopember (ITS).

**Live Prototype:** https://aplikasi-harian-je5c-murex.vercel.app/

---

## Gambaran Umum

**HARIAN** adalah platform web lowongan kerja harian (*daily worker*) yang mempertemukan pencari kerja harian dengan instansi atau pemberi kerja secara terbuka tanpa bergantung pada jaringan kenalan atau grup pesan informal.

Platform ini dirancang untuk menjawab masalah utama di lapangan, seperti informasi lowongan yang tersebar tidak terstruktur, kesulitan menyaring pekerjaan sesuai lokasi dan jadwal, proses seleksi kandidat yang lambat, pencatatan riwayat kerja yang belum rapi, serta pembayaran upah yang sering tertunda. Seluruh alur dapat diakses langsung melalui browser tanpa instalasi aplikasi tambahan.

---

## Fitur Utama

### Bagi Pekerja Harian (*Daily Worker*)
* **Pencarian & Filter Lowongan:** Menelusuri lowongan aktif berdasarkan kata kunci serta menyaringnya lewat lokasi, tanggal/waktu kerja, nominal upah, dan jenis pekerjaan.
* **Detail Lowongan & Lamaran Online:** Melihat informasi lengkap lowongan (upah, lokasi, jadwal/shift, deskripsi, syarat, kuota, dan kontak) serta mengajukan lamaran langsung atau membatalkan lamaran yang masih berstatus *Pending*.
* **Pelacakan Status Real-Time:** Memantau perubahan status lamaran secara langsung beserta notifikasi hasilnya.
* **Profil, Riwayat Kerja & Rekening:** Mengelola data profil, riwayat pengalaman kerja, dokumen persyaratan, dan nomor rekening bank untuk keperluan pencairan upah serta rekomendasi pekerjaan.
* **Kepastian Pencairan Upah (H+2):** Skema pembayaran melalui rekening penengah (*escrow*) dengan pencairan upah maksimal H+2 setelah pekerjaan selesai dan informasi potongan *service fee* 10% yang transparan.

### Bagi Instansi / HRD & Manajemen
* **Manajemen Lowongan:** Membuat, mempublikasikan, mengedit, menutup, atau menghapus lowongan harian beserta validasi tanggal, kuota, dan upah.
* **Kelola Pelamar & Seleksi Otomatis MFEP:** Mengelola data dan berkas pelamar, menghitung skor kelayakan kandidat secara otomatis menggunakan metode *Multi-Factor Evaluation Process* (MFEP), serta memproses keputusan terima atau tolak kandidat.
* **Tagihan Pembayaran & Verifikasi:** Menghitung total tagihan upah otomatis, melakukan pembayaran ke rekening bersama, dan memverifikasi status transaksi pembayaran.
* **Ekspor Laporan Rekrutmen:** Mengunduh rekap hasil rekrutmen (pekerja diterima, jadwal, dan upah) dalam format PDF atau CSV.

---

## Teknologi & Tools

* **Frontend:** React, TypeScript / JavaScript, Vite
* **Deployment:** Vercel
* **Manajemen Proyek & Dokumentasi:** Notion (*Product Backlog* & *Product Roadmap*), Google Workspace
* **Version Control:** Git & GitHub



## Cara Menjalankan Proyek Secara Lokal

```bash
git clone <url-repository-github-anda>
cd <nama-folder-proyek>
npm install
npm run dev
```

Untuk membuat *build* produksi:

```bash
npm run build
```
