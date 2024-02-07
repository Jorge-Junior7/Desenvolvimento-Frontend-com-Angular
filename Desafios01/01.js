
/*Desafio
A empresa "DIO Bank" precisa receber os dados de uma conta bancária por um objeto JSON e imprimir na tela as seguintes informações: o nome do cliente, o número da conta e o saldo. 

Entrada
A entrada deve receber os valores que preencherão o objeto JSON contaBancaria. Ele deve conter as seguintes propriedades:

cliente: uma string com o nome do cliente.
numeroConta: uma string com o número da conta.
saldoInicial: um número que representa o saldo inicial da conta.
Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

Saída
Deverá retornar uma mensagem (string) que informa o nome do cliente, o número da conta e o saldo final, da seguinte maneira:

Nome do cliente: ${contaBancaria.cliente}
Número da conta: ${contaBancaria.numeroConta}
Saldo: R$ ${contaBancaria.saldo.toFixed(2)}

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
João
12345
1000.50

Nome do cliente: João
Número da conta: 12345
Saldo: R$ 1000.50
Ana
01011
290.00	Nome do cliente: Ana
Número da conta: 01011
Saldo: R$ 290.00
Paula
23540
3050.99	Nome do cliente: Paula
Número da conta: 23540
Saldo: R$ 3050.99 */



// Objeto JSON vazio para armazenar os dados da conta bancária
const contaBancaria = {};

// Recebendo os valores de entrada e atribuindo ao objeto contaBancaria
contaBancaria.cliente = gets(); // Recebe o nome do cliente
contaBancaria.numeroConta = gets(); // Recebe o número da conta
contaBancaria.saldo = parseFloat(gets()); // Recebe o saldo inicial

// Imprimindo todas as informações da conta bancária em uma única instrução console.log()
console.log(`Nome do cliente: ${contaBancaria.cliente}\nNúmero da conta: ${contaBancaria.numeroConta}\nSaldo: R$ ${contaBancaria.saldo.toFixed(2)}`);
