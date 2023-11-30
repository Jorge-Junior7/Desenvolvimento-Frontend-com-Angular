/*
    Uma sala contém 5 alunos e para aluno foi sorteado um número de 1 - 100. Faça um programa que recebea os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const { gets, print } = require('./funcoes-auxiliares'); // Importa as funções gets e print do arquivo 'funcoes-auxiliares'

const listaNumerosSorteados = []; // Inicializa um array vazio para armazenar os números sorteados

for (let i = 0; i < 5; i++) {
   const numeroSorteado = gets(); // Chama a função gets para obter um número sorteado
   listaNumerosSorteados.push(numeroSorteado); // Adiciona o número sorteado à lista de números sorteados
}

let maiorNumero = 0; // Inicializa a variável que armazenará o maior número encontrado

for (let i = 0; i < listaNumerosSorteados.length; i++){
    const numeroAtual = listaNumerosSorteados[i]; // Obtém o número atual da lista de números sorteados
    if (numeroAtual > maiorNumero){ // Verifica se o número atual é maior que o maior número encontrado até agora
        maiorNumero = numeroAtual; // Se o maiorNumero for maior que o numeroAtual ele atribui o valor do maior para o numero atual
    }
}

print(listaNumerosSorteados); // Imprime a lista completa dos números sorteados
print(maiorNumero); // Imprime o maior número sorteado entre os alunos
