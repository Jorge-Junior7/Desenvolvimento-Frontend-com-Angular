//criando classe, instânciando-as com o método CONSTRUCTOR

class Pessoa { //O inicio de toda a classe inicia com a letra maiúscula
    nome;
    idade;

    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }

    descrever() {
        console.log('O nome é ', this.nome, ' e idade ', this.idade);
    }
}

//É MAIS PRÁTICO DESSE MODO:

const junior = new Pessoa('Junin', 19);
console.log(junior);



//NO LUGAR DE FAZER ASSIM, sem o método constructor:

/*
const junior = new Pessoa();
junior.nome = 'Jorge H Michael Junior';
junior.idade = 19;


console.log(junior);
*/


