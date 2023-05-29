import { Serie } from "./serie.js";
import { Usuario } from "./usuario.js";

export class Actor extends Usuario {
    constructor( nombre:string,  fotografia:string,  descripcion:string,  listadoSeries?:Serie[]){
        super(nombre,fotografia,descripcion,  listadoSeries);
    }
}