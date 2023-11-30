let infoPlayer = document.getElementById("info-player");

function validarEntradas(vitorias, derrotas) {
  if (vitorias === "" || derrotas === "") {
    infoPlayer.innerHTML = `Por favor, preencha todos os campos.`;
    console.log("Por favor, preencha todos os campos.");
  } else {
    return calcularRank(vitorias, derrotas);
  }
}

function calcularRank(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  console.log(saldoVitorias);
  return saldoVitorias;
}

function classificarNivel(saldoVitorias) {
  let nivel;
  if (saldoVitorias <= 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendario";
  } else if (saldoVitorias >= 101) {
    nivel = "Imortal";
  } else {
    nivel = "Indefinido";
  }
  infoPlayerMensagem(saldoVitorias, nivel);
}

function infoPlayerMensagem(saldoVitorias, nivel) {
  infoPlayer.innerHTML = `O Heroi tem de saldo ${saldoVitorias} sendo assim seu nivel é ${nivel}.`;
}

function submitForm() {
  const vitorias = document.getElementById("vitorias").value;
  const derrotas = document.getElementById("derrotas").value;

  let saldoVitorias = validarEntradas(vitorias, derrotas);
  if (saldoVitorias !== undefined) {
    classificarNivel(saldoVitorias);
  }
}

function initialize() {
  submitForm();
}
initialize();
