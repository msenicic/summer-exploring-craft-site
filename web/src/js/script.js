var bar = document.querySelector(".fa-bars");
var menu = document.querySelector(".menu");
bar.addEventListener("click", active);
function active() {
    menu.classList.toggle("active");
}
window.addEventListener('resize', activeRemove);
function activeRemove() {
    if (window.innerWidth > 640)
        menu.classList.remove("active");
}