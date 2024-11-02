$(document).ready(function() {
    // Pindah ke Halaman Login 2 setelah menekan tombol login pada halaman 1
    $('#loginButton1').click(function() {
        $('#login1').hide();
        $('#login2').show();
    });

    // Tindakan login pada halaman kedua
    $('#loginButton2').click(function() {
        const username2 = $('#username2').val();
        const password2 = $('#password2').val();
        
        if (username2 && password2) {
            alert(`Welcome, ${username2}!`);
        } else {
            alert('Please enter your username and password.');
        }
    });

    // Kembali ke Halaman Login 1 dari Login 2
    $('#backButton').click(function() {
        $('#login2').hide();
        $('#login1').show();
    });
});
