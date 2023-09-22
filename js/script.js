function hidePreloader() {
  sessionStorage.setItem('isFirstVisit', 'false');
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  const isFirstVisit = sessionStorage.getItem('isFirstVisit') === null;

  if (isFirstVisit) {

    window.addEventListener('load', function () {
      setTimeout(function () {
        hidePreloader();
      }, 1000);
    });
  } else {
    hidePreloader();
  }
});

var isDarkTheme = true;

function toggleTheme() {
  if (isDarkTheme) {
    $("#body-pd").removeClass("bg-dark").addClass("bg-light");
    $(".c-card").removeClass("text-light").addClass("text-dark");
    $(".btn-p").removeClass("btn-light").addClass("btn-dark");
    $(".svg-p").removeClass("text-dark").addClass("text-light");
    $("#icon-theme").removeClass("bxs-moon").addClass("bxs-sun");
    $('.slider').removeClass('theme-dark').addClass('theme-light');
    $('.responsive').removeClass('theme-dark').addClass('theme-light');
    isDarkTheme = false;
  } else {
    $("#body-pd").removeClass("bg-light").addClass("bg-dark");
    $(".c-card").removeClass("text-dark").addClass("text-light");
    $(".btn-p").removeClass("btn-dark").addClass("btn-light");
    $(".svg-p").removeClass("text-light").addClass("text-dark");
    $("#icon-theme").removeClass("bxs-sun").addClass("bxs-moon");
    $('.slider').removeClass('theme-light').addClass('theme-dark');
    $('.responsive').removeClass('theme-light').addClass('theme-dark');
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

  $('.responsive').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var botaoCopiar = document.getElementById("botaoCopiar");
  var texto = "322.322.498931484e54"; // Substitua pelo seu código real
  var iconOriginal = botaoCopiar.innerHTML;

  botaoCopiar.addEventListener("click", function () {
      var input = document.createElement("textarea");
      input.value = texto;
      document.body.appendChild(input);

      input.select();
      input.setSelectionRange(0, 99999);

      document.execCommand("copy");

      document.body.removeChild(input);

      botaoCopiar.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-clipboard-check svg-p text-dark" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path
                  d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path
                  d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
          </svg>
      `;

      setTimeout(function () {
          // Reverter o ícone para o ícone original após 1 segundo
          botaoCopiar.innerHTML = iconOriginal;
      }, 5000);
  });
});

(function ($) {
  var startSection = $('#inicio'); // Seção de início
  var pxShow = startSection.offset().top; // Altura da seção de início
  var scrollSpeed = 300; // Velocidade de rolagem para o topo

  // Função para mostrar ou ocultar o botão "Voltar ao Topo"
  jQuery(window).scroll(function () {
    var scrollTop = jQuery(window).scrollTop();

    // Verificar se o usuário está abaixo da seção de início
    if (scrollTop >= pxShow) {
      jQuery("#go-top").css('display', 'block');
    } else {
      jQuery("#go-top").css('display', 'none');
    }
  });
})(jQuery);