//menu mobile
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

//fade
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.2 }); 

reveals.forEach(reveal => {
  observer.observe(reveal);
});

//carrosel

const servicos = [
  { nome: "Barba", imagem: "../img/carrosel/corte-barba.jpg" },
  { nome: "Cabelo", imagem: "../img/carrosel/corte-cabelo.jpg" },
  { nome: "Pezinho", imagem: "../img/carrosel/pezinho.jpg" }
];

let indiceAtual = 0;

const cortes = document.querySelector(".cortes");
const nomeServico = document.querySelector(".nome-servico h1");
const setaEsquerda = document.querySelector(".flecha-esquerda");
const setaDireita = document.querySelector(".flecha-direita");

function atualizarCarrossel() {
  cortes.classList.remove("fade-in");
  void cortes.offsetWidth;
  cortes.style.backgroundImage = `url('${servicos[indiceAtual].imagem}')`;
  nomeServico.textContent = servicos[indiceAtual].nome.toUpperCase();
  cortes.classList.add("fade-in");
}

function proximoServico() {
  indiceAtual = (indiceAtual + 1) % servicos.length;
  atualizarCarrossel();
}

function anteriorServico() {
  indiceAtual = (indiceAtual - 1 + servicos.length) % servicos.length;
  atualizarCarrossel();
}

setaDireita.addEventListener("click", proximoServico);
setaEsquerda.addEventListener("click", anteriorServico);

// setInterval(proximoServico, 6000); Caso for usar

atualizarCarrossel();

// galeria
const galeriaGrid = document.querySelector(".galeria-grid");
let imagens = Array.from(galeriaGrid.querySelectorAll("img"));

function rotacionarGaleria() {
  const ultima = imagens.pop();
  imagens.unshift(ultima);

  galeriaGrid.innerHTML = "";
  imagens.forEach(img => galeriaGrid.appendChild(img));
}

setInterval(rotacionarGaleria, 3000);
