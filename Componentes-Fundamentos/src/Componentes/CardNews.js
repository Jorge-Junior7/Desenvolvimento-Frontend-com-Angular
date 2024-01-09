// Define uma nova classe chamada CardNews que estende a funcionalidade do HTMLElement
class CardNews extends HTMLElement {
    constructor(){
        // Chama o construtor da classe pai (HTMLElement)
        super();

        // Cria um Shadow DOM dentro do elemento customizado 'card-news'
        const shadow = this.attachShadow({mode: "open"}); // Define o modo como 'open', permitindo acesso externo ao Shadow DOM

        // Define o conteúdo dentro do Shadow DOM
        shadow.innerHTML = "<h1>Hello World</h1>"; // Insere um cabeçalho h1 com o texto 'Hello World'
    }
}

// Registra o novo elemento customizado 'card-news' com o nome da classe 'CardNews'
customElements.define('card-news', CardNews);
