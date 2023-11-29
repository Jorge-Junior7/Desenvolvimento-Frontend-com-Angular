/* 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado */

class Lista {
    constructor(lista) {
        this.lista = lista; // Define a lista passada como parâmetro para a propriedade lista do objeto
}

    numeroPar() {
        const numerosPares = []; // Inicializa um array para armazenar os números pares

        for (let i = 0; i < this.lista.length; i++) { // Itera sobre os elementos da lista
            if (this.lista[i] % 2 === 0) { // Verifica se o número é par
                numerosPares.push(this.lista[i]); // Adiciona o número par ao array de números pares
            }
        }
        
        return numerosPares; // Retorna o array com os números pares encontrados na lista
    }
}

const minhaLista = new Lista([1, 290, 90, 87, 64]); // Cria um objeto Lista com a lista de números
console.log(minhaLista.numeroPar()); // Chama o método numeroPar e exibe os números pares encontrados no console
