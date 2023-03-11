const nav_bar = document.querySelector('.fa-bars');
const nav_list = document.querySelector('.nav-list');

nav_bar.addEventListener('click', () => {
    nav_list.classList.toggle('active')
})