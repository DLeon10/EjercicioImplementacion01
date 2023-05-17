import { Serie } from "./serie";
import { Usuario } from "./usuario";

export class Directores extends Usuario {

    constructor(nombre: string, fotografia: string, descripcion: string, listadoSeries?: Serie[]) {
        super(nombre, fotografia, descripcion, listadoSeries);
    }
}
