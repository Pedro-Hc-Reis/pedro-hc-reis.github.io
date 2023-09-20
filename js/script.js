var isDarkTheme = true;

function toggleTheme() {
  if (isDarkTheme) {
    $("#body-pd").removeClass("bg-dark").addClass("bg-light");
    $(".c-card").removeClass("text-light").addClass("text-dark");
    $(".btn-p").removeClass("btn-light").addClass("btn-dark");
    $(".svg-p").removeClass("text-dark").addClass("text-light");
    $("#icon-theme").removeClass("bxs-moon").addClass("bxs-sun");
    $('.slider').removeClass('theme-dark').addClass('theme-light');
    isDarkTheme = false;
  } else {
    $("#body-pd").removeClass("bg-light").addClass("bg-dark");
    $(".c-card").removeClass("text-dark").addClass("text-light");
    $(".btn-p").removeClass("btn-dark").addClass("btn-light");
    $(".svg-p").removeClass("text-light").addClass("text-dark");
    $("#icon-theme").removeClass("bxs-sun").addClass("bxs-moon");
    $('.slider').removeClass('theme-light').addClass('theme-dark');
    isDarkTheme = true;
  }

  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

function myFunction(){
  isDarkTheme = $("#body-pd").hasClass("bg-dark");
  toggleTheme();
}

function initializeTheme() {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    isDarkTheme = true;
  } else {
    isDarkTheme = false;
  }
  toggleTheme();
}

$(document).ready(function () {
  initializeTheme();

  var $slider = $('.slider').slick({
      dots: true,
      arrows: false
  });

  var reversed = false;

  $('.js-filter').on('click', function () {
      $slider.slick('slickUnfilter');
      if (reversed === false) {
          $slider.slick('slickAdd', $slider.slick('getSlick').$slides.get().reverse());
          reversed = true;
          $(this).text('Reverter Filtro');
      } else {
          $slider.slick('slickAdd', $slider.slick('getSlick').$slides.get().reverse());
          reversed = false;
          $(this).text('Aplicar Filtro');
      }
  });
});