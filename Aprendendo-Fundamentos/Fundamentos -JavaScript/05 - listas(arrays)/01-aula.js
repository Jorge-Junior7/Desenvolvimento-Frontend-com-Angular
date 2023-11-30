const notas = [];


notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i =0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota; 
    /* Em soma foi atribuido o valor 0, a cada looping do array, ficará sendo atribuido o valor na variável "soma" e ficará somando até passar por todos*/
    
}
//Após o valor está atribuido na variável foi atribuido em media
const media = soma /  notas.length;
console.log(media);
