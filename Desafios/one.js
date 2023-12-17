/* 

DESCRIÇÃO

Agora, para testar seus conhecimentos em lógica computacional utilizando conceitos de entradas e saídas, atribuição de variáveis e concatenação de Strings, vamos desenvolver uma solução algorítmica que simule o comportamento de um agendamento de pagamento. Buscando auxiliar os clientes de um sistema bancário a agendar seus pagamentos recorrentes, o programa deverá solicitar ao usuário informações sobre a conta a ser paga, como o nome do beneficiário, o valor da conta a ser paga e a data de vencimento. Em seguida, o programa fornecerá uma mensagem de confirmação do agendamento com as informações fornecidas.

EXEMPLO DE ENTRADA E SAIDA


Entrada	Saída
Sabrina
5000
04/12/2023	

Pagamento Agendado! Valor: R$ 5000, vencimento 04/12/2023. */

//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let nomeBeneficiario;
let valorConta;
let dataVencimento;


function gets(input){
    if(input === 1){ 
        return "Julia";
    } else if (input === 2){
        return "1300";
    } else if (input === 3){
        return "02/01/2024";
    }
}

// Neste bloco, temos as funções gets para ler os valores de entrada:
nomeBeneficiario = gets(1);
valorConta = parseFloat(gets(2)); //parseFloat faz uma converção de string para nmr
dataVencimento = gets(3);

// TODO: Imprima a saída adequada utilizando o conceito de template strings:

function print(){
    console.log(`Pagamento Agendado! Valor: R$ ${valorConta}, vencimento ${dataVencimento}`)
}

print();