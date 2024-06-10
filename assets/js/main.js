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
    const body = document.querySelector('body');

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

    // toggle-btn-right
    const rightBarButton = document.querySelector('.toggle-btn-right');
    const rightSidebar = document.querySelector('.right-bar');


    rightBarButton.addEventListener('click', function () {
        if (rightSidebar.classList.contains('show-sidebar')) {
            rightSidebar.classList.remove('show-sidebar');

        } else {
            rightSidebar.classList.add('show-sidebar');

        }
    });

    // dışarı tıklandığında sidebar kapanacak
    document.addEventListener('click', function (e) {
        if (!rightSidebar.contains(e.target) && e.target !== rightBarButton) {
            rightSidebar.classList.remove('show-sidebar');

        }
    });

    // eğer barlar açıksa body'ye hidden classı ekle
    document.addEventListener('click', function (e) {
        if (sidebar.classList.contains('show-sidebar') || rightSidebar.classList.contains('show-sidebar')) {
            body.classList.add('hidden');
        } else {
            body.classList.remove('hidden');
        }
    });



    // user-reply-button add class user-reply-form.active
    const userReplyButton = document.querySelector('.user-reply-button');
    const userReplyForm = document.querySelector('.user-reply-form');

    userReplyButton.addEventListener('click', function () {
        userReplyForm.classList.toggle('active');
    });

    // user-reply-button add class user-reply-form.active


});

// document.addEventListener(
//     "click",
//     function(event) {
//         var target = event.target;
//         var replyForm;
//         if (target.matches("[data-toggle='reply-form']")) {
//             replyForm = document.getElementById(target.getAttribute("data-target"));
//             replyForm.classList.toggle("d-none");
//         }
//     },
//     false
// );
