// Verifica se o preloader já foi exibido antes
const isFirstVisit = sessionStorage.getItem('isFirstVisit') === null;

// Se for a primeira visita, mostra o preloader
if (isFirstVisit) {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'block';

  // Define um valor no localStorage para indicar que a página foi visitada
  sessionStorage.setItem('isFirstVisit', 'false');

  // Remove o preloader após o carregamento completo da página com um pequeno atraso
  window.addEventListener('load', function () {
    setTimeout(function () {
      const preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
    }, 1000); // Aguarda 1 segundo antes de remover o preloader
  });
}
else {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
}

// Seu código JavaScript para ativar a animação parallax
window.addEventListener("scroll", function () {
  const computerGraphic = document.getElementById("computer_graphic");
  const scrollY = window.scrollY;

  if (scrollY > 100) { // Ajuste o valor conforme necessário
    computerGraphic.classList.add("active");
  } else {
    computerGraphic.classList.remove("active");
  }
});


// Seu código JavaScript para ativar a animação de parallax em toda a página
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const body = document.body;

  if (scrollY > 100) { // Ajuste o valor conforme necessário
    body.classList.add("parallax-active");
  } else {
    body.classList.remove("parallax-active");
  }
});

/* const toggleTemaButton = document.getElementById("theme-toggle");
toggleTemaButton.addEventListener("click", function() {
  const rootElement = document.documentElement;
  if (rootElement.classList.contains("tema-claro")) {
    rootElement.classList.remove("tema-claro");
    rootElement.classList.add("tema-escuro");
  } else {
    rootElement.classList.remove("tema-escuro");
    rootElement.classList.add("tema-claro");
  }
}); */

function myFunction() {
  $("#body-pd").toggleClass("bg-dark");
  $("#c-card").toggleClass("bg-dark");
  $("#c-card").toggleClass("text-light");
  $("#btn-p").toggleClass("btn-light");
  $("#svg-p").toggleClass("text-dark");
}

function myFunction() {
  // Verifica o estado atual do tema
  var isDarkTheme = $("#body-pd").hasClass("bg-dark");

  if (isDarkTheme) {
      // Se for tema escuro, mude para tema claro
      $("#body-pd").removeClass("bg-dark").addClass("bg-light");
      $(".c-card").removeClass("text-light").addClass("text-dark");
      $(".btn-p").removeClass("btn-light").addClass("btn-dark");
      $(".svg-p").removeClass("text-dark").addClass("text-light");
  } else {
      // Se for tema claro, mude para tema escuro
      $("#body-pd").removeClass("bg-light").addClass("bg-dark");  
      $(".c-card").removeClass("text-dark").addClass("text-light");
      $(".btn-p").removeClass("btn-dark").addClass("btn-light");
      $(".svg-p").removeClass("text-light").addClass("text-dark");
  }
}
