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

function myFunction() {
  // Verifica o estado atual do tema
  var isDarkTheme = $("#body-pd").hasClass("bg-dark");

  if (isDarkTheme) {
    // Se for tema escuro, mude para tema claro
    $("#body-pd").removeClass("bg-dark").addClass("bg-light");
    $(".c-card").removeClass("text-light").addClass("text-dark");
    $(".btn-p").removeClass("btn-light").addClass("btn-dark");
    $(".svg-p").removeClass("text-dark").addClass("text-light");
    $("#icon-theme").removeClass("bxs-moon").addClass("bxs-sun");
    $('.slider').removeClass('theme-light').addClass('theme-dark');
  } else {
    // Se for tema claro, mude para tema escuro
    $("#body-pd").removeClass("bg-light").addClass("bg-dark");
    $(".c-card").removeClass("text-dark").addClass("text-light");
    $(".btn-p").removeClass("btn-dark").addClass("btn-light");
    $(".svg-p").removeClass("text-light").addClass("text-dark");
    $("#icon-theme").removeClass("bxs-sun").addClass("bxs-moon");
    $('.slider').removeClass('theme-dark').addClass('theme-light');
  }
}

$(document).ready(function(){
  $('.slider').slick({
      dots: true, // Mostra os indicadores de slide (pontos)
  });
});
