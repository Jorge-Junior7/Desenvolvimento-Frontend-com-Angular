class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        //base do compenent
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = 'Junin'

        //estilizar o component
        const style= document.createElement("style");
        style.textContent = `
        h1{
            color: red;
        }`
        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

//Sempre colocar um hifén no nome, se não não irá reconhecer
customElements.define("titulo-dinamico", TituloDinamico);