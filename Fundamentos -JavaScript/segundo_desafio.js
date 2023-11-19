/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas: 
1 - Preço do etanol;
2 - Preço a gasolina;
3- O tipo de combustível que está no seu carro;
4- Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

USANDO CONDICIONAL PARA O ETANOL E GASOLINA
*/

const etanol = 6.10;
const gasolina = 5.80;
const tipoCombustivel = 'gasolina'; //Foi atribuido o valor em forma de String
const gastoMedioLitroPorKm = 21; 
const ditanciaKmViagem = 3430;

if (tipoCombustivel === 'gasolina') { //verificar o valor atribuido ao "tipoCombustivel", pra ver se realmente é isso mesmo.
    const calculoViagem = gasolina * ditanciaKmViagem / gastoMedioLitroPorKm;
    console.log('Total da viagem com gasolina: ' + calculoViagem.toFixed(2));

} else {
    const calculoViagem = (etanol * ditanciaKmViagem) / gastoMedioLitroPorKm;
    console.log('Total da viagem com Etanol: ' + calculoViagem.toFixed(2)); //esse const só consta dentro dessas chaves
}


