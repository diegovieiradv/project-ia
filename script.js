function criarAnimacao() {

  let textInput = document.querySelector(".input-animation").value;
  let buttonMagic = document.querySelector(".button-magic");
  buttonMagic.disabled = true;
  buttonMagic.innerHTML = "Criando...";

  let codigoCSS = document.querySelector(".codigo-css");
  codigoCSS.innerHTML = "// Aqui aparecerá o código da animação";
  
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = "A mágica aparecerá aqui!";
  setTimeout(() => {
    buttonMagic.disabled = false;
  }, 3000);
}
