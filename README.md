# UTS-PAM-2023
Nama: Rauli Sipakkar
Nim: 120140001
Matkul: PAM (RB)


Link Download Aplikasi : https://drive.google.com/file/d/1Qg1cPT7fk5ufeO7NNqTEmoRcuIvl6gAl/view?usp=sharing
Limk Video Demo : https://youtu.be/R-LOTE-vI1g

Instalasi
Dengan File APK
dapat diinstal dengan mendownload file apk yang tertera pada folder file_apk,
atau kunjungi link berikut : https://drive.google.com/file/d/1Qg1cPT7fk5ufeO7NNqTEmoRcuIvl6gAl/view?usp=sharing


Dengan React Native
• Instal terlebih dahulu node.js versi 12 
• Download semua file pada folder project
• Gunakan terminal lalu lakukan perintah berikut
-> cd project
-> Gunakan npm start pada command prompt

Deskripsi Aplikasi
• Aplikasi ini digunakan untuk melakukan pemesanan tempat (lokasi) untuk olahraga di Bandar Lampung
• Aplikasi terdiri dari 4 menu yaitu Beranda, Daftar Pemesanan, Daftar Pembayaran dan Lainnya
• Beranda merupakan menu awal aplikasi, yang berisikan lokasi atau tempat olahraga
• Daftar Pemesanan merupakan menu yang menampilkan history dari pemesanan olahraga
• Daftar Pembayaran merupakan menu yang digunakan untuk membayar tempat olahraga yang sudah di pesan 
• Lainnya merupakan menu yang terdiri dari profile (untuk melihat profile pengguna), Cek Pemesanan (untuk mengecek pemesanan), jadwal dan verifikasi atau berhasilnya transaksi pemesanan

Cara Kerja Aplikasi
• Lakukan pengisian data untuk membooking tempat, kemudian ikuti langkah selanjutnya dengan mengisi data-data hingga proses pemesanan tempat olahraga
• Pantau pesanan dapat dilihat di menu Daftar Pesanan
• Jika ingin melihat jadwal atau dihari apa yang sedikit pengunjung maka bisa dilihat di menu jadwal
• Pemesanan yang telah berhasil dapat dilihat di riwayat lokasi 
• Dan yang terakhir adalah menu pembayaran tersedia lewat ovo, dana, gopay dan link aja

Pembuatan Aplikasi
Aplikasi terdiri dari 4 halaman dengan nama halaman Beranda, daftarPemesanan lokasi, jadwal, dan pembayaran
Lakukan Pembuatan 4 File Javascript, untuk membuat masing-masing halaman. Seperti pada gambar berikut :

Lakukan Pembuatan masing-masing halamn agar sesui dengan spesifikasi yang telah ditetapkan. Adapun kodenya dapat dillihat pada link github yang tertera di awal.

Selanjutnya buatlah Navigasi antar halaman, dalam ini saya menggunakan jenis navigasi stack navigator. Ke 4 halamn di masukkan ke dalam stack navigator.

Karena menggunakan stack navigator maka tab menu di bagian bawah kita buat secara manual. Ini dapat dilihat pada file menu.js di github yang tertera di awal

Proses pembacaan file json, dalam hal ini kami membuat sebuah file json bernama basisData.json. Pembacaan cukup lakukan import file json dengan cara :  Import * as datas from “../basisData.json” Pembacaan ini akan digunakan untuk proses pengisian data di beranda, penampil daftar pembatan, daftar pemesanan dan history.

Passing parameter, dilakukan dengan variabel yang diberi nama route. Dari route akan mengambil route.params kemudian nama label parameter kita.

Penggunaan Modal, digunakan untuk menampilkan sebuah halaman tanpa perlu bernavigasi. Ini di gunakan untuk menampilkan menu lainnya. Ketika menu tersebut di klik akan menampilkan sebuah halaman, namun kita tidak berpindah navigasi.

Penggunaan DateTimePicker, untuk menampilkan bentuk kalender dan jam sesuai contoh pada figma. Library ini digunakan pada halaman beranda.

Penggunaan axios, digunakan untuk melakukan post data json dan update data json. Axios di instal agar dapat mengakses localhost kita untuk memproses file json.

Sumber
https://reactnative.dev/
https://reactnavigation.org/
https://reactnative.dev/docs/modal
https://www.npmjs.com/package/@react-native-community/datetimepicker
https://www.npmjs.com/package/axios
PPT Perkuliahan Pemrograman Aplikasi Mobile 2023
