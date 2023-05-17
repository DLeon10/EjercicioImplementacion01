"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
class Plataforma {
    constructor(nombrePlataforma, sitioweb, planesPrecios, series) {
        this.nombrePlataforma = nombrePlataforma;
        this.sitioweb = sitioweb;
        this.planesPrecios = planesPrecios;
        this.series = series;
    }
    MostrarListadosSeries() {
        return this.series;
    }
}
exports.Plataforma = Plataforma;
//# sourceMappingURL=plataforma.js.map