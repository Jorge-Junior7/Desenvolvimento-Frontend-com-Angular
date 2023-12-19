/*Descrição
Neste desafio, utilizando estruturas condicionais if e else e outros conceitos algorítmicos, crie uma solução para os funcionários de uma empresa bancária que precisam realizar transações internacionais, sendo fundamental uma opção em seus sistemas web que convertam valores de uma moeda para outra, com base em uma taxa de câmbio pré-definida pela equipe responsável. Desse modo, o seu programa deverá receber como entrada o valor necessário para a conversão, a moeda de origem e a moeda de destino. Em seguida, o valor deverá ser convertido e fornecer o resultado como saída.

Entrada
O programa deve solicitar as seguintes informações:

Valor para ser convertido (com até 2 casas decimais).

Moeda de origem (por exemplo, "BRL" para real brasileiro).

Moeda de destino (por exemplo, "USD" para dólar dos Estados Unidos).

Saída
O programa deverá fornecer uma mensagem que informa o valor convertido na moeda de destino. A mensagem deve conter o valor, a moeda de origem, a moeda de destino e o valor convertido. O formato da mensagem de saída deve ser:

"[valorDinheiro] [moedaOrigem] equivalem a [valorConvertido] [moedaDestino]."

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
500
BRL
USD
          Saída:   USD	500 BRL equivalem a 93.75 USD.
900
USD
BRL
         Saída:    BRL	900 USD equivalem a 4799.97 BRL.
2000
BRL
USD
         Saída:    USD	2000 BRL equivalem a 375.00 USD. */


const valorDinheiro = parseFloat(gets());
const moedaOrigem = gets();
const moedaDestino = gets();


// Aqui é verificado se valorDinheiro é um número.
// !isNaN é uma função embutida em JavaScript que verifica se o valor passado como argumento não é um número.
if (!isNaN(valorDinheiro)) {
    // Definição fixa das taxas de câmbio para as moedas:
    const taxaCambioBRLtoUSD = 0.1875;
    const taxaCambioBRLtoEUR = 0.1520;
    const taxaCambioUSDtoBRL = 5.3333;
    const taxaCambioEURtoBRL = 6.5789;

    let valorConvertido;

    //TODO: Crie uma estrutura condicional que realize a conversão das moedas:
    if (moedaOrigem === 'BRL' && moedaDestino === 'USD') {
        valorConvertido = valorDinheiro * taxaCambioBRLtoUSD;
    } else if (moedaOrigem === 'BRL' && moedaDestino === 'EUR') {
        valorConvertido = valorDinheiro * taxaCambioBRLtoEUR;
    } else if (moedaOrigem === 'USD' && moedaDestino === 'BRL') {
        valorConvertido = valorDinheiro * taxaCambioUSDtoBRL;
    } else if (moedaOrigem === 'EUR' && moedaDestino === 'BRL') {
        valorConvertido = valorDinheiro * taxaCambioEURtoBRL;
    }

    //TODO: Imprima a conversão com duas casas decimais:
    console.log(`${valorDinheiro} ${moedaOrigem} equivalem a ${valorConvertido.toFixed(2)} ${moedaDestino}.`);
}