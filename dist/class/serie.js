"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(nombre, imagen, directoresList, actorList, episodio, categoria) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.directoresList = directoresList;
        this.actorList = actorList;
        this.episodio = episodio;
        this.categoria = categoria;
    }
    MostrarDetalleSerie() {
        return {
            nombre: this.nombre,
            imagen: this.imagen,
            directoresList: this.directoresList,
            actorList: this.actorList,
            episodio: this.episodio,
            categoria: this.categoria
        };
    }
}
exports.Serie = Serie;
//# sourceMappingURL=serie.js.map