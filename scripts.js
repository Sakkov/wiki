
function toggleMobileMenu() {
    var menu = document.querySelector('nav ul');
    var menuBtn = document.querySelector('.mobile-menu-btn');
    menu.classList.toggle('show-mobile');
    menuBtn.classList.toggle('change');
}