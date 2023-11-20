/*Faça um algoritmo para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo eles:

1 - Preço do combustível; 
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem;
*/


const preçoCombustivel = 5.79;
const KmPorLitros = 10;
const distanciaKmViagem = 18342;

const calculo = preçoCombustivel * distanciaKmViagem / KmPorLitros;

console.log('(sem o TOFIXED)' + 'O total de gasto que vou gastar nessa viagem e:' + preçoCombustivel * distanciaKmViagem / KmPorLitros);

console.log(' '); //quebrar linha

console.log('(com o TOFIXED).O total de gasto que vou gastar nessa viagem e:' + calculo.toFixed(2));  
//Esse .toFixed(2) é para aparecer apenas 2 centavos no após o ponto

