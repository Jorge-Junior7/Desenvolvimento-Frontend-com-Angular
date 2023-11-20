//Existe várias formas de declarar funções

//Função de procedimento (sem retorno), basicamente só executa e acabou
function adicionarNome(nome) {
    console.log('your name is: ', nome);
}

adicionarNome('Junin do Grau');


//Função com procedimento (com return)
function quadrado(valor) {
    return valor * valor //
}

console.log('O valor do quadrado é: ', quadrado(10));

//Mesma Forma acima mas de forma diferente
function quadradoTwo(valor) {
    return valor * valor //
}

const exemploTwo = quadradoTwo(10);
console.log('O valor do quadrado é (no exemplo 2): ', exemploTwo);

//MAIS UMA FORMA 
function incrementarJuros(valor, percentualJuros){
  const valorDeAcrecimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrecimo;
}

console.log( 'Juros de 90% kkkkk: ',incrementarJuros(80, 90));

/*Basicamente uma função é onde consegue executar ele várias vezes e conseguir dinamicizar passando parâmetros e pegando o retorno*/