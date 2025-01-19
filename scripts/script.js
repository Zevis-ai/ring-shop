document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

if (burger && menu) {
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    }
});
