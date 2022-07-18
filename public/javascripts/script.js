const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".header");
const main = document.querySelector(".main-content");
const header = document.querySelector(".header");
const animado = document.querySelector(".animated");
const animatedRight= document.querySelector(".animatedRight");
const animatedUp = document.querySelector(".animatedUp");
/* const parallax = document.querySelector(".parallax"); */
/* const titCajaCertDolco = document.querySelector(".titCajaCertDolco"); 
const shcontent = document.querySelector(".sh__btns") */;

navToggle.addEventListener("click", () => {
  /* navMenu.classList.toggle("header_visible");  */
  main.classList.toggle("main-content_visible");
  if (main.classList.contains("main-content_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

function esDispositivoiOS(){
  var userAgent = window.navigator.userAgent;
  return (/iP(hone|od|ad)/.test(userAgent));
}
if (esDispositivoiOS()){
  let bloque = document.querySelector(".bloque");
  bloque.style.backgroundAttachment = "scroll";
}
// scroll 

/* window.onscroll = function(e) {
  let scrollTop = shcontent.offsetTop;
  console.log(window.pageYOffset );
  console.log(scrollTop);
  if(window.pageYOffset>300){
    header.classList.add("animatedHeader","fadeInDownHeader");
  }else if(window.pageYOffset<400 ){
    header.classList.remove("animatedHeader","fadeInDownHeader");
  }
  if(window.pageYOffset+390 > scrollTop){
      animado.classList.add("fadeInLeft");
      animado.style.opacity=1;
      animatedRight.classList.add("fadeInRight");
      animatedRight.style.opacity=1;
      animatedUp.classList.add("fadeInUp");
      animatedUp.style.opacity=1;
  }
} */


