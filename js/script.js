function preloader() {
  const preloader = document.getElementById('preloader');

  if (isFirstVisit) {
    preloader.style.display = 'block';
    sessionStorage.setItem('isFirstVisit', 'false');
    
    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.style.display = 'none';
      }, 1000); // Aguarda 1 segundo antes de remover o preloader
    });
  } else {
    preloader.style.display = 'none';
  }
}

function myFunction() {
  var isDarkTheme = $("#body-pd").hasClass("bg-dark");

  if (isDarkTheme) {
    $("#body-pd").removeClass("bg-dark").addClass("bg-light");
    $(".c-card").removeClass("text-light").addClass("text-dark");
    $(".btn-p").removeClass("btn-light").addClass("btn-dark");
    $(".svg-p").removeClass("text-dark").addClass("text-light");
    $("#icon-theme").removeClass("bxs-moon").addClass("bxs-sun");
    $('.slider').removeClass('theme-light').addClass('theme-dark');
  } else {
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
      dots: true
  });
});
