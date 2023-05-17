import { Serie } from "./serie";

export class Usuario {


    constructor(private nombre:string, private fotografia:string, private descripcion:string, private listadoSeries?:Serie[]){


    }

}
