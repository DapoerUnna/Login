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
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    window.location.href = 'index.html';
});