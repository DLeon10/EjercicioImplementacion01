import { Serie } from "./serie.js";

export class Usuario {


    constructor(private nombre: string, private fotografia:string, private descripcion:string, private listadoSeries?:Serie[]){


    }

}
