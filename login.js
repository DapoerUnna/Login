document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman biasa

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Mendapatkan data dari localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Memeriksa apakah username dan password cocok
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        // Redirect ke halaman beranda atau dashboard
        window.location.href = 'http://dapoerunna.id.biz.id'; // Ganti dengan halaman yang diinginkan
    } else {
        alert('Invalid username or password. Please try again.');
    }
});