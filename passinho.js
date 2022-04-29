var entradaTexto = document.getElementById("texto");
var selecionandoCifra = document.getElementById("selecao");
var adicionandoIncremento = document.getElementById("incremento");

function tipoDeCifra() {
  selecionandoCifra.addEventListener("click", function () {
    if (selecionandoCifra.value == "cifraDeCesar") {
      adicionandoIncremento.style.display = "flex";
      adicionandoIncremento.innerHTML = `<label for="incremento">Qual o incremento?</label>
      <input type="number" name="indique o incremento" id="incrementos" required>`;
    } else if (selecionandoCifra.value == "base64") {
      adicionandoIncremento.style.display = "none";
    }
  });
}
tipoDeCifra();

// SELECIONANDO A AÇÃO
var varEscolhendoSaida = document.getElementById("escolhendoSaida");
var escolhendoCodificar = document.getElementById("codificar");
var escolhendoDecodificar = document.getElementById("decodificar");
var divBotaoEnvio = document.getElementById("envio");
var botaoCodificar = document.getElementById("btn-codificar");
var botaoDecodificar = document.getElementById("btn-decodificar");

function escolhendoSaida() {
  escolhendoDecodificar.addEventListener("click", function () {
    if (true) {
      divBotaoEnvio.innerHTML = `<input type="submit" value="Decodificar Mensagem" id="btn-decodificar">`;
    }
  });
  escolhendoCodificar.addEventListener('click', function(){
    if (true){
      botaoCodificar.style.display = 'flex';
      divBotaoEnvio.innerHTML = `<input type="submit" value="Codificar Mensagem" id="btn-codificar">`;
    }
  });
}
escolhendoSaida();
