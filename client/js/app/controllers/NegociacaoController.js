class NegociacaoController {

    constructor() {
        /*O método bind permite usar o queryselector no 
contexto do document independente do contexto atual*/
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

           
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));
    }
}