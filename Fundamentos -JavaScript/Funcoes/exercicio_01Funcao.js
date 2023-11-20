
function calcularImc(peso, altura){
   return peso / Math.pow(altura, 2);
   // Calcula a área quadrada utilizando a altura ao quadrado
}

const peso = 77;
const altura = 1.75;
const imc = calcularImc(peso, altura); 

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc <= 30) {
    console.log('Acima do peso');
} else {
    console.log('Obsesidade Grave');
}
