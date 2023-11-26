//criando classe e instânciando-as

class Pessoa { //O inicio de toda a classe inicia com a letra maiúscula
    nome;
    idade;

    descrever(){
        console.log('O nome é ', this.nome, ' e idade ', this.idade);
    }
}

const junior = new Pessoa();
junior.nome = 'Jorge H Michael Junior';
junior.idade = 19;

const talha = new Pessoa();
talha.nome = 'Nathália Vitória da Silva Nascimento';
talha.idade = 12;

console.log(junior);
console.log(talha);

