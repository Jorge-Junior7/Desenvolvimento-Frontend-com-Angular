/* Descrição
Neste desafio, você deve criar uma solução que permita verificar o saldo de uma conta bancária. Utilize o conceito de funções, "if" e "else", entre outros, para a resolução. Dessa forma, o programa terá um valor fixo, simulando o saldo da conta, assim como um nome fixo representativo para o titular da conta. A interação ocorrerá quando o usuário escolher uma das três opções de verificação das informações da conta, sendo:

[ 1 ] - Verifica o Saldo;
[ 2 ] - Realiza um Depósito;
[ 3 ] - Realizar Saque;

Entrada
O programa espera receber como entrada números inteiros que representam as três opções disponíveis para a verificação das informações da conta. A entrada com o valor '1' representa a verificação de saldo, a entrada de número '2' representa a ação de depósito, e o valor '3' representa a ação de saque.

Atenção:

Em caso de entradas inválidas, como qualquer número diferente de 1, 2 ou 3, o programa deve fornecer uma mensagem de erro indicando que a opção é inválida: "Opcao invalida. Tente novamente".

Saída
O programa deverá fornecer mensagens de saída informativas com base na ação selecionada e detalhadas na tabela a seguir.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis. */

/* ENTRADA   SAIDA
   1         Saldo da conta de Mariane: R$2000.00


   2
   200        Deposito de R$200.00 realizado com sucesso. Saldo total: R$2200.00

   3        
   300         Saque de R$300.00 realizado com sucesso. Saldo total: R$1700.00

   4            Opcao invalida. Tente novamente

   
*/




// Dados iniciais fixos, saldo da conta e nome do titular:
let saldoConta = 2000.0;
const nomeTitular = "Mariane";

// Função para verificar o saldo:
function verificarSaldo() {
    console.log(`Saldo da conta de ${nomeTitular}: R$${saldoConta.toFixed(2)}`);
    return;
}

// Função para realizar um depósito:
function realizarDeposito(valor) {
    saldoConta += valor;
    console.log(`Deposito de R$${valor.toFixed(2)} realizado com sucesso. Saldo total: R$${saldoConta.toFixed(2)}`);
    return;
}
            
// TODO: Crie uma função 'realizarSaque' para realizar o saque e ao lado o parâmetro da função (valor): 
function realizarSaque(valor) {
    if (saldoConta < valor) {
        print("Saldo insuficiente para realizar o saque.");
        return;
    } else {

        saldoConta -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo total: R$${saldoConta.toFixed(2)}`)
        return;
    }
}
    //TODO: Crie a condição para verifica se o 'valor' de saque é maior que o 'saldoConta':
   
        //TODO: Retorne o valor de saque e o saldo da conta, respeitando as duas casas decimais:

    const opcao = parseInt(gets());

    //TODO: Determine corretamente a estrutura condicional para escolher a ação com base na opção selecionada:
    if (opcao === 1) {
        verificarSaldo();
    } else if (opcao === 2) {
        const valorDeposito = parseFloat(gets());
        realizarDeposito(valorDeposito);
    } else if (opcao === 3) {
        const valorSaque = parseFloat(gets());
        realizarSaque(valorSaque);
    } else {
        print("Opcao invalida. Tente novamente.");
    }