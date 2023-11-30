
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
    // Calcula a área quadrada utilizando a altura ao quadrado
}


function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 25) {
        return ('Peso normal');
    } else if (imc >= 25 && imc <= 30) {
        return ('Acima do peso');
    } else {
        return ('Obsesidade Grave');
    }
    //O return serve para esse valor poder sair da chaves e poder ser usual
} 

//Função invocada imediatamente

//Main
(function (){ 
const peso = 77;
const altura = 1.75;

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
}) ();
