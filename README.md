# har/an — Platform Kerja Harian & Escrow Payment Gateway

**Harian** adalah aplikasi web pencari kerja harian (*daily worker*) yang menjembatani pencari kerja harian dengan instansi pemberi kerja secara transparan, cepat, dan terukur. Menggantikan penyebaran info lowongan yang tidak terstruktur di grup pesan instan dengan sistem pencarian berfilter, seleksi kandidat otomatis berbasis metode **MFEP (*Multi-Factor Evaluation Process*)**, serta jaminan pencairan upah maksimal **H+2** melalui mekanisme **Escrow Payment Gateway**.

---

## Fitur Utama

### 1. Portal Pekerja Harian
* **Pencarian & Filter Cepat**: Filter lowongan berdasarkan kata kunci posisi/perusahaan, lokasi kerja, kategori pekerjaan (*Logistics & Warehouse*, *Event Staff*, *Hospitality*), jadwal *shift*, serta batas upah minimum harian.
* **Detail Lowongan Transparan**: Menampilkan skor integritas perusahaan, rincian tugas, perlengkapan/*dresscode* wajib, kontak PIC lapangan, serta simulasi upah bersih setelah potongan *service charge* 10%.
* **Pelacakan Status Real-Time & Pembatalan**: Memantau status lamaran (`Pending`, `Diterima`, `Ditolak`, hingga `Gaji Cair H+2`) secara langsung dan mendukung pembatalan mandiri selama status masih `Pending`.

### 2. Portal Instansi & HRD
* **Publikasi Lowongan & Penguncian Dana Escrow**: Setiap pemasangan lowongan baru otomatis menahan anggaran upah ($\text{Kuota} \times \text{Upah Harian}$) di awal melalui saldo korporat *HarianPay*.
* **Kalkulator & Pemeringkatan Kandidat MFEP**: Evaluasi kelayakan pelamar secara objektif dan transparan berdasarkan bobot **Pengalaman Kerja**, **Ketersediaan Shift**, **Jarak Domisili**, dan **Kelengkapan Berkas**.
* **Pencairan Upah H+2 & Ekspor Laporan**: Konfirmasi penyelesaian *shift* untuk mendistribusikan upah bersih (90%) ke pekerja dan mengunduh rekapitulasi rekrutmen dalam format `.csv`.

### 3. Antarmuka & Pengalaman Pengguna
* **Matte Frosted Glass UI**: Desain antarmuka modern dengan efek kaca buram berdimensi tinggi, tipografi kontras tajam, serta *stepper* alur akses interaktif.
* **Responsif & Teroptimasi 60fps**: Animasi transisi *scroll* dua arah dan penyesuaian *backdrop-filter* otomatis agar tetap ringan di perangkat seluler maupun desktop.

---

## Teknologi yang Digunakan

* **Frontend Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom CSS Matte Frosted Glass
* **Ikonografi**: [Lucide React](https://lucide.dev/)
* **Deployment**: [Vercel](https://vercel.com/)

---

## Cara Menjalankan di Lokal

1. **Clone repository ini**
   ```bash
   git clone https://github.com/Mrpupperfish/aplikasi-harian.git
   cd aplikasi-harian
   ```

2. **Install seluruh dependency**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan**
   ```bash
   npm run dev
   ```
   Buka alamat lokal yang muncul di terminal (biasanya `http://localhost:5173`).

4. **Build untuk produksi**
   ```bash
   npm run build
   ```

---

## Simulasi Akun Demo

Anda dapat mencoba langsung alur dua sisi menggunakan tombol **Masuk** atau **Daftar** di halaman utama:
* **Pekerja Harian**: `budisantoso@gmail.com` / `harian123`
* **Perusahaan / HRD**: `hrd@karyamaju.co.id` / `harian123`

---

## Lisensi

&copy; 2026 **Harian** — Dikembangkan sebagai prototipe sistem ekosistem tenaga kerja harian berbasis web.