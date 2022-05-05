var entradaTexto = document.getElementById("texto");
var selecionandoCifra = document.getElementById("selecao");
var adicionandoIncremento = document.getElementById("incremento");
var escolhendoCodificar = document.getElementById("codificar");
var escolhendoDecodificar = document.getElementById("decodificar");
var divBotaoEnvio = document.getElementById("envio");
var botaoCodificar = document.getElementById("btn-codificar");
var botaoDecodificar = document.getElementById("btn-decodificar");

selecionandoCifra.addEventListener("click", function () {
  if (selecionandoCifra.value == "cifraDeCesar") {
    adicionandoIncremento.style.display = "flex";
    adicionandoIncremento.innerHTML = `<label for="incremento">Qual o incremento?</label>
      <input type="number" name="indique o incremento" id="incrementos" min="-25" max="25" required>`;
  } else if (selecionandoCifra.value == "base64") {
    adicionandoIncremento.style.display = "none";
  }
});

// SELECIONANDO A AÇÃO

escolhendoDecodificar.addEventListener("click", function () {
  if (true) {
    divBotaoEnvio.innerHTML = `<input type="submit" value="Decodificar Mensagem" id="btn-decodificar">`;
  }
});

escolhendoCodificar.addEventListener("click", function () {
  if (true) {
    divBotaoEnvio.innerHTML = `<input type="submit" value="Codificar Mensagem" id="btn-codificar">`;
  }
});

/* CAMPO DA RESPOSTA */

/* CIFRA DE CESAR */

/*  ((codigoASC - 65 +desloc)% 26) + 65
    function cifraDeCesar(string){return ((codigoASC - 65 +desloc)% 26) + 65 } */

