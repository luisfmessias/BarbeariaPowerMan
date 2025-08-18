const menuBotao = document.getElementById("mobile-menu-botao");
const menuDesktop = document.querySelector(".menu-desktop");

menuBotao.addEventListener("click", () => {
    menuDesktop.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".menu-desktop a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuDesktop.classList.remove("active");
    });
});

// fade
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.1 }); 

reveals.forEach(reveal => {
  observer.observe(reveal);
});



