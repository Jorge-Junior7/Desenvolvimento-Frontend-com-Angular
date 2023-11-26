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

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
         console.log(p1.nome, ' é mais velho(a) quê ', p2.nome);
    } else if(p1.idade < p2.idade){
        console.log(p1.nome, ' é mais novo quê ', p2.nome);
    } else {
        console.log(p1.nome, ' e ', p2.nome, ' tem a mesma idade');
    }
}

const junior = new Pessoa('Junior', 19);
const talha = new Pessoa('Talha', 12);

compararPessoas(junior, talha);