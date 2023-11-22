//Uma Função que escreva seu nome

function writeYourName(name) {
    return 'Your Name is: ', name;

}

//Uma função que verifique se vc é maior de idade
  
function verificationAge(age) {
    if (age >= 18) {
        console.log(writeYourName('JJ')+ ' Voce e maior de idade');
    } else {
        console.log('Voce e menor de idade');
    }
}

verificationAge(19); /*Basicamente encapsulei e posso envocar esse pequeno programinha em qualquer momento*/