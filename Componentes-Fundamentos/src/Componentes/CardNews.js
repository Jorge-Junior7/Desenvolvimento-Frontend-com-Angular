class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.appendChild(this.build());

        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By" + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.png"
        newsImage.alt = "Foto da noticia";
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = 
        `
        /* Estiliza o cartão de notícia */
        .card {
            width: 80%; /* Define a largura do cartão como 80% da largura disponível */
            box-shadow: 8px 8px 28px 0px rgba(0, 0, 0, 0.75); /* Adiciona sombra ao cartão */
            -webkit-box-shadow: 8px 8px 28px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 8px 8px 28px 0px rgba(0, 0, 0, 0.75);
            display: flex; /* Usa um modelo de layout flexível */
            flex-direction: row; /* Alinha os elementos internos horizontalmente */
            justify-content: space-between; /* Distribui o espaço entre os elementos filhos */
        }

        /* Estiliza a parte esquerda do cartão de notícia */
        .card__left {
            display: flex; /* Usa um modelo de layout flexível */
            flex-direction: column; /* Alinha os elementos internos verticalmente */
            justify-content: center; /* Centraliza os elementos verticalmente */
            padding-left: 10px; /* Adiciona um preenchimento à esquerda */
        }

        /* Estiliza o texto do cabeçalho */
        .card__left > span {
            font-weight: 400; /* Define a espessura da fonte */
        }

        /* Estiliza o link do título */
        .card__left > a {
            margin-top: 15px; /* Adiciona um espaçamento superior */
            font-size: 25px; /* Define o tamanho da fonte */
            color: black; /* Define a cor do texto como preto */
            text-decoration: none; /* Remove a sublinhado padrão do link */
            font-weight: bold; /* Define o peso da fonte como negrito */
        }

        /* Estiliza o parágrafo de descrição */
        .card__left > p {
            color: rgb(70, 70, 70); /* Define a cor do texto */
        }

        `
        return style;
    }
}

customElements.define("card-news", Cardnews);