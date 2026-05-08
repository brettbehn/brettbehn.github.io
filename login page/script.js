document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (password === '12345') {
        alert('Access Granted');
    } else {
        alert('Access Denied');
    }
});