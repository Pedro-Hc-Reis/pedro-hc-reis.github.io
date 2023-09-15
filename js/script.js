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
window.addEventListener("scroll", function() {
  const computerGraphic = document.getElementById("computer_graphic");
  const scrollY = window.scrollY;

  if (scrollY > 100) { // Ajuste o valor conforme necessário
    computerGraphic.classList.add("active");
  } else {
    computerGraphic.classList.remove("active");
  }
});


// Seu código JavaScript para ativar a animação de parallax em toda a página
window.addEventListener("scroll", function() {
  const scrollY = window.scrollY;
  const body = document.body;

  if (scrollY > 100) { // Ajuste o valor conforme necessário
    body.classList.add("parallax-active");
  } else {
    body.classList.remove("parallax-active");
  }
});


