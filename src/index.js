let openMenu = document.getElementById("open-menu");
let navMenu = document.getElementById("nav-menu");
let closeMenu = document.getElementById("close-menu");
let body = document.body;

openMenu.addEventListener('click', function() {

    document.onclick = function(e) {
        if(e.target.id ==! 'navMenu' && e.target.id ==! 'openMenu') {
            openMenu.classList.remove("nav_menu_active");
            navMenu.classList.remove("nav_menu_active");
        }
    }

    closeMenu.onclick = function() {
        openMenu.classList.remove("nav_menu_active");
        navMenu.classList.remove("nav_menu_active");
    }

    openMenu.classList.toggle("nav_menu_active");
    navMenu.classList.toggle("nav_menu_active");
    body.classList.toggle("body-noscroll");
})