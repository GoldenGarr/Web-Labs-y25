document.addEventListener('DOMContentLoaded', function () {
    let menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            menuItems.forEach(function (item) {
                item.classList.remove('active');
            });

            event.target.classList.add('active');
        });

        if (window.location.href.includes(item.getAttribute('href'))) {
            item.classList.add('active');
        }
    });
});
