import { Usuario } from "./usuario.js";
export class Directores extends Usuario {
    constructor(nombre, fotografia, descripcion, listadoSeries) {
        super(nombre, fotografia, descripcion, listadoSeries);
    }
}
