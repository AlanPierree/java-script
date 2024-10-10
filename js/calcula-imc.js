var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
// .textContent seleciona apenas o conteúdo textual de tags como p e h1

// hashtag indica um id, ponto indica uma classe

// console.log(pacientes); // tr
// console.log(tdPeso); // td que tem o peso
// console.log(peso); // conteúdo sem o td

// // IMC = 100 / (2.00 x 2.00)
// // IMC = 100 / 4.00
// // IMC = 25

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}