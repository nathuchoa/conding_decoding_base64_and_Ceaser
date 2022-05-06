var entradaTexto = document.getElementById("texto");
var selecao = document.getElementById("selecao");
var passos = document.getElementById("incremento");
var escolhendoCodificar = document.getElementById("codificar");
var escolhendoDecodificar = document.getElementById("decodificar");
var divBotaoEnvio = document.getElementById("envio");

selecao.addEventListener("click", function () {
  if (selecao.value == "cifraDeCesar") {
    passos.style.display = "flex";
    passos.innerHTML = `<label for="incremento">Qual o incremento?</label>
      <input type="number" name="indique o incremento" id="incrementos" min="-25" max="25">`;
  } else if (selecao.value == "base64") {
    passos.style.display = "none";
  }
});

escolhendoDecodificar.addEventListener("click", function () {
  if (true) {
    divBotaoEnvio.innerHTML = `<input type="submit" value="Decodificar Mensagem" id="btn-decodificar">`;
    document.getElementById("btn-decodificar").addEventListener("click", decodificando);
    var prevent = document.querySelector('#btn-decodificar')
    prevent.addEventListener("click", (e) => {e.preventDefault()});
  }
});

escolhendoCodificar.addEventListener("click", function () {
  if (true) {
    divBotaoEnvio.innerHTML = `<input type="submit" value="Codificar Mensagem" id="btn-codificar">`;
    document.getElementById("btn-codificar").addEventListener("click", codificando);
    var prevent = document.querySelector('#btn-codificar')
    prevent.addEventListener("click", (e) => {e.preventDefault()});
  }
});

/* CODIFICANDO E DECODIFICANDO */

var saidaTexto = document.querySelector("#resultado");

function codificando() {
  var recebeTexto = document.getElementById("texto").value;
  if (selecao.value == "base64" && escolhendoCodificar.checked) {
    txtValue = recebeTexto;
    saidaTexto.value = btoa(txtValue);
  } else if (selecao.value == "cifraDeCesar" && escolhendoCodificar.checked) {
    codificandoCesar();
  }
}

function codificandoCesar() {
  var recebeTexto = document.getElementById("texto").value;
  var adicionandoIncremento = document.getElementById("incremento").value;
  var txtValue = "";

  for (var i = 0; i < recebeTexto.length; i++) {
    var chamandoIncremento = parseInt(adicionandoIncremento);
    var ascii = recebeTexto[i].charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      var passo = ascii + chamandoIncremento;
      if (passo > 90) {
        passo = passo - 26;
      }
      txtValue += String.fromCharCode(passo);
    } else if (ascii >= 97 && ascii <= 122) {
      var passo = ascii + passo;
      if (passo > 122) {
        passo = passo - 26;
      }
      txtValue += String.fromCharCode(passo);
    } else {
      txtValue += recebeTexto[i];
    }
  }
  saidaTexto.value = txtValue;
}

function decodificando() {
  var recebeTexto = document.getElementById("texto").value;
  if (selecao.value == "base64" && escolhendoDecodificar.checked) {
    txtValue = recebeTexto;
    saidaTexto.value = atob(txtValue);
  } else if (selecao.value == "cifraDeCesar" && escolhendoDecodificar.checked) {
    decodificandoCesar();
  }
}

function decodificandoCesar() {
  var recebeTexto = document.getElementById("texto").value;
  var adicionandoIncremento = document.getElementById("incremento").value;
  var txtValue = "";

  for (var i = 0; i < recebeTexto.length; i++) {
    var passo = parseInt(adicionandoIncremento);
    var ascii = recebeTexto[i].charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      var passo = ascii - passo;
      if (passo < 65) {
        passo = 26 + passo;
      }
      txtValue += String.fromCharCode(passo);
    } else if (ascii >= 97 && ascii <= 122) {
      var passo = ascii - passo;
      if (passo < 97) {
        passo = 26 + passo;
      }
      txtValue += String.fromCharCode(passo);
    } else {
      txtValue += recebeTexto[i];
    }
  }
  saidaTexto.value = txtValue;
}
