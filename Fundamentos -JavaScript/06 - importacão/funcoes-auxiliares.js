// Definição de uma função chamada gets que retorna o valor 10
function gets(){
    return 10;
}

// Definição de uma função chamada print que imprime o texto recebido no console
function print(texto){
    console.log(texto);
}

// O objeto 'module.exports' é usado para tornar as funções gets e print disponíveis para outros módulos.
// Aqui, exportando as funções gets e print como um objeto, para que possam ser utilizadas em outros arquivos
module.exports = { gets, print }; // Aqui estão as funções gets e print exportadas
