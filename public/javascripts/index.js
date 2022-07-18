const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".header");
const main = document.querySelector(".main-content");


navToggle.addEventListener("click", () => {
  /* navMenu.classList.toggle("header_visible");  */
  main.classList.toggle("main-content_visible");
  if (main.classList.contains("main-content_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


const animado = document.querySelector(".animated");
const objetMain = document.querySelector(".objetMain");
window.onscroll = function(e) {
  let scrollTop = animado.offsetTop;
  console.log(window.pageYOffset);
  if(window.pageYOffset+300 > scrollTop){
      animado.classList.add("fadeInLeft");
      /* objetMain.classList.add("fadeInUp"); */
      objetMain.classList.add("animatedUno")
      animado.style.opacity=1;
      
    }
}