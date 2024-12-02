// Função para animar as seções ao rolar a página
function animarSecoes() {
  const secoes = document.querySelectorAll("section");
  const alturaJanela = window.innerHeight;

  secoes.forEach((secao) => {
    const posicao = secao.getBoundingClientRect().top;
    if (posicao < alturaJanela * 0.8) {
      secao.classList.add("show");
    }
  });
}

// Adiciona o evento de rolagem
window.addEventListener("scroll", animarSecoes);

// Função para adicionar estilo à barra de navegação quando rolar a página
function atualizarNavbar() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scroll-active");
  } else {
    navbar.classList.remove("scroll-active");
  }
}

// Adiciona o evento de rolagem na barra de navegação
window.addEventListener("scroll", atualizarNavbar);

// Contadores animados (Experiência)
function animarContadores() {
  const contadores = document.querySelectorAll(".contador-item h2");
  const velocidade = 200; // Velocidade da animação

  contadores.forEach((contador) => {
    const atualizarContador = () => {
      const valorAlvo = +contador.getAttribute("data-target");
      const valorAtual = +contador.innerText;
      const incremento = valorAlvo / velocidade;

      if (valorAtual < valorAlvo) {
        contador.innerText = Math.ceil(valorAtual + incremento);
        setTimeout(atualizarContador, 20);
      } else {
        contador.innerText = valorAlvo;
      }
    };

    atualizarContador();
  });
}

// Executa os contadores quando a seção está visível
function ativarContadores() {
  const secaoExperiencia = document.querySelector("#Experiencia");
  const alturaJanela = window.innerHeight;
  const posicao = secaoExperiencia.getBoundingClientRect().top;

  if (posicao < alturaJanela * 0.8) {
    animarContadores();
    window.removeEventListener("scroll", ativarContadores);
  }
}

// Adiciona o evento de rolagem para ativar os contadores
window.addEventListener("scroll", ativarContadores);

// Adicionar "ativo" ao link da seção atual na barra de navegação
const navLinks = document.querySelectorAll(".nav-menu a");
function destacarSecaoAtual() {
  const secoes = document.querySelectorAll("main section");

  secoes.forEach((secao, index) => {
    const posicao = secao.getBoundingClientRect().top;
    if (posicao < window.innerHeight / 2 && posicao >= -secao.offsetHeight / 2) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
}

// Adiciona o evento de rolagem para destacar a seção atual
window.addEventListener("scroll", destacarSecaoAtual);

// Função inicial para garantir que tudo funcione ao carregar
function inicializar() {
  animarSecoes(); // Executa a animação inicial das seções
  atualizarNavbar(); // Atualiza a navbar ao carregar a página
  destacarSecaoAtual(); // Atualiza a navegação ativa
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", inicializar);
