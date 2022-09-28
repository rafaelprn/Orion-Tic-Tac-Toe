window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  // Redimensionando
  function redimensionar() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  }

  window.addEventListener(
    "resize",
    redimensionar
  ); /*Redimensiona o canva para que acompanhe o tamanho da tela*/
});
