---
title: 'Week 4: Introduction to Express JS & Fetch API Implementation'

---

# Week 4: Introduction to Express JS & Fetch API Implementation


## Backend Fundamental
Backend merupakan konsep pemrogramman yang dilakukan untuk mengelola logika atau fitur dari suatu aplikasi yang biasanya berhubungan dengan database, yap... Backend *mostly* digunakan untuk mengelola data dalam suatu database agar dapat ditampilkan di Frontend sesuai dengan logika yang telah dibuat. 

![image](https://hackmd.io/_uploads/By2O69w1Zg.png)

Terms yang akan didengar ketika mempelajari Backend adalah Request dan Response. 
- **Request** dilakukan oleh pengguna aplikasi untuk meminta sesuatu yang ada di dalam server. 
- **Response** adalah hasil dari permintaan pengguna yang dikirimkan kembali oleh server.

Juga terdapat API (Application Programming Interface). Simpelnya adalah kode yang udah jadi dan siap dipakai, *terms* ini digunakan di BE Developer karena kita yang membuat API, dan di bagian FE tinggal dipake aja deh kodenya :D

Metode API yang sering dipake itu namanya REST API (Representational State Transfer API). Metode ini mendorong kita untuk membuat API dengan mendefinisikan CRUD (Create, Read, Update, Delete) dengan GET, POST, PATCH, PUT, DELETE.

| Operasi | Method HTTP | Deskripsi             |
| ------- | ----------- | --------------------- |
| Create  | POST        | Menambahkan data baru |
| Read    | GET         | Mengambil data        |
| Update  | PUT / PATCH | Mengubah data         |
| Delete  | DELETE      | Menghapus data        |

> Bedanya PUT sama PATCH itu apa?

Ini adalah metode yang disetujui oleh banyak Developer untuk digunakan agar API dapat lebih mudah dikenali dan dipanggil. 

Dalam pemrograman platform, terdapat konsep server-side dan client-side, maksudnya apasih?
- **Server-side**, semua operasi yang dilakukan di dalam server (BE)
- **Client-side**, semua operasi yang dilakukan secara langsung di dalam aplikasi (FE)

Kalo kamu lagi pake aplikasi atau website, terus tiba-tiba aplikasinya loading. Nah, itu berarti dia lagi melakukan operasi di server-side. Tapi kalau ga loading dan jalan lancar itu berarti lagi di client-side.


## Express JS
Express JS merupakan suatu framework dari Node.js untuk membuat Backend dari sebuah aplikasi. Bahasa yang digunakan adalah Javascript, mari berkenalan lebih jauh.

### A. Installasi Express JS

1. Buat folder dengan nama `SBF-Week4`
2. Masuk ke dalam folder, lalu ketik `npm init -y`
3. Ketik juga `npm install express`
4. Buat folder `index.js` lalu masukkan kode di bawah ini

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

5. Run kode tersebut menggunakan `node index.js`
6. Buka portnya menggunakan `http://localhost:3000/`

Selamat kode Backend kalian berhasil dijalankan! 🥳
> Ada yang tau ga kenapa http bukan https?

## B. Membuat API dengan Express JS
Sebelum membuat API, install aplikasi [Postman](https://www.postman.com/downloads/). Postman biasanya digunakan untuk cek apakah kita bisa mengirim request dan server memberikan response yang sesuai sebelum di integrasikan ke FE.


Pada file `index.js` ubah kode menjadi seperti dibawah ini.
```js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
let books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    release: "01/08/2009",
  },
  {
    id: 2,
    title: "Operating System Concept",
    author: "James L. Peterson",
    release: "01/01/1990",
  },
];

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).json(books);
});

app.post("/add-book", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    release: req.body.release,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// :[nama] biasanya dipakai untuk custom route
app.put("/edit-book/:id", (req, res) => {
  // json selalu mengembalikan format string
  // jangan lupa untuk mengubah typenya kembali
  const id = Number(req.params.id);
  let book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  book.release = req.body.release || book.release;

  res.json(book);
});

app.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((s) => s.id === id);

  res.status(200).json(book);
});

app.delete("/delete-book/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) return res.status(404).json({ message: "Book not found" });

  books.splice(index, 1);

  res.json({ message: "Book deleted successfully" });
});

```

Ini adalah API yang mengoperasikan dummy database untuk bisa di return ke client setelah melakukan request. Pada kode dapat terlihat beberapa method GET, PUT, DELETE, UPDATE digunakan dengan route untuk mengetahui API apa yang akan dijalankan.

> Kalau udah ada route, kenapa harus ada GET, DELETE, PUT, PATCH? Kenapa ga pakai GET semua aja misal?

![image](https://hackmd.io/_uploads/Hkmreaw1Ze.png)

Coba kalian Masukkan perintah ini ke dalam postman kalian satu per satu.
GET    http://localhost:3000/
PUT    http://localhost:3000/edit-book/1
body:
```json
{
    "author": "Hakim Nizami"
}
```
POST   http://localhost:3000/add-book
body:
```json
{
    "title": "Calculus 8th Edition",
    "author": "Dale Varberg, Edwin Purcell, and Steven E. Rigdon",
    "release": "27/09/2000"
}
```

GET    http://localhost:3000/1
DELETE http://localhost:3000/delete-book/1
GET    http://localhost:3000/

Apa yang terjadi pada console postman?

Itu adalah gambaran ketika *client* melakukan request ke server, maka server akan mengembalikan sesuai dengan request yang diminta.

Contoh Kasus: Kalian buka Youtube, nah di halaman utama itu kan muncul semua video tanpa terkecuali, itu pakai GET untuk show semua video yang ada, ketika kalian mulai search, maka dia akan menggunakan GET namun di route akan terdapat query atau kode unik yang fungsinya untuk melakukan filter berdasarkan search kalian.

## Fetch API dari Server ke Client
Setelah mempelajari Backend dan membuat API Book, kita dapat memanggilnya pada client-side dengan metode namanya fetch API.

1. Clone project NextJS [ini](https://github.com/VazhaK14/sbf-week4)
2. Jangan lupa `npm install`
3. Buat file `.env` di root folder dan masukkan alamat dibawah ini.
```
BACKEND_URL=http://localhost:3001
FRONTEND_URL=http://localhost:5173
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
NEXT_PUBLIC_FRONTEND_URL=http://localhost:5173
```
4. Coba run projectnya, apa yang terjadi?

> Kalau Bookshelf yang telah kalian buat di BE terlihat di website, selamat kalian berhasil! Kalau belum, coba kenapa kira-kira?


### Selesai deh! 🥳