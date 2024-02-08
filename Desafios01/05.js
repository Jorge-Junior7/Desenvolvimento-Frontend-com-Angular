/* Desafio
Imagine que você é um consultor financeiro em uma instituição bancária e precisa criar uma calculadora para ajudar seus clientes a estimar o montante que eles terão em suas contas de investimento após um determinado período, levando em consideração um investimento inicial e uma taxa de juros mensal. Você precisa criar um programa que faça essa estimativa de maneira rápida e eficaz.

Entrada:
O programa receberá um objeto JSON contendo três valores de entrada:

Investimento inicial (um número real) - representa a quantia de dinheiro que o cliente deseja investir.
Taxa de juros mensal (um número real) - a taxa de juros aplicada mensalmente ao investimento, em percentagem.
Período em meses (um número inteiro) - o período em meses durante o qual o cliente deseja manter o investimento.
Importante: O montante com juros pode ser calculado usando a fórmula de juros compostos:

Montante = Investimento Inicial * (1 + Taxa de Juros Mensal) ^ Período em Meses

Saída:
O programa fornecerá a seguinte informação como saída:

Investimento: Valor do investimento inicial formatado com duas casas decimais.
Taxa de Juros (%): A taxa de juros mensal fornecida como entrada.
Período: O número de meses fornecido como entrada.
Montante com Juros: O montante total que o cliente terá após o período especificado, calculado com base no investimento inicial, taxa de juros e período, formatado com duas casas decimais.
Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
500
8
12	Investimento: 500.00
Juros: 8
Período: 12
Resultado: 1259.09
3000
2.5
24	Investimento: 3000.00
Juros: 2.5
Período: 24
Resultado: 5426.18
40
5
30	Investimento: 40.00
Juros: 5
Período: 30
Resultado: 172.88 */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const contaBancaria = {
    investimentoInicial: parseFloat(gets()),
    taxaJurosMensal: parseFloat(gets()),
    periodoMeses: parseInt(gets()),
  };
  
  // TODO: Calcule a taxa de juros mensal em formato decimal (0 a 1) a partir da taxa percentual fornecida:
  const calcTaxaJuros  = contaBancaria.taxaJurosMensal / 100;

  // TODO: Calcule o montante (valor total após o investimento) usando a fórmula de juros compostos.
  const montante  = contaBancaria.investimentoInicial * Math.pow((1 + calcTaxaJuros), contaBancaria.periodoMeses);
  
  // É impresso informações sobre o investimento:
  print("Investimento: " + contaBancaria.investimentoInicial.toFixed(2));
  print("Juros: " + contaBancaria.taxaJurosMensal);
  print("Período: " + contaBancaria.periodoMeses);
  print("Resultado: " + montante.toFixed(2));