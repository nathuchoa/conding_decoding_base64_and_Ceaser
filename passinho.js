var entradaTexto = document.getElementById("texto");
var selecionandoCifra = document.getElementById("selecao");
var adicionandoIncremento = document.getElementById("incremento");
var varEscolhendoSaida = document.querySelector("escolheSaida");
var btnEnvio = document.getElementById("envio");

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

function escolhendoSaida() {
  varEscolhendoSaida.addEventListener("click", function () {
    if (varEscolhendoSaida.value == "Codificar") {
      btnEnvio.innerHTML = `<input type="submit" value="Codificar Mensagem" id="btn-codificar">`;
    } else if (varEscolhendoSaida.value == "Decodificar") {
      btnEnvio.innerHTML = `<input type="submit" value="Decodificar Mensagem" id="btn-decodificar">`;
    }
  });
}
escolhendoSaida();
