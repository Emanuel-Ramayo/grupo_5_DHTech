
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu")

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('showMenu')
})