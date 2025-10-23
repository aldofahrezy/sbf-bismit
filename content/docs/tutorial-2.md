---
title: Intro to WebDev Framework 
description: Brief Introduction to Next.js + Hands-on 
---

# Introduction to Web Development Framework 

---

## Apa itu Web Development Framework?

Di *Internal Class* sebelumnya kalian sudah belajar mengenai dasar dari HTML & CSS.  
Kalian mungkin setuju kalau membuat sebuah aplikasi web yang fungsional sepenuhnya dengan hanya mengandalkan HTML & CSS saja pasti akan memakan waktu yang sangat lama.  

Maka dari itu, para developer kebanyakan mengandalkan yang namanya ***Web Development Framework*** guna mempermudah dan mempercepat proses pengembangan aplikasinya.

Bayangkan kamu mau membangun sebuah rumah.  
***Web Development Framework*** adalah seperti *paket lengkap bahan dan alat bangunan* yang sudah disiapkan agar kamu tidak perlu mulai dari nol.

Framework menyediakan:

* **Fondasi, kerangka, dan denah** (struktur bawaan)
* **Komponen siap pakai** seperti pintu, jendela, sistem perpipaan (kode & library reusable)
* **Aturan & praktik terbaik** (struktur proyek, keamanan, performa)

Singkatnya, *framework* memberi cara standar untuk membangun dan meluncurkan aplikasi web — tanpa perlu menulis semua kode dasar dari awal.

### Apa kegunaannya?
* **Kecepatan:** Mempercepat proses pengembangan.
* **Keamanan:** Perlindungan bawaan terhadap serangan umum.
* **Organisasi:** Struktur kode lebih rapi dan mudah dikelola.
* **Performa:** Banyak framework menyertakan optimasi seperti *caching*.

---

## React.js: Pondasi di Balik Next.js ⚛️

Sebelum mengenal **Next.js**, kamu perlu tahu dulu tentang **React.js**.

**React.js** adalah sebuah **library JavaScript** yang dikembangkan oleh Meta (Facebook).  
React berfokus pada *user interface (UI)* — bagian tampilan yang dilihat pengguna.

### Mengapa React lebih baik daripada JavaScript vanilla?

| Aspek | JavaScript Vanilla | React.js |
|-------|--------------------|-----------|
| Struktur | Kode terpisah-pisah, sulit diatur | Komponen modular dan reusable |
| Pembaruan data | Harus memanipulasi DOM manual (ribet & rawan bug) | Otomatis dengan *Virtual DOM* |
| Skalabilitas | Sulit dikelola untuk proyek besar | Cocok untuk aplikasi besar & dinamis |
| Reusabilitas | Kode tidak reusable | Komponen bisa dipakai berulang di mana saja |

Dengan React, kamu bisa menulis **komponen** seperti `<Navbar />`, `<Button />`, atau `<Card />` dan menggunakannya di mana pun tanpa menulis ulang kodenya.

> React adalah “otak” yang membuat UI dinamis, sedangkan **Next.js** adalah “kerangka tubuh” yang menambah fitur-fitur penting seperti routing, optimasi performa, dan server-side rendering.

---

## Contoh Web Framework Populer

Framework bisa dibagi jadi beberapa kategori:

* **Front-End (Sisi Klien):**
  * **React.js:** Library populer untuk UI dinamis.
  * **Angular:** Framework lengkap dari Google.
  * **Vue.js:** Fleksibel dan mudah dipelajari.

* **Back-End (Sisi Server):**
  * **Express.js:** Minimalis dan cepat di atas Node.js.
  * **Django:** (Python) Lengkap dan aman.
  * **Laravel:** (PHP) Sintaks elegan dan mudah dibaca.

* **Full-Stack (Gabungan):**
  * **Next.js:** Dibangun di atas React, mendukung SSR & CSR.
  * **Nuxt.js:** Versi serupa berbasis Vue.js.

---

## Setup Framework Modern (Next.js)

Sebagian besar framework modern, termasuk **Next.js**, membutuhkan dua alat utama:

1. **Node.js:** Lingkungan untuk menjalankan JavaScript di luar browser.
2. **npm (Node Package Manager):** Alat untuk mengelola *package* atau *library*.

### Proses umum setup
1. Instal Node.js & npm.  
2. Buka terminal.  
3. Jalankan perintah pembuatan proyek (`npx create-next-app`).  
4. Masuk ke folder proyek (`cd nama-proyek`).  
5. Jalankan server lokal (`npm run dev`).  
6. Mulai edit kode.

---

## Panduan Langkah-demi-Langkah Membuat Proyek Next.js 🚀

### Langkah 1: Instal Node.js dan npm

1. Unduh dari [https://nodejs.org](https://nodejs.org)
2. Pilih versi **LTS (Long-Term Support)**.
3. Setelah instalasi, cek di terminal:
   ```bash
   node -v
   npm -v
   ```

Pastikan keduanya menampilkan nomor versi (misalnya `v20.10.0` dan `10.2.3`).

---

### Langkah 2: Buat Proyek Baru

Navigasikan ke folder tempat kamu ingin menyimpan proyek dan jalankan:

```bash
npx create-next-app@latest
```

Ikuti pertanyaan instalasi berikut (disarankan semua **Yes** kecuali alias impor):

- Gunakan **TypeScript** → Yes  
- Gunakan **ESLint** → Yes  
- Gunakan **Tailwind CSS** → Yes  
- Gunakan **src/** directory → Yes  
- Gunakan **App Router** → Yes  

---

### Langkah 3: Jalankan Server Pengembangan

```bash
cd proyek-pertama-saya
npm run dev
```

Kamu akan melihat server berjalan di `http://localhost:3000`.

---

## Hands-On: Ubah Tampilan Menggunakan Tailwind CSS 🎨

Sekarang mari ubah halaman utama menggunakan **Tailwind CSS** agar tampil lebih menarik.

1. Buka proyek di **VS Code**.
2. Arahkan ke file:
   ```
   src/app/page.tsx
   ```
3. Hapus seluruh isi file, ganti dengan kode berikut:

```tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Halo, dari Kelas Internal! 🚀
      </h1>
      <p className="text-lg md:text-xl max-w-xl leading-relaxed text-gray-300">
        Saya berhasil menjalankan proyek Next.js pertama saya — 
        sekarang sudah menggunakan <span className="font-semibold text-teal-400">Tailwind CSS</span> untuk styling!
      </p>
      <button className="mt-10 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-xl transition">
        Pelajari Lebih Lanjut
      </button>
    </main>
  );
}
```

4. Simpan file (`Ctrl+S` / `Cmd+S`).
5. Kembali ke browser dan lihat hasilnya di `http://localhost:3000`.

---

## Kesimpulan

- **React.js** membantu membuat UI dengan cara modular dan efisien.  
- **Next.js** memperluas kemampuan React dengan fitur lengkap seperti routing, SSR, dan optimasi performa.  
- Dengan **Tailwind CSS**, kita bisa menulis gaya secara cepat dan konsisten tanpa membuat file CSS terpisah.  
- Framework modern memungkinkan pengembangan web yang cepat, aman, dan terstruktur dengan baik.

---

> 🌟 Sekarang kamu telah membuat aplikasi Next.js pertama yang stylish menggunakan Tailwind CSS.  
> Langkah selanjutnya: pahami bagaimana **struktur folder** dan **konsep routing** bekerja di Next.js!
