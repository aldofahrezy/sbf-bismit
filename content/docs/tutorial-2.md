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

## Hands-On Lanjutan: Bangun Game **Tic-Tac-Toe** dengan Next.js + Tailwind 🕹️

Pada latihan ini, kita akan membuat halaman `/tictactoe` yang berisi permainan **Tic-Tac-Toe** lengkap: giliran pemain, deteksi pemenang, seri, dan tombol reset.

### 1) Buat Halaman Baru

Buat file baru:
```
src/app/tictactoe/page.tsx
```

Isi dengan kode berikut:

```tsx
'use client';

import { useMemo, useState } from 'react';

type Cell = 'X' | 'O' | ''; // nilai sel papan
type Player = 'X' | 'O';

const winningCombos: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(board: Cell[]): Player | null {
  for (const [a, b, c] of winningCombos) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Player;
    }
  }
  return null;
}

export default function TicTacToePage() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(''));
  const [current, setCurrent] = useState<Player>('X');
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const winner = useMemo(() => calculateWinner(board), [board]);
  const isDraw = useMemo(() => board.every((c) => c !== '') && !winner, [board, winner]);

  function handleClick(index: number) {
    // Jika sel sudah terisi atau sudah ada pemenang, abaikan klik
    if (board[index] !== '' || winner) return;

    const next = [...board];
    next[index] = current;
    setBoard(next);

    // Cek pemenang setelah langkah ini
    const w = calculateWinner(next);
    if (w) {
      if (w === 'X') setXScore((s) => s + 1);
      else setOScore((s) => s + 1);
      return;
    }

    // Jika belum menang, ganti giliran
    setCurrent((prev) => (prev === 'X' ? 'O' : 'X'));
  }

  function resetBoard() {
    setBoard(Array(9).fill(''));
    setCurrent('X');
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Tic-Tac-Toe</h1>

        {/* Skor */}
        <div className="grid grid-cols-3 gap-3 text-center mb-6">
          <div className="rounded-xl bg-white/5 p-4 border border-white/10">
            <p className="text-sm opacity-80">Pemain</p>
            <p className="text-xl font-semibold">{current}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4 border border-white/10">
            <p className="text-sm opacity-80">Skor X</p>
            <p className="text-xl font-semibold">{xScore}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4 border border-white/10">
            <p className="text-sm opacity-80">Skor O</p>
            <p className="text-xl font-semibold">{oScore}</p>
          </div>
        </div>

        {/* Status permainan */}
        <div className="mb-4 text-center min-h-[28px]">
          {winner ? (
            <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40">
              🎉 Pemenang: <span className="font-bold">{winner}</span>
            </span>
          ) : isDraw ? (
            <span className="inline-block px-3 py-1 rounded-lg bg-yellow-500/20 border border-yellow-500/40">
              🤝 Seri! Tidak ada pemenang.
            </span>
          ) : (
            <span className="inline-block px-3 py-1 rounded-lg bg-white/10 border border-white/20">
              Giliran <span className="font-semibold">{current}</span>
            </span>
          )}
        </div>

        {/* Papan 3x3 */}
        <div className="grid grid-cols-3 gap-3">
          {board.map((cell, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className="aspect-square rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-4xl font-extrabold flex items-center justify-center transition select-none"
              aria-label={`cell-${i}`}
            >
              {cell}
            </button>
          ))}
        </div>

        {/* Aksi */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={resetBoard}
            className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 font-medium transition"
          >
            Reset Papan
          </button>
        </div>

        {/* Tips */}
        <div className="mt-6 text-sm text-gray-300/90 space-y-1">
          <p>🔁 Papan akan terkunci ketika ada pemenang. Tekan <em>Reset Papan</em> untuk mulai lagi.</p>
          <p>🧠 Coba refactor: ekstrak komponen <code>&lt;Square/&gt;</code> sendiri dan tambahkan animasi jika mau.</p>
        </div>
      </div>
    </main>
  );
}
```

### 2) Tambahkan Link Navigasi (Opsional)

Agar mudah mengakses halaman baru, kamu bisa menambahkan tautan ke `/tictactoe` dari halaman utama (`src/app/page.tsx`). Contoh sederhana:

```tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Halo, dari Kelas Internal! 🚀</h1>
      <p className="text-lg md:text-xl max-w-xl leading-relaxed text-gray-300">
        Saya berhasil menjalankan proyek Next.js pertama saya — sekarang memakai <span className="font-semibold text-teal-400">Tailwind CSS</span>.
      </p>
      <div className="mt-10 flex gap-3">
        <a
          href="https://nextjs.org/learn"
          className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-xl font-medium transition"
          target="_blank"
          rel="noreferrer"
        >
          Pelajari Next.js
        </a>
        <Link
          href="/tictactoe"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition"
        >
          Main Tic-Tac-Toe
        </Link>
      </div>
    </main>
  );
}
```

### 3) Uji Coba

- Jalankan server: `npm run dev`
- Buka `http://localhost:3000/tictactoe`
- Klik sel untuk mengisi giliran X dan O
- Lihat status pemenang/seri dan gunakan tombol **Reset Papan** untuk memulai ulang

### 4) Tantangan Lanjutan (Opsional)

- **Persist skor** ke `localStorage` agar skor tidak hilang saat refresh.  
- Tambahkan **animasi** transisi menggunakan kelas Tailwind (mis. `animate-pulse` atau `transition duration-300`).  
- Buat **mode melawan komputer (AI)** sederhana: pilih sel kosong acak ketika giliran O.  
- Ekstrak komponen `<Board />` dan `<Square />` ke file terpisah untuk praktik arsitektur komponen.

---

## Kesimpulan

- **React.js** membantu membuat UI modular dan efisien.  
- **Next.js** menambahkan routing, optimasi, dan DX yang nyaman.  
- **Tailwind CSS** mempercepat styling konsisten.  
- Latihan **Tic-Tac-Toe** melatih state, kondisi menang/seri, dan pola komponen — fondasi untuk aplikasi interaktif yang lebih kompleks.
