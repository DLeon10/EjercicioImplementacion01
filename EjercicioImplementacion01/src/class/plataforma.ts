import { PlanesPrecios } from "./planesPrecios.js";
import { Serie } from "./serie";

export class Plataforma {


    public constructor(private nombrePlataforma: string, private sitioweb: string, private planesPrecios: PlanesPrecios[], private series: Serie[]) {



    }

    GuardarListadosSeries(): Serie[] {
        return this.series;
    }
    MostrarListadosSeries(): void {
        console.log(this.series)
    }
    Agregarseries(serie: Serie) {
        this.series.push(serie);
    }
  
    




}