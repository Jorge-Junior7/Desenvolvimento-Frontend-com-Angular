/*
2) O IMC - Indice de Massa Corporal é um critério da Orgazinação Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC; 
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo. 

IMC em adulto Condição:
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 Obseo;
- Acima de 40 Obsesidade Grave;

*/

const peso = 77;
const altura = 1.75;

const imc = peso / Math.pow(altura, 2); // Calcula a área quadrada utilizando a altura ao quadrado

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc <= 30) {
    console.log('Acima do peso');
} else {
    console.log('Obsesidade Grave');
}
