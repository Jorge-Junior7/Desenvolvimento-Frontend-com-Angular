class Cardnews extends HTMLElement {
    constructor() {
        super();

        // Criando o Shadow DOM para o componente
        const shadow = this.attachShadow({ mode: "open" });

        // Chamando a função 'build()' para criar a estrutura do componente e adicioná-la ao Shadow DOM
        shadow.appendChild(this.build());

        // Chamando a função 'styles()' para adicionar os estilos ao Shadow DOM
        shadow.appendChild(this.styles());
    }

 // Função para construir a estrutura do componente
build() {
    // Criando o elemento principal do componente, um <div> com a classe "card"
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    // Criando elementos para a parte esquerda e direita do cartão, ambos filhos do elemento "componentRoot"
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    // Adicionando os elementos "cardLeft" e "cardRight" como filhos do elemento "componentRoot"
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    // Retornando a estrutura do componente montada, que contém os elementos "cardLeft" e "cardRight" como partes do "componentRoot"
    return componentRoot;
}

    styles() {

    }
}

customElements.define("card-news", Cardnews);