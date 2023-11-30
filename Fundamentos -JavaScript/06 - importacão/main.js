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

const { gets, print } = require('./funcoes-auxiliares'); // 

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++){
    const numerosSorteados = gets();
    if(numerosSorteados > maiorValorEncontrado){
         maiorValorEncontrado = numerosSorteados;
    }
}

print(quantidadeDeAlunos);
print(maiorValorEncontrado);
