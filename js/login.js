document.getElementById('login-submit').addEventListener('click', function () {
    if (document.getElementById('user-email').value == 'lutfor@gmail.com' && document.getElementById('user-password').value == 'Lutfor') {
        window.location.href = 'banking.html';
    }
})