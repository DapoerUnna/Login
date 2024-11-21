import {addCSSInHead} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/element.js";
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/src/sweetalert2.js';

await addCSSInHead("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.css");

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman biasa

    // Mengambil nilai dari input
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Membuat objek data pengguna
    const userData = {
        name: name,
        address: address,
        phone: phone,
        email: email,
        username: username,
        password: password
    };

    // Menyimpan data pengguna di localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    const existingUsername = localStorage.getItem('username');

            if (existingUsername && existingUsername === username) {
                // Menggunakan SweetAlert2 untuk menampilkan pesan kesalahan
                Swal.fire({
                    icon: 'error',
                    title: 'Username already exists',
                    text: 'Please choose a different username.'
                });
            } else {
                // Menyimpan username dan password di localStorage
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);

                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful!',
                    text: 'You can now log in.'
                }).then(() => {
                    // Redirect ke halaman login setelah registrasi
                    window.location.href = 'index.html';
                });
            }
        });