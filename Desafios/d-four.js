/*Descrição
Demonstre como aplicar conceitos de lógica de programação como validação de dados, entradas e saídas, cálculos e condicionais. Então, desenvolva uma solução algorítmica para o cálculo de juros simples em uma corporação bancária, onde, o programa deve solicitar como entrada o capital inicial, a taxa de juros e o período de tempo em meses. Em seguida, deverá ser retornado o montante final a ser pago, incluindo os juros, e fornecer o resultado.

Condições dos Juros Simples:

Juros Simples (JS) = (Capital Inicial * Taxa de Juros * Período de Tempo) / 100
Montante Final (MF) = Capital Inicial + Juros Simples

Entrada
O programa deve solicitar as seguintes informações:

Capital inicial (em reais, com até 2 casas decimais).

Taxa de juros (em porcentagem, sem o símbolo de porcentagem).

Período de tempo em meses (um número inteiro).

Saída
O programa deverá fornecer uma mensagem que informa o montante final a ser pago, incluindo juros. A mensagem deve conter o capital inicial, a taxa de juros, o período de tempo e o montante final. O formato da mensagem de saída deve ser:

"Montante em [Período de Tempo], com R$ [Capital Inicial], [Taxa de Juros]%, e: R$ [Montante Final]."

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis. 
 

ENTRADAS:          SAIDA
500.00               Montante em 3 meses, com R$ 500.00 iniciais, 10% juros, e: R$ 650.00.
10
3

1000.00              Montante em 6 meses, com R$ 1000.00 iniciais, 6% juros, e: R$ 1360.00.
6
6

100.00
8%                   Por favor, insira valores validos e um periodo de tempo adequado.
dois

*/


// Saiba mais sobre isNaN(): 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN

//Recebe os valores
const capitalInicial = parseFloat(gets());
const taxaJuros = parseFloat(ges());
const tempoMeses = parseInt(gets());


//!isNaN é uma função embutida em JavaScript que verifica se o valor passado como argumento não é um número.
if (!isNaN(capitalInicial) && !isNaN(taxaJuros) && !isNaN(tempoMeses) && tempoMeses > 0) {
    //TODO: Calcule o montante usando a fórmula de juros simples e o montante final somando o juros simples ao capital inicial:
    const jurosSimples = (capitalInicial * taxaJuros * tempoMeses) / 100;
    const montanteFinal = capitalInicial + jurosSimples;

    //TODO: Imprima o resultado com formatação, incluindo o período, o capital inicial, a taxa de juros e o montante final:
    //Lembre-se: Até duas casas decimais para o Capital Inicial e o Montante Final.
    console.log(`Montante em ${tempoMeses} meses, com R$ ${capitalInicial.toFixed(2)} iniciais, ${taxaJuros}% juros, e: R$ ${montanteFinal.toFixed(2)}.`);

} else if (!isNaN(capitalInicial) && !isNaN(taxaJuros) && !isNaN(tempoMeses) && tempoMeses > 0) {



} else {
    print('Por favor, insira valores validos e um periodo de tempo adequado.');
}
