const entradas = [5, 50, 10, 98, 23];
let i = 0;


function gets(){
    const valor = entradas[i]; // Obtém o valor da posição 'i' 
    i++; // Incrementa o 'i' para acessar o próximo valor do array na proxima vez
    return valor; // Retorna 'undefined'
}

function print(texto){
    console.log(texto);
}


module.exports = { gets, print}; 