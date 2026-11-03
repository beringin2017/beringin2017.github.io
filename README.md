# Tertib — Disiplin Administrasi

Website edukasi berbahasa Indonesia tentang kebiasaan administrasi yang rapi, tepat waktu, teliti, dan bertanggung jawab.

**Website:** https://beringin2017.github.io/

## Halaman

- `index.html`: pengantar, carousel kebiasaan, kartu panduan, alur kerja, dan FAQ.
- `panduan.html`: enam materi yang dapat dicari, difilter, dan dibaca dalam modal.
- `checklist.html`: delapan kebiasaan harian, progres, unduh rangkuman, dan konfirmasi reset.

## Kriteria tugas

| Kriteria | Implementasi |
| --- | --- |
| HTML, CSS, Bootstrap | HTML5, CSS khusus, Bootstrap 5.3.3 lokal |
| Komentar tiap bagian | Komentar section di HTML serta komentar fungsi di CSS dan JavaScript |
| Button, navbar, carousel, card, text-hover | Ketiganya menggunakan komponen yang relevan; hover pada tautan dan kartu |
| Minimal dua halaman terhubung | Tiga halaman dengan navbar, footer, dan tautan kontekstual |
| Komponen tambahan | Accordion, modal, breadcrumb, badge, alert, progress, toast, form, collapse, grid |
| Konten asli | Materi, contoh dokumen, dan checklist berbahasa Indonesia tanpa lorem ipsum |
| Custom CSS dan JavaScript | Desain responsif, filter materi, pencarian, unduh checklist, progres harian |
| Dark mode | Toggle `data-bs-theme` Bootstrap, mengikuti preferensi perangkat saat pertama dibuka |
| GitHub Pages | Berkas statis pada branch `main`, folder root |

## Menjalankan dan mengedit

Buka `index.html` langsung atau jalankan server statis dari folder ini, misalnya `python -m http.server 8000`.
Tidak ada proses instalasi atau build yang diperlukan. Ubah HTML untuk isi halaman, `assets/style.css` untuk tampilan, dan `assets/app.js` untuk interaksi. Data materi lengkap berada di `assets/materials.js`.

Tema dan checklist tersimpan dalam localStorage browser. Checklist dikelompokkan menurut tanggal lokal perangkat; tidak dikirim ke server. Jika penyimpanan diblokir, halaman menampilkan penjelasan dan tetap dapat digunakan selama sesi berlangsung.

## Aset

Bootstrap 5.3.3 memakai lisensi MIT, tersimpan di `assets/`. Foto ruang kerja dari Unsplash; tautan sumber tersedia di footer. Font DM Sans dan Manrope dimuat melalui Google Fonts dengan fallback sans-serif. Situs tetap berfungsi jika font eksternal tidak tersedia.

## Publikasi

GitHub Pages menggunakan branch `main` dan folder `/ (root)`. Perubahan yang dikirim ke branch tersebut akan memicu publikasi ulang. Status dapat dilihat pada tab **Actions** repositori.
