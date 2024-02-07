/* Desafio
Crie um programa em JavaScript que permita ao usuário realizar uma única operação a partir de um menu com quatro opções: Depósito, Saque, Saldo e Sair. Após a escolha de uma dessas opções, o programa deve executar a operação correspondente e exibir as informações atualizadas do saldo. Após a execução da operação, o programa encerrará automaticamente.

Entrada:
O programa inicia com uma conta bancária fictícia, com as seguintes informações:

Nome do Cliente: João
Saldo Inicial: R$ 1,000.00
O usuário interage com o programa por meio de um menu com as seguintes opções:

Depósito: O usuário insere o valor do depósito, que é adicionado ao saldo da conta.
Saque: O usuário insere o valor do saque, que é deduzido do saldo, desde que haja saldo suficiente.
Saldo: O programa exibe o saldo atual da conta de João.
Sair: O usuário pode encerrar o programa.
Saída:
O programa deverá executar uma das 4 opçoes do menu (Depósito/Saque/Saldo/Sair) e exibir as informações atualizadas do saldo. 
Caso digite a opção 4, deverá retornar a mensagem "Encerrando programa".

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
1
300.00	Operação de depósito concluída.
Saldo atual: R$ 1300.00
2
900.00	Operação de saque concluída.
Saldo atual: R$ 100.00
3	Saldo atual: R$ 1000.00 */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


// Objeto chamado contaBancaria com o nome do cliente e saldo inicial:
const contaBancaria = {
    nomeCliente: "João",
    saldo: 1000.0,
  };
  
  // Define-se uma função chamada realizarOperacao:
  function realizarOperacao() {
    // Obtém uma opção do usuário e converte para um número inteiro.
    const opcao = parseInt(gets());
  
    // Criamos uma estrutura condicional switch para lidar com as diferentes operações com base na opção selecionada:
    switch (opcao) {
      // Caso a opção seja 1 (Depósito).
      case 1:
        // Obtém o valor do depósito do usuário.
        const valorDeposito = parseFloat(gets());
        // Adiciona o valor do depósito ao saldo da conta.
        contaBancaria.saldo += valorDeposito;
        // Imprime a confirmação do depósito e o saldo atual formatado.
        print("Operação de depósito concluída.");
        print(`Saldo atual: R$ ${contaBancaria.saldo.toFixed(2)}`);
        break;
  
      // Caso a opção seja 2 (Saque).
      case 2:
        // Obtém o valor do saque do usuário.
        const valorSaque = parseFloat(gets());
        // TODO: Verifique se o saldo é suficiente para o saque:
        if (  ) {
          // TODO: Subtraia o valor do saque do saldo da conta:
          
          print("Operação de saque concluída.");
         // TODO: Imprima a confirmação do saque e o saldo atual formatado:
          print(` `);
        } else {
          print("Saldo insuficiente. Operação de saque cancelada.");
        // TODO: Se o saldo for insuficiente, imprima uma mensagem de erro e o saldo atual:
          print(` `);
        }
        break;
  
      // Caso a opção seja 3 (Verificar Saldo).
      case 3:
        // TODO: Imprima o saldo atual formatado:
        print(` `);
        break;
  
      // Caso a opção seja 4 (Encerrar o programa).
      case 4:
        // Imprime uma mensagem de encerramento e retorna da função, encerrando o programa.
        print("Encerrando o programa.");
        return;
  
      // Se a opção não corresponder a nenhum dos casos anteriores.
      default:
        // Imprime uma mensagem de opção inválida.
        print("Opção inválida.");
    }
  }
  
  // Chama a função realizarOperacao para iniciar o programa.
  realizarOperacao();