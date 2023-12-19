/*Descrição
Agora, vamos combinar vários conceitos de lógica de programação, como manipulação de strings, operações matemáticas, controle de fluxo e expressões regulares, aplicados para o desenvolvimento de uma solução de correção para a equipe de administração de uma empresa bancária. Eles precisam de uma solução para a validação de números de contas com base em regras específicas. O programa solicitará ao usuário que insira um número de conta e verificará se ele atende aos critérios predefinidos de validação. Além disso, você pode adicionar a capacidade de informar ao usuário qual regra específica não foi cumprida caso a validação falhe.

REGRAS DA VALIDAÇÃO:

O número de conta deve ter exatamente 6 dígitos.

O primeiro dígito deve ser maior que zero, ou seja, estar no intervalo de 1 a 9.

A soma dos dígitos do número de conta não deve ser maior do que 30.

Entrada
O programa deve solicitar as seguintes informações:

Número de conta (uma sequência de 6 dígitos).

Saída
O programa deverá fornecer uma mensagem que informa se o número de conta é válido ou inválido, indicando se o número de conta atende às regras de validação. Caso o número de conta seja inválido, o programa deve informar qual regra específica não foi cumprida.

 */

//código base: 


const numeroConta = gets(); // Obtém o número da conta inserido pelo usuário

// Verifica se o número de conta consiste em exatamente 6 dígitos usando uma expressão regular:
if (/^\d{6}$/.test(numeroConta)) {
  const numArray = numeroConta.split('').map(Number); // Converte a string do número de conta em um array de dígitos numéricos
  const sum = numArray.reduce((a, b) => a + b, 0); // Calcula a soma dos dígitos no número de conta

  // Verifica se o primeiro dígito é zero e se a soma dos dígitos é menor ou igual a 30
  if (numArray[0] === 0 && sum <= 30) {
    console.log('Numero de conta invalido: O primeiro digito deve ser maior que zero.'); // Mostra a mensagem se o primeiro dígito for zero e a soma for <= 30
  } else if (sum > 30) {
    console.log('Numero de conta invalido: A soma dos digitos e maior que 30.'); // Mostra a mensagem se a soma dos dígitos for maior que 30
  } else {
    console.log('Numero de conta valido.'); // Mostra a mensagem de conta válida se não houver problemas com as condições anteriores
  }
} else {
  console.log('Numero de conta invalido: Deve conter exatamente 6 digitos.'); // Mostra a mensagem se o número de conta não tiver 6 dígitos
}
