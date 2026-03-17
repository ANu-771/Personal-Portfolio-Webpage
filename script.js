const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-links');
const navItemsMobile = document.querySelectorAll('.nav-links li a');

mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

navItemsMobile.forEach(item => {
    item.addEventListener('click', function () {
        mobileMenu.classList.remove('is-active');
        navMenu.classList.remove('active');
    });
});