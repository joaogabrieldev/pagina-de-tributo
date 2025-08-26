const linksInteros = document.querySelectorAll(".link-interno");

document.addEventListener("DOMContentLoaded", () => {
  linksInteros.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetID = event.currentTarget.getAttribute("href");

      const targetElement = document.querySelector(targetID);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

const menu = document.querySelector(".menu-options");
const buttonMenu = document.querySelector(".btn-menu");
buttonMenu.addEventListener("click", () => {
  buttonMenu.classList.toggle("ativo");
  menu.classList.toggle("menuAtivo");
});
