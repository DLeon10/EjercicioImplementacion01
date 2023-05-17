import { PlanesPrecios } from "./planesPrecios";
import { Serie } from "./serie";

export class Plataforma {


    public constructor(private nombrePlataforma: string, private sitioweb: string, private planesPrecios: PlanesPrecios[], private series: Serie[]) {



    }

    private MostrarListadosSeries(): Serie[]  {
        return this.series;
    }

    
}