class View {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template() {
        throw new Error('O método deverá ser implementado')
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}