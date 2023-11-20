/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o cálculo adequado.

Código Condição de pagamento;
1 - À vista Débito, recebe 10% de desconto;
2 - À vistas no dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const precoEtiqueta = 200;
const formaDePagamento = 1;

if(formaDePagamento ===1){
    console.log('Desconto de 10%: ',precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento ===2){
    console.log('Desconto de 15%: ',precoEtiqueta - (precoEtiqueta * 0.15));
} else if(formaDePagamento === 3){
    console.log('Sem juros: ',precoEtiqueta);
} else {
    console.log('Acima de duas vezes com juros: ' ,precoEtiqueta + (precoEtiqueta * 0.1));
}
