function mostrarSeccion(id){

  const paginas = document.querySelectorAll(".pagina");

  paginas.forEach(pagina => {

    pagina.classList.remove("activa");

  });

  document
    .getElementById(id)
    .classList
    .add("activa");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}