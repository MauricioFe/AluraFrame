class NegociacaoController {

    constructor() {
        /*O método bind permite usar o queryselector no 
contexto do document independente do contexto atual*/
        let $ = document.querySelector.bind(document);
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);
    }
}