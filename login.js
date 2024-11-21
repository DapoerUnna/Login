import {addCSSInHead} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/element.js";
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/src/sweetalert2.js';

await addCSSInHead("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.css");

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman biasa

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Mendapatkan data dari localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Memeriksa apakah username dan password cocok
    if (username === storedUsername && password === storedPassword) {
        // Menggunakan SweetAlert2 untuk menampilkan pesan sukses
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            text: 'Welcome back!'
        }).then(() => {
            // Redirect ke halaman beranda atau dashboard
            window.location.href = 'http://dapoerunna.id.biz.id'; // Ganti dengan halaman yang diinginkan
        });
    } else {
        // Menggunakan SweetAlert2 untuk menampilkan pesan kesalahan
        Swal.fire({
            icon: 'error',
            title: 'Invalid credentials',
            text: 'Invalid username or password. Please try again.'
        });
    }
});