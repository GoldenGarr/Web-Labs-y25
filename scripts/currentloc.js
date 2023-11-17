document.addEventListener('DOMContentLoaded', function () {
    let menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function (item) {
        if (window.location.href.includes(item.getAttribute('href'))) {
            item.classList.add('active');
        }
    });
});
