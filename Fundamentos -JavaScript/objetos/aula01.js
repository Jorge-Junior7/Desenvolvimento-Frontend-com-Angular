const pessoa = {
    nome: 'Jorge W M Junior',
    idade: 40,

    descrever: function () {
        console.log('Meu nome é ', this.nome, 'e minha idade é ', this.idade);
    }
};

// Redefine a função descrever para exibir APENAS o nome
pessoa.descrever = function () {
    console.log('Nome é', this.nome);
}

// Altera o nome, idade, adiciona altura e deleta a propriedade altura da pessoa
pessoa.nome = 'Juliana'; // Altera o nome para 'Juliana'
pessoa.idade = 10; // Altera a idade para 10
pessoa.altura = 1.70; // Adiciona a altura
delete pessoa.altura; // Deleta a propriedade altura do objeto pessoa

pessoa.descrever(); 
// Chama a função descrever para exibir somente o nome
