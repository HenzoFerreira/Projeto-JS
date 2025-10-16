// Seleciona o botão e o menu
const toggle = document.querySelector(".drop-toggle");
const menu = document.querySelector(".dropdown-menu");

// Ao clicar em "Produtos", alterna o menu
toggle.addEventListener("click", (e) => {
  e.preventDefault(); // Impede o link de atualizar a página
  menu.classList.toggle("active");
});

// Fecha o menu se clicar fora dele
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    menu.classList.remove("active");
  }
});