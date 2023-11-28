/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o cálculo adequado.

Código Condição de pagamento;
1 - À vista Débito, recebe 10% de desconto;
2 - À vistas no dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/ //IMPLEMENTANDO FUNÇÕES NESSE CÓDIGO DE EXERCICIO 03

function aplicarDesconto(valor, desconto){
   return valor - (valor * (desconto / 100)); //Mas tmb pode ser assim:  valor - (valor * 0.1);
}

function aplicandoJuros(valor, juros){
    return valor + (valor * (juros / 100)); 
}

const precoEtiqueta = 200;
const formaDePagamento = 2;

if(formaDePagamento ===1){
    console.log('Desconto de 10%: ', aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento ===2){
    console.log('Desconto de 15%: ', aplicarDesconto(precoEtiqueta, 15));
} else if(formaDePagamento === 3){
    console.log('Sem juros: ',precoEtiqueta);
} else {
    console.log('Acima de duas vezes com juros: ', aplicandoJuros(precoEtiqueta, 10));
}
