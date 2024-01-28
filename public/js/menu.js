const menu = document.querySelector(".barra");
const abrir = document.querySelector("#menu");
const cerrar = document.querySelector("#cerrar-header");

abrir.addEventListener("click", () => {
    menu.style.display = "block";
})

cerrar.addEventListener("click", () => {
    menu.style.display = "none";
})