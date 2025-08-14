// Botão do hamburguer e menu
const menuBotao = document.getElementById("mobile-menu-botao");
const menuDesktop = document.querySelector(".menu-desktop");

// Alterna menu ao clicar no hamburguer
menuBotao.addEventListener("click", () => {
    menuDesktop.classList.toggle("active");
});

// Fecha o menu ao clicar em qualquer link dentro dele
const menuLinks = document.querySelectorAll(".menu-desktop a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuDesktop.classList.remove("active");
    });
});
