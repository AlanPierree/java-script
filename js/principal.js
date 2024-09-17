var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
// .textContent seleciona apenas o conteúdo textual de tags como p e h1

// hashtag indica um id, ponto indica uma classe
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente); // tr
console.log(tdPeso); // td que tem o peso
console.log(peso); // conteúdo sem o td

var imc = peso / (altura * altura);
// IMC = 100 / (2.00 x 2.00)
// IMC = 100 / 4.00
// IMC = 25

var tdImc = paciente.querySelector(".info-imc");
if (peso <= 0) {
    console.log("Peso inválido");
}
tdImc.textContent = imc;