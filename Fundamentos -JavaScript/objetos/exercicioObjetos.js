/*
1- Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e
 um gasto médio de combustível por kilômetro rodados. Crie um método que dado a quantidade 
 de quilômetros e o preço do combustivél nos dê o valor gasto reais para realizar este percuso

*/

class Carros { // Atributos 
    marca; 
    cor;  
    gastoMedioCombustivelKm;   

    constructor(marca, cor, gastoMedioCombustivelKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelKm = gastoMedioCombustivelKm;
    }

    descrever() {
        console.log('A marca do carro é: ', this.marca, ', a cor é: ', this.cor, ' e a quantidade média gasta por KM de combustível é: ', this.gastoMedioCombustivelKm);
    }

    calcularPrecoPercurso(distanciaEmKm, precoCombustivel) {  //Esse aqui é o método
        const calculo = (distanciaEmKm * this.gastoMedioCombustivelKm) * precoCombustivel;
         console.log('Calculando a sua viagem fica em torno de: R$',calculo,',00');
     }
}




// Criando instâncias
const corolla = new Carros('Chevroleth', 'Vermelho', 10);
console.log(corolla);
meuCarro.calcularPrecoPercurso(1000, 5.80);

console.log('');

const palio = new Carros('Fiat', 'Branco', 2);
console.log(palio);
palio.calcularPrecoPercurso(10, 5);