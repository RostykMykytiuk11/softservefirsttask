const hamburger = document.querySelector(".hamburger");
const Navmenu = document.querySelector(".menu_list");
const navLink = document.querySelectorAll(".menu_item");


function mobileMenu() {
    hamburger.classList.toggle("active");
    Navmenu.classList.toggle("active");
}
hamburger.addEventListener("click", mobileMenu);
function closeMenu() {
    hamburger.classList.remove("active");
    Navmenu.classList.remove("active");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));

