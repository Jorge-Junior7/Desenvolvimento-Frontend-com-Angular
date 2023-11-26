/*
  1) Faça um algoritimo que dados as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

  média = (nota 1 + nota 2 + nota 3);

  Classificação:
  - Média menor que 5, reprovação;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, passou de semestre;

*/

 const nota1 = 2;
 const nota2 = 4;
 const nota3 = 10;

 const media = ((nota1 + nota2 + nota3) / 3);

 console.log('A media do aluno foi: ' + media.toFixed(2));

 if(media < 5 ){
     console.log('reprovacao')
 } else if(media >= 5 && media <=7){ //para usar duas condições precisa de um --> &&
     console.log('recuperação');
 } else {
    console.log('passou de semestre');
 }