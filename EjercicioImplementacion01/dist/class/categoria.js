export class Categoria {
    constructor(tipo, lista) {
        this.tipo = tipo;
        this.lista = lista;
    }
    agregarLista(tipo) {
        var _a;
        (_a = this.lista) === null || _a === void 0 ? void 0 : _a.push(tipo);
    }
    getlist() {
        console.log(this.lista);
    }
    ListadoCategorias() {
        return this.tipo;
    }
}
