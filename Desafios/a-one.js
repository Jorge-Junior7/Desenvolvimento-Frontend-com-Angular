/*
Descrição
Agora, para testar seus conhecimentos em lógica computacional utilizando conceitos de entradas e saídas, atribuição de variáveis e concatenação de Strings, vamos desenvolver uma solução algorítmica que simule o comportamento de um agendamento de pagamento. Buscando auxiliar os clientes de um sistema bancário a agendar seus pagamentos recorrentes, o programa deverá solicitar ao usuário informações sobre a conta a ser paga, como o nome do beneficiário, o valor da conta a ser paga e a data de vencimento. Em seguida, o programa fornecerá uma mensagem de confirmação do agendamento com as informações fornecidas.

EXEMPLO:

ENTRADA: 
Sabrina
5000
04/12/2023	

SAIDA:
Pagamento Agendado! Valor: R$ 5000, vencimento 04/12/2023. 

*/

let nomeBeneficiario = gets();
let valorConta = gets();
let dataVencimento = gets();

console.log(`Pagamento Agendado! Valor: R$ ${valorConta}, vencimento ${dataVencimento}.`);

