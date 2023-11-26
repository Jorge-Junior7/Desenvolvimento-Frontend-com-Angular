// Criação do objeto pessoa com propriedades nome e idade
const pessoa = {
    nome: 'Jorge W M Junior',
    idade: 40,

    // Método descrever para exibir nome e idade da pessoa
    descrever: function () {
        console.log('Meu nome é ', this.nome, 'e minha idade é ', this.idade);
    }
};

// Acessar esses valores de forma mais dinâmica:

// Forma não muito prática: utilizando uma variável 'atributo' para armazenar o nome da propriedade e acessá-la através de colchetes []
const atributo = 'idade'; // Define o nome do atributo desejado como 'idade'
console.log(pessoa[atributo]); // Acessa o valor da propriedade 'idade' do objeto pessoa dinamicamente através da variável 'atributo'

// Forma mais prática: acessar diretamente a propriedade desejada usando colchetes []
console.log(pessoa['nome']); // Acessa diretamente o valor da propriedade 'nome' do objeto pessoa de forma estática
