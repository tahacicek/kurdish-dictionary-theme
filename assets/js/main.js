document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.btn-svg');

    // Daha önce seçilmiş tema varsa onu yükleyelim
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');

        // Temayı localStorage'a kaydedelim
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            // add class
        } else {
            localStorage.removeItem('theme');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const leftBarButton = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.left-bar');

    leftBarButton.addEventListener('click', function () {
        if (sidebar.classList.contains('show-sidebar')) {
            sidebar.classList.remove('show-sidebar');
        } else {
            sidebar.classList.add('show-sidebar');
        }
    });

    // dışarı tıklandığında sidebar kapanacak
    document.addEventListener('click', function (e) {
        if (!sidebar.contains(e.target) && e.target !== leftBarButton) {
            sidebar.classList.remove('show-sidebar');
        }
    });

});

