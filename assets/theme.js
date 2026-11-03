// Terapkan tema sebelum halaman dirender untuk menghindari kilatan warna.
try{const saved=localStorage.getItem('tertib-theme');document.documentElement.dataset.bsTheme=saved||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch{document.documentElement.dataset.bsTheme='light'}
