// 1) Crie um programa que dado um número imprima a sua tabuada de 1 a 10.

class Tabuada {
    numero; // Variável para armazenar o número para o qual será calculada a tabuada

    constructor(numero) {
        this.numero = numero; // Define o número recebido como parâmetro na criação do objeto
    }

    calcularTabuada() {
        const tabuada = []; // Inicializa um array para armazenar os resultados da tabuada
        for (let i = 1; i <= 10; i++) { // Loop de 1 a 10 (inclusive)
            tabuada.push(this.numero * i); // O push é para adiciona o resultado ao array
        }
        return tabuada; // Retorna o array completo com os resultados da tabuada
    }
}
// Cria uma instância da classe Tabuada com o número 10
const tabuada1 = new Tabuada(10); 
console.log(tabuada1.calcularTabuada()); 


// Chama o método calcularTabuada e exibe os resultados no console


