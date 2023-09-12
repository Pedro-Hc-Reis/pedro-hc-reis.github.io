document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');
  const menuIcon = document.querySelector('.menu-icon');
  
  // Adicionar um evento de clique ao ícone do menu
  menuIcon.addEventListener('click', function () {
    menu.classList.toggle('open');
  });
});
