"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
const usuario_1 = require("./usuario");
class Actor extends usuario_1.Usuario {
    constructor(nombre, fotografia, descripcion, listadoSeries) {
        super(nombre, fotografia, descripcion, listadoSeries);
    }
}
exports.Actor = Actor;
//# sourceMappingURL=actores.js.map